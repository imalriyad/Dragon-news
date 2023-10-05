import { useLoaderData } from "react-router-dom";
import Card from "../SharedComponent/Card";
import LeftNav from "../SharedComponent/LeftNav";
import RightNav from "../SharedComponent/RightNav";
import { useState } from "react";
const Home = () => {
  const newses = useLoaderData();
  const [newsesCtg, setNewesesCtg] = useState(newses);
  const [seeMore, setSeeMore] = useState(false);
  const [activeCategory ,setactiveCategory ] = useState(0)
  const leftMenuHandle = (id) => {
    setactiveCategory(id)
    if (id === "0") {
      setNewesesCtg(newses);
    } else {
      const filterdNews = newses?.filter((news) => news.category_id === id);
      setNewesesCtg(filterdNews);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
          <div>
            <RightNav activeCategory={activeCategory} leftMenuHandle={leftMenuHandle}></RightNav>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-bold text-2xl mb-4 text-center">Dragon News Home</h1>
            {!seeMore
              ? newsesCtg
                  ?.slice(0, 6)
                  .map((news) => <Card key={news._id} news={news}></Card>)
              : newsesCtg?.map((news) => (
                  <Card key={news._id} news={news}></Card>
                ))}
              {
                newsesCtg.length <= 0 && <div className="my-[15%]">
                  <img src="/src/assets/undraw_No_data_re_kwbl.png" className="md:w-1/3 w-2/3 mx-auto" alt="" />
                  <h1 className="text-3xl text-center ">No Post Found On <br /> This Category</h1>
                </div>
              }
            <div className="text-center my-5">
              {
                newsesCtg.length > 6 ? <button
                onClick={() => setSeeMore(!seeMore)}
                className="px-6 py-2 uppercase bg-[#403F3F] text-white rounded-md"
              >
                {seeMore? 'See Less': 'see More'}
              </button>:''
              }
            </div>
          </div>
          <div>
            <LeftNav></LeftNav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
