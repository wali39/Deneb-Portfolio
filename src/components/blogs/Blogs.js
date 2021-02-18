import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BlogCard from "./BlogCardLarge";
import BlogSampleList from "./BlogSampleList";
const date = new Date().toDateString();
export default function Blogs() {
  return (
    <Container>
      <Row className="my-4">
        {BlogSampleList.map((blog) => (
          <Col className="col-12" key={blog.id}>
            <BlogCard
              imageSrc={blog.imageSrc}
              title={blog.title}
              description={[blog.text]}
              date={date}
              author={"wali"}
              id={blog.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
