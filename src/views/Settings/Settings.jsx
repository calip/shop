import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

class Settings extends Component {
  state = { settings: null };

  componentDidMount() {
    fetch('http://localhost:8095/api/settings').then(res => res.json()).then(settings => this.setState({settings:settings}))
  }

  render() {
    if(this.state.settings != null) {
      const { settings } = this.state;
      return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  title="Edit Settings"
                  content={
                    <form>
                      <FormInputs
                        ncols={["col-md-7", "col-md-5"]}
                        proprieties={[
                          {
                            label: "Company (disabled)",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Company",
                            defaultValue: settings.company
                          },
                          {
                            label: "Email address",
                            type: "email",
                            bsClass: "form-control",
                            placeholder: "Email",
                            defaultValue: settings.email
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Adress",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Home Adress",
                            defaultValue: settings.address
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "City",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "City",
                            defaultValue: settings.city
                          },
                          {
                            label: "Country",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Country",
                            defaultValue: settings.country
                          },
                          {
                            label: "Postal Code",
                            type: "number",
                            bsClass: "form-control",
                            placeholder: settings.postcode
                          }
                        ]}
                      />
                      <Button bsStyle="info" pullRight fill type="submit">
                        Update Settings
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
    else {
      return null
    }
  }
}

export default Settings;
