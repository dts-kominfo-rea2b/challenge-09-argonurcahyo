// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const { name, email, phone, photo } = data;
  return (
    <>
      <div key="email" style={{ display: "flex", flexDirection: "row" }}>
        <img src={photo} width="50px" alt={name} />
        <div style={{ display: "flex", flexDirection: "column" }}>
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
