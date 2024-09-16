import React from "react";
import Blog from "./Blog";

function News() {
  return (
    <div className="py-5 flex flex-col">
      <div className="flex flex-col space-y-2 items-center text-center">
        <label className="text-3xl font-bold font4">
          <span className="txt1">News</span> & Blogs
        </label>
        <p className="font4">"Discover breaking news and thought-provoking blog articles to feedyour curiosity and expand your perspective."</p>
      </div>

      <div className="pb-2 flex">
        <Blog/>
      </div>
    </div>
  );
}

export default News;
