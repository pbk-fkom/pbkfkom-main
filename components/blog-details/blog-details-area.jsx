import Link from 'next/link';
import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import Moment from 'react-moment';
import { DOMPurify } from 'dompurify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BlogDetailsArea = ({ blog }) => {
  const { thumbnail, title, content, writer, createdAt, tagId } = blog || {};
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;

  return (
    <>
      <div className="postbox__area pt-200 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    <p><LazyLoadImage effect="blur" className="w-100" src={`${API_THUMBNAIL}/${thumbnail}`} alt="" /></p>
                    <div className="postbox__meta">
                      <span><Link href="#"><i className="fal fa-user-circle"></i>{writer}</Link></span>
                      <span><Link href="#"><i className="fal fa-clock"></i>{<Moment format="DD MMMM YYYY, HH:mm" date={createdAt} />}</Link></span>
                    </div>
                    <h3 className="postbox__title">
                      {title}
                    </h3>
                    <div className="postbox__text">
                      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.substring(0,100)) }}></p>
                    </div>

                    <div className="postbox__social-wrapper">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="postbox__tag tagcloud">
                            <span>Tag</span>
                            {tagId.map((tag, i) => <Link key={i} href={`/blog/${tag.slug}`}>
                              {tag.name}
                            </Link>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              {/* blog sidebar start */}
              <BlogSidebar />
              {/* blog sidebar end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;