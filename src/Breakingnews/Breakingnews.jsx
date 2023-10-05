import Marquee from "react-fast-marquee";
const Breakingnews = () => {
  const newsHeadlines = [
    "Breaking News: UFO Sightings Reported Across Multiple States — What We Know So Far",
    "Exclusive Interview: Celebrity Chef Reveals Secret Ingredient Behind His Famous Dish",
    "Tech Breakthrough: Company Unveils Revolutionary Smartphone with Holographic Display",
    "Health Update: New Study Finds Surprising Benefits of Drinking Green Tea Daily",
    "Financial Report: Stock Market Soars to Record Highs Amidst Economic Recovery",
  ];


  return <div className="flex p-2 items-center bg-[#F3F3F3]">
     <div className="text-left"><button className="md:px-5 text-xs md:text-base px-2 rounded-sm py-2 bg-[#403F3F] text-white">Latest</button></div><Marquee  direction="right"speed={90}>{newsHeadlines?.map(item=> <p key={item} className="font-medium ml-12 text-[#403F3F] text-xs md:text-base">{item}</p>)}</Marquee>
  </div>;
};
export default Breakingnews;
