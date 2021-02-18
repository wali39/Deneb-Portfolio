import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../../assets/images/pricing.png";
import PriceCard from "./PriceCard";
import SectionTitle from "../section-title/SectionTitle";
const text = `Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu  tristique ligula.`;
const List1 = ({ item1, item2, item3, item4, item5, item6 }) => (
  <ul
    style={{
      listStyle: "none",
      textAlign: "center",
      padding: "0",
      margin: "0",
    }}
  >
    <li>{item1}</li>
    <li>{item2}</li>
    <li>{item3}</li>
    <li>{item4}</li>
    <li>{item5}</li>
    <li>{item6}</li>
  </ul>
);
const price = (
  <span>
    <span style={{ fontWeight: "700" }}>$99</span>
    <span style={{ color: "orange" }}>/Month</span>
  </span>
);
const pricingCardArray = [
  {
    id: "1",
    title: `Basic`,
    icon: icon,
    price: price,
    list: (
      <List1
        item1="Graphic Design"
        item2="Web Design"
        item3="UI/UX"
        item4="HTML/CSS"
        item5="SEO Marketing"
        item6="Business Analysis"
      />
    ),
  },
  {
    id: "2",
    title: `Standard`,
    icon: icon,
    price: price,
    list: (
      <List1
        item1="Graphic Design"
        item2="Web Design"
        item3="UI/UX"
        item4="HTML/CSS"
        item5="SEO Marketing"
        item6="Business Analysis"
      />
    ),
  },
  {
    id: "3",
    title: `Premium`,
    icon: icon,
    price: price,
    list: (
      <List1
        item1="Graphic Design"
        item2="Web Design"
        item3="UI/UX"
        item4="HTML/CSS"
        item5="SEO Marketing"
        item6="Business Analysis"
      />
    ),
  },
];

export default function Pricing() {
  return (
    <Container>
      <SectionTitle
        title="Affordable Pricing"
        description={text}
        className="text-center"
      />
      <Row className="my-5 d-flex justify-content-center">
        {pricingCardArray.map((card) => (
          <Col className="col-lg-4 col-md-6 col-sm-9 col-11 my-3" key={card.id}>
            <PriceCard
              title={card.title}
              imageSrc={card.icon}
              price={card.price}
              text={card.list}
              buttonText={"Start Now"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
