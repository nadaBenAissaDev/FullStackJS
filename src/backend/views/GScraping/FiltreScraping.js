// import React from "react";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
// //import Pagination from './pagination.js';
// import axios from 'axios';
// //import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; //prob css men hathy 

// import { Component } from 'react';

// import {
//   Badge,
//   Card,
//   CardHeader,
//   Table,
//   Container,
//   Row,
// } from "reactstrap";
// // core components
// import Header from "backend/components/Headers/Header.js";

 
//   export default class Scraping extends Component {
  
    
//     constructor(props) {
//       super(props);

      
//       this.state = {resultat: [{

//             name:'',
//              link:'',
//              profile_title:'',
//             location:'',
//             college_name:'',
//              company_name:'',
//              connection:'',
//             stream:'',
//             degree_name:'',
//             degree_year:'',
//             job_title:'',
//              joining_date:''
               
        
//          }],
      
      
    
//       };
  
  
//     //   this.state = {

//     //     name:'',
//     //     link:'',
//     //     profile_title:'',
//     //     location:'',
//     //     college_name:'',
//     //     company_name:'',
//     //     connection:'',
//     //     stream:'',
//     //     degree_name:'',
//     //     degree_year:'',
//     //     job_title:'',
//     //     joining_date:''
        

      
    
//     //   };
  
     
//     }
  
//     componentDidMount() {
//      //const id = this.props.match.params.id;
//       axios.get("http://localhost:5000/users")
//         .then(response => {
//             //console.log(response);
//             console.log(response.data.result.name);
//             this.setState({name:response.data.name});
//             this.setState({link:response.data.link});
//             this.setState({profile_title:response.data.profile_title});
//             this.setState({location:response.data.location});
//             this.setState({college_name:response.data.college_name});
//             this.setState({company_name:response.data.company_name});
//             this.setState({connection:response.data.connection});
//             this.setState({stream:response.data.stream});
//             this.setState({degree_name:response.data.degree_name});
//             this.setState({degree_year:response.data.degree_year});
//             this.setState({job_title:response.data.job_title});
//             this.setState({degree_year:response.data.degree_year});
//             this.setState({job_title:response.data.job_title});
//             this.setState({joining_date:response.data.joining_date});
            
            
//            console.log(this.state.name);
//         })
//         .catch((error) => {
//           console.log(error);

//         })

//     }
   

          
          
  
    
//     render() {  
  
//    const {name,link,profile_title,location,college_name,company_name,connection,stream,degree_name,degree_year,job_title,joining_date} =this.props;
//     console.log(this.props.name);

      
//     const resultat  = this.state;
//     console.log("cc",resultat)




//       return (
//        <>
       
//        <div
//         className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//         style={{
//           minHeight: "400px",
//         //   backgroundImage:
//         //   "url(" +
//         //   require("../../assets/img/theme/rec.jpg").default +
//         //   ")",
//           backgroundSize: "cover",
//           backgroundPosition: "center top",
//         }}
//       >
//         {/* Mask */}
//         <span className="mask bg-gradient-default opacity-8" />
//         {/* Header container */}
//         <Container className="d-flex align-items-center" fluid>

//         <div> </div>

         
//         </Container>
        
//       </div>



// {/* Page content */}
// <Container className="mt--7" fluid>
//         {/* Table */}
//         <Row>
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">List of claims</h3>
//               </CardHeader>
      
         
     
  
//           <Table
//                  className="align-items-center table-flush" responsive
//                 >
//             <thead className="thead">
//               <tr>
//                 <th scope="col">name</th>
//                 <th scope="col">link</th>
//                 <th scope="col"> profile title</th>
//                 <th scope="col">location</th>
//                 <th scope="col">college name</th>
//                 <th scope="col">company name</th>
//                 <th scope="col">connection </th>
//                 <th scope="col">stream</th>
//                 <th scope="col">degree name</th>
//                 <th scope="col">degree year</th>
//                 <th scope="col">job title</th>
//                 <th scope="col">joining date</th>
            
              
//                 <th scope="col" />
//               </tr>
//             </thead>
//             <tbody>
//              <tr>
//               <td>{this.state.name}</td>
//                <td>{this.state.link}</td>
//               <td>{this.state.profile_title}</td>
//               <td>{this.state.location}</td>
//               <td>{this.state.college_name}</td>
//               <td>{this.state.company_name}</td>
//               <td>{this.state.connection}</td>
//               <td>{this.state.stream}</td>
//               <td>{this.state.degree_name}</td>
//               <td>{this.state.degree_year}</td>
//               <td>{this.state.job_title}</td>
//               <td>{this.state.joining_date}</td> 

//              </tr>

        
//             </tbody>
            
//           </Table>
          
        

// </Card>
//           </div>
//         </Row>
//         {/* Dark table */}
       
//       </Container>

//         </> )
//     }
//   }

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
      <td>{props.todos.name}</td>
      <td>{props.todos.link}</td>
      <td>{props.todos.profile_title}</td>
      <td>{props.todos.location}</td>
      <td>{props.todos.connection}</td>
      <td>{props.todos.stream}</td>
      <td>{props.todos.degree_name}</td>
      <td>{props.todos.degree_year}</td>
      <td>{props.todos.job_title}</td>
      <td>{props.todos.joining_date}</td>
      <td>{props.todos.college_name}</td>
      <td>{props.todos.company_name}</td>
    </tr>
  )
  
  
  
  
  export default class ListUsers extends Component {
  
    
    constructor(props) {
      super(props);
      console.log( props )

     
  
      this.state = {result: [],
      
      
      };
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
                 <th scope="col">link</th>
                 <th scope="col"> profile title</th>
                 <th scope="col">location</th> 
                 <th scope="col">connection </th>
                 <th scope="col">stream</th>
                 <th scope="col">degree name</th>
                 <th scope="col">degree year</th>
                 <th scope="col">job title</th>
                 <th scope="col">joining date</th>
                 <th scope="col">college name</th>
                 <th scope="col">company name</th>

              
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