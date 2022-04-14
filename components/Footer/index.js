import { FooterData } from "../../CustomData";
import FooterMenuView from "./FooterMenuView";
import NewsletterView from "./NewsletterView";


const Footer = () => {
  function renderMenuViews() {
    return Object.entries(FooterData).map(([title, menues]) => (
      <FooterMenuView key={title} {...{ title, menues }} />
    ));
  }
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          <div
          className="grid grid-cols-2 gap-1 py-2 sm:grid-cols-3 sm:gap-2 sm:items-center sm:justify-center"
          >{renderMenuViews()}</div>
      <div>
        <NewsletterView />
          </div>
          
    </div>
  );
};

export default Footer;
