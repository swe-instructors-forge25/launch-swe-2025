import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </>
  );
}
