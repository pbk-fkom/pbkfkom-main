import { useCallback, useEffect, useState, React } from "react";
import SingleTeam from "../common/single-team";

const TeamArea = ({ members, structurals, periode, latestPeriode }) => {
  const [memberList, setMemberList] = useState([]);
  const [latestPeriodeList, setLatestPeriodeList] = useState("");

  const getMemberListByPeriode = useCallback(async (periode) => {
    members = members.filter((item) => item.periodeId.periode_year == periode);

    setMemberList(members);
  });

  const handlePeriode = async (periode) => {
    setLatestPeriodeList(periode);
    getMemberListByPeriode(periode);
  };

  useEffect(() => {
    setLatestPeriodeList(latestPeriode.periode_year);
    setMemberList(members);
  }, []);

  return (
    <>
      <div className="tp-project-area pt-200 pb-120 p-relative">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-center">
            <div className="col-10 text-center">
              <div className="tp-project-tab-button masonary-menu mb-80">
                {periode.map((p, i) => (
                  <button
                    key={i}
                    className={`${
                      p.periode_year == latestPeriodeList
                        ? "active"
                        : latestPeriodeList == ""
                        ? i == 0
                          ? "active"
                          : ""
                        : ""
                    }`}
                    onClick={() => handlePeriode(p.periode_year)}
                  >
                    <span>{`Periode ${p.periode_year}`}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid gx-0 port-space">
            <div className="ac-team-area pt-20 pb-100">
              <div className="container pt-50">
                {structurals.map(
                  (structural, i) =>
                    (latestPeriodeList !== "2022-2023"
                      ? structural.name != "Pengembangan Sumber Daya Manusia"
                      : structural.name) && (
                      <div key={i} className="row" id={structural.slug}>
                        <div className="col-12">
                          <div className="ac-team-title-section text-center mb-60">
                            <h3 className="ac-team-title">{structural.name}</h3>
                            <p>{structural.description}</p>
                          </div>
                        </div>
                        <div className="row">
                          {memberList.map(
                            (team) =>
                              team.structuralId.name == structural.name &&
                              team.periodeId.periode_year ==
                                latestPeriodeList &&
                              (team.periodeId.periode_year == "2022-2023"
                                ? team.memberPositionId.name !=
                                    "Sekretaris Umum 2" &&
                                  team.memberPositionId.name !=
                                    "Bendahara Umum 2"
                                : team) && (
                                <SingleTeam
                                  key={team._id}
                                  team={team}
                                  memberPosition={team.memberPositionId.name}
                                />
                              )
                          )}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
