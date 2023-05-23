import React, { useState } from "react";
import EditContactsForm from "./EditContactForm";
import { Button, Modal, Row, Card, Col, Container, } from "react-bootstrap";

export const Contacts = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const [editPrefilledContact, setEditPrefilledContact] = useState(null);

    const handleClose = () => {
        setLgShow(false);
        setEditPrefilledContact(null)
    }

    const handleShow = (contact) => {
        setEditPrefilledContact(contact);
        setLgShow(true);
    }

    const handleDelete = (contactId) => {
        props.deleteContact(contactId);
    };

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Contact Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactsForm prefilledContact={editPrefilledContact} editContact={props.editContacts} closeModal={handleClose} />
                </Modal.Body>
            </Modal>
            <Container>
                <Row>

                    {props.contactsjsx.map((contact, index) => (
                        <Col key={index}>
                            <Card style={{ width: "20rem" }} className="mt-4">
                                <Card.Body>
                                    <Card.Text>
                                        <div>
                                            <p>Name : {contact.name}</p>
                                            <p>Phone Number : {contact.phone}</p>
                                            <p>Location : {contact.location}</p>
                                        </div>
                                        <hr />
                                    </Card.Text>
                                    <Button
                                        variant="dark"
                                        className="me-4"
                                        onClick={() => handleShow(contact)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(contact.id)}
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};
