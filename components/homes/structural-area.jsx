import Link from 'next/link';
import { useCallback, useEffect, useState, React } from 'react';
import { AngelRight } from '../../svg';
import { getStructurals } from '../../services/structurals';

const contents = {
  shapes: ['chose/bp-chose-5.1.png', 'hero/hero-shape-5.2.png'],
  subtitle: 'Struktural Kami',
  title: <>Struktural yang <span className="tp-section-highlight"> kami miliki
    <svg width="170" height="12" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L170 12H0V0Z" fill="#89CEFB" />
    </svg>
  </span> dengan keahlian dibidang mereka masing-masing</>
}

const { shapes, subtitle, title } = contents;

const StructuralArea = () => {
  const [structuralList, setStructuralList] = useState([]);

  const getStructuralList = useCallback(async () => {
    let data = await getStructurals();

    data = data.filter(structural => !structural.name.includes('Badan Pengurus Harian') && !structural.name.includes('Divisi Pengembangan Sumber Daya Manusia'))

    setStructuralList(data);
  }, [getStructurals]);

  useEffect(() => {
    getStructuralList();
  }, []);

  return (
    <div className="tp-service-area tp-service-bs-space pt-130 pb-130 yellow-bg p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-sv-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-10">
            <div className="tp-best-services-title-box">
              <h5 className="tp-subtitle tp-subtitle-before-color">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">{title}</h2>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-12 col-12">
            <div className="tp-sv-space-wrapper">
              {structuralList.map((structural, i) => {
                const { name, slug, top_border = (i == 0 ? true : false) } = structural;
                return <Link key={i} href={`/pengurus/#${slug}`}>
                    <div className={`bg-white-wrapper ${top_border ? 'sv-border-top' : ''} sv-border-bottom service-space`}>
                      <div className="row align-items-center">
                        <div className="col-xl-9 col-lg-9 col-9">
                          <div className="tpservices">
                            <div className="tpservices__content">
                              <h5 className="tp-sv-bs-title">{name}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="tp-services-best-item text-end">
                            <div className="tpservices__icon">
                              <div className="angle-right-svg">
                                <div className="angle-right">{<AngelRight />}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </Link>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralArea;