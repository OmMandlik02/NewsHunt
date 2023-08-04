import React, {useState } from 'react'
import NewsCards from './NewsCards'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
const News = (props) => {
    let CapitalizeWord = (word) => {
        const capitalized =
            word.charAt(0).toUpperCase()
            + word.slice(1)
        return capitalized
    }
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const[totalResults, setTotalResults] = useState(0)

    document.title = `NewsHunt - ${CapitalizeWord(props.category)}`
    let updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        props.setProgress(10)
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url);
        props.setProgress(50)
        let ParsedNewsData = await data.json();
        props.setProgress(70)
        setLoading(false);
        setArticles(ParsedNewsData.articles)
        setTotalResults(ParsedNewsData.totalResults)
        props.setProgress(100)
    }
    
    useEffect(() => {
        updateNews();
    }, [])
    useEffect(()=>{
        updateNews()
    },[props.country])

    let handleNextClick = async () => {
        // Here in below url pageSize=9 denotes that in one page there are 9 news only
        updateNews();
        setPage(page+1);
    }
    let handlePrevClick = async () => {
        // Here in below url pageSize=9 denotes that in one page there are 9 news only
        updateNews()
        setPage(page-1);
    }
    let fetchMoreData = async () => {
        setPage(page+1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 2}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let ParsedNewsData = await data.json();
        setLoading(false);
        setArticles(articles.concat(ParsedNewsData.articles))
        setTotalResults(ParsedNewsData.totalResults+totalResults)
        
    };
    return (
        <>
            <div className='container my-4'>
                <h2 className='text-center fs-2' style={{marginTop: "90px"}}>Top headlines from {CapitalizeWord(props.category)} catergory</h2>
                {/* {loading && <Loader />} */}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loader />}
                >
                    <div className="container">
                        <div className="row ">
                            {
                                !loading && articles.map((element) => {
                                    return (
                                        // Here below we gave key to uniquely defined each newsItem
                                        <div className='col-md-4 ' key={element.url}>
                                            <NewsCards title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} publishedAT={element.publishedAt} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>

                <div className='container m-3 d-flex justify-content-between' >
                    <button type='button' disabled={page <= 1} className='btn btn-sm btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
                    <button type='button' disabled={(page + 1) > Math.ceil(totalResults / props.pageSize)} className='btn btn-sm btn-dark' onClick={handleNextClick}>Next &rarr;</button>
                </div>
                {/* <button type='button' className='btn btn-sm btn-dark'>btn btn-sm btn-dark</button> */}
            </div>
        </>
    )
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
News.defaultProps = {
    country: 'in',
    pageSize: 9
}

export default News