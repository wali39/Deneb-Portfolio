import React from "react";
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
import Experience from "./Experience";
const description = `  Mauris dictum eros purus, vitae pharetra risus pulvinar
rhoncus. Duis bibendum tristique luctus. Aliquam non urna
odio morbi nec lectus tempus lorem vehicula consequat sed eu
lectus. Ut maximus nulla a est placer`;

const experienceArray = [
  {
    id: "1",
    order: true,
    name: "Wali Ullah",
    category: "Web Design",
    description: description,
    duration: "January 2020 - February 2021",
  },
  {
    id: "2",
    order: false,
    name: "Wali Ullah",
    category: "Web Development",
    description: description,
    duration: "January 2020 - February 2021",
  },
  {
    id: "3",
    order: true,
    name: "Wali Ullah",
    category: "Web Design",
    description: description,
    duration: "January 2020 - February 2021",
  },
];
const title = `Our Work Experience`;
const text = `When unknow printer took a gallery of type and scramblted it to make a type specimen book`;
export default function WorkExperience() {
  return (
    <Container>
      <SectionTitle title={title} description={text} className="text-center" />
      <Row className="py-5">
        {experienceArray.map((ex) => (
          <Col className="col-12">
            <Experience
              id={ex.id}
              name={ex.name}
              order={ex.order}
              category={ex.category}
              duration={ex.duration}
              description={ex.description}
            />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
