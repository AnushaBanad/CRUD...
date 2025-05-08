// src/components/ContactList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContactList({ refreshTrigger }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  const deleteContact = async id => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, [refreshTrigger]);

  return (
    <ul>
      {contacts.map(c => (
        <li key={c._id}>
          {c.name} ({c.email}) - {c.phone}
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
