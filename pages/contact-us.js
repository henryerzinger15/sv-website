import Layout from "../components/layout";
import { Form, Row, Col, Button } from "react-bootstrap";

function ContactUs() {
  return (
    <Layout title="Contact Us">
      <div className="content-container" style={{maxWidth: "800px" }}>
        <h1>Contact Us</h1>
        <Form
          className="form-container"
          name="contact-us"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          <Row>
            <Col>
              <Form.Control type="text" name="name" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="text" name="subject" placeholder="Subject" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                name="message"
                rows={10}
                placeholder="Message"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary custom-solid-button" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Layout>
  );
}

export default ContactUs;
