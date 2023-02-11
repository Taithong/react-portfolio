import React from "react";
import { Image } from "antd";
import { Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/Lover-63.jpg";
import ps from "../../Assets/Adobe Logo/ps.png";
import lr from "../../Assets/Adobe Logo/Lr.png";
import ai from "../../Assets/Adobe Logo/Ai.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            {/* <img src={developer} alt="about" className="image-style" /> */}
            <Image
              // width={200}
              src={developer}
              // alt="about"
              className="image-style"
            />
          </Col>
        </Row>
        {/* <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row> */}
        <h1 class="text-3xl font-bold underline">Skill</h1>
        <Row className="skill-tools-wrapper">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={lr} />}
          >
            <Meta
              title="Adobe Lightroom CC"
              description="I always use it for color grading of my photo that I took."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={ai} />}
          >
            <Meta
              title="Adobe Illustrator CC"
              description="The most of my artworks, I use Ai."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={ps} />}
          >
            <Meta
              title="Adobe Photoshop CC"
              description="I always use Ps for retouch photo that I took and sometime use it for create an artwork."
            />
          </Card>
        </Row>

        <br></br>
        <h1 class="text-3xl font-bold underline">Education Background</h1>
        <br></br>
        <Timeline 
          mode="left"
          items={[
            {
              label: "Primary School | September 2006 – June 2011",
              children:
                "Studied at ParkLay High School; Huayxaykham Village, Paklay District, Sayyabury Province• Laos.",
              color: "green",
            },
            {
              label: "High School | September 2011 – June 2018",
              children:
                "Studied at Saenlay Primary School; Saenglay Village, Paklay District, Sayyabury Province• Laos.",
              color: "green",
            },
            {
              label: "University | November 2018 to 2022",
              color: "green",
              children:
                "Studied at Department of Computer Engineering and Information Technology, Faculty of Engineering, National University of Lao. Lao-Thai Road • Watnak Village, Sisattanak districts, Vientiane • Laos.",
            },
            {
              label: "Advance Graphic Design Course | February 05 - March 27 , 2022",
              color: "red",
              children:
                "Stadied at Black Ginger Tutoring; Saphanthongtai Village, Sisattanak District, Vientiane Capital• Laos.",
            },
            {
              label: "Collage | October 2019 to 2022",
              color: "green",
              children:
                "Studied at Lao International Collage; Lao-Thai Road • Ban Saphanthongnuea, Sisattanak districts, Vientiane • Laos.",
            },
          ]}
        />
      </Container>
    </Container>
  );
}

const { Meta } = Card;

export default About;
