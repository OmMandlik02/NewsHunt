import React from 'react'

const NewsCards =(props)=> {
    let { title, description, imageUrl, newsUrl, source, author, publishedAT } = props
        return (
            <div>
                <div className="card m-4 text-center" style={{ "backgroundColor": "whitesmoke" }}>
                <div className='card' style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                left: "50%",
                                position: "absolute"
                            }}>
                                <span class="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-success">
                                    {source}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </div>
                    <img className="card-img-top" src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg?w=992"} alt="Releted photos" />
                    <div className="card-body" >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(publishedAT).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read Details</a>
                    </div>
                </div>
            </div>

        )
}
export default NewsCards
