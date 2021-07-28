import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import ButtonLoader from '@/components/layout/ButtonLoader'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'

export default function AddArticlePage() {
    const [values, setValues] = useState({
        title: '',
        department: '',
        description: '',
        causes: '',
        stages: '',
        consequences: '',
        remediesAndTreatments: '',
        faq: '',
        prevention: '',
        adverse: '',
        sideEffect: '',
        diagnosis: [],
        symptoms: [],
        userID: '',
        docId: [],
        refLink: ''
    })

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <Layout title='Create New Article'>
            {/* <Link href='/'>Go Back</Link> */}
            <h1>Add Article</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <input type="text" id="title" name="title" value={values.title} onChange={handleInputChange} placeholder="Enter Title..." />
                    </div>
                    <div>
                        <input type="text" id="department" name="department" value={values.department} onChange={handleInputChange} placeholder="Enter Department..." />
                    </div>
                    <div>
                        <textarea type="text" id="description" name="description" value={values.description} onChange={handleInputChange} placeholder="Enter Description"></textarea>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.files}>
                            <input type="file" multiple />
                        </div>
                        <div>
                            <textarea type="text" id="causes" name="causes" value={values.causes} onChange={handleInputChange} placeholder="Enter Causes"></textarea>
                        </div>
                    </div>
                    <div>
                        <textarea type="text" id="stages" name="stages" value={values.stages} onChange={handleInputChange} placeholder="Enter Stages"></textarea>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.files}>
                            <input type="file" multiple />
                        </div>
                        <div>
                            <textarea type="text" id="consequences" name="consequences" value={values.consequences} onChange={handleInputChange} placeholder="Enter consequences"></textarea>
                        </div>
                    </div>
                    <div>
                        <textarea type="text" id="remediesAndTreatments" name="remediesAndTreatments" value={values.remediesAndTreatments} onChange={handleInputChange} placeholder="Enter remedies and treatments"></textarea>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.files}>
                            <input type="file" multiple />
                        </div>
                        <div>
                            <textarea type="text" id="faq" name="faq" value={values.faq} onChange={handleInputChange} placeholder="Frequently asked questions and answers"></textarea>
                        </div>
                    </div>
                    <div>
                        <textarea type="text" id="prevention" name="prevention" value={values.prevention} onChange={handleInputChange} placeholder="Enter prevention"></textarea>
                    </div>
                    <div className={styles.grid}>
                        <div>
                            <textarea type="text" id="adverse" name="adverse" value={values.adverse} onChange={handleInputChange} placeholder="Enter adverse"></textarea>
                        </div>
                        <div>
                            <textarea type="text" id="sideEffect" name="sideEffect" value={values.sideEffect} onChange={handleInputChange} placeholder="Enter medication and side effect"></textarea>
                        </div>
                    </div>
                    <div>
                        <input type="text" id="diagnosis" name="diagnosis" value={values.diagnosis} onChange={handleInputChange} placeholder="Enter diagnosis..." />
                    </div>
                    <div>
                        <input type="text" id="symptoms" name="symptoms" value={values.symptoms} onChange={handleInputChange} placeholder="Enter symptoms..." />
                    </div>
                    <div className={styles.grid}>
                        <div>
                            <input type="text" id="userID" name="userID" value={values.userID} onChange={handleInputChange} placeholder="User ID" disabled />
                        </div>
                        <div>
                            <input type="text" id="docId" name="docId" value={values.docId} onChange={handleInputChange} placeholder="Doctor ID" />
                        </div>
                    </div>
                    <div>
                        <input type="text" id="refLink" name="refLink" value={values.refLink} onChange={handleInputChange} placeholder="Reference Link (if any)" />
                    </div>
                </div>
                {/* <div style={{ marginTop: '6px' }}>
                    <input type="button" value="Save as Draft" className='btn-secondary' />
                </div> */}
                <div>
                    {/* <button type="submit" style={{ width: '100%' }} className="btn btn-danger" disabled={updateLoading ? true : false} >{updateLoading ? <ButtonLoader /> : 'SUBMIT FOR REVIEW'} </button> */}
                    <input type="submit" value="SUBMIT FOR REVIEW" className='btn-danger' />
                </div>
            </form>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: "/account/login",
                permanent: false
            }
        }
    }
    return {
        props: { session }
    }
}