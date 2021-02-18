import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blogs from "./Blogs";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import BlogPost from "./BlogPost";
import BlogSmallSampleList from "./BlogSmallSampleList";
const date = new Date().toDateString();
export default function BlogsAll() {
  return (
    <Container>
      <Row>
        <Col className="col-12 col-lg-8">
          <Blogs />
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
  );
}
