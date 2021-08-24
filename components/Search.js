import React, { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Search.module.css'

const Search = () => {
    const [location, setLocation] = useState('');
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        // router.push(`/article/search?term=${term}`);
        if (location.trim()) {
            router.push(`articles?location=${location}`)
        } else {
            router.push('/')
        }
    }
    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Search Articles" />
            </form>
        </div>
    )
}

export default Search