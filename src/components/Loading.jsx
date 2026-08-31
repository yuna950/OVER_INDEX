import { LineWave } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#FA9C1D"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}
