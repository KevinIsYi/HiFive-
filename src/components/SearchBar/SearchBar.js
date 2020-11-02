import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="What do you need?" />
            <FaSearch className="input-mglass-button" />
        </div>
    )
}
