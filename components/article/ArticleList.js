import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticleList = ({ data }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-2">
                {data?.title ?
                    <>
                        {/* <Image
                    className="card-img-top mx-auto"
                    src={data?.images[0]?.url}
                    height={170}
                    width=""
                /> */}
                        <div className="card-body d-flex flex-column">
                            <h2 className="card-title">
                                <Link href={`/articles/${data?._id}`}>
                                    <a>{data?.title}</a>
                                </Link>
                            </h2>
                            <h5>{data?.description?.length >= 60 ? data?.description?.substring(0, 60) + '...' : data?.description}</h5>

                            {/* <div className="ratings mt-auto mb-3">
                        <div className="rating-outer">
                            <div
                                className="rating-inner"
                                style={{ width: `${(data.ratings / 5) * 100}%` }}
                            ></div>
                        </div>
                        <span id="no_of_reviews">({data.numOfReviews} Reviews)</span>
                    </div> */}

                            <button className="btn btn-block view-btn">
                                <Link href={`/articles/${data?._id}`}>View Details</Link>
                            </button>
                        </div>
                    </>
                    :
                    <>
                    {/* Doctors Profile  */}
                        <Image
                            className="card-img-top mx-auto"
                            src={data?.avatar?.url}
                            height={270}
                            width={100}
                            alt="Doctors Profile Photo"
                        />
                        <div className="card-body d-flex flex-column">
                            <h2 className="card-title">
                                <Link href={`/users/${data?._id}`}>
                                    <a>{data?.fullname}</a>
                                </Link>
                            </h2>
                            <h5>{data?.dept_doc}</h5>


                            <button className="btn btn-block view-btn">
                                <Link href={`/users/${data._id}`}>View Profile</Link>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default ArticleList
