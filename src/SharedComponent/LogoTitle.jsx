import moment from 'moment';
import Breakingnews from '../Breakingnews/Breakingnews';
const LogoTitle = () => {

  return (
    <div className="text-center">
      <img
        src="https://i.ibb.co/nR2XWys/logo.png"
        alt=""
        className="md:w-[30%] w-[80%] mx-auto mt-6"
      />
      <p className="text-[#706F6F] mt-3 md:text-base text-xs">
        Journalism Without Fear or Favour
      </p>
      <p className="text-black font-medium my-2 md:text-base text-xs">{moment().format(`dddd ,MMMM DD, YYYY`)}</p>
     <Breakingnews></Breakingnews>
    </div>
  );
};
export default LogoTitle;
