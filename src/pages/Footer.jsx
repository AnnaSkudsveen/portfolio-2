import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#020044] text-white h-[386px] md:h-[200px] flex flex-col items-center w-full">
      <Link>
        <h3 className="text-4xl pt-16">Anna Skudsveen</h3>
      </Link>
      <div className="text-[10px] flex flex-col md:flex-row gap-4 pt-8 bottom-2 relative">
        <p>@Copyright Anna Skudsveen 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
