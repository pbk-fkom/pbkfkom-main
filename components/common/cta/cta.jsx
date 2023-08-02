import Link from 'next/link';
import React from 'react';

const Cta = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-65 pb-60"
      style={{ backgroundImage: 'url(/assets/img/news/news-bg.jpg)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-12 ">
            <div className="tp-news-sub-wrapper pr-50">
              <div className="tp-news-letter-section-box">
                <h5 className="tp-subtitle subtitle-secondary-color wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">Get lates update</h5>
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">A recognizable & awarded community...
                  become our partner
                </h2>
              </div>
              <div className="tp-news-button wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <Link href="/daftar" className="tp-btn-lg-yellow mr-20">Become A Member</Link>
                  <Link href="/kontak" className="tp-btn-sky">Let's Talk</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
              <img src="/assets/img/news/news-7.1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;