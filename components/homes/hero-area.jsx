import Link from 'next/link';
import { useCallback, useEffect, useState, React, Fragment } from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';
import { getSettings } from '../../services/settings';

const hero_contents = {
  shapes: [
    'hero-shape-5.1.png',
    'hero-shape-4.png',
    'hero-shape-4.png',
    'hero-shape-5.2.png',
  ],
  title: 'Paguyuban Barudak ',
  highlight_text: 'Komputer',
  tagline: 'SALAM BESTARIIII! 👋',
  short_text: <>Selamat datang di website Unit Kegiatan Mahasiswa Paguyuban Barudak Komputer. PBK merupakan wadah eskalasi intelektual khususnya di bidang Teknologi Informasi di era society 5.0.</>,
  hashtag: "#PBK_FKOM_BANGKIT_KEMBALI",
  hero_img: '/assets/img/logo/logo-pbk.webp',
  video_title: 'Selayang Pandang',
}

const { hero_img, highlight_text, shapes, tagline, short_text, hashtag, title, video_title } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [settingList, setSettingList] = useState([]);

  const getSettingList = useCallback(async () => {
    const data = await getSettings();
    let result = [];

    result = {
      site_instagram_account: data.filter((d) => d.key == "site_instagram_account")[0].value,
      site_youtube_channel: data.filter((d) => d.key == "site_youtube_channel")[0].value,
      site_introduce_video_id: data.filter((d) => d.key == "site_introduce_video_id")[0].value
    }

    setSettingList(result);
  }, [getSettings]);

  useEffect(() => {
    getSettingList();
  }, []);

  return (
    <Fragment>
    <div className="tp-hero-area tp-hero-border p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-hero-shape-${i + 1} d-none d-xxl-block`}>
          <img src={`/assets/img/hero/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row pt-100">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-hero-section-box-five">
              <div className="tp-hero-section-box-five__title pb-45">
                <h3 className="tp-hero-bs-title wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                  {title}
                  <span className="tp-highlight">
                    <svg className="highlight-space" width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L266 12H0V0Z" fill="#FFDC60" /></svg>
                    <i>{highlight_text}</i>
                  </span>
                </h3>
                <p className="wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">{tagline}</p>
                <p className="wow tpfadeUp" data-wow-duration=".8s" data-wow-delay=".10s">{short_text}</p>
                <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".11s">{hashtag}</p>
              </div>
              <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                    <Link className="tp-btn mr-55" href="/tentang">Tentang Kami</Link>
                    <div className="tp-hero-paly-button-four">
                      <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i> <span>{video_title}</span></button>
                  </div>
              </div>
            </div>
            <div className="tp-hero-social pb-90 pt-50 wow tpfadeUp">
                <div className="tp-hero-social bp-hero-social">
                    <Link className="social-icon-1" href={`${settingList.site_instagram_account}`} target="_blank"><i
                            className="fab fa-instagram social-icon-3"></i><span>Instagram</span></Link>
                    <Link className="social-icon-3" href={`${settingList.site_youtube_channel}`}
                        target="_blank"><i className="fab fa-youtube social-icon-3"></i><span>Youtube</span></Link>
                </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 ">
            <div className="tp-hero-right-side-five p-relative">
              <div className="tp-hero-right-side-five p-relative">
                <div className="tp-hero-right-side-five__img wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s">
                  <img src={hero_img} className="img-fluid" alt="Logo PBK"/>
                  </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>

     {/* video modal start */}
        <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={`${settingList.site_introduce_video_id}`} />
    {/* video modal end */}
    </Fragment>
  );
};

export default HeroArea;