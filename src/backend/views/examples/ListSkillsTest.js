import React, { useState } from "react";
import {Link} from "react-router-dom";
import Details from "./Details";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


const ListskillsTest= (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");


  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "100px",
          // backgroundImage:
          //   "url(" +
          //   require("../../assets/img/theme/skills.jpg").default +
          //   ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-orange" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row></Row>
        </Container>
      </div>

      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">List Skills Test </h3>
                  </div>
                     {/* search bar */}
                     <div className="col text-right">
                     <Button color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Add</Button>
                  </div>
                  {/* search bar */}
                 
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Test Skills name</th>
                    
                    <th scope="col">creation date</th>
                   
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Angular</th>
                  
                    <td>1/04/2020</td>
                              
                  
                      <td><Button color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Delete</Button></td>
                  
                  <td><Button color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Send Test</Button></td>
                   </tr>
                  <tr>
                    <th scope="row">Java</th>
                  
                    <td>25/03/2021</td>
                   
                   
                      <td><Button color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Delete</Button></td>
                       <td><Button color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Send Test</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">Django</th>
                    
                    <td>3/04/2021</td>
                   
                   
                      <td><Button color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Delete</Button></td>
                
                  <td><Button color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm" >Send Test</Button></td>
                </tr>
 
                  {/* <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr> */}
                </tbody>
              </Table>
            </Card>
          </Col>
            
          </Row>
          </Container>
    </>
  );
};

export default ListskillsTest;