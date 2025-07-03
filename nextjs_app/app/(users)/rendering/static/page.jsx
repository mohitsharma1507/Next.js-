import { db } from "@/config/db.jsx";
export const revalidate = 30;
const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("static doctors");

  return (
    <div>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}>{doctor.first_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default StaticPage;
