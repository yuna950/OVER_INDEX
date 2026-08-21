import { BiSearch } from "react-icons/bi";

export default function Section_1() {
  return (
    <div className="w-full h-112.5 overflow-hidden relative">
      <div className="bg-[url('/main_bg.png')] bg-no-repeat bg-cover  h-full relative">
        <img
          src="/main_hero.png"
          alt="hero"
          className="absolute bottom-13 transform scale-150"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/70 to-transparent" />

      <form className="flex justify-between relative  top-[-25%] left-0 mx-5 bg-white/30 rounded-[20px] border border-2 border-[#FA9C1D] backdrop-blur-xs">
        <input
          type="text"
          placeholder="영웅이나 맵을 검색하세요"
          className="w-full px-3.5 py-3.5 placeholder:text-sm"
        />

        <button
          type="submit"
          className="absolute right-5 top-[50%] transform translate-y-[-50%]"
        >
          <BiSearch size={22} />
        </button>
      </form>
    </div>
  );
}
