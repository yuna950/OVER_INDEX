import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
import Results from "./components/Results";
import { useScrollTop } from "../../lib/useScrollTop";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useScrollTop();

  const searchKeyword = searchParams.get("keyword") || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = keyword.trim();

    if (!value) return;

    navigate(`/search?keyword=${encodeURIComponent(value)}`);
  };

  return (
    <div className="mx-5 lg:mx-10 xl:mx-62.5 py-7.5">
      <PageTitle title={"SEARCH"} />
      <form
        onSubmit={handleSubmit}
        className="flex justify-between w-full relative bg-white/10 rounded-[20px] border-2 border-[#FA9C1D] backdrop-blur-xs"
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
          className="absolute right-5 top-[50%] transform translate-y-[-50%] cursor-pointer hover:text-[#FA9C1D] transition"
        >
          <BiSearch size={22} />
        </button>
      </form>

      <Results data={searchKeyword} />
    </div>
  );
}
