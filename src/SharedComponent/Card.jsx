/* eslint-disable react/prop-types */
import { BsFillBookmarkStarFill, BsFillShareFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const Card = ({news}) => {

   const {details,_id,author,title,image_url,rating,total_view} = news
  return (
    <div className="border-2 mb-5 rounded-md p-4">
      <div className="flex p-3 rounded-sm bg-[#F3F3F3] justify-between items-center ">
        <div className="flex gap-3 items-center">
          <img src={author?.img} className="w-[45px] rounded-full" alt="" />
          <div className="flex flex-col">
            <h1>{author?.name}</h1>
            <p>{author?.published_date?.slice(0,10)}</p>
          </div>
        </div>
        <div className="text-xl space-x-3 flex mr-2">
          <BsFillBookmarkStarFill className="cursor-pointer" />
          <BsFillShareFill className="cursor-pointer" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold my-3">
        {title}
        </h1>
        <img
          src={image_url}
          className="mx-auto  w-full mt-5"
          alt=""
        />
        <p className="text-[#706F6F] mt-5">
          {details?.slice(0,252)}
          <button className="ml-2 font-bold text-[#403F3F] normal-case hover:underline">
          <Link state={title} to={`/news/${_id}`}>Read More</Link>
          </button>
        </p>
      </div>
      <hr className="my-5" />
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-start">
        <Rating
        className="text-orange-400"
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={rating.number -1}
              readonly
            />
          <p className="text-xl">{rating.number}</p>
        </div>
        <div className="flex items-center font-medium gap-1"><GrView className="text-xl"></GrView> {total_view}</div>
      </div>
    </div>
  );
};

export default Card;
