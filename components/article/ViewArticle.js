import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonLoader from '@/components/layout/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { newReview, updateArticle, getArticleDetails, clearErrors } from '@/redux/actions/articleActions'
import { NEW_REVIEW_RESET } from '@/redux/constants/articleConstants'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'

const ViewArticle = () => {

    const [docFeedBack, setDocFeedBack] = useState('');
    // const [comment, setComment] = useState('');
    const [visibility, setVisibility] = useState('');
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [authorUserId, setAuthorUserId] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [description, setDescription] = useState('')
    const [description_file, setDescription_file] = useState([])
    const [causes, setCauses] = useState('')
    const [stages, setStages] = useState('')
    const [stages_file, setStages_file] = useState([])
    const [consequences, setConsequences] = useState('')
    const [remediesAndTreatments, setRemediesAndTreatments] = useState('')
    const [remedies_file, setRemedies_file] = useState([])
    const [faq, setFaq] = useState('')
    const [prevention, setPrevention] = useState('')
    const [adverse, setAdverse] = useState('')
    const [sideEffect, setSideEffect] = useState('')
    const [diagnosis, setDiagnosis] = useState([])
    const [symptoms, setSymptoms] = useState([])
    const [docId, setDocId] = useState([])
    const [refLink, setRefLink] = useState('')

    // const [values, setValues] = useState({
    //     title: '',
    //     department: '',
    //     description: '',
    //     causes: '',
    //     stages: '',
    //     consequences: '',
    //     remediesAndTreatments: '',
    //     faq: '',
    //     prevention: '',
    //     adverse: '',
    //     sideEffect: '',
    //     diagnosis: [],
    //     symptoms: [],
    //     docId: [],
    //     refLink: ''
    // })
    // const { title, department, description, causes, stages, consequences, remediesAndTreatments, faq, prevention, adverse, sideEffect, diagnosis, symptoms, docId, refLink } = values

    const dispatch = useDispatch()
    const router = useRouter()

    const { user } = useSelector(state => state.loadedUser)
    // const { isUpdated } = useSelector(state => state.article)
    const { article, loading, error } = useSelector(state => state.articleDetails)
    // const { error } = useSelector(state => state.newReview)


    const articleId = router.query.id;

    let articleCreatedAt = new Date(article?.createdAt || '2022-01-04T11:14:09.314Z');
    articleCreatedAt = articleCreatedAt?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    });

    useEffect(() => {

        if (article && article._id !== articleId) {
            dispatch(getArticleDetails(articleId))
        }
        else {
            setAuthorUserId(article?.authorUserId)
            setCreatedAt(article?.createdAt)
            setVisibility(article?.visibility)
            setTitle(article?.title)
            setDepartment(article?.department)
            setDescription(article?.description)
            setCauses(article?.causes)
            setStages(article?.stages)
            setConsequences(article?.consequences)
            setRemediesAndTreatments(article?.remediesAndTreatments)
            setFaq(article?.faq)
            setPrevention(article?.prevention)
            setAdverse(article?.adverse)
            setSideEffect(article?.sideEffect)
            setDiagnosis(article?.diagnosis)
            setSymptoms(article?.symptoms)
            setDocId(article?.docId)
            setRefLink(article?.refLink)
            setDocFeedBack(article?.docFeedBack)
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        // if (success) {
        //     toast.success('Review is posted.')
        //     dispatch({ type: NEW_REVIEW_RESET })
        //     router.push(`/me`)
        // }

    }, [dispatch, articleId, article, error])

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (visibility !== "private") {
        //     // console.log(visibility)
        //     const reviewData = {
        //         docFeedBack, articleId: articleId, visibility
        //     }
        //     console.log(reviewData)
        //     dispatch(newReview(article._id, reviewData))
        // }
        // else {
        //     toast.error("Please Select: Forward for revision or Approve Article");
        // }
    }

    return (
        <>
            <div className="container">
                <div>
                    <h2>Title: {title}</h2>
                </div>
                <div><strong>Department: </strong>{department}</div>
                <div><strong>Uploaded: </strong>{articleCreatedAt}</div>

                <form className={styles.form}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <fieldset className="my-4">
                                <div>
                                    <strong>Symptoms</strong>
                                    <div id="symptoms">{symptoms}</div>
                                    <strong>Description</strong>
                                    <div id="desofSym">{description}</div>
                                    <div id="symFile">{description_file}</div>
                                </div>
                                <div>
                                    <strong>Diagnosis</strong>
                                    <div id="diagnosis">{diagnosis}</div>
                                </div>
                                <div>
                                    <strong>Remedies & Treatment</strong>
                                    <div id="remedies">{remediesAndTreatments}</div>
                                    <div id="remediesFile">{remedies_file}</div>
                                </div>
                                <div>
                                    <strong>Adverse Effect</strong>
                                    <div id="adverse">{adverse}</div>
                                </div>
                                <div>
                                    <strong>Prevention</strong>
                                    <div id="prevention">{prevention}</div>
                                </div>
                                <div>
                                    <strong>Causes</strong>
                                    <div id="cause">{causes}</div>
                                </div>
                                <div>
                                    <strong>Stages</strong>
                                    <div id="stages">{stages}</div>
                                    <div id="stagesFile">{stages_file}</div>
                                </div>
                                <div>
                                    <strong>Medication and it`s side effect</strong>
                                    <div id="sideEffect">{sideEffect}</div>
                                </div>
                                <div>
                                    <strong>Consequences</strong>
                                    <div id="consequences">{consequences}</div>
                                </div>
                                <div>
                                    <strong>Frequently asked questions and answers</strong>
                                    <div id="QA">{faq}</div>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <strong>Reference Links</strong>
                                    <div id="ref">{refLink}</div>
                                </div>
                                <div>
                                    <strong>Contributions</strong>
                                    <div>Author: {authorUserId}</div>
                                    <div>Approved by: {docId}</div>
                                </div>
                            </fieldset>
                            {/* <button
                                type="button"
                                className="btn btn-outline-secondary appointment-button" style={{ marginRight: "1px" }}
                            >
                                Forward for revision
                            </button> */}
                        </div>
                        {/* <div className="col-md-3">
                            <span style={{ top: "-19px", marginTop: "1%" }}
                            >Remarks
                            </span>
                            <textarea
                                style={{ height: "80%", float: "right", marginBottom: "16px" }} value={docFeedBack}
                                name="review"
                                disabled
                            ></textarea>
                            <select value={visibility} onChange={(e) => setVisibility(e.target.value)} className="form-control" name="visibility" id="articleVisibility" required>
                                <option value='private'>Please Select: </option>
                                <option value='protected'>Forward for revision</option>
                                <option value='public'>Approve</option>
                            </select>
                        </div>
                        <button
                            className="btn btn-primary appointment-button mb-4"
                            type="submit"
                            style={{ float: "right", width: "100%" }}
                        >
                            Submit
                        </button> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default ViewArticle;