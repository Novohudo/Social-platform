import s from "./News.module.css";
import { useEffect, useState } from "react";

const News = () => {
 const [news, setNews] = useState([]);
 useEffect(() => {
  const fetchNews = async () => {
   try {
    const response = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=20&apiKey=2af82ba10a2441b595ea3d49af5c061e");
    const data = await response.json();
    setNews(data.articles);

   } catch (error) {
    console.log("Error fetching", error);
   }
  };
  fetchNews();
 }, []);
 return (
  <div className={s.container}>
   <h2>BBC News</h2>
   <hr />
   <div className={s.items_row}>
    {news.map((item) => (
     <div className={s.items} key={item.url}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={item.urlToImage} alt={"ups.."} />
      <a href={item.url} target={"_blank"} rel={"noopener noreferrer"}>more</a>
     </div>
    ))}
   </div>
  </div>

 );
};

export default News;