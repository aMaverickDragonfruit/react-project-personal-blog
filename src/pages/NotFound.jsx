import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <>
      <p>
        Sorry, the page cannot be found, click <Link to="/">here</Link> back to
        the homepage...
      </p>
    </>
  );
};

export default NotFound;
