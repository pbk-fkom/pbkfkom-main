import React, { useEffect, useState } from "react";
import PaginationArea from "../../ui/pagination";
import Link from "next/link";
import Moment from "react-moment";

const BlogItems = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems &&
        currentItems.map((blog) => {
          const { _id, slug, thumbnail, title, content, writer, createdAt } =
            blog;
          return (
            <article
              key={_id}
              className={`postbox__item format-image mb-50 transition-3`}
            >
              <div className="postbox__thumb w-img">
                <Link href={`/blog/${slug}`}>
                  <img src={`${API_THUMBNAIL}/${thumbnail}`} alt="" />
                </Link>
              </div>
              <div className="postbox__content">
                <div className="postbox__meta">
                  <span>
                    <Link href="#">
                      <i className="fal fa-user-circle"></i> {writer}{" "}
                    </Link>
                  </span>
                  <span>
                    <Link href="#">
                      <i className="fal fa-clock"></i>
                      {<Moment format="dddd, DD MMMM YYYY" date={createdAt} />}
                    </Link>
                  </span>
                </div>
                <h3 className="postbox__title">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <div
                  className="postbox__text"
                  dangerouslySetInnerHTML={{
                    __html: content.substring(0, 100),
                  }}
                ></div>
                <div className="post__button">
                  <Link href={`/blog/${slug}`} className="tp-btn-yellow">
                    READ MORE
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

      {/* pagination start*/}
      <div className="basic-pagination">
        <PaginationArea
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      </div>
      {/* pagination end*/}
    </>
  );
};

export default BlogItems;
