import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsForm from "./components/ContactsForm";
import { v4 as uuid } from "uuid";
import { Contacts } from "./components/Contacts";
import {  Container,Col, Row } from "react-bootstrap";
import em from "./App.css"


function App() {
  const [contacts, setContacts] = useState([
    {
      id: uuid(),
      name: "Kendall Jenner",
      phone: +1999032321,
      location: "Somewhere in the USA",
    },
    {
      id: uuid(),
      name: "Kyle Jenner",
      phone: +1454567671,
      location: "Somewhere in the USA",
    },
    {
      id: uuid(),
      name: "Chloe Kardasian",
      phone: +1999565634,
      location: "Somewhere in the USA",
    }
  ]);

  const handleAddContacts = (contactDetails) => {
    setContacts([...contacts, contactDetails])

  };

  const handleDeleteContacts = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleEditContact = (id, updatedUser) => {
    setContacts(contacts.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <>
      <Container className="gee">
        {/* <App.css /> */}
        <Row className="gap-2 mt-4">
          <Col md={3}>
            <ContactsForm contactDetail={handleAddContacts} />
          </Col>
          <Col>
            <Contacts contactsjsx={contacts} deleteContact={handleDeleteContacts} editContacts={handleEditContact} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;