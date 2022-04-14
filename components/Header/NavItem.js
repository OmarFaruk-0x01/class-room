import { AiOutlineDown } from "react-icons/ai";

const NavItem = ({ uri, title, childrens }) => {
  return (
    <li className="relative flex items-center gap-1 text-white font-sans  text-center font-semibold text-base hover:text-c_orange transition-colors duration-300">
      <a
        href="#"
        className="relative before:content-[''] before:w-[10px] before:bg-c_orange before:h-[2px] before:absolute before:bottom-0 before:left-0 hover:before:w-[100%] before:transition-all before:duration-500"
      >
        {title}
      </a>
      <AiOutlineDown size={13} />
    </li>
  );
};

export default NavItem;
