import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticleList = ({ article }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-2">
                {/* <Image
                    className="card-img-top mx-auto"
                    src={article.images[0].url}
                    height={170}
                    width=""
                /> */}
                <div className="card-body d-flex flex-column">
                    <h2 className="card-title">
                        <Link href={`/article/${article._id}`}>
                            <a>{article.title}</a>
                        </Link>
                    </h2>
                    <h5>{article.description}</h5>

                    {/* <div className="ratings mt-auto mb-3">
                        <p className="card-text"><b>${article.pricePerNight}</b> / night</p>

                        <div className="rating-outer">
                            <div
                                className="rating-inner"
                                style={{ width: `${(article.ratings / 5) * 100}%` }}
                            ></div>
                        </div>
                        <span id="no_of_reviews">({article.numOfReviews} Reviews)</span>
                    </div> */}

                    <button className="btn btn-block view-btn">
                        <Link href={`/article/${article._id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArticleList
