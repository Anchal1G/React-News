import React , {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


const News =(props)=> {
  
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResult] = useState(0)
  
  //document.title = `NewsHunt - ${capitalize(props.category)}`

  const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  const updateNews = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6079ac268acb499fb8d9936a31b0c1a9&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResult(parsedData.totalResults)
  }

  //recycle method -- after render method
  //async componentDidMount() { -- useeffect

  useEffect(()=>{
    updateNews();  
  },[])

  const handleNxtClick = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6079ac268acb499fb8d9936a31b0c1a9&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResult(parsedData.totalResults)

    setPage(page+1)
    
}
  const handlePrevClick = async () => {
    setPage(page-1)
    updateNews();
  };
  
    return (
      <div className="container my-3">
        <h1 className="text-center "  style={{margin: '40px 0px' , marginTop:'90px'}}> NewsHunt -  Latest  {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <div className="row">
          {!(loading) && articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element ? element.title : ""}
                  description={element ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date ={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-secondary"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-secondary"
            onClick={handleNxtClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  
}

export default News;

//math.ceil -- largest int return krta h


News.defaultProps ={
  country:"in",
  pageSize:5,
  category:"science",
}

News.propTypes ={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}