import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/skill-1.svg";
import skill2 from "../assets/img/skill-2.svg";
import skill3 from "../assets/img/skill-3.svg";
import skill4 from "../assets/img/skill-4.svg";
import skill5 from "../assets/img/skill-5.svg";
import skill6 from "../assets/img/skill-6.svg";
import colorSharp from "../assets/img/color-sharp.jpg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="mb-5">Technical Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="Image"></img>
                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="Image"></img>
                                    <h5>Reactjs</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="Image"></img>
                                    <h5>Php</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="Image"></img>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="Image"></img>
                                    <h5>Css</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt="Image"></img>
                                    <h5>Html</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}