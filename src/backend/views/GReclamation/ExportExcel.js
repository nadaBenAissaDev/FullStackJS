import React, { Component } from 'react'  
import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

export class ExportExcel extends Component {  
        constructor(props) {  
                super(props)  
                this.state = {  
                  reclamations: []  
  
                }  
        }  
        componentDidMount() {  
                axios.get('http://localhost:5000/Reclamation/').then(response => {  
                        console.log(response.data);  
                        this.setState({  
                          reclamations: response.data  
                        });  
                });  
        }  
        render() {  
                return (  
                        <div>  
                                <table id="emp" class="table">  
                                        <thead>  
                                                <tr>  
                                                        <th>Id</th>  
                                                        <th>Name</th>  
                                                        <th>Age</th>  
                                                        <th>Address</th>  
                                                        <th>City</th>  
                                                        <th>ContactNum</th>  
                                                        <th>Salary</th>  
                                                        <th>Department</th>  
  
  
  
                                                </tr>  
                                        </thead>  
                                        <tbody>              {  
                                                this.state.reclamations.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                <td>  
                                                                        {p.Id}  
                                                                </td>  
                                                             
      
    
                                                                <td >{p.lastname}</td>  
                                                                <td >{p.object}</td>  
                                                                <td >{p.description}</td>  
                                                                <td >{p.comment}</td>  
                                                                <td >{p.type}</td>  
                                                                <td >{p.etat}</td>  
                                                                <td style={{ paddingRight: "114px" }} >{p.Department}</td>  
                                                        </tr>  
                                                })  
                                        }  
  
                                        </tbody>  
  
                                </table>  
                                <div>  
                                        <ReactHTMLTableToExcel  
                                                className="btn btn-info"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export excel" />  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default ExportExcel  