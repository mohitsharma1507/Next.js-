"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";
const ContactAction = async (perviousState, formData) => {
  try {
    const { fullName, email, message } = Object.fromEntries(formData.entries());
    await db.execute(
      `insert into contactForm (full_name,email,message) values (?,?,?)`,
      [fullName, email, message]
    );
    //return { success: true, message: "form submitted successfully" };
    redirect("/");
  } catch (err) {
    if (err.message === "NEXT_REDIRECT") throw err;
    //console.log("server action:", err);
    return { success: false, message: "error while submitting" };
  }
};

export default ContactAction;
