import { useCallback, useEffect, useState, React } from 'react';
import { getAchievements } from '../../services/achievements';

const AchievementArea = () => {
  const [achievementList, setAchievementList] = useState([]);

  const getAchivementList = useCallback(async () => {
    const data = await getAchievements();

    setAchievementList(data);
  }, [getAchievements]);

  useEffect(() => {
    getAchivementList();
  }, []);

  return (
    <>
      <div className="tp-contact-area pt-200 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
              <div className="table-responsive w-100">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Kegiatan</th>
                      <th>Nama Peserta</th>
                      <th>Peringkat</th>
                      <th>Tahun</th>
                    </tr>
                  </thead>
                  <tbody>
                      {achievementList.map((achievement, i) => (
                        <tr key={i}>
                          <td>{i+1}</td>
                          <td>{achievement.activity_name}</td>
                          <td>{achievement.name}</td>
                          <td>{achievement.rank}</td>
                          <td>{achievement.year}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementArea;