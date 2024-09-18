import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-2xl font-bold">Page Not Found</p>
        <Link to="/" className="text-blue-500 font-bold">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;