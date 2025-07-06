import { db } from "@/config/db.jsx";
export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const [doctors] = await db.execute("SELECT * FROM doctors");

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-violet-700">
        Doctor Directory
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {doctors.map((doctor) => (
          <div
            key={doctor.doctor_id}
            className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-xl border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Dr. {doctor.first_name} {doctor.last_name}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Specialization:</span>{" "}
              {doctor.specialization}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Gender:</span> {doctor.gender}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {doctor.email}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {doctor.phone}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">City:</span> {doctor.city},{" "}
              {doctor.state}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Experience:</span>{" "}
              {doctor.experience_year} years
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">License No:</span>{" "}
              {doctor.license_number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicPage;
