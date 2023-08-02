import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/menu-data';

const sidebar_contents = {
  title: <>Paguyuban Barudak Komputer</>
}
const { title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = (menu) => {
    if(navTitle === menu){
      setNavTitle('')
    }
    else {
      setNavTitle(menu)
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
                <img src="/assets/img/logo/logo-pbk.webp" alt="" style={{height: 100 + '%'}} />
            </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn"><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                 <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button  onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    <ul className={navTitle === menu?.title ? "sub-menu active" : "sub-menu"}>
                      {menu?.sub_menus?.map((sub,i) => (
                      <li key={i}><Link href={`${sub.link}`}>{sub.title}</Link></li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;