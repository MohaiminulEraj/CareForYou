import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { MDBDataTable } from 'mdbreact'
import Loader from '../../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { getArticles, deleteArticle, clearErrors } from '@/redux/actions/articleActions'
import { DELETE_ARTICLE_RESET } from '@/redux/constants/articleConstants'

const PendingArticles = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { loading, error, articles } = useSelector(state => state.allArticles)
    const { user } = useSelector(state => state.loadedUser)
    const { error: deleteError, isDeleted } = useSelector(state => state.article)

    useEffect(() => {

        dispatch(getArticles())

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            toast.erroe(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            router.push('/me/publications/pending-articles')
            dispatch({ type: DELETE_ARTICLE_RESET })
        }

    }, [dispatch, error, isDeleted]);


    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc'
                },
                // {
                //     label: 'Department',
                //     field: 'department',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Symptoms',
                //     field: 'symptoms',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Description',
                //     field: 'description',
                //     sort: 'asc'
                // },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }
        user && articles && articles.forEach(article => {
            if (user._id === article.author && article.visibility === 'protected') {
                data.rows.push({
                    title: article.title,
                    // department: article.department,
                    // symptoms: article.symptoms,
                    // description: article.description.length <= 100 && article.description.substring(0, 150),
                    actions:
                        <>
                            <Link href={`/articles/revise-article/${article._id}`}>
                                <a className="btn btn-primary">
                                    <FaPencilAlt />
                                </a>
                            </Link>

                            <button className="btn btn-danger mx-2" onClick={() => deleteArticleHandler(article._id)}>
                                <FaTrashAlt />
                            </button>

                        </>
                })
            }
        })

        return data;

    }

    const deleteArticleHandler = (id) => {
        user.articles.forEach(article => {
            if (article === id) {
                article = ''
                dispatch(deleteArticle(id))
            }
        })
    }

    return (
        <div className='container container-fluid'>
            {loading ? <Loader /> :
                <>
                    {/* <h3 className='my-3 text-center'>{`"${user && user.articles.length}" Articles pending for approval`}</h3> */}
                    <h3 className='my-3 text-center'>{`Articles For Revision`}</h3>


                    <MDBDataTable
                        data={setUsers()}
                        className='px-3'
                        bordered
                        striped
                        hover
                    />

                </>
            }
        </div>
    )
}

export default PendingArticles

