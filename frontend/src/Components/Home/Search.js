import React, { useState } from "react";
//useState hook for manging the state(to remember things dynamically)
import { DatePicker, Space } from "antd";

import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";


const Search = () => {
  //Destructing the RangePicker(Property) component from the DatePicker
  //Destructuring in JS allows you to extract multiple properties form an object
  //redundancy and readible
  const { RangePicker } = DatePicker;
  const [keyword, setKeyword] = useState({});
  //storing the data range value
  const [value, setvalue] = useState([]);


  // sending the action
  const dispatch = useDispatch();
  function searchHandler(e) { e.preventDefault();
     dispatch(propertyAction.updateSearchParams(keyword)); 
     dispatch(getAllProperties());
      setKeyword(
        { city: "", 
        guests: "", 
        dateIn: "", 
        dateOut: "", 
      }); 
      setvalue([]); 
    }

  function returnDate(date, dateString) {
    //setting the date range value in state
    setvalue([date[0], date[1]]);
    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateOut", dateString[1]);
  }

  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="searchbar">
        {/* input field for searching */}
        <input
          className="search"
          id="search_destination"
          placeholder="Search destinations"
          type="text"
          value={keyword.city}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />
        <Space direction="vertical" size={2} className="search">
          <RangePicker
            value={value}
            format="YYYY-MM-DD"
            picker="date"
            classname="Date_Picker"
            disabledDate={(current) => {
              return current && current.isBefore(Date.now(), "day");
            }}
            onChange={returnDate}
          />
        </Space>
        {/* input to add guest */}
        <input
          className="search"
          id="addguest"
          placeholder="Add guest"
          type="number"
          value={keyword.guest}
          onChange={(e) => updateKeyword("guest", e.target.value)}
        />
        {/* for search icon */}
        <span class="material-symbols-outlined searchicon"
          onClick={searchHandler}
        >search
        </span>
      </div>
    </>
  );
};
export default Search;