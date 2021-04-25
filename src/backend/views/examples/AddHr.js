import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class AddHr extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAvatar = this.onChangeAvatar.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      avatar: '',
      password:'',
      company: '',
      //users: []
    };
  }

//   componentDidMount(){
//       this.state({
//           //users: ['test user'],
//           firstname: 'test user'
//       })
//   }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeAvatar(e) {
    this.setState({
      avatar: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      avatar: this.state.avatar,
      password: this.state.password,
      company: this.state.company,
    };
    console.log(user);

    //go back to homepage
    //window.location('/admin/UsersList');
  }

  render() {
    return (
      <>
        <Col className="order-xl-1" xl="8">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0"></h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              {/* onSubmit={this.onSubmit} */}
              <Form onSubmit={this.onSubmit}>
                <h6 className="heading-small text-muted mb-4">Add Hr</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Firstname</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="string"
                          value={this.state.firstname}
                          onChange={this.onChangeFirstname}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Lastname</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="string"
                          value={this.state.lastname}
                          onChange={this.onChangeLastname}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label">Email</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="string"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Password</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="password"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">Avatar</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="string"
                          value={this.state.avatar}
                          onChange={this.onChangeAvatar}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label">Company</label>
                        <Input
                          className="form-control-alternative"
                          placeholder=""
                          type="string"
                          value={this.state.company}
                          onChange={this.onChangeCompany}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="8">
                        <input type="submit" className="btn btn-primary" value="Add HR"/>
                      {/* <Button
                        color="default"
                        href="#pablo"
                        onSubmit={this.onSubmit}
                        size="sm"
                      >
                        Add Hr Account
                      </Button> */}
                      <Button
                         className="btn btn-warning"
                        // color="default"
                        // href="#pablo"
                        // color="warning"
                        // size="sm"
                      >
                        <Link to="/admin/UsersList" style={{ color: "white" }}>
                          Back
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}
export default AddHr;

// const AddHr = () => {

//   return (
//     <>
//       <Col className="order-xl-1" xl="8">
//         <Card className="bg-secondary shadow">
//           <CardHeader className="bg-white border-0">
//             <Row className="align-items-center">
//               <Col xs="8">
//                 <h3 className="mb-0"></h3>
//               </Col>
//             </Row>
//           </CardHeader>
//           <CardBody>
//             <Form>
//               <h6 className="heading-small text-muted mb-4">Add Hr</h6>
//               <div className="pl-lg-4">
//                 <Row>
//                   <Col lg="6">
//                     <FormGroup>
//                       <label className="form-control-label">Firstname</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>
//                   <Col lg="6">
//                     <FormGroup>
//                       <label className="form-control-label">Lastname</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>
//                   <Col lg="12">
//                     <FormGroup>
//                       <label className="form-control-label">Email</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>
//                   <Col lg="6">
//                     <FormGroup>
//                       <label className="form-control-label">Password</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>
//                   <Col lg="6">
//                     <FormGroup>
//                       <label className="form-control-label">Avatar</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>
//                   <Col lg="12">
//                     <FormGroup>
//                       <label className="form-control-label">Company</label>
//                       <Input
//                         className="form-control-alternative"
//                         placeholder=""
//                         type="string"
//                       />
//                     </FormGroup>
//                   </Col>

//                   <Col lg="8">
//                     <Button
//                       color="default"
//                       href="#pablo"
//                       onClick={(e) => e.preventDefault()}
//                       size="sm"
//                     >
//                       Add Hr Account
//                     </Button>
//                     <Button color="default"
//                                             href="#pablo"
//                                             color="warning"
//                                             onClick={(e) => e.preventDefault()}
//                                             size="sm"  ><Link to="/admin/UsersList" style={{color:'white'}}>Back</Link>
//                                             </Button>
//                   </Col>
//                 </Row>
//               </div>
//             </Form>
//           </CardBody>
//         </Card>
//       </Col>
//     </>
//   );
// };
// export default AddHr;
