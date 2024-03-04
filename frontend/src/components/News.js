import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    updateNews();
    document.title = capital(
      props.category === "general" ? "NewsApp" : props.category + " | NewsApp"
    );
  }, []);

  const updateNews = async () => {

    try {
      props.setProgress(30);
      const apiUrl = `/api?category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
      props.setProgress(50);
      let data = await fetch(apiUrl);
      props.setProgress(80);
      let parsedData = await data.json();
      if (parsedData.status === "ok") {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
      }
    }
    catch (err) {
      console.log(err);
      setLoading(false);
      props.setProgress(100);
    }
  };
  const fetchMoreData = async () => {
    try {
      const apiUrl = `/api?category=${props.category
        }&pageSize=${props.pageSize}&page=${page + 1}`;
      setPage(page + 1);
      let data = await fetch(apiUrl);
      let parsedData = await data.json();
      if (parsedData.status === "ok") {
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ marginTop: "90px", marginBottom: "15px" }}
      >
        Top Headlines
        {props.category === "general" ? "" : " | " + capital(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row container" style={{ margin: "0px" }}>
          {articles.map((element) => {
            return (
              element.url && (
                <div
                  className="col-md-4"
                  data-bs-theme={props.mode}
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    source={element.source.name}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt.slice(0, 10)}
                    time={element.publishedAt.slice(11, 19)}
                    mode={props.mode}
                  />
                </div>
              )
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "",
  pageSize: "6",
  category: "",
  apiKey: "",
  mode: "light"
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  mode: PropTypes.string,
};

export default News;
