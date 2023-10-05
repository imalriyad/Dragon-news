import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Layout/Layout";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RightNav = ({ leftMenuHandle,activeCategory }) => {
  const [categories, setCategories] = useState([]);
  const { data } = useContext(DataContext);
  useEffect(() => {
    fetch("categories.json")
    .then((res) => res.json())
    .then((data) => setCategories(data));
  }, []);
  
  const filterCtg = data?.filter ( news=> news.category_id === '4')
  return (
    <div className="right-nav">
      <h1 className="font-bold text-2xl mb-5">All Caterogy</h1>
      {categories?.map((category) => (
        <button
          onClick={() => leftMenuHandle(category.id)}
          className={`border p-3 rounded-md flex mt-2 w-full ${
            category.id === activeCategory ? 'bg-[#403F3F] text-white' : 'bg-base-300'
          }`}
          key={category.id}
        >
          <li className="list-none font-medium">{category.name}</li>
        </button>
      ))}


     {
      filterCtg?.map(news => <Link to={`news/${news._id}`} key={news._id}><div className="my-10 border p-4 rounded-md">
      <img src={news.image_url} className="w-full" alt="" />
      <h1 className="text-lg mt-2 font-bold">
     {news.title?.slice(0,49)}
      </h1>
      <div className="flex mt-5 justify-between ">
        <h1 className="font-medium">Sports</h1>
        <span className="flex gap-2 mr-4">
          <img src="https://i.ibb.co/m5zLf85/Calendar.png" alt="" />
          <h1>{news?.author?.published_date?.slice(0,10)}</h1>
        </span>
      </div>
    </div></Link>)
     }

      
    </div>
  );
};

export default RightNav;
