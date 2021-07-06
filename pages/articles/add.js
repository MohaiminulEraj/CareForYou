import Layout from '@/components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
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
        setValues: ({ ...values, [name]: value })
    }
    return (
        <Layout title='Create New Article'>
            <Link href='/'>Go Back</Link>
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
                            <input type="file" onChange={handleInputChange} />
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
                            <input type="file" onChange={handleInputChange} />
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
                            <input type="file" onChange={handleInputChange} />
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
                <div>
                    <input type="submit" value="Create Article" className='btn-danger' />
                </div>
            </form>
        </Layout>
        // <Layout className="container-fluid">
        //     <h2 style={{ textAlign: 'center' }}>Editor Panel</h2>
        //     <form>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <input id="title-input" type="text" name="title" placeholder="Edit title here … (Mandatory)"
        //                     required />
        //             </div>
        //             <div className="col-lg-6">
        //                 <input id="topic-input" type="text" name="topic" placeholder="Edit Department here … (Mandatory)"
        //                     required />
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <textarea id="desofSym-input" name="description" placeholder="Edit description here … (Mandatory)"
        //                     required></textarea>
        //             </div>
        //             <div className="col-lg-2">
        //                 <input multiple="multiple" id="symFile-input" className="files" type="file" name="file1" />
        //             </div>
        //             <div className="col-lg-4">
        //                 <textarea id="cause-input" name="causes" placeholder="Edit causes here ... (Mandatory)"
        //                     required></textarea>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <textarea id="stages-input" name="stages" placeholder="Edit stages here … (Mandatory)"
        //                     required></textarea>
        //             </div>
        //             <div className="col-lg-2">
        //                 <input id="stagesFile-input" className="files" type="file" name="file2" multiple="multiple" />
        //             </div>
        //             <div className="col-lg-4">
        //                 <textarea id="consequences-input" name="consequences"
        //                     placeholder="Edit consequences here … (Mandatory)" required></textarea>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <textarea id="remedies-input" name="remedies"
        //                     placeholder="Edit remedies and treatment here … (Mandatory) " required></textarea>
        //             </div>
        //             <div className="col-lg-2">
        //                 <input id="remediesFile-input" className="files" type="file" name="file3" multiple="multiple" />
        //             </div>
        //             <div className="col-lg-4">
        //                 <textarea id="QA-input" name="question"
        //                     placeholder="Frequently asked question and answer ... (Mandatory)" required></textarea>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <textarea id="prevention-input" name="prevention" placeholder="Edit prevention here … (Mandatory)"
        //                     required></textarea>
        //             </div>
        //             <div className="col-lg-2">
        //                 <textarea id="adverse-input" name="adverse" placeholder="Edit adverse here … (Mandatory)"
        //                     required></textarea>
        //             </div>
        //             <div className="col-lg-4">
        //                 <textarea id="sideEffect-input" name="sideEffect"
        //                     placeholder="Edit medication side effect here … (Mandatory)" required></textarea>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-9">
        //                 <input id="diagnosis-input" type="text" name="diagnosis"
        //                     placeholder="Edit diagnosis here (Separated by comma) … (Mandatory)" required />
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-9">
        //                 <input id="symptoms-input" type="text" name="symptoms"
        //                     placeholder="Edit symptoms here (Separated by comma) … (Mandatory)" required />
        //             </div>
        //         </div>

        //         <div className="row">
        //             <div className="col-lg-2">
        //                 <input id="uID-input" type="text" value="" disabled />
        //             </div>
        //             <div className="col-lg-1 col-md-2" style={{ paddingTop: "1%;", paddingLeft: "0;", paddingRight: "0;", left: "16px;" }}>
        //                 <label htmlFor="duId-input">Submit to: </label>
        //             </div>
        //             <div className="col-lg-3">
        //                 <input type="text" id="duId-input" name="docId"
        //                     placeholder="Doctor's ID or User name (Separated by comma) ..." required />
        //             </div>
        //             {/* <div className="col-lg-1" style={{ paddingTop: "1%;", paddingLeft: "0;", paddingRight: "0;", left: "16px;" }}>
        //                 <label htmlFor="thumbnailId">Choose Thumbnail: </label>
        //             </div> */}
        //             <div className="col-lg-3">
        //                 <input type="file" id="thumbnailId" name="thumbnail" accept="image/*" />
        //                 <input type="file" className="custom-file-input" id="thumbnailInput" />
        //                 <label className="custom-file-label" htmlFor="thumbnailInput">Choose Thumbnail</label>
        //             </div>
        //         </div>
        //         <div className="col-lg-3 reflink">
        //             <textarea id="ref-input" name="refLink" placeholder="Add reference link"></textarea>
        //         </div>
        //         <button style={{ float: "right;" }} type="button" className="btn btn-outline-info">Save as Draft</button>
        //         <button type="button" className="btn btn-outline-primary" data-toggle="modal"
        //             data-target="#extraLargeModal">Preview</button><br />

        //         <input id="checkbox-group" type="checkbox" required />
        //         <label htmlFor="checkbox-group">I agree to the
        //             <a href="#" target="_blank">terms and condition</a>.
        //         </label>
        //         <button type="submit" style={{ "width": "264px;", "float": "right;", "margin": "1% 2px;" }} className="btn btn-outline-success">Save
        //             and Submit for review</button>
        //     </form>
        // </Layout >

    )
}
