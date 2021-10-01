import React from "react";
import "./UserPage.css"

const UserPage = () => {
    return ( 
        <div className="userPage">
            <div className="profile__picture">
                <i class="far fa-user"></i>
            </div>
            <nav className="profile">
                <ul className="profile__list">
                    <li className="profile__list-item">
                        <a href="/list">
                            My list
                        </a>
                    </li>
                    <li className="profile__list-item"> 
                        <a href="/friends">
                            My friends
                        </a> 
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default UserPage;