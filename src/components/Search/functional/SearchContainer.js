import React, { useEffect, useState } from "react";
import SearchUI from "../ui/SearchUI";
import { API } from "../../../api/api";
import "./Search.css";
import { useSearchStyles } from "../../../styles/useSearchStyles";

const SearchContainer = ({ setData, setCity, setIsLoading }) => {

    const classes = useSearchStyles();

    const [searchInput, setSearchInput] = useState('');
    const [showError, setShowError] = useState(false);
    const [fullScreen, setFullScreen] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        await API.get('/', {
            params: {
                city: searchInput
            }
        })
            .then( res => {
                setIsLoading(false);
                if (res.status === 204) {
                    setShowError(true);
                    setFullScreen(true);
                }
                else{
                    setFullScreen(false);
                    setCity(res.data.city_name);
                    setData(res.data.data);
                    setSearchInput('');
                }
            })
            .catch( er => {
                console.error('error', er);
            })
    };

    const handleChange = e => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput === '') {
            setFullScreen(true);
            setShowError(true);
            setSearchInput('');
            setData(undefined)
        }
        else {
            setShowError(false);
            setData(undefined);
            fetchData();
        }
    };

    useEffect(() => {
        return () => {
            fetchData();
        }
    }, []);
    
    return <SearchUI
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        showError={showError}
        classes={classes} 
        fullScreen = {fullScreen}/>;
}

export default SearchContainer;
