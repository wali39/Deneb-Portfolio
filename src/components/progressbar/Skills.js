import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import image1 from "../../assets/images/man.png";
import SectionTitle from "../section-title/SectionTitle";

const ProgressTitleAndPercent = [
  {
    id: "1",
    title: "UI/UX Design",
    percent: "85",
  },
  {
    id: "2",
    title: "Web Design",
    percent: "90",
  },
  {
    id: "3",
    title: "HTML/CSS ",
    percent: "80",
  },
  {
    id: "4",
    title: "Javascript",
    percent: "70",
  },
];
const title = `Let Know Our Expert Skills`;
const text = ` Let Know Our Expert Skills Curabitur libero eros, efficitur sit amet
sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim
quis, hendrerit ipsum. Aenean blandit lacinia suscipit. Nunc ut
tincidunt massa, eu semper lacus.`;
export default function Skills() {
  return (
    <Container>
      <Row className="py-5 d-flex align-items-center justify-content-center">
        <Col className="col-12 col-sm-12  col-lg-7">
          <SectionTitle title={title} description={text} />
          {ProgressTitleAndPercent.map((progress) => (
            <ProgressBar
              title={progress.title}
              percent={progress.percent}
              key={progress.id}
            />
          ))}
        </Col>
        <Col className="col-12 col-sm-12  col-lg-5  ">
          <img alt="" src={image1} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
