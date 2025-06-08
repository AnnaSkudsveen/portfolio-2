import { useLocation, Link } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <header className="bg-[#213547] text-white h-[60px] md:h-[60px] w-full px-4">
      <nav className="flex items-center justify-between h-full">
        <Link to="/">
          <img src="../../images/Vector.png" alt="" className="h-6 w-auto" />
        </Link>
        {!isHomePage ? (
          <Link to="/" className="text-white">
            Home
          </Link>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default NavBar;
