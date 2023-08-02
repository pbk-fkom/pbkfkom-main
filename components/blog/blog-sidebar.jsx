import Link from 'next/link';
import React, { useEffect, useState, useCallback } from 'react';
import { getPosts } from '../../services/posts';
import { getCategories } from '../../services/categories';
import { getTags } from '../../services/tags';
import Moment from 'react-moment';

const BlogSidebar = () => {
  const API_THUMBNAIL = process.env.NEXT_PUBLIC_THUMBNAIL;
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [tagList, setTagList] = useState([]);

  const getPostList = useCallback(async () => {
    let data = await getPosts();

    setPostList(data);
  }, [getPosts]);

  const getTagList = useCallback(async () => {
    let data = await getTags();

    setTagList(data);
  }, [getTags]);

  const getCategoryList = useCallback(async () => {
    let data = await getCategories();

    setCategoryList(data);
  }, [getCategories]);

    useEffect(() => {
      getPostList();
      getTagList();
      getCategoryList();
    }, []);

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Categories</h3>
        <div className="sidebar__widget-content">
          <ul>
            {categoryList.map((widget, i) => (
              <li key={i}>
                <Link href={`/blog/${widget.slug}`}>
                  {widget.name} ({postList.filter((item) => item.categoryId._id == widget._id).length})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {postList.slice(0,3).map((post) => (
              <div key={post._id} className="rc__post mb-20 d-flex align-items-center">
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog/${post.slug}`}>
                      <img src={`${API_THUMBNAIL}/${post.thumbnail}`} alt="" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{<Moment format="DD MMMM YYYY" date={post.createdAt} />}</span>
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
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tagList.map((tag, i) => <Link key={i} href={`/blog/${tag.slug}`}>
              {tag.name}
            </Link>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;