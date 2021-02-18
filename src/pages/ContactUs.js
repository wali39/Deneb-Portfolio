import React from "react";
import { Row, Col } from "react-bootstrap";
import Contact from "../components/contact/Contact";
import PageHeader from "../components/page-header/PageHeader";
import SectionTitle from "../components/section-title/SectionTitle";
const title = `Send Us Message`;
export default function ContactUs() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Row className="d-flex align-items-center justify-content-center p-2">
        <Col className="col-lg-8 col-sm-10 col-12 ">
          <SectionTitle title={title} className="text-left" />
          <Contact />
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114294.84145569366!2d89.32603678842202!3d24.240656423239237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdd34d81904829%3A0xaebdf9bcb4895623!2sBhangura%20Upazila!5e1!3m2!1sen!2sbd!4v1613655361518!5m2!1sen!2sbd"
            width="100%"
            title="home address"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Col>
      </Row>
    </>
  );
}
