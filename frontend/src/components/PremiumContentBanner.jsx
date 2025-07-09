import { Link } from "react-router-dom";

const PremiumContentBanner = ({ contentName }) => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <p className="text-yellow-700">
        <span className="font-semibold">Premium Content:</span> To access all{" "}
        {contentName} resources and services, please{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          log in
        </Link>{" "}
        or{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          create an account
        </Link>
        .
      </p>
    </div>
  );
};

export default PremiumContentBanner;
