import Link from "next/link";
import React from "react";
import useSticky from "../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";

const Header = () => {
  const { headerSticky } = useSticky();
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two header-transparent header-space-three ${
            headerSticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <img src="/assets/img/logo/pbk-nav.webp" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-yellow-button">
                    <Link className="tp-btn-yellow" href="/kontak">
                      Let's Talk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"pbk-nav.webp"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default Header;
