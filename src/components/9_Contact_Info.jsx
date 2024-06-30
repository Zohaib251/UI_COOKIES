import React from "react";
import "./9_Contact_Info.css";
function Contact_Info() {
  return (
    <div className="contact_info">
      <div class="Contact_Submit_Form">
        <h4 class="Form_title">Get In Touch</h4>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input type="tel" id="phone" name="phone" placeholder="Your Phone" />

          <textarea
            id="message"
            name="message"
            placeholder="Write a Message"
            rows={10}
            cols={30}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div class="contact-info">
        <p>
          <strong>Email:</strong> probootstrap@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +30 976 1382 9921
        </p>
        <p>
          <strong>Fax:</strong> +30 976 1382 9922
        </p>
        <p>
          <strong>Address:</strong> San Francisco, CA
          <br />
          4th Floor8 Lower
          <br />
          San Francisco street, M1 50F
        </p>
      </div>
    </div>
  );
}

export default Contact_Info;
