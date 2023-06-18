import { Col } from "react-bootstrap";
import linkIcon from "../assets/img/link.svg";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <a className="link-visit" href={link}>Visit Project <img className="link-icon" src={linkIcon} alt="Image"></img> </a> {/* Add the link here */}
        </div>
      </div>
    </Col>
  );
};
