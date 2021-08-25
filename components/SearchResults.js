import React from 'react'
import ArticleList from './article/ArticleList'

export default function SearchResults({ val, results }) {

    return (
        <section id="articles" className="container mt-5">

            <div className="row">
                {val?.length !== 0 && results?.length === 0 ?
                    <div className="alert alert-danger mt-5 w-100"><b>No results.</b></div>
                    :
                    results && results.map(article => (
                        <ArticleList key={article._id} article={article} />
                    ))
                }
            </div>
        </section>

    )
}