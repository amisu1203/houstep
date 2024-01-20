import Header from "../shared/Header";
import OrderFooter from "../shared/OrderFooter";

function MobileOrderLayout({ children }: any) {
  return (
    <div className="sm:max-w-[350px] mx-auto h-screen shadow shadow-x">
      <Header />
      <main className="h-[calc(100%-227px)] mt-[57px]">{children}</main>
      <OrderFooter />
    </div>
  );
}

export default MobileOrderLayout;
