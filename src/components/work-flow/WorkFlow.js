import React from "react";
import { Container } from "react-bootstrap";
import WorkFlowSingle from "./WorkFlowSingle";
import image1 from "../../assets/images/service-w-shape1.png";
import image2 from "../../assets/images/service-w-shape2.png";
import image3 from "../../assets/images/service-w-shape3.png";
import icon1 from "../../assets/images/analysis-icon.png";
import icon2 from "../../assets/images/development-icon.png";
import icon3 from "../../assets/images/rocket-icon.png";
import SectionTitle from "../section-title/SectionTitle";

const text = `Morbi vel tortor at metus malesuada convallis. Nam diam magna, laoreet ac libero quis, laoreet semper sem. Etiam erat quam, suscipit in orci ut, aliquet finibus tortor. Nullam dui leo, convallis quis diam eget, aliquam feugiat nunc. Vivamus quis volutpat dui.`;
const WorkFlowArray = [
  {
    id: "1",
    order: true,
    text: text,
    imageSrc: image1,
    icon: icon1,
    title: `Analysis`,
  },
  {
    id: "2",
    order: false,
    text: text,
    imageSrc: image2,
    icon: icon2,
    title: `Development`,
  },
  {
    id: "3",
    order: true,
    text: text,
    imageSrc: image3,
    icon: icon3,
    title: `Launch`,
  },
];
const title = `Our Workflow`;
const text2 = `When unknow printer took a gallery of type and scramblted it to make a type specimen book`;
export default function WorkFlow() {
  return (
    <Container>
      <SectionTitle title={title} description={text2} className="text-center" />
      {WorkFlowArray.map((workflow) => (
        <WorkFlowSingle
          key={workflow.id}
          title={workflow.title}
          description={workflow.text}
          imageSrc={workflow.imageSrc}
          order={workflow.order}
          icon={workflow.icon}
        />
      ))}
    </Container>
  );
}
