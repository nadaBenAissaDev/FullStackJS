import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from './pagination.js';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
//import { Button } from "reactstrap";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
 
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
 
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
 

  CardBody,
  FormGroup
  
} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";


  
  
  
  export default class ReclamationDetails extends Component {
  
    
    constructor(props) {
      super(props);

  
      this.state = {reclamation: [],
      
      
    
      };
  
     
    }
  
    componentDidMount() {
     const id = this.props.match.params.id;
      axios.get(`http://localhost:5000/reclamation/det/607f54f5fb371e44b4a8ec05`)
        .then(response => {
        //  if (response.data.success) {
            this.setState({
              reclamation: response.data.data,
            });
         // }
         // this.setState({ reclamation: response.data })
         console.log("reclamation: ", this.state.reclamation )
        })
        .catch((error) => {
          console.log(error);
          console.log("post: ", this.state.reclamation)
        })

    }
  

  
    
    render() {  

  

     
  
       
       const reclamation  = this.state.reclamation;
       console.log("cc",reclamation)
  
      return (
       
        
        <>
       
       <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage:
          "url(" +
          require("../../assets/img/theme/rec.jpg").default +
          ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>

        <div> </div>

         
        </Container>
        
      </div>



{/* Page content */}
  
   <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="6">
            <Card className="card-profile shadow card">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                  Approver
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                  
                    size="sm"
                  >  <a href={`http://localhost:3000/admin/Replay`}> 
                      Replay with mail </a> 
               
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      
                      <div>
                        <span className="heading"></span>
                        <span className="description"></span>
                      </div>
                      <div>
                        <span className="heading"></span>
                        <span className="description"></span>
                      </div>
                    </div>
                  </div>
                </Row>
                
                <div className="text-center">
                <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                Lastname : 
                
                  </div>
                
                  
                  {reclamation.lastname}
                   

                 
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                object : 
                
                  </div>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                
                  {reclamation.object}

                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                  Contenue de description : 
                
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    {reclamation.description}
                  </div>
                 
                  <hr className="my-4" />
                  <p>
                    ----------
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

   }
  
  
  