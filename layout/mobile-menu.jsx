import React from "react";
import Link from "next/link";
import useSticky from "../hooks/use-sticky";
import Sidebar from "../components/common/off-canvas";

const MobileMenu = ({ logo, bg, transparent = true }) => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div
        id="header-sticky-mobile"
        className={`tp-md-header-area d-md-block ${
          transparent ? "header-transparent" : ""
        } d-lg-none pt-30 pb-30
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <Link href="/">
                  <img src={`/assets/img/logo/${logo}`} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-end">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default MobileMenu;
