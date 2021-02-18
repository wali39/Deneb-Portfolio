import React from "react";
import ServiceHome from "../components/services/ServiceHome";
import { Container } from "react-bootstrap";
import Pricing from "../components/pricing/Pricing";
import Portfolio from "../components/portfolio/Portfolio";
import BlogHome from "../components/blogs/BlogHome";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Menu from "../components/navbar/Menu";

export default function Home() {
  return (
    <Container>
      <Menu />
      <HomeHeader />
      <ServiceHome />
      <Portfolio />
      <Pricing />
      <BlogHome />
    </Container>
  );
}
