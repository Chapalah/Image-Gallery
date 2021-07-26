import React, { useState } from 'react'

const Search = ({searchText}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() 
        searchText(text)
    }

    return (
        <form onSubmit={onSubmit} className="search">
            <input onChange={e => {setText(e.target.value)}} className="search-input" type="text" placeholder="find images"/>
            <button onClick={() => searchText(text)} className="search-btn">Search</button>
        </form>
    )
}

export default Search
