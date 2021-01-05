import React from 'react';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchUI = ({ searchInput, handleChange, handleSubmit, showError, classes }) => {
    return (
        <div className='search-wrapper'>
            <Paper
                className={classes.root}>
                <InputBase
                    className={classes.input}
                    inputProps={{ "aria-label": "search" }}
                    value={searchInput}
                    onChange={handleChange}
                />
                <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={() => handleSubmit()}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            {showError && <div className='search-error'>Введите город</div>}
        </div>
    )
}

export default SearchUI
