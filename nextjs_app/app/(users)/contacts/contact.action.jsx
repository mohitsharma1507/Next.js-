"use server";
import { db } from "@/config/db";
const ContactAction = async (formData) => {
  const { fullName, email, message } = Object.fromEntries(formData.entries());
  await db.execute(
    `insert into contactForm (full_name,email,message) values (?,?,?)`,
    [fullName, email, message]
  );
};

export default ContactAction;
