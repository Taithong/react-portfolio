import React from "react";
import { Card } from "antd";
import {
  Container,
  Row,
  // Col
} from "react-bootstrap";
import { Tabs } from "antd";
import { Button, Space } from "antd";

// import Preview from "./preview";

// import { listAll, storage } from "../../firebase";

function Projects() {
  // const listAllImages = () => {
  //   listAll("Pregraduation FEN/");
  // };
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
                      cover={
                        <img
                          alt="example"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Pregraduation%20FEN%2FIMG_0624.jpg?alt=media&token=84e3a356-343a-43ae-a22a-2ee030abb94d"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Pregraduation FEN" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/pvLgrgNXTfewJb8a8"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Character Cafe"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/DSC_8230.jpg?alt=media&token=81d2a6ba-bd03-4ec7-b946-737c09050ff3"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="The Character Cafe" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/uUdbvUKU7h3MRWgv6"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Khua Tukky Retuarant"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/KSRUN-75.jpg?alt=media&token=ae6cdd3f-edf0-48e1-89e1-e5497454639c"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Khua Tukky Retuarant" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/48cxNUg6qBhRJSSs6"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Pregraduation LIC"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/IMG_9384.jpg?alt=media&token=6f07eadf-2850-4a11-bb80-1f331804f212"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Pregraduation LIC" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/RPjEbc7KfacbWh6P9"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
                  <br></br>
                  <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Parkson"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/IMG_0157.jpg?alt=media&token=e6b3480b-e689-479d-b55f-b59c54bce568"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Parkson Supermarket" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/MZuHgx1uFF1KnV3Q6"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="AA New Year Party"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/KSRUN-131.jpg?alt=media&token=25fe2e67-19d0-40a5-a10b-1e6797265045"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="AA New Year Party" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/bKPoraxVyp8g7kqJA"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Konglor Cave"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/1.jpg?alt=media&token=7252e063-dced-43c7-83a6-14d612b793de"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="The Konglor Cave" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/4B1Cfn8ZxYsPw6k8A"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Vangvieng"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/IMG_9763.jpg?alt=media&token=0ff155bc-2296-4751-ba0b-d65df2b81f17"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Vangvieng District" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/G4guqFaXSfXzZA4S9"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
                  <br></br>
                  <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="My mini production"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/IMG_9932.jpg?alt=media&token=812e3f55-f005-4cae-9988-49b25926204a"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="My Mini Production" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/HoqTuHLY2yjtj9nDA"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Faculty of Engineering"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/20210515_160240.jpg?alt=media&token=b3d6bcc4-3a09-42c5-8733-d79f6190ca1d"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Faculty of Engineering" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/szSPwvWaf2mDpG358"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Simple Day Cafe"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/DSC_8063.jpg?alt=media&token=837706c9-0443-4c17-831d-0e3b8c3459e7"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Simple Day Cafe" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/Y4H3b7mu8WJkehkPA"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Waterfall - Nature"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/TX-43.jpg?alt=media&token=4063c22f-284f-4cfa-a78e-985ec81b50e3"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Waterfall - Nature" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/nJHPXVB7F6hkNFDM7"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
                  <br></br>
                  <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Aug8st Cafe"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/DSC_6295.jpg?alt=media&token=8fe5fda1-1f43-4c5b-9d5a-af09d2db48ec"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Aug8st Cafe" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/2MRjey3KY5vYQLFQA"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="FEN Pre-Graduate 2020"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/RT18.jpg?alt=media&token=6c0320f8-b60d-4475-9faf-6e4af8d6af3e"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="FEN Pre-Graduate 2020" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/1gEv6wSSmYCzXbNT9"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Luang Prabang Trip"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/DSC_4930.jpg?alt=media&token=bc9e1cdd-e7e7-47cc-8502-0e94ffee9a3a"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Luang Prabang Trip" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/W5QmDe4abJTb4QaP7"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Mame Grand Restuarant"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/301774314_3205016869752960_1437789622338543901_n.jpg?alt=media&token=49a89670-b0ee-4c14-aa94-b8fc189a2efa"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Mame Grand Restuarant" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/CMmJkjhM6fapAeXz5"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
                  <br></br>
                  <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Shao Khao Restuarant"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/302300779_3207623492825631_6881553615449986508_n.jpg?alt=media&token=634250a7-87f1-4332-a8bd-42605e1950eb"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Shao Khao Restuarant" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/TNS4wgUgVBvshad46"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Simple Day Cafe"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Cover.jpg?alt=media&token=0530acd0-b184-4c24-8185-659aad63dcc7"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Simple Day Cafe" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/SyafTX1jfbYxeU3W9"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Orientation XM"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/DSC_6097.jpg?alt=media&token=919f1927-eb38-4128-a784-95f663fa336a"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Orientation XM" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/uUbF5wLduz3jkRvJ9"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="YSTIF 2022"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/media-22.jpg?alt=media&token=d392e5b6-7d17-497c-b7aa-72072e1c905c"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="YSTIF 2022" />
                        <br></br>
                        <Button type="primary" href="" target="_blank">
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
                </>
              ),
            },
            {
              label: "Graphic Design",
              key: "2",
              children: <>
              <Row className="skill-tools-wrapper">
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="The MRS Beauty"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2FThe%20MRS%20Beauty%20Logo.jpg?alt=media&token=4a06c64c-6bea-4f53-9c86-4b00edd1402a"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="The MRS Beauty" />
                        <br></br>
                        <Button
                          type="primary"
                          // onClick={The_MRS}
                          href="https://photos.app.goo.gl/yfjoBx4V6sXqfBmT6"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Xieng Mieng"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2FXieng%20Mieng%20Logo.jpg?alt=media&token=3933860f-73ee-4546-ba25-74c9bb4222d1"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Xieng Mieng - ຊຽງໝ້ຽງ" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/ZB1Jvc8mCbpcJBJfA"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Sen Sen Restuarant & Cafe"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2FSen%20Sen%20Logo.jpg?alt=media&token=b017674b-ed00-4704-a021-416313ff0c41"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Sen Sen Restuarant & Cafe" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/S98n6MstyaXH6ZP67"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    
                  </Row>
                  <br></br>
                  <Row className="skill-tools-wrapper">
                  <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Saolao Phar Mai"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2FSaolao%20Logo.jpg?alt=media&token=afd6f8ff-50f5-4da2-9abe-206795d9f02c"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Saolao Phar Mai" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/aEEa8o82nZPgaXhD7"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Archineer Digital"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2FAD%20Logo-04.png?alt=media&token=f682f641-ff83-4f45-81ed-01ae3f46f9ea"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Archineer Digital" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/ucWo3Jdj8Nsb2aa28"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="Savanhvayu Company"
                          src="https://firebasestorage.googleapis.com/v0/b/portfolio-55d0a.appspot.com/o/Logo%2Fsavan%20vayu%20logo-01.png?alt=media&token=2ff49478-e6b7-427c-81d9-d7a71fc74fb9"
                        />
                      }
                    >
                      <Space wrap>
                        <Meta title="Savanhvayu Company" />
                        <br></br>
                        <Button
                          type="primary"
                          href="https://photos.app.goo.gl/kR1Wmi3z1jZbBsAq6"
                          target="_blank"
                        >
                          View
                        </Button>
                      </Space>
                    </Card>
                  </Row>
              </>,
            },
          ]}
        />
        {/* <div><Preview/></div> */}
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
