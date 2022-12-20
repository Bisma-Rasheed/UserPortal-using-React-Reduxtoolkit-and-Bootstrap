import React from "react";
import { Link } from "react-router-dom";

const UserComponent = ({ index, user }) => {
    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/users/${user.id}`} className="btn btn-outline-success">
                        Details
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default UserComponent;