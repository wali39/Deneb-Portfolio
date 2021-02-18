import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import image1 from "../../assets/images/bemax.PNG";
import image2 from "../../assets/images/elison.PNG";
import image3 from "../../assets/images/appri.PNG";
import WebDesignCard from "./WebDesignCard";
const CardDetails = [
  { id: "1", imageSrc: image1, title: `Bemax portfolio site`, text: `Design` },
  { id: "2", imageSrc: image2, title: `Elison portfolio site`, text: `Design` },
  { id: "3", imageSrc: image3, title: `Appri psd Design`, text: `Design` },
];
export default function WebDesign() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {CardDetails.map((card) => (
          <Col className="col-12 col-md-6 col-lg-4 my-3" key={card.id}>
            <WebDesignCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
