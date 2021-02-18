import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
import BlogCard from "./BlogCard";
import BlogSampleList from "./BlogSampleList";
const text = `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu  tristique`;
const date = new Date().toDateString();
export default function BlogHome() {
  return (
    <Container>
      <SectionTitle
        title="Latest Blog"
        description={text}
        className="text-center"
      />
      <Row className="my-5 d-flex align-items-center">
        {BlogSampleList.map((blog) => (
          <Col className="col-lg-4 col-12" key={blog.id}>
            <BlogCard
              imageSrc={blog.imageSrc}
              title={blog.title}
              text={[blog.text]}
              date={date}
              buttonText={blog.buttonText}
              id={blog.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
