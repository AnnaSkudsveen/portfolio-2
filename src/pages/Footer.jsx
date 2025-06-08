import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#213547] text-white h-[386px] md:h-[200px] flex flex-col items-center justify-around w-full">
      <Link to="/">
        <img
          src="../../images/Vector.png"
          alt=""
          className="h-20 mt-10 w-auto"
        />
      </Link>
      <div className="text-[10px] flex flex-col md:flex-row gap-4 pt-8 bottom relative">
        <p>@Copyright Anna Skudsveen 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
