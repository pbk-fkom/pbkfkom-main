import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SingleTeam = ({ team, memberPosition }) => {
  const API_PHOTO_MEMBER = process.env.NEXT_PUBLIC_PHOTO_MEMBER;
  const AWS_STORAGE_URL = process.env.NEXT_PUBLIC_AWS_STORAGE_URL;

  const { _id, photo, name, instagram } = team;
  return (
    <div
      className={`${
        team.periodeId.periode_year == "2022-2023"
          ? "col-xl-3 col-lg-3 col-md-6"
          : "col-xl-4 col-lg-4 col-md-6"
      }  wow tpfadeUp`}
      data-wow-duration=".3s"
      data-wow-delay=".5s"
    >
      <div className="tpteam mb-30">
        <div className="tpteam__shape-1">
          <img src="assets/img/team/team-shape-5.1.png" alt="image" />
        </div>
        <div className="tpteam__shape-2">
          <img src="assets/img/team/team-shape-5.2.png" alt="image" />
        </div>
        <div className="tpteam__thumb">
          {photo == "avatar.png" ? (
            <LazyLoadImage
              effect="blur"
              className="w-100"
              src={`${AWS_STORAGE_URL}/assets/static/images/faces/avatar.png`}
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
        <div className="tpteam__content">
          <h4 className="tp-team-sm-title">
            <Link href={`/pengurus/${_id}`}>{name}</Link>
          </h4>
          <h5 className="tp-team-sm-subtitle">
            <Link href="#">{memberPosition}</Link>
          </h5>
          <Link href={`https://instagram.com/${instagram}`}>
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
