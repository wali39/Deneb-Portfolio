import React from "react";
import BlogsAll from "../components/blogs/BlogsAll.js";
import PageHeader from "../components/page-header/PageHeader";
export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blogs" />
      <BlogsAll />
    </>
  );
}
