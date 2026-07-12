import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">
          Sorry, The Page Was Not Found
        </h1>
        <Link to="/" className="font-bold text-[darkcyan]">
          Go Back To The Main Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
