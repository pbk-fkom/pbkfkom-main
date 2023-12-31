import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DOMPurify from "isomorphic-dompurify";

const BlogArea = ({ blogs }) => {
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;

  return (
    <div className="tp-blog-area pt-130 pb-120 p-relative">
      <div className="circle-animation blog-animation">
        <span className="tp-circle-3"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-section-box text-center pb-15">
              <h5 className="tp-subtitle">Blog & Article</h5>
              <h2 className="tp-title">Recent blog post</h2>
            </div>
          </div>
        </div>
        <div className="row gx-40">
          {blogs.slice(0, 2).map((item, i) => {
            const { slug, thumbnail, title, categoryId, createdAt, content } =
              item;

            return (
              <div key={i} className="col-xl-6 col-lg-6">
                <div
                  className="tp-blog-box mb-30 wow tpfadeLeft"
                  data-wow-duration=".6s"
                  data-wow-delay=".4s"
                >
                  <div className="tp-blog-item">
                    <div className="tp-blog-img fix mb-35">
                      <Link href={`/blog-details/${slug}`}>
                        <LazyLoadImage
                          effect="blur"
                          className="w-100"
                          src={`${API_THUMBNAIL}/${thumbnail}`}
                          alt={thumbnail}
                        />
                      </Link>
                    </div>
                    <div className="tp-blog-meta d-flex justify-content-between mb-30">
                      <Link href="#">{categoryId.name}</Link>
                      <Link className="tp-blog-meta-color" href="#">
                        {<Moment format="DD MMMM YYYY" date={createdAt} />}
                      </Link>
                    </div>
                    <div className="tp-blog-info">
                      <h3 className="tp-blog-title">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(content.substring(0, 100)),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-button text-center mt-30">
              <Link href={"/blog"} className="tp-btn">
                View All Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
