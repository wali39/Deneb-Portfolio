import React from "react";
import { Container } from "react-bootstrap";
import WorkExperience from "../components/experience/WorkExperience";
import Skills from "../components/progressbar/Skills";
import PageHeader from "../components/page-header/PageHeader";
export default function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" />
      <Container>
        <Skills />
        <WorkExperience />
      </Container>
    </>
  );
}
