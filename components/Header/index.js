import { AiOutlineDown, AiOutlineMenuFold } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { RiUser4Line } from "react-icons/ri";
import { IoBagOutline, IoClose, IoCloseOutline } from "react-icons/io5";
import styles from "../../styles/Header.module.scss";
import ActionButton from "../Buttons/ActionButtons";
import NavItem from "./NavItem";
import SearchBox from "../Inputs/SearchBox";
import { useState } from "react";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function opneNav() {
    setIsNavOpen(true);
  }

  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <header className="flex w-full justify-between items-center pb-5 sm:pb-20">
      <button className="flex gap-1 font-sans font-semibold text-sm items-center px-4 py-2 bg-c_orange text-white rounded-sm hover:bg-c_orange z-20">
        Cetagory
        <AiOutlineDown />
      </button>
      <nav
        className={`absolute flex ${
          isNavOpen && styles.navOpen
        } flex-col-reverse justify-start bg-emerald-600 top-0 right-0 px-3 pt-12 pb-5 rounded-lg m-3 items-center translate-x-96 transition-transform duration-300 z-50 mdx:justify-center mdx:bg-transparent mdx:w-fit mdx:h-fit mdx:p-0 mdx:relative mdx:m-0 gap-3 mdx:flex mdx:flex-row mdx:translate-x-0 `}
      >
        <div className="absolute left-2 top-2 mdx:hidden ">
          <ActionButton
            onClick={closeNav}
            icon={
              <IoCloseOutline
                size={20}
                style={{ margin: "auto", left: -1, top: -1 }}
              />
            }
          />
        </div>
        <ul className="text-center w-full flex flex-col items-center gap-2 mdx:flex-row mdx:gap-3 ">
          <NavItem title={"Home"} />
          <NavItem title={"Pages"} />
          <NavItem title={"Instructor"} />
          <NavItem title={"Courses"} />
          <NavItem title={"Bolgs"} />
        </ul>
        <div className="flex flex-col-reverse mdx:flex-row-reverse gap-4">
          <div className="flex items-center justify-center gap-4 mdx:gap-1  mdx:my-0">
            <ActionButton
              icon={
                <IoBagOutline
                  size={16}
                  style={{ margin: "auto", left: -1, top: -1 }}
                />
              }
            />
            <ActionButton
              icon={
                <RiUser4Line
                  size={16}
                  style={{ margin: "auto", left: -1, top: -1 }}
                />
              }
            />
          </div>
          <SearchBox />
        </div>
        {/* <ActionButtons /> */}
      </nav>
      {/* <nav className="absolute flex flex-col w-1/2 h-[97vh] items-center justify-start bg-emerald-600 top-0 right-0 px-3 py-12 rounded-lg m-3">
        <div className="absolute left-2 top-2">
          <ActionButton
            icon={
              <IoCloseOutline
                size={20}
                style={{ margin: "auto", left: -1, top: -1 }}
              />
            }
          />
        </div>
        <SearchBox />
        <div className="flex items-center justify-center gap-4 my-5 md:my-0">
          <ActionButton
            icon={
              <IoBagOutline
                size={16}
                style={{ margin: "auto", left: -1, top: -1 }}
              />
            }
          />
          <ActionButton
            icon={
              <RiUser4Line
                size={16}
                style={{ margin: "auto", left: -1, top: -1 }}
              />
            }
          />
        </div>
        <ul className="text-center w-full flex flex-col items-center gap-2">
          <NavItem title={"Home"} />
          <NavItem title={"Pages"} />
          <NavItem title={"Instructor"} />
          <NavItem title={"Courses"} />
          <NavItem title={"Bolgs"} />
        </ul>
      </nav> */}
      <button
        className="flex mdx:hidden items-center justify-center text-white hover:text-c_orange transition-colors z-20"
        onClick={opneNav}
      >
        <AiOutlineMenuFold size={35} />
      </button>
    </header>
  );
};

export default Header;
