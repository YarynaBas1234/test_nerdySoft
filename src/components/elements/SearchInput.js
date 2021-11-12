import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ getSearchValue, searchValue, searchFunc }) => {
    
    return (
        <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search'
                onChange={(e) => getSearchValue(e.target.value)}
                value={searchValue}
            />
            <IconButton type='button' onClick={searchFunc} sx={{ p: '10px' }}>
                <AiOutlineSearch />
            </IconButton>
        </Paper>
    );
}

export default SearchInput;