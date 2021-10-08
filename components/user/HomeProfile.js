import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MDBDataTable } from 'mdbreact'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { getArticles, clearErrors } from '@/redux/actions/articleActions'


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

    }, [dispatch]);


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
                    label: 'Visibility',
                    field: 'visibility',
                    sort: 'asc'
                },
                {
                    label: 'Submited By',
                    field: 'authorUserId',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }
        user && articles && articles.forEach(article => {
            if (user.username === article.docId && article.visibility === 'private') {
                data.rows.push({
                    title: article.title,
                    // department: article.department,
                    // symptoms: article.symptoms,
                    // description: article.description.length <= 100 && article.description.substring(0, 150),
                    visibility: article.visibility,
                    authorUserId: article.authorUserId,
                    actions:
                        <>
                            <Link href={`/me/review-article/${article._id}`}>
                                <a className="btn btn-primary">
                                    <FaEye />
                                </a>
                            </Link>

                            {/* <button className="btn btn-danger mx-2" onClick={() => deleteArticleHandler(article._id)}>
                                <FaTrashAlt />
                            </button> */}

                        </>
                })
            }
        })

        return data;

    }


    return (
        <div className='container container-fluid'>
            {loading ? <Loader /> :
                <>
                    {/* <h3 className='my-3 text-center'>{`"${user && user.articles.length}" Articles pending for approval`}</h3> */}
                    <h3 className='my-3 text-center'>{`Articles for Review`}</h3>


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

