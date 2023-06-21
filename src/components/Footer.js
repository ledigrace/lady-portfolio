import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center py-5">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2 className="footer-logo">Lady Grace</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-passport--passport-webapp&_ga=2.251963466.258279234.1686983915-280137961.1686983915"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/lalalalady21"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/ledigrace"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
