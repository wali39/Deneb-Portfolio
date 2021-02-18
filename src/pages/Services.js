import React from "react";
import { Container } from "react-bootstrap";
import WorkFlow from "../components/work-flow/WorkFlow";
import Service from "../components/services/Service";
import PageHeader from "../components/page-header/PageHeader";
export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" />
      <Container>
        <Service />
        <WorkFlow />
      </Container>
    </>
  );
}
