import Link from "next/link";
import { useCallback, useEffect, useState, React } from "react";
import { getStructurals } from "../../services/structurals";
import { getActiveMembers } from "../../services/members";

const ServicesArea = () => {
  const [structuralList, setStructuralList] = useState([]);
  const [memberList, setMemberList] = useState([]);

  const getStructuralList = useCallback(async () => {
    let data = await getStructurals();

    data = data.filter(
      (structural) =>
        !structural.name.includes("Divisi Pengembangan Sumber Daya Manusia")
    );

    setStructuralList(data);
  }, [getStructurals]);

  const getMemberList = useCallback(async () => {
    let data = await getActiveMembers();

    setMemberList(data);
  }, [getActiveMembers]);

  useEffect(() => {
    getStructuralList();
    getMemberList();
  }, []);

  return (
    <>
      <div className="ac-chose-area mb-130">
        <div className="container ac-chose-bg">
          <div className="row">
            <ChoseItem
              duration=".3s"
              delay=".5s"
              icon="flaticon-group"
              title={<>Pengurus</>}
              text={`${memberList.length} Pengurus`}
            />
            <ChoseItem
              duration=".5s"
              delay=".7s"
              item_num={"tpchosebox-three"}
              color="fea-color-5"
              icon="fas fa-star"
              title={<>Benefite</>}
              text={"99999+ Benefit"}
            />
            <ChoseItem
              duration=".7s"
              delay=".9s"
              item_num={"tpchosebox-two"}
              color="fea-color-4"
              icon="flaticon-web"
              title={<>Struktural</>}
              text={`${structuralList.length} Struktural`}
            />
            <ChoseItem
              duration=".9s"
              delay="1s"
              icon="fas fa-star"
              title={<>Ilmu</>}
              text={"100% Nambah Jago"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;

const ChoseItem = ({ duration, delay, item_num, icon, title, text, color }) => {
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp"
      data-wow-duration={duration}
      data-wow-delay={delay}
    >
      <div className="tp-chose-item mb-30">
        <div className={`tpchosebox ${item_num && item_num}`}>
          <div className={`tpchosebox__icon ${color && color} mb-30`}>
            <Link href="#">
              <i className={icon}></i>
            </Link>
          </div>
          <div className="tpchosebox__content">
            <h4>
              <Link href="/service-details">{title}</Link>
            </h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
