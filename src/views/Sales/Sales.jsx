import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { salesArray, salesHArray } from "../../variables/Variables.jsx";

class Sales extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List Sales"
                category="List Sales"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {salesHArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td><a href="#/sales/edit">Edit</a></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Sales;
