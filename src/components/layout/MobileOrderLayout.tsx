import Header from "../shared/Header";
import OrderFooter from "../shared/OrderFooter";

function MobileOrderLayout({ children }: any) {
  return (
    <div className="max-w-[350px] mx-auto border h-screen border-black">
      <Header />
      <main className="h-[calc(100%-227px)] mt-[57px]">{children}</main>
      <OrderFooter />
    </div>
  );
}

export default MobileOrderLayout;
