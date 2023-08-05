import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const BlogSidebar = ({ blogs, categories, tags }) => {
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Kategori</h3>
        <div className="sidebar__widget-content">
          <ul>
            {categories.map((widget, i) => (
              <li key={i}>
                <Link href={`/blog/kategori/${widget.slug}`}>
                  {widget.name} (
                  {
                    blogs.filter((item) => item.categoryId._id == widget._id)
                      .length
                  }
                  )
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Artikel Terbaru</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {blogs.slice(0, 3).map((post) => (
              <div
                key={post._id}
                className="rc__post mb-20 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog/${post.slug}`}>
                    <img src={`${API_THUMBNAIL}/${post.thumbnail}`} alt="" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>
                      {<Moment format="DD MMMM YYYY" date={post.createdAt} />}
                    </span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title.substring(0, 35)}...
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Tag</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((tag, i) => (
              <Link key={i} href={`/blog/tag/${tag.slug}`}>
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
