import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonLoader from '@/components/layout/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { newReview, getArticleDetails, clearErrors } from '@/redux/actions/articleActions'
import { NEW_REVIEW_RESET } from '@/redux/constants/articleConstants'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'

const ReviewArticle = () => {

    const [comment, setComment] = useState('');
    const [visibility, setVisibility] = useState('');

    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [author, setAuthor] = useState('')
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
    const { article, loading } = useSelector(state => state.articleDetails)
    const { error, success } = useSelector(state => state.newReview)


    const articleId = router.query.id;

    useEffect(() => {

        if (article && article._id !== articleId) {
            dispatch(getArticleDetails(articleId))
        }
        else {
            setAuthor(article.author)
            setCreatedAt(article.createdAt)
            setVisibility(article.visibility)
            setTitle(article.title)
            setDepartment(article.department)
            setDescription(article.description)
            setCauses(article.causes)
            setStages(article.stages)
            setConsequences(article.consequences)
            setRemediesAndTreatments(article.remediesAndTreatments)
            setFaq(article.faq)
            setPrevention(article.prevention)
            setAdverse(article.adverse)
            setSideEffect(article.sideEffect)
            setDiagnosis(article.diagnosis)
            setSymptoms(article.symptoms)
            setDocId(article.docId)
            setRefLink(article.refLink)
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            toast.success('Review is posted.')
            dispatch({ type: NEW_REVIEW_RESET })
            router.push(`/me`)
        }

    }, [dispatch, success, articleId, article, error])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (visibility !== "private") {
            const reviewData = {
                comment, articleId: articleId, visibility
            }
            dispatch(newReview(article._id, reviewData))
        }
        else {
            toast.error("Please Select: Forward for revision or Approve Article");
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div>
                    <h2>Title: {title}</h2>
                </div>
                <div><strong>Department: </strong>{department}</div>
                <div><strong>Uploaded: </strong>{createdAt}</div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className="row">
                        <div className="col-md-9 form-group">
                            <fieldset className="chatbox">
                                <div>
                                    <strong>Symptoms</strong>
                                    <div id="symptoms">{symptoms}</div>
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
                                {/* <div>
                                    <strong>Contributions</strong>
                                    <div id="uID">First writer</div>
                                    <div>Editor</div>
                                    <div id="duId">Review Peers</div>
                                </div> */}
                            </fieldset>
                            {/* <button
                                type="button"
                                className="btn btn-outline-secondary appointment-button" style={{ marginRight: "1px" }}
                            >
                                Forward for revision
                            </button> */}
                        </div>
                        <div className="col-md-3">
                            <span style={{ top: "-19px", marginTop: "1%" }}
                            >Remarks
                            </span>
                            {/* <fieldset style={{ height: "" }} name="" id=""></fieldset> */}
                            <textarea style={{ height: "80%", float: "right", marginBottom: "16px" }} onChange={(e) => setComment(e.target.value)} name="review" id="review" placeholder="Give feedback..."></textarea>
                            {/* <label htmlFor="userRole">Role: </label> */}
                            <select value={visibility} onChange={(e) => setVisibility(e.target.value)} className="form-control" name="visibility" id="articleVisibility" required>
                                <option value='private'>Please Select: </option>
                                <option value='protected'>Forward for revision</option>
                                <option value='public'>Approve</option>
                            </select>
                            {/* <button
                                type="button"
                                className="btn btn-outline-info"
                            >
                                Post
                            </button> */}
                        </div>
                        <button
                            className="btn btn-outline-primary appointment-button"
                            type="submit"
                            style={{ float: "right", width: "100%" }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ReviewArticle;