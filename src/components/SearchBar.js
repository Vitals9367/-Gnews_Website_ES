import React, { useState, useEffect } from 'react'
import { Search, X} from 'react-feather';

import Axios from 'axios';
import { requests } from '../utils/requests';

const SearchBar = ({getArticles}) => {

    const [search,setSearch] = useState('');
    const [error,setError] = useState('');

    const validateSearchText = (text) => {
        if (!text.replace(/\s/g, '').match(/^[0-9a-zA-Z]+$/)){
            setError('Only numbers and letters!');
            return false;
        }
        if (text.length > 40){
            setError('Text too long!');
            return false;
        }
        return true;
    }

    const clearError = () => {
        setError('');
    }

    const onEnter = e => {
      //On enter key
        if (e.key === 'Enter') {
            onSearch(search);
        }
    };

    const onSearch = (text) => {

        if(text.trim('') === ''){
            return;
        }

        setError('');

        if(validateSearchText(text) === false){
            return;
        }

        getArticles(text);
        // logSearch(text);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          onSearch(search)
        }, 350)
    
        return () => clearTimeout(delayDebounceFn)
      }, [search])

    return (
    <>
        {error &&
        <div className="shadow mb-2 p-1 text-red-900 rounded-md bg-red-400 font-normal flex">
            <h1 className="flex-grow text-center font-semibold">{error}</h1>
            <X className="cursor-pointer" onClick={clearError} />
        </div>}
        <div className="searchbar rounded-sm shadow flex mb-4">
            <input
            className="w-full rounded p-2 focus:outline-none"
            type="text" placeholder="Search..." 
            value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyPress={onEnter}
            />
            <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
            onClick={() => onSearch(search)}
            >
                <Search/>
            </button>
        </div>
    </>
    )
}

export default SearchBar
