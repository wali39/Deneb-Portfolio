import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import BlogPost from "./BlogPost";
import BlogSampleList from "./BlogSampleList";
import BlogDetailsCard from "./BlogDetailsCard";
import BlogSmallSampleList from "./BlogSmallSampleList";
import PageHeader from "../page-header/PageHeader";
const date = new Date().toDateString();
export default function BlogsAll() {
  const { id } = useParams();
  const blog = BlogSampleList.find((blog) => blog.id === id);

  return (
    <>
      <PageHeader title={blog.title} />
      <Container>
        <Row>
          <Col className="col-12 col-lg-8">
            <BlogDetailsCard
              title={blog.title}
              imageSrc={blog.imageSrc}
              date={date}
              description={blog.text}
            />
          </Col>
          <Col className="col-12 col-lg-4 mt-5">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search blogs..."
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <InputGroup.Append>
                <Button variant="success">Search</Button>
              </InputGroup.Append>
            </InputGroup>
            <h3 style={{ borderLeft: "5px solid #feb000", margin: "10px 0" }}>
              &nbsp; Recent Posts
            </h3>
            {BlogSmallSampleList.map((post) => (
              <BlogPost
                title={post.title}
                imageSrc={post.imageSrc}
                date={date}
                id={post.id}
                key={post.id}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
