import Link from "next/link";
import { useCallback, useEffect, useState, React } from 'react';
import { getPosts } from '../../services/posts';
import Moment from 'react-moment';

const BlogArea = () => {
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;
  const [postList, setPostList] = useState([]);

  const getPostList = useCallback(async () => {
    let data = await getPosts();

    setPostList(data);
  }, [getPosts]);

    useEffect(() => {
      getPostList();
    }, []);

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
          {postList.map((item, i) => {
            const { slug, thumbnail, title, categoryId, createdAt, content } = item;

            return <div key={i} className="col-xl-6 col-lg-6">
              <div className="tp-blog-box mb-30 wow tpfadeLeft"
                data-wow-duration=".6s" data-wow-delay=".4s">
                <div className="tp-blog-item">
                  <div className="tp-blog-img fix mb-35">
                    <Link href={`/blog-details/${slug}`}>
                      <img className="w-100" src={`${API_THUMBNAIL}/${thumbnail}`} alt={thumbnail} />
                    </Link>
                  </div>
                  <div className="tp-blog-meta d-flex justify-content-between mb-30">
                    <Link href="#">{categoryId.name}</Link>
                    <Link className="tp-blog-meta-color" href="#">{<Moment format="DD MMMM YYYY" date={createdAt} />}</Link>
                  </div>
                  <div className="tp-blog-info">
                    <h3 className="tp-blog-title">
                      <Link href={`/blog-details/${slug}`}>
                        {title}
                      </Link>
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: content.substring(0,100) }}></p>
                  </div>
                </div>
              </div>
            </div>
          })}

        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-button text-center mt-30">
              <Link href={'/blog'} className="tp-btn">
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