import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";

export default function Home() {
  return (
    <div>
      <Section_1 />

      <div className="px-5 lg:px-10 xl:px-62.5 py-25">
        {/* 타이틀 */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-3xl font-bold">추천 영웅</h2>
          <p className="text-[#FA9C1D]">일반게임 픽률 TOP5</p>
        </div>

        <Section_2 />
      </div>
    </div>
  );
}
