import React, { useState } from "react";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Layout from "../components/layout";

const donationMapping = {
  50: "Groceries for an entire family",
  100: "Groceries, food certificates, and more for an entire family",
  150: "Everything for an entire family",
  300: "Groceries for six families",
};

const AmountButton = ({ value, active, onClick }) => (
  <Button
    style={{ display: "flex", alignItems: "center" }}
    variant="outline-primary btn-block text-left custom-outline-button"
    active={active}
    onClick={onClick}
  >
    <span style={{ fontWeight: 800, fontSize: 17, minWidth: 52 }}>
      ${value}
    </span>
    {donationMapping[value]}
  </Button>
);

function Donate() {
  const [donationValue, setDonationValue] = useState(0);
  const [director, setDirector] = useState("");

  return (
    <Layout>
      <div className="content-container">
        <h1>Donate</h1>
        <div id="home-left">
          <h3>Donate Online</h3>
          <p>
            Thank you for considering contributing to this amazing cause. Please
            make a tax deductible donation to Santa’s Volunteers using your
            credit card or bank account with the PayPal link or mailing to the
            address listed below.
            <br />
            <br />
            If your employer offers a matching gift policy, please download the
            form on this page to further increase your contribution! Even the
            smallest gift will make a difference in somebody’s life. Larger
            gifts will make a difference to whole families.
          </p>

          <h3 style={{ marginTop: 40 }}>Mail Your Donation</h3>
          <p>
            Santa’s Volunteers
            <br />
            1001 Green Bay Road, Box 167
            <br />
            Winnetka, IL 60093
            <br />
            <br />
            <b>
              Remember: Every penny you give will go to the families who need
              it.
              <span style={{ color: "var(--accentColor)" }}>
                {" "}
                Nothing goes to pay for administrative expenses, which are paid
                by our directors themselves.
              </span>
            </b>
          </p>
        </div>
        <div id="home-right">
          <h3>Select One or Enter Custom Amount</h3>
          <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            style={{ marginTop: 12 }}
          >
            <input type="hidden" name="business" value="santavp@yahoo.com" />
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="charset" value="utf-8" />
            <input type="hidden" name="amount" value={donationValue} />
            <input
              type="hidden"
              name="item_name"
              value={`${
                donationMapping[donationValue] || "Custom Amount"
              } - Director: ${director ? director : "N/A"}`}
            />
            <Row style={{ margin: 0 }}>
              <AmountButton
                value={50}
                active={donationValue === 50}
                onClick={() => setDonationValue(50)}
              />
            </Row>
            <Row style={{ margin: 0 }}>
              <AmountButton
                value={100}
                active={donationValue === 100}
                onClick={() => setDonationValue(100)}
              />
            </Row>
            <Row style={{ margin: 0 }}>
              <AmountButton
                value={150}
                active={donationValue === 150}
                onClick={() => setDonationValue(150)}
              />
            </Row>
            <Row style={{ margin: 0 }}>
              <AmountButton
                value={300}
                active={donationValue === 300}
                onClick={() => setDonationValue(300)}
              />
            </Row>
            <Row style={{ margin: 0, paddingTop: "40px" }}>
              <Col className="custom-input-field">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text style={{ fontSize: "15px" }}>
                      $
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    style={{ fontSize: "15px", marginRight: "10px" }}
                    type="number"
                    placeholder="Custom Amount"
                    onChange={(event) => {
                      setDonationValue(event.target.valueAsNumber);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col className="custom-input-field">
                <Form.Control
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                  placeholder="Director"
                  onChange={(event) => {
                    setDirector(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row style={{ margin: 0, paddingBottom: "40px" }}>
              <p>
                No account needed and Visa accepted. If donating on behalf of a
                Santa’s Volunteer Director, please state their name. Otherwise
                specify “N/A”.
              </p>
            </Row>
            <Row style={{ margin: 0 }}>
              <Button
                variant="primary btn-block custom-solid-button"
                type="submit"
              >
                Donate With PayPal
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
