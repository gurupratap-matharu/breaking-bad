import React from 'react'

const Search = ({ handleSearch, searchText }) => {

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search Characters'
                    autoFocus
                    value={searchText}
                    onChange={handleSearch}
                />
            </form>
        </section>
    )
}

export default Search
