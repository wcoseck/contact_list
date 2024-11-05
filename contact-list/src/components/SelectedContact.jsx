// components/SelectedContact.jsx
import { useEffect } from "react";
import { useState } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      const fetchContact = async () => {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const contactData = await response.json();
          setContact(contactData); 
          console.log(contactData); 
        } catch (error) {
          console.error("Error fetching contact:", error);
        }
      };

      fetchContact(); 
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Website:</strong> {contact.website}</p>
          <p><strong>Company:</strong> {contact.company?.name}</p> {/* Optional chaining to avoid errors if company is undefined */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedContact;