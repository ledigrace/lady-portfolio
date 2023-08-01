import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard  } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
          title: "Lady Dahny Game Merch",
          description: "Kodego Bootcamp Capstone project",
          imgUrl: projImg1,
          link: "https://ladydahnycapstone.store/", // Add the link for project 1
        },
        {
          title: "The Bon Appétit",
          description: "Kodego Bootcamp Mini project 1",
          imgUrl: projImg2,
          link: "https://ledigrace.github.io/miniproject1.github.io/", // Add the link for project 1
        },
        {
          title: "Rock, Paper, Scissors Game",
          description: "Kodego Bootcamp Javascript Activity",
          imgUrl: projImg3,
          link: "https://ledigrace.github.io/rockpaperscissors.github.io/",
        },
        {
          title: "Mini Games",
          description: "Kodego Bootcamp Javascript Activity Duo Project",
          imgUrl: projImg4,
          link: "https://dahnjohn.github.io/miniGames.github.io/",
        },
        {
          title: "Bioscreator",
          description: "Design & Development",
          imgUrl: projImg5,
        },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg3,
        // },
      ];
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>These are the projects I've made so far. Click on the photo to see my project live.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>

    );
}