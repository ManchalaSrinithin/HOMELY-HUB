import React, { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Filter = () => {
    //two funvtion we have to createfor controlling visibility
    //for storing selected filters
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(propertyAction.updateSearchParams(selectedFilters));
        dispatch(getAllProperties());
    }, [selectedFilters, dispatch]);


    //function  to handle opening modal/popUp window
    const handleOpenModal = () => {
        setIsModalOpen(true); //sets isModal to true to open the modal
    };
    //function  to handle closing modal
    const handleCloseModal = () => {
        setIsModalOpen(false);  //sets isModal to false to close the modal
    };

    //function  to handle changes in filters
    const handleFilterChange = (filterName, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (
        <>
            <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
                tune
            </span>
            {isModalOpen && (
                <FilterModal
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Filter
