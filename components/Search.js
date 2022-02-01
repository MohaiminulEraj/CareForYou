import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import dbConnect from '@/config/dbConnect'
// import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'
import styles from '@/styles/Search.module.css'
import axios from 'axios';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [articleStatus, setArticleStatus] = useState(true);
    const [docStatus, setDocStatus] = useState(false);
    const [placeholder, setPlaceholder] = useState('Search Articles...');

    useEffect(() => {
        const getResults = async () => {
            if (searchTerm === '') {
                setSearchResults([])
            } else {
                const res = await axios.get(`/api/articles/published?location=${searchTerm}&articleStatus=${articleStatus}&docStatus=${docStatus}`)
                setSearchResults(res.data.articles)
            }
        }

        getResults()
    }, [searchTerm])
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const checkRadio = (e) => {
        if (e.target.value === 'article') {
            setPlaceholder('Search Articles...')
            setArticleStatus(true);
            setDocStatus(false);
        } else {
            setPlaceholder('Search Doctors...')
            setDocStatus(true);
            setArticleStatus(false);
        }
        setSearchTerm('');
    }
    return (
        <div className="container">
            <input type="radio" id="searchArticle" onClick={checkRadio} value="article" name="type" checked={articleStatus} /> <label htmlFor="searchArticle">Article</label> <br />
            <input type="radio" id="searchDoc" onClick={checkRadio} value="doctor" name="type" checked={docStatus} /> <label htmlFor="searchDoc">Doctor</label>
            <div className={styles.search}>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={placeholder} />
                </form>
                <SearchResults val={searchTerm} results={searchResults} />

            </div>
        </div>
    )
}