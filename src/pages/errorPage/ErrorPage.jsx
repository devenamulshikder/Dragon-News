import { Link } from "react-router";


const ErrorPage = () => {
    return (
      <div>
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-9xl font-bold text-red-600">404</h1>
          <p className="text-2xl font-semibold text-gray-700">Page Not Found</p>
          <p className="mt-4 text-gray-500">
            The page you are looking for does not exist.
          </p>
        <div className="mt-5">
          <Link to={'/'}>
            <button className="btn btn-primary">Go Back Home</button>
          </Link>
        </div>
        </div>
      </div>
    );
};

export default ErrorPage;