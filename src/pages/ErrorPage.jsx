import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center">
      <h1 className="text-[80px] xl:text-[90px] font-bold text-[#FA9C1D]">
        404
      </h1>
      <p className="mb-20 opacity-80">페이지를 찾을 수 없습니다.</p>
      <Link to={"/"}>
        <div className="px-5 py-2.5 border border-[#FA9C1D] rounded-2xl text-xs hover:text-[#FA9C1D] transition">
          홈으로 돌아가기 &rarr;
        </div>
      </Link>
    </div>
  );
}
