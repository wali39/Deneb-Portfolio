import React from "react";
import { Container } from "react-bootstrap";
import image3 from "../../assets/images/woman1.jpg";
import ServiceCard from "./ServiceCard";

const title = `Digital Marketing`;
const text = ` Etiam suscipit sed sem nec elementum. Interdum et malesuada fames ac
ante ipsum primis in faucibus. Sed accumsan, urna vel finibus
sollicitudin, urna sem fringilla nisi. In vel ante tristique, blandit
nisi in, feugiat nisl. Nunc sagittis pretium arcu, ac consectetur diam
feugiat vitae. Pellentesque sit amet elit facilisis, sodales nisl non,
luctus ex. Donec molestie consequat velit, id imperdiet arcu
sollicitudin. Praesent ac tempus ipsum, eget consequat ante. Sed
consequat, elit euismod finibus faucibus.`;
export default function DigitalMarketing() {
  return (
    <Container>
      <ServiceCard title={title} imageSrc={image3} text={text} />
    </Container>
  );
}
