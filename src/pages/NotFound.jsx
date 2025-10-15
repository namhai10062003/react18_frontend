// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
