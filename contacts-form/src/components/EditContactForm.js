import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

 class EditContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.prefilledContact.id,
      name: this.props.prefilledContact.name,
      phone: this.props.prefilledContact.phone,
      location: this.props.prefilledContact.location,
    };
    this.handleChange = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.editContact(this.state.id, this.state)
      this.props.closeModal()
    };
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Where you Live"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditContactsForm;