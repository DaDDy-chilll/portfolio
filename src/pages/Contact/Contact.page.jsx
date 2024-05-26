import {
  ContactCenter,
  ContactSide,
  ContactSideSmall,
  ContactSideTinyLeft,
  ContactSideTinyRight,
  ContactSideTinySmallLeft,
  ContactSideTinySmallRight,
} from "@assets";
import { ContactBackground } from "./Contact.style";
import { ContactForm } from "@components";
const Contact = () => {
  document.body.style.backgroundColor = "var(--primary-color)";

  return (
    <>
      <ContactBackground>
        <ContactSideTinySmallLeft dir="left" />
        <ContactSideTinyLeft dir="left" />
        <ContactSideSmall dir="left" />
        <ContactSide dir="left" />
        <ContactCenter />
        <ContactSide dir="right" />
        <ContactSideSmall dir="right" />
        <ContactSideTinyRight dir="right" />
        <ContactSideTinySmallRight dir="right" />
      </ContactBackground>

      <ContactForm />
    </>
  );
};

export default Contact;
