import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-5 lg:px-10 xl:px-62.5 h-15 flex justify-between items-center">
      <div className=" w-30 lg:w-45 xl:w-50">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>

      <ul className="flex gap-10 lg:gap-12.5 text-[16px] lg:text-lg lg:font-semibold">
        <li className="cursor-pointer">
          <Link to={"/hero"}>HERO</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/map"}>MAP</Link>
        </li>
      </ul>
    </header>
  );
}
