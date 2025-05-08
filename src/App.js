

// src/App.js
import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm refresh={triggerRefresh} />
      <ContactList refreshTrigger={refresh} />
    </div>
  );
}




export default App;
