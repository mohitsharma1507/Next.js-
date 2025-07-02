import { db } from "@/config/db.jsx";
export const dynamic = "force-dynamic";
const DynamicPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("dynamic doctors");

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

export default DynamicPage;
