import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  // 로고 클릭 핸들러
  const handleClickLogo = () => {
    router.push("/");
  };

  return (
    <header onClick={handleClickLogo} className="shadow-[#00000040] shadow fixed max-w-[350px] top-0 w-full bg-main-black h-[57px] flex items-center pl-3">
      <button>
        <h1 className="sr-only">반장창고</h1>
        <Image src="/svg/logo-black-sm.svg" width={94} height={32} alt="반장창고" className="flex items-center" />
      </button>
    </header>
  );
};

export default Header;
