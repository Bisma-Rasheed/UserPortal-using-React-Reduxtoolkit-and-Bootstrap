import React, { useState } from "react";
import { filteredUser } from "../store/reducers/userReducers";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const filterUser = (e) => {
        setName(e.target.value);
        dispatch(filteredUser(name));
    }
    return (
        <>
            <input type="text"
                className="form-control"
                placeholder="Search user by name"
                value={name}
                onChange={filterUser} />

        </>
    )
}

export default Filter;