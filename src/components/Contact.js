// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ name, phone, email, photo }) => {
  return (
    <>
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <img src={photo} width="50px" alt="" />
        <div style={{ display: "flex", "flex-direction": "column" }}>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <br />
    </>
  );
};

export default Contact;
