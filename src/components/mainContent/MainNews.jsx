import { useEffect, useState } from "react";
import MainAllNews from "./MainAllNews";

const MainNews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <div>
      <h1 className="text-secondary font-semibold text-lg">Main news</h1>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {data.map((news,idx) => (
          <MainAllNews key={idx} news={news} />
        ))}
      </div>
    </div>
  );
};

export default MainNews;
