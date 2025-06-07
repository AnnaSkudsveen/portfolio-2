import { useLocation, Link } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <header className="bg-[#020044] text-white h-[100px] md:h-[200px] flex items-center justify-between px-4">
      <nav>
        <h2>Anna Skudsveen</h2>
        {!isHomePage ? <Link to="/">Home</Link> : ""}
      </nav>
    </header>
  );
}

export default NavBar;
