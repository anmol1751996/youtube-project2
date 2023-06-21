import React, {createContext,useState,useEffect} from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContest = (props) => {
    const [loading,setLoading]= useState(false);
    const [SearchResults,setSearchResults]= useState(false);
    const [SelectCategories,setSelectCategories]= useState("New");
    const [MobileMenu,setMobileMenu]= useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(SelectCategories)
    },[SelectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            console.log(res)
            setSearchResults(res)
            setLoading(false)
        })
    }
    return(
        <Context.Provider value={{
            loading,
            setLoading,
            SearchResults,
            setSelectCategories,
            SelectCategories,
            MobileMenu,
            setMobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )

}