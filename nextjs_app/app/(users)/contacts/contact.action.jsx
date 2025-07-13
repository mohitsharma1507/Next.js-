"use server";
import { db } from "@/config/db";
const ContactAction = async (perviousState, formData) => {
  try {
    const { fullName, email, message } = Object.fromEntries(formData.entries());
    await db.execute(
      `insert into contactForm (full_name,email,message) values (?,?,?)`,
      [fullName, email, message]
    );
    return { success: true, message: "form submitted successfully" };
  } catch (err) {
    console.log("server action:", err);

    return { success: false, message: "error while submitting" };
  }
};

export default ContactAction;
