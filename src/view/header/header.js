import { LinkHeaderComponent } from "../../component/header";

export const HeaderComponent = () => (
  <div className="w-full border border-b-blue-400 h-13 flex">
    <img src="./assets/logo/logo.png" className="h-14 ml-28" />
    <h2 className="font-bold text-3xl ml-2 my-auto"> Btconstruit</h2>

    <div className="my-auto flex">
      <LinkHeaderComponent name="About" link="#" />
      <LinkHeaderComponent name="Product" link="#" />
      <LinkHeaderComponent name="Blog" link="#" />
      <LinkHeaderComponent name="Contact" link="#" />
      <LinkHeaderComponent name="" link="#" />
    </div>
  </div>
);
