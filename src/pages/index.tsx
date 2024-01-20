import Image from "next/image";
import { useRouter } from "next/router";
import { ORDER_PAGE } from "../../constants/routing";

export default function Home() {
  const router = useRouter();

  // 주문하러 가기 버튼 클릭 핸들러
  const handleOrderClick = () => {
    router.push(ORDER_PAGE);
  };

  return (
    <main className="bg-main-black sm:h-screen h-screen max-w-full sm:max-w-[350px] mx-auto flex justify-center items-center">
      <h1 className="sr-only">반장창고</h1>
      <div className="flex flex-col items-center gap-[41px]">
        <Image src="/svg/logo-black.svg" width={150} height={51} alt="반장창고" />
        <button onClick={handleOrderClick} className="w-[172px] text-[25px] rounded-[20px] h-[88px] bg-main-white">
          주문하러 가기
        </button>
      </div>
    </main>
  );
}
