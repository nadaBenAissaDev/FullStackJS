import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Pagination from './pagination.js';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import CallModal from "./CallModal.js";


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
      <td>{props.reclamation.firstname}</td>
      <td>{props.reclamation.lastname}</td>
      <td>{props.reclamation.email}</td>
      <td>{props.reclamation.avatar}</td>
      <td>{props.reclamation.password}</td>
      <td>{props.reclamation.role}</td>
      <td>{props.reclamation.company}</td>
      <td>{props.reclamation.position}</td>
    


    </tr>
  )
  
  
  
  
  export default class ListUsers extends Component {
  
    
    constructor(props) {
      super(props);

   
      
      this.handleChangeapp = this.handleChangeapp.bind(this)
  
      this.handleChange = this.handleChange.bind(this)
  
  
      this.state = {users: [],
      
      };
  
     
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/user/')
        .then(response => {
          this.setState({ users: response.data })
        })
        .catch((error) => {
          console.log(error);
        })

    }
 


  
    reclamationList() {
      return this.state.users.map(currentuser => {
        return <user user={currentuser}
        
      key={currentuser._id}/>;
      })
    }
  
    
  
    
    render() {  
  

     
  
     
     
      const currentPage = this.state.currentPage;
      const postsPerPage = this.state.postsPerPage;
      const loading = this.state.loading;
  
  
  
       // Get current posts
       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost = indexOfLastPost - postsPerPage;
       const currentPosts = this.state.reclamations.slice(indexOfFirstPost, indexOfLastPost);
  
  
  
  
       // Change page
       const paginate = pageNumber => this.setState({ pageNumber }); 
  
       //archiv
       
       const { reclamation } = this.props;
  
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
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List of claims</h3>
              </CardHeader>
      
         
     
  
          <Table
                 className="align-items-center table-flush" responsive
                >
            <thead className="thead">
              <tr>
                <th scope="col">name</th>
                <th scope="col">object</th>
                <th scope="col">Description</th>
                <th scope="col">comment</th>
                <th scope="col">type</th>
                <th scope="col">etat</th>
                <th scope="col">sms</th>
              
                <th scope="col">whats</th>
                <th scope="col">delete</th>
                <th scope="col">archiver</th>
                <th scope="col">approuver</th>
                <th scope="col">desapprouve</th>
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
  
  
  