import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-violet-700 text-white flex flex-col justify-center items-center px-4 gap-2">
      <h1 className="text-4xl font-bold">404!</h1>
      <h2 className="text-2xl">Not Found</h2>
      <p>Could not find requested resource.</p>
      <Link href="/" className="underline text-white mt-4">
        Go Home
      </Link>
    </div>
  );
}
