import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import mainHero from "../../../assets/main_hero.png";
import mainBg from "../../../assets/main_bg.png";

export default function Section_1() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = keyword.trim();

    if (!value) return;

    navigate(`/search?keyword=${encodeURIComponent(value)}`);
  };
  return (
    <div className="w-full h-112.5 lg:h-125 xl:h-150 overflow-hidden relative">
      <div
        className="bg-no-repeat bg-cover bg-center h-full relative"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <img
          src={mainHero}
          alt="hero"
          className="absolute bottom-13 transform scale-150 lg:scale-100 xl:scale-80 lg:-bottom-25 xl:-bottom-70"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/70 to-transparent" />

      <form
        onSubmit={handleSubmit}
        className="flex justify-between relative  top-[-25%] left-0 mx-5 lg:mx-10 xl:mx-62.5 bg-white/30 rounded-[20px] border-2 border-[#FA9C1D] backdrop-blur-xs"
      >
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="영웅이나 맵을 검색하세요"
          className="w-full px-3.5 py-3.5 placeholder:text-sm rounded-[20px] outline-none"
        />

        <button
          type="submit"
          className="absolute right-5 top-[50%] transform translate-y-[-50%] cursor-pointer"
        >
          <BiSearch size={22} />
        </button>
      </form>
    </div>
  );
}
