import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      {" "}
      <div>NotFoundPage</div>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
