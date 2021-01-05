import React, { useState } from "react";
import SearchUI from "../ui/SearchUI";
import { API, API_DEFAULT_PARAMS } from "../../../api/api";
import "./Search.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: 270
        },
        display: "flex",
        alignItems: "center",
        width: 500
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10,
        "&:hover": {
            borderRadius: 0
        },
        borderRadius: 0,
    }
}));

const SearchContainer = ({ setData, setCity }) => {

    const classes = useStyles();

    const [searchInput, setSearchInput] = useState('');
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = () => {
        setShowError(false);
        setData(null);

        if (searchInput === '') {
            setShowError(true);
            setSearchInput('');
            setData(null)
        }
        else {
            API.get('/', {
                params: {
                    ...API_DEFAULT_PARAMS,
                    city: searchInput
                }
            })
                .then((res) => {
                    if (res.status === 204) {
                        setShowError(true);
                        setSearchInput('');
                        setData(null);
                    }
                    setCity(res.data.city_name);
                    setData(res.data.data);
                    setSearchInput('');
                })
                .catch((er) => {
                    console.error('error', er);
                })
        }
    };

    return <SearchUI
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        showError={showError}
        classes={classes} />;
}

export default SearchContainer;
