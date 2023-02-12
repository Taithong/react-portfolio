import React from "react";
import { Card } from "antd";
import {
  Container,
  Row,
  // Col
} from "react-bootstrap";
import { Tabs } from "antd";
import ps from "../../Assets/Adobe Logo/ps.png";
import ai from "../../Assets/Adobe Logo/Ai.png";
import { Button, Space } from "antd";

import listAll from "../../firebase";

function Projects() {
  const listAllImages = () => {
    listAll("Pregraduation FEN/");
  };
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "Photograph",
              key: "1",
              children: (
                <>
                  <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Pregraduation%20FEN%2FIMG_0624.jpg?alt=media&token=84e3a356-343a-43ae-a22a-2ee030abb94d" />}
                    >
                      <Space wrap>
                        <Meta title="Pregraduation FEN" />
                        <br></br>
                        <Button type="primary" onClick={listAllImages}>
                          View
                        </Button>
                      </Space>
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
                </>
              ),
            },
            {
              label: "Graphic Design",
              key: "3",
              children: <></>,
            },
          ]}
        />
      </Container>
    </Container>
  );
}

// const onChange = (key: string) => {
//   console.log(key);
// };

// const App: React.FC = () => <Tabs onChange={onChange} type="card" />;

const { Meta } = Card;

export default Projects;
