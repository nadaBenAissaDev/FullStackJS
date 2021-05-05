import React, { Component } from 'react';
import axios from "axios";

import { addCalendar, getCalendar, setIsModifiedCalendarLoading } from '../../../actions/calendarActions';
import {
  Card,
  CardBody,
  Input,
  CardHeader,
  Col,
  FormGroup,
  Label,
  CardFooter,
  Button,
  Row,
} from 'reactstrap';

import { connect } from 'react-redux';

class calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: {},
      selectedFileOne: null,
      selectedFileTwo: null,
      fileOneLoaded: false,
      fileTwoLoaded: false,
      fileOne: '',
      fileTwo: '',
    };
  }

  componentDidMount() {
    this.props.setIsModifiedCalendarLoading();
    this.props.getCalendar();
   

  }
  componentWillReceiveProps(nextProps) {
    if(!nextProps.calendar)
    {
      this.setState ( {
        calendar: {},
        selectedFileOne: null,
        selectedFileTwo: null,
        fileOneLoaded: false,
        fileTwoLoaded: false,
        fileOne: '',
        fileTwo: '',
      });
    }
    else
    {
      this.setState({
        fileOne: nextProps.calendar.fileOne,
        fileTwo: nextProps.calendar.fileTwo,
      });
    }
   
    if (nextProps.isModified) this.props.history.push('/');
  }

  handleSubmit = event => {
    const updateArticle = new FormData();

    if (this.state.fileOneLoaded) {
      updateArticle.append('files', this.state.selectedFileOne, this.state.selectedFileOne.name);
    }
    if (this.state.fileTwoLoaded) {
      updateArticle.append('files', this.state.selectedFileTwo, this.state.selectedFileTwo.name);
    }
    if(this.state.fileOneLoaded && this.state.fileTwoLoaded)
    {
       // this.props.addCalendar(updateArticle);
        axios.post('http://localhost:5000/calendar/add', calendar)
        .then(res => console.log(res.data));
    
        this.props.history.push('/');
    }
    else
    {
        alert('Séléctionner deux fichiers!');
    }
   
  };
  handleCancel = event => {
    this.props.history.push('/');
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFileOne: event.target.files[0],
      fileOneLoaded: true
    });
  };

  fileTwoSelectedHandler = event => {
    this.setState({
      selectedFileTwo: event.target.files[0],
      fileTwoLoaded: true
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="12">
            <Card>
              <CardHeader>
                <strong> Calendier : </strong> Fichiers
              </CardHeader>
              <CardBody>
               
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">***********</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" name="fileOne" onChange={this.fileSelectedHandler} />
                  </Col>
                  <Col xs="12" md="9">
                    <a href={`http://localhost:5000/${this.state.fileOne}`}>{this.state.fileOne}</a>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">*******</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" name="fileTwo" onChange={this.fileTwoSelectedHandler} />
                  </Col>
                  <Col xs="12" md="9">
                    <a href={`http://localhost:5000/${this.state.fileTwo}`}>{this.state.fileTwo}</a>
                  </Col>
                </FormGroup>
                
                <CardFooter>
                  <center>
                    <Button type="submit" block onClick={this.handleSubmit} color="primary">
                      <i className="fa fa-dot-circle-o"></i> Modifier
                    </Button>
                    <Button type="reset" block onClick={this.handleCancel} color="danger">
                      <i className="fa fa-ban"></i> Annuler
                    </Button>
                  </center>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  calendar: state.calendar.calendar,
  isModified: state.calendar.isModified
});

export default connect(
  mapStateToProps,
  { getCalendar, addCalendar, setIsModifiedCalendarLoading }
)(calendar);