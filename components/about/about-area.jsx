import { useCallback, useEffect, useState, React } from 'react';
import Link from 'next/link';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';
import { getQuote } from '../../services/quotes';
import { getSettings } from '../../services/settings';

const contents = {
  title:'Paguyuban Barudak Komputer',
  video_title:'See Our Introduce Video',
  right_text_1:"PBK Merupakan UKM, Unit Kegiatan Mahasiswa ini bernama Paguyuban Barudak Komputer Fakultas Ilmu Komputer Universitas Kuningan yang disingkat PBK FKOM UNIKU.",
  right_text_2:"Disini kalian bisa mengeksplor lebih pengetahuan kalian, bukan hanya bidang akademisi tapi diluar akademisnya juga.",
}
const {right_text_1,right_text_2,title,video_title} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [quoteList, setQuoteList] = useState([]);
  const [settingList, setSettingList] = useState([]);

  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_PHOTO_MEMBER = process.env.NEXT_PUBLIC_PHOTO_MEMBER;
  const API_ABOUT_PHOTO= process.env.NEXT_PUBLIC_ABOUT_PHOTO;

  const getQuoteList = useCallback(async () => {
    const data = await getQuote();
    setQuoteList(data);
  }, [getQuote]);

  const getSettingList = useCallback(async () => {
      const data = await getSettings();

      let result = {};

      result = {
        site_about_photo: data.filter((d) => d.key == "site_about_photo")[0].value,
        site_introduce_video_id: data.filter((d) => d.key == "site_introduce_video_id")[0].value
      }

      setSettingList(result);
    }, [getSettings]);

  useEffect(() => {
    getQuoteList();
    getSettingList();
  }, []);

  return (
    <>
      <div className="ac-about-content-area pt-200">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><Link href="#">{title}</Link></h3>
                  <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    {quoteList.map((quot) => quot.memberId.photo == "avatar.png" ? <img src={`${ROOT_API}/assets/static/images/faces/avatar.png`} alt="" width="100" /> : <img src={`${API_PHOTO_MEMBER}/${quoteList.map((quot) => quot.memberId.photo)}`} alt="" width="100" />)}
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><Link href="#">{quoteList.map((quot) => quot.memberId.name)}</Link></h4>
                    <span>{quoteList.map((quot) => quot.memberPositionId.name)}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{quoteList.map((quot) => quot.content)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={`${API_ABOUT_PHOTO}/${settingList.site_about_photo}`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={settingList.site_introduce_video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;