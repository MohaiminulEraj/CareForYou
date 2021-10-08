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

    useEffect(() => {
        const getResults = async () => {
            if (searchTerm === '') {
                setSearchResults([])
            } else {
                const res = await axios.get(`/api/articles/published?location=${searchTerm}`)
                setSearchResults(res.data.articles)
            }
        }

        getResults()
    }, [searchTerm])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className={styles.search}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Articles..." />
                </form>
                <SearchResults val={searchTerm} results={searchResults} />
            </div>
        </div>
    )
}