import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  title: string;
  linkText: string;
  path: "/create" | "/dogs";
}
const Header = ({ title, path, linkText }: HeaderProps): JSX.Element => {
  return (
    <header className="title-container">
      <h1 className="main-title">{title}</h1>
      <Link to={path} className="link-new-dog">
        {linkText}
      </Link>
    </header>
  );
};

export default Header;
