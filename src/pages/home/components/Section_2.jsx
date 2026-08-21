import { MdOutlineArrowOutward } from "react-icons/md";

export default function Section_2() {
  return (
    <div className="py-25 flex flex-col gap-12.5">
      <div className="w-full flex justify-center items-center gap-2.5">
        <div className="w-5 h-5 bg-gray-400">
          <img src="#" alt="" />
        </div>
        <h3 className="text-2xl font-bold">포지션</h3>
      </div>

      <div className="w-fit h-fit px-5 py-5 flex flex-col items-center gap-5 border border-[#1FB8FF]/25 rounded-[20px]">
        <div className="flex flex-col gap-2.5 items-center">
          <div className="w-25 h-25 rounded-[50%] overflow-hidden bg-gray-400">
            <img src="#" alt="" />
          </div>
          <p className="font-semibold">이름</p>
        </div>

        <div className="w-fit px-3 py-1 rounded-2xl border border-[#1FB8FF] text-[#1FB8FF] text-[12px] flex items-center justicenter">
          <span>역할</span>
        </div>
      </div>

      <div className="m-auto w-fit flex gap-2.5 items-center px-4 py-2 rounded-3xl border border-[#E5E7EB] opacity-50 hover:opacity-100 transition cursor-pointer">
        <p className="text-[12px] text-[#E5E7EB]">전체보기</p>
        <MdOutlineArrowOutward size={15} color="#E5E7EB" />
      </div>
    </div>
  );
}
