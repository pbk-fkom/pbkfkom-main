import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MemberDetailArea = ({ member }) => {
  const {
    nim,
    name,
    email,
    classes,
    gender,
    phone,
    address,
    instagram,
    photo,
    memberPositionId,
    structuralId,
    periodeId,
  } = member || {};
  const API_PHOTO_MEMBER = process.env.NEXT_PUBLIC_PHOTO_MEMBER;

  return (
    <>
      <div className="am-about-me-area pt-200 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="ac-ab-img fix">
                {photo == "avatar.png" ? (
                  <LazyLoadImage
                    effect="blur"
                    className="w-100"
                    src={`${ROOT_API}/assets/static/images/faces/avatar.png`}
                    alt="image"
                  />
                ) : (
                  <LazyLoadImage
                    effect="blur"
                    className="w-100"
                    src={`${API_PHOTO_MEMBER}/${photo}`}
                    alt="image"
                  />
                )}
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-6">
                  <div className="amaboutinfo">
                    <div className="amaboutinfo__client-info">
                      <h4>{name}</h4>
                      <span>
                        {memberPositionId.name} - {structuralId.name} - Periode{" "}
                        {periodeId.periode_year}
                      </span>
                    </div>
                    <div className="amaboutinfo__experience">
                      <p>
                        <b>NIM:</b> {nim}
                      </p>
                      <p>
                        <b>Email:</b> {email}
                      </p>
                      <p>
                        <b>Kelas: </b> {classes}
                      </p>
                      <p>
                        <b>Jenis Kelamin:</b> {gender}
                      </p>
                      <p>
                        <b>No.Whatsapp:</b> {phone}
                      </p>
                      <p>
                        <b>Alamat:</b> {address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6">
                  <div className="amaboutsocial text-start text-md-end">
                    <div className="amaboutsocial__icon mb-30">
                      <a
                        href={`https://instagram.com/${instagram}`}
                        target="_blank"
                        className="si-btn-link"
                      >
                        <div className="tp-si-wrapper d-flex justify-content-end">
                          <div className={`tp-si__text tp-si-color-2`}>
                            <span>Instagram</span>
                          </div>
                          <div className={`tp-si__icon tp-si-color-2`}>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetailArea;
