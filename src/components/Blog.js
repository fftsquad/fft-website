import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <div className="blog">FFT Blog Page</div>
      breadcrumb on every page except home
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default Blog;
