import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Branding from "./Branding";
import WebDesign from "./WebDesign";
import WebDevelopment from "./WebDevelopment";
import "./tab.css";
import SectionTitle from "../section-title/SectionTitle";
const text = `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu  tristique`;
export default function Portfolio() {
  return (
    <Container className="portfolio">
      <SectionTitle
        title="Our Latest Project"
        className="text-center"
        description={text}
      />
      <Tabs
        defaultActiveKey="web-design"
        transition={false}
        id="portfolio"
        className="d-flex align-items-center justify-content-center "
      >
        <Tab eventKey="web-design" title="Web Design">
          <WebDesign />
        </Tab>
        <Tab eventKey="web-development" title="Web Development">
          <WebDevelopment />
        </Tab>
        <Tab eventKey="branding" title="Branding">
          <Branding />
        </Tab>
      </Tabs>
    </Container>
  );
}
