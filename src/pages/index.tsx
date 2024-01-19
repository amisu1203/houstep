import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // 주문하러 가기 버튼 클릭 핸들러
  const handleOrderClick = () => {
    // todo: 페이지 값 상수로 변경하지
    router.push("/order");
  };
  return (
    <main className="bg-main-black h-screen max-w-[350px] mx-auto flex justify-center items-center">
      <h1 className="sr-only">반장창고</h1>
      <Image src="/svg/logo-black.svg" width={150} height={51} alt="반장창고" />
      <button onClick={handleOrderClick} className="w-[172px] h-[88px] bg-main-white">
        주문하러 가기
      </button>
    </main>
  );
}
