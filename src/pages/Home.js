import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/reducers/userReducers";
import UserComponent from "../components/UserComponent";
import Loader from "../components/Loader";
import Filter from "../components/Filter";

const Home = () => {
    const { users, loading } = useSelector((state) => state.users);
    
    console.log(loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    
    return !loading ?
    <>
    <Filter/>
        <table className="table table-hover">
        <thead>
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index)=>{
                return <UserComponent key={index} index={index} user={user}/>
            })}
        </tbody>
        </table>
        </> :
        <Loader/>
}

export default Home;