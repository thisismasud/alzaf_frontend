import Logo from "../common/Logo";
import Cart from "./Header/Cart";
import CategoryNav from "./Header/CategoryNav";
import { getCategories } from "@/lib/data/categories";


const Header = async () => {
    const {data} = await getCategories()
    
  return (
    <header className=" px-2 mx-2" aria-label="Header">
      <div className="py-5 flex flex-row items-center justify-between">
        <Logo />

        {/* Category Navigation */}
        <div className="flex items-center gap-5">
          <CategoryNav categories={data.categories} />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
