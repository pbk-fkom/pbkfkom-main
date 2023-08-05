import React from "react";
import SingleTeam from "../common/single-team";

const contents = {
  subtitle: "Badan Pengurus Harian",
  title: (
    <>
      Meet our{" "}
      <span className="tp-section-highlight">
        {" "}
        BPH
        <svg
          width="201"
          height="12"
          viewBox="0 0 201 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
        </svg>{" "}
      </span>
    </>
  ),
};
const { subtitle, title } = contents;

const TeamArea = ({ members }) => {
  return (
    <div className="tp-team-area pt-130 p-relative">
      <div className="bp-team-shape-1 d-none d-lg-block">
        <img src="/assets/img/team/team-shape-5.3.png" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title-sm pb-60">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {members.map(
            (team) =>
              team.memberPositionId.name == "Ketua Umum" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Ketua Umum"}
                />
              )
          )}

          {members.map(
            (team) =>
              team.memberPositionId.name == "Wakil Ketua Umum" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Wakil Ketua Umum"}
                />
              )
          )}

          {members.map(
            (team) =>
              team.memberPositionId.name == "Sekretaris Umum 1" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Sekretaris Umum 1"}
                />
              )
          )}

          {members.map(
            (team) =>
              team.memberPositionId.name == "Sekretaris Umum 2" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Sekretaris Umum 2"}
                />
              )
          )}

          {members.map(
            (team) =>
              team.memberPositionId.name == "Bendahara Umum 1" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Bendahara Umum 1"}
                />
              )
          )}

          {members.map(
            (team) =>
              team.memberPositionId.name == "Bendahara Umum 2" && (
                <SingleTeam
                  key={team._id}
                  team={team}
                  memberPosition={"Bendahara Umum 2"}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
