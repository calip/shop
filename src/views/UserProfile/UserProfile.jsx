import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

class UserProfile extends Component {
  state = { user: null };

  componentDidMount() {
    fetch('http://localhost:8095/api/user').then(res => res.json()).then(user => this.setState({user:user}))
  }

  render() {
    if(this.state.user != null) {
      const { user } = this.state;
      return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  title="Edit Profile"
                  content={
                    <form>
                      <FormInputs
                        ncols={["col-md-5", "col-md-3", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Company (disabled)",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Company",
                            defaultValue: user.company
                          },
                          {
                            label: "Username",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Username",
                            defaultValue: user.username
                          },
                          {
                            label: "Email address",
                            type: "email",
                            bsClass: "form-control",
                            placeholder: "Email",
                            defaultValue: user.email
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "First name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "First name",
                            defaultValue: user.firstname
                          },
                          {
                            label: "Last name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Last name",
                            defaultValue: user.lastname
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
                            defaultValue: user.address
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
                            defaultValue: user.city
                          },
                          {
                            label: "Country",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Country",
                            defaultValue: user.country
                          },
                          {
                            label: "Postal Code",
                            type: "number",
                            bsClass: "form-control",
                            placeholder: user.postcode
                          }
                        ]}
                      />
                      <Button bsStyle="info" pullRight fill type="submit">
                        Update Profile
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

export default UserProfile;
