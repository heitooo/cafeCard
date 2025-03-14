import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import "./styles.css";

export function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/checkout");
  }

  return (
    <header className="flex">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <nav className="flex">
        <div id="location" className="flex">
          <MapPin size={22} color="#8047F8" />
          <p>Porto Alegre, RS</p>
        </div>

        <button onClick={() => handleNavigate()} id="cart" className="flex">
          <ShoppingCart size={22} color="#C47F17" fill="#C47F17" />
        </button>
      </nav>
    </header>
  );
}
