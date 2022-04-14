

export default function FooterMenuView({
  title,
  menues
}){
  const renderMenus = () => menues.map(menu => <a key={menu.lable} className="pb-1 transition-all hover:text-c_orange" href={menu.link}>{menu.lable}</a>);

  return <div>
      <h1 className="text-white text-md font-bold py-1">{title}</h1>
      <div
      className="flex flex-col text-sm text-white "
      >{renderMenus()}</div>
    </div>;
};
  