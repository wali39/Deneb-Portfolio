import React from "react";
// import { Link } from "react-router-dom";
import { Row, Container, Tabs, Tab } from "react-bootstrap";
import image1 from "../../assets/images/diamond-icon.png";
import image2 from "../../assets/images/editor-icon.png";
import image3 from "../../assets/images/bulb-icon.png";
import webDev from "../../assets/images/development-icon.png";
import analysis from "../../assets/images/analysis-icon.png";
import rocket from "../../assets/images/rocket-icon.png";

import "./tab.css";
import WebDesign from "./WebDesign";
import WebDevelopment from "./WebDevelopment";
import StrategyAndResearch from "./StrategyAndResearch";
import AppDesign from "./AppDesign";
import DigitalMarketing from "./DigitalMarketing";
import BusinessAnalytics from "./BusinessAnalytics";

const serviceAll = [
  {
    id: "1",
    title: "web design",
    imageSrc: image1,
    panel: <WebDesign />,
  },
  {
    id: "2",
    title: "Strategy & Research",
    imageSrc: image2,
    panel: <StrategyAndResearch />,
  },
  {
    id: "3",
    title: "web Development",
    imageSrc: webDev,
    panel: <WebDevelopment />,
  },
  {
    id: "4",
    title: "App Design",
    imageSrc: rocket,
    panel: <AppDesign />,
  },
  {
    id: "5",
    title: "Digital Marketing",
    imageSrc: analysis,
    panel: <DigitalMarketing />,
  },
  {
    id: "6",
    title: "Business Analysis",
    imageSrc: image3,
    panel: <BusinessAnalytics />,
  },
];

const TitleC = ({ title, imageSrc }) => (
  <>
    <img src={imageSrc} alt="dsdgh" />
    <h5>{title}</h5>
  </>
);
export default function Services() {
  return (
    <Container>
      <Row className="my-5 d-flex justify-content-center  align-content-center">
        <Tabs
          defaultActiveKey="web design"
          id="noanim-tab-example"
          className="d-flex justify-content-center"
        >
          {serviceAll.map((service) => (
            <Tab
              eventKey={service.title}
              title={TitleC(service)}
              key={service.id}
            >
              {service.panel}
            </Tab>
          ))}
        </Tabs>
      </Row>
      {/* <WorkFlow /> */}
    </Container>
  );
}
