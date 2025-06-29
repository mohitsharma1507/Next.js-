import { User, Users, Star, TrendingUp } from "lucide-react";
import DataCard from "./DataCard";
import { Suspense } from "react";
import Loading from "./loading";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const username = searchParams.name;

  if (!username || username.trim() === "") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-grey-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ? name =yourname to the url
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="h-full flex justify-center items-center">
        <h2>
          Hii I am 1st component.In loading.jsx Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem ad doloremque eligendi debitis?
          Quis nihil eius dolore dolorem veniam ullam quibusdam autem odio
          debitis provident blanditiis a porro, nulla doloribus? Aut illo
          pariatur, accusamus deserunt cumque dolorum alias nam voluptates earum
          ipsa recusandae, asperiores autem eius molestias officiis explicabo
          ducimus!
        </h2>
      </div>
      <Suspense fallback={<Loading />}>
        <DataCard username={username} />
      </Suspense>
    </div>
  );
};

export default DataFetchServer;
