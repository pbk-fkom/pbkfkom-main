import Link from 'next/link';
import { useCallback, useEffect, useState, React } from 'react';
import SocialLinks from './social-links';
import CopyrightArea from './copyright-area';
import { getSettings } from '../services/settings';

const footer_contents = {
  shapes: ['hero-shape-5.1.png', 'testimonial-shape-5.4.png'],
  logo: [
    {
      source: '/assets/img/logo/logo-uniku.webp',
      url: 'https://uniku.ac.id',
      size: '100',
      alt_text: "Logo UNIKU"
    },
    {
      source: '/assets/img/logo/logo-fkom.webp',
      url: 'https://fkom.uniku.ac.id',
      size: '100',
      alt_text: "Logo FKOM"
    },
    {
      source: '/assets/img/logo/logo-pbk.webp',
      url: '#',
      size: '70',
      alt_text: "Logo PBK FKOM UNIKU"
    }
  ],
  widget_desc: 'Unit Kegiatan Mahasiswa (UKM) Paguyuban Barudak Komputer Fakultas Ilmu Komputer Universitas Kuningan.',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'Tautan',
      widget_lists: ['Universitas Kuningan', 'Fakultas Ilmu Komputer Universitas Kuningan']
    },
  ],
  copy_right_text: <>Copyright © {new Date().getFullYear()} Paguyuban Barudak Komputer. All Rights Reserved</>,
}
const { copy_right_text, footer_widgets, logo, widget_desc, shapes }
  = footer_contents;

const Footer = () => {
  const [settingList, setSettingList] = useState([]);

  const getSettingList = useCallback(async () => {
    const data = await getSettings();
    let result = [];

    result = {
      site_instagram_account: data.filter((d) => d.key == "site_instagram_account")[0].value,
      site_youtube_channel: data.filter((d) => d.key == "site_youtube_channel")[0].value
    }

    setSettingList(result);
  }, [getSettings]);

  useEffect(() => {
    getSettingList();
  }, []);

  return (
    <footer>
      <div className="tp-footer-area pt-130 pb-30 p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bp-foooter-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/footer/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-footer-widget">
                <div className="mb-30">
                {logo.map((l, i) => {
                    const { source, url, size, alt_text } = l;
                    return <Link key={i} href={url}>
                        <img src={source} alt={alt_text} width={size} />
                    </Link>
                  })}
                </div>
                <div className="tp-footer-widget__text mb-30">
                  <p>{widget_desc}</p>
                </div>
                <div className="tp-footer-widget__social-link tp-footer-widget__social-link-2 ">
                  <SocialLinks socialSite={settingList} />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return <div key={i} className={`col-xl-6 col-lg-6 col-md-6 ${w_class ? w_class : ''}`}>
                <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                  <div className="tp-footer-widget__title pb-15">
                    <h3 className="footer-title text-black">{title}</h3>
                  </div>
                  <div className="tp-footer-widget__list">
                    <ul>
                      {widget_lists.map((l, i) => <li key={i}><Link href="#">{l}</Link></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        {/* CopyrightArea start */}
        <CopyrightArea copy_right_text={copy_right_text} color={'tp-copyright-color'} />
        {/* CopyrightArea end */}
      </div>
    </footer>
  );
};

export default Footer;