import React from "react";
import { Row, Col } from "react-bootstrap";
import ServiceHomeCard from "./ServiceHomeCard";
import image1 from "../../assets/images/diamond-icon.png";
import image2 from "../../assets/images/editor-icon.png";
import image3 from "../../assets/images/bulb-icon.png";
import SectionTitle from "../section-title/SectionTitle";
const text = `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.`;

const serviceCardArray = [
  {
    id: "1",
    title: "web design",
    imageSrc: image1,
    text: `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.`,
    buttonText: `Read More`,
  },
  {
    id: "2",
    title: "web design",
    imageSrc: image2,
    text: `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.`,
    buttonText: `Read More`,
  },
  {
    id: "3",
    title: "web design",
    imageSrc: image3,
    text: `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.`,
    buttonText: `Read More`,
  },
];
export default function ServiceHome() {
  return (
    <>
      <SectionTitle
        title="Our Service "
        description={text}
        className="text-center"
      />
      <Row className="d-flex justify-content-center align-items-center">
        {serviceCardArray.map((card) => (
          <Col key={card.id} className="col-lg-4 col-md-6 col-sm-8 col-10 my-3">
            <ServiceHomeCard
              title={card.title}
              imageSrc={card.imageSrc}
              text={card.text}
              buttonText={card.buttonText}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
