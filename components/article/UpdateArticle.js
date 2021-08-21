import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonLoader from '@/components/layout/ButtonLoader'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { updateArticle, getArticleDetails, clearErrors } from '@/redux/actions/articleActions'
import { UPDATE_ARTICLE_RESET } from '@/redux/constants/articleConstants'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'

const UpdateArticle = () => {

    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
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
    const { error, isUpdated } = useSelector(state => state.article)
    const { article, loading } = useSelector(state => state.articleDetails)
    const articleId = router.query.id;

    useEffect(() => {

        if (article && article._id !== articleId) {
            dispatch(getArticleDetails(articleId))
        } else {
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

        if (isUpdated) {
            router.push('/me/publications/pending-articles')
            dispatch({ type: UPDATE_ARTICLE_RESET })
        }

    }, [dispatch, isUpdated, articleId, article, error])

    const handleSubmit = (e) => {
        e.preventDefault();

        const articleData = {
            title, department, description, description_file, causes, stages, stages_file, consequences, remediesAndTreatments, remedies_file, faq, prevention, adverse, sideEffect, diagnosis, symptoms, refLink
        }
        dispatch(updateArticle(article._id, articleData))
    }

    const handleInputChange = (e) => {
        // setValues({ ...values, [e.target.name]: e.target.value })
        if (e.target.files) {
            const files = Array.from(e.target.files)
            setDescription_file([]);
            setStages_file([]);
            setRemedies_file([]);

            files.forEach(file => {

                const reader = new FileReader();

                reader.onload = () => {
                    if (reader.readyState === 2) {
                        setDescription_file(oldArray => [...oldArray, reader.result]);
                        setStages_file(oldArray => [...oldArray, reader.result]);
                        setRemedies_file(oldArray => [...oldArray, reader.result]);
                    }
                }

                reader.readAsDataURL(file)

            })
        }

    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1>Editor Panel</h1>
            <div className={styles.grid}>
                <div>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title..." />
                </div>
                <div>
                    <input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter Department..." />
                </div>
                <div>
                    <textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description"></textarea>
                </div>
                <div className={styles.grid}>
                    <div className={styles.files}>
                        <input type="file" name="description_file" onChange={handleInputChange} multiple />
                    </div>
                    <div>
                        <textarea type="text" id="causes" name="causes" value={causes} onChange={(e) => setCauses(e.target.value)} placeholder="Enter Causes"></textarea>
                    </div>
                </div>
                <div>
                    <textarea type="text" id="stages" name="stages" value={stages} onChange={(e) => setStages(e.target.value)} placeholder="Enter Stages"></textarea>
                </div>
                <div className={styles.grid}>
                    <div className={styles.files}>
                        <input type="file" name="stages_file" onChange={handleInputChange} multiple />
                    </div>
                    <div>
                        <textarea type="text" id="consequences" name="consequences" value={consequences} onChange={(e) => setConsequences(e.target.value)} placeholder="Enter consequences"></textarea>
                    </div>
                </div>
                <div>
                    <textarea type="text" id="remediesAndTreatments" name="remediesAndTreatments" value={remediesAndTreatments} onChange={(e) => setRemediesAndTreatments(e.target.value)} placeholder="Enter remedies and treatments"></textarea>
                </div>
                <div className={styles.grid}>
                    <div className={styles.files}>
                        <input type="file" name="remedies_file" onChange={handleInputChange} multiple />
                    </div>
                    <div>
                        <textarea type="text" id="faq" name="faq" value={faq} onChange={(e) => setFaq(e.target.value)} placeholder="Frequently asked questions and answers"></textarea>
                    </div>
                </div>
                <div>
                    <textarea type="text" id="prevention" name="prevention" value={prevention} onChange={(e) => setPrevention(e.target.value)} placeholder="Enter prevention"></textarea>
                </div>
                <div className={styles.grid}>
                    <div>
                        <textarea type="text" id="adverse" name="adverse" value={adverse} onChange={(e) => setAdverse(e.target.value)} placeholder="Enter adverse"></textarea>
                    </div>
                    <div>
                        <textarea type="text" id="sideEffect" name="sideEffect" value={sideEffect} onChange={(e) => setSideEffect(e.target.value)} placeholder="Enter medication and side effect"></textarea>
                    </div>
                </div>
                <div>
                    <input type="text" id="diagnosis" name="diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} placeholder="Enter diagnosis..." />
                </div>
                <div>
                    <input type="text" id="symptoms" name="symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Enter symptoms..." />
                </div>
                <div className={styles.grid}>
                    <div>
                        <input type="text" value={user && user.username} placeholder="User ID" disabled />
                    </div>
                    <div>
                        <input type="text" id="docId" name="docId" value={docId} onChange={(e) => setDocId(e.target.value)} placeholder="Doctor ID" disabled />
                    </div>
                </div>
                <div>
                    <input type="text" id="refLink" name="refLink" value={refLink} onChange={(e) => setRefLink(e.target.value)} placeholder="Reference Link (if any)" />
                </div>
            </div>
            {/* <div style={{ marginTop: '6px' }}>
                    <input type="button" value="Save as Draft" className='btn-secondary' />
                </div> */}
            <button type="submit" style={{ width: '100%' }} className="btn btn-danger mt-2" disabled={loading ? true : false} >{loading ? <ButtonLoader /> : 'UPDATE & SUBMIT FOR REVIEW'} </button>
            {/* <input type="submit" value="SUBMIT FOR REVIEW" className='btn-danger' /> */}
        </form>
    )
}

export default UpdateArticle;

