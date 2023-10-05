import { Link } from "react-router-dom";
import LeftNav from "../../SharedComponent/LeftNav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "../../Layout/Layout";

import { useParams } from "react-router-dom";
const NewsDetails = () => {
  const { data } = useContext(DataContext);
  const { newsId } = useParams();
  const filterdNews = data?.find((news) => news._id === newsId);
  const { details, title, image_url } = filterdNews || [];
  return (
    <div className="grid gap-10 grid-cols-1 mt-10 md:grid-cols-3 mb-5">
      <div className="col-span-2">
        <img src={image_url} className="w-full" alt="" />
        <h1 className="text-xl font-bold my-4">{title}</h1>
        <p className="text-[#706F6F] mt-5">{details}</p>

        <Link to={"/"}>
          {" "}
          <button className="md:w-1/3 px-4 rounded-sm py-3 mt-7 bg-[#403F3F] hover:bg-[#403F3F] text-white text-sm flex justify-center gap-2 items-center">
            <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft> All
            news in this category
          </button>
        </Link>
      </div>
      <LeftNav></LeftNav>
    </div>
  );
};

export default NewsDetails;
