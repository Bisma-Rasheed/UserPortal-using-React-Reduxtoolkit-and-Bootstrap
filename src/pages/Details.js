import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const { users } = useSelector((state) => state.users);
    console.log(users[id - 1]);
    return (
        <>
        <Link to='/' className="btn btn-dark">
            Go Back
        </Link>
            <div className="card">
                <div className="card-header">
                    <h3><span className="text-info">{users[id - 1].name} </span>Details</h3><br /><br /><br />
                </div>
                <br/><br/>
                <h4>ID: <span>{users[id - 1].id}</span></h4>
                <h4>Name: <span>{users[id - 1].name}</span></h4>
                <h4>Username: <span>{users[id - 1].username}</span></h4>
                <h4>Email: <span>{users[id - 1].email}</span></h4>
                <h4>Address: <span>{`${users[id - 1].address.suite} 
                    ${users[id - 1].address.street} ${users[id - 1].address.city}`}</span></h4>
                <h4>ZipCode: <span>{users[id - 1].address.zipcode}</span></h4>
                <h4>Phone: <span>{users[id - 1].phone}</span></h4>
                <h4>Website: <span>{users[id - 1].website}</span></h4>
                <br /><br /><br />
                <hr />

            </div>
        </>
    )
}

export default Details;