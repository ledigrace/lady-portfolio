import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    const formData = new FormData(e.target);
    let hasEmptyFields = false;
  
    // Check if any input field or textarea is empty
    for (let value of formData.values()) {
      if (!value) {
        hasEmptyFields = true;
        break;
      }
    }
  
    if (hasEmptyFields) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all fields',
        icon: 'error',
      });
      setButtonText("Submit");
      return;
    }
  
    const phoneNumber = formData.get("phone");
    if (phoneNumber && !/^\d+$/.test(phoneNumber)) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid phone number. Please enter digits only and no space.',
        icon: 'error',
      });
      setButtonText("Submit");
      return;
    }
  
    const emailAddress = formData.get("email");
    if (emailAddress && !emailAddress.includes("@")) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid email address. Please enter a valid email.',
        icon: 'error',
      });
      setButtonText("Submit");
      return;
    }
  
    fetch('https://api.apispreadsheets.com/data/OKSgZsiUYEtcqGmh/', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            title: 'Success',
            text: 'Thank you for reaching out! Your message has been successfully submitted. :)',
            icon: 'success',
          }).then(() => {
            // Clear the input fields and textarea
            e.target.reset();
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'There was an error :(',
            icon: 'error',
          });
        }
        setButtonText("Submit");
      })
      .catch(error => {
        Swal.fire({
          title: 'Error',
          text: 'There was an error :(',
          icon: 'error',
        });
        setButtonText("Submit");
      });
  };
  
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form id="myForm"  onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" name="first_name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" name="last_name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="phone" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message"></textarea>
                        <button className="submit" type="submit" disabled={buttonText === "Sending..."}>{buttonText}</button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
