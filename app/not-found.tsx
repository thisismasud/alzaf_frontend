import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800">404 Not Found</h2>
      <p className="mt-2 text-gray-600">
        Could not find the page you are looking for!
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
      >
        Return Home
      </Link>
    </div>
  );
}
