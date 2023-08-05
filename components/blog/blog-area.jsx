import { React } from "react";
import BlogSidebar from "./blog-sidebar";
import BlogItems from "./blog-items";

const BlogArea = ({ blogs }) => {
  return (
    <>
      <div className="postbox__area pt-200 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {/*BlogItems start  */}
                <BlogItems itemsPerPage={5} items={blogs} />
                {/*BlogItems end  */}
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

export default BlogArea;
