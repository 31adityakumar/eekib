import styles from "./Contact.module.scss";
import axios from "axios";
import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation logic here
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all required fields.');
      return;
    }
    // Send the form data to the backend if validation passes
    try {
      const response = await axios.post("https://eelib.onrender.com/contact", form);
      console.log(response.data);
      // Optionally, reset the form after successful submission
      setForm({});
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <p className={styles.contactHeader}>
        Contact<span className={styles.infoGrad}> Info</span>
      </p>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleForm}></input>
          </label>
          <label>
            Sch ID:
            <input type="text" name="scholar" onChange={handleForm}></input>
          </label>
          <label>
            Email ID:
            <input type="email" name="email" onChange={handleForm}></input>
          </label>
          <label>
            Message:
            <textarea
              type="text"
              name="message"
              rows="4"
              cols="50"
              onChange={handleForm}
            ></textarea>
          </label>
          <input type="submit" value="Submit" className={styles.submit}></input>
        </form>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.101337951985!2d92.78971797497101!3d24.757714377996614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1718360268406!5m2!1sen!2sin"
            width="500"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
