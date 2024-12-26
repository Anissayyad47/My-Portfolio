import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./Contact.css";
import gitHub from "../Assest/github-logo.png";
import linkedin from "../Assest/linkedin.png";
import leetcode from "../Assest/Leetcode.png";
import gg from "../Assest/gg.png";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oi2urgn', 'template_wjwdshs', form.current, {
        publicKey: 'NM21v87ZH_5-0ZJx4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-div">
      <div className="contact">
        <div className="contact-link">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/anis-sayyad-4aa710231/"><img src={linkedin}></img></a>
            </li>
            <li>
            <a href="https://github.com/Anissayyad47"><img src={gitHub}></img></a>
            </li>
            <li>
            <a href="https://www.geeksforgeeks.org/user/sayyadaanyo/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"><img src={gg}></img></a>
            </li>
            <li>
            <a href="https://github.com/Anissayyad47"><img src={leetcode}></img></a>
            </li>
          </ul>
        </div>
      <form ref={form} onSubmit={sendEmail} className="contact-box">
        <input type="text" name="user_name" className="input-box" placeholder="Your Name"/>
        <input type="email" name="user_email" className="input-box" placeholder="Your Email"/>
        <textarea name="message" className="msg-box" placeholder="Your Message"/>
        <input type="submit" value="Send" className="msg-submit" />
      </form>
      </div>
      </div>
  );
};

export default Contact;

// Styles
// const StyledContactForm = styled.div`
//   width: 100%;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;