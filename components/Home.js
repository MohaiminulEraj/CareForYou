import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
// import Pagination from 'react-js-pagination'

import ArticleList from './article/ArticleList'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { getPublishedArticles, clearErrors } from '../redux/actions/articleActions'

const Home = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const { articles, error } = useSelector(state => state.allPublishedArticles);

    let { location, page = 1 } = router.query;
    page = Number(page)

    useEffect(() => {
        dispatch(getPublishedArticles())

        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, error])

    // const handlePagination = (pageNumber) => {

    //     if (location) {
    //         let url = window.location.search

    //         url.includes('&page') ?
    //             url = url.replace(/(page=)[^\&]+/, '$1' + pageNumber)
    //             :
    //             url = url.concat(`&page=${pageNumber}`)

    //         router.push(url)

    //     } else {

    //         router.push(`/?page=${pageNumber}`)
    //         // window.location.href = `/?page=${pageNumber}`
    //     }

    // }
    // console.log(filteredarticlesCount)
    // let count = articlesCount;
    // if (location) {
    //     count = filteredarticlesCount
    // }

    return (
        <>
            <section id="articles" className="container mt-5">

                <h2 className='mb-3 ml-2 stays-heading'>{location ? `Search Result of ${location}` : 'All Articles'}</h2>

                <Link href='/' >
                    <a className='ml-2 back-to-search'>
                        <FaArrowLeft className="mb-1" /> Back to Search
                    </a>
                </Link>

                <div className="row">
                    {articles && articles.length === 0 ?
                        <div className="alert alert-danger mt-5 w-100"><b>No articles.</b></div>
                        :
                        articles && articles.map(article => (
                            <ArticleList key={article._id} article={article} />
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default Home
