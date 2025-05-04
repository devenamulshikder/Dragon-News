import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryData from "./CategoryData";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      return; 
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews); 
    }
  }, [newsData, id]);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 ">
      {
        categoryNews.map(news=><CategoryData key={news.id} news={news}/>)
      }
    </div>
  );
};

export default CategoryNews;
