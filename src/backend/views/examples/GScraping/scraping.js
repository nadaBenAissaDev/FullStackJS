
import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import axios from 'axios';
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
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
// core components
import Header from "backend/components/Headers/Header.js";

const Reclamation = props => (
    <tr>
      <td>{props.todos.link}</td>
      <td>{props.todos.name}</td>
      <td>{props.todos.location}</td>
      <td>{props.todos.profile_title}</td>
      <td>{props.todos.connection}</td>
      <td>{props.todos.job_title}</td>
      <td>{props.todos.company_name}</td>
      <td>{props.todos.joining_date}</td>
      <td>{props.todos.exp}</td>
      <td>{props.todos.college_name}</td>
      <td>{props.todos.degree_name}</td>
      <td>{props.todos.stream}</td>
      <td>{props.todos.degree_year}</td>

    
 
   
   
    </tr>
  )
  
  
  
  
  export default class ListUsers extends Component {
  
    
    constructor(props) {
      super(props);
     // console.log( props )
      this.state = {result: [] };
    }
  
    componentDidMount() {
      axios.get("http://localhost:5000/users")
        .then(response => {
          this.setState({ result: response.data.result})
          console.log(response.data.result);
          console.log('essay',this.state.result);
     
        })
        .catch((error) => {
          console.log(error);
        })

      

    }  




    reclamationList() {
       return this.state.result.map(currentresultat => {
        return <Reclamation todos={currentresultat}/>;
      })
    }
    render() {  
 
       const { resultat } = this.props;
  
      return (
        <>
       <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "400px",
          // backgroundImage:
          // "url(" +
          // require("../../assets/img/theme/rec.jpg").default +
          // ")",
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
<Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <br/>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Scrapped Result</h3>
              </CardHeader>
      
         
     
  
          <Table
                 className="align-items-center table-flush" responsive
                >
            <thead className="thead">
            <tr>
                <th scope="col">link</th>
                 <th scope="col">name</th>
                 <th scope="col">location</th> 
                 <th scope="col"> profile title</th>
              
                 <th scope="col">connection </th>
                 <th scope="col">job title</th>
                 <th scope="col">company name</th>
                 <th scope="col">joining date</th>
                 <th scope="col">experience</th>
                 <th scope="col">college name</th>
                 <th scope="col">degree name</th>
                 <th scope="col">stream</th>   
                 <th scope="col">degree year</th>
                 
          

              
                <th scope="col" />
             </tr>
            </thead>
            <tbody>
              { this.reclamationList() }

             
        
            </tbody>
            
          </Table>
          
     


</Card>
          </div>
        </Row>
        {/* Dark table */}
       
      </Container>


</> )
    }
  }