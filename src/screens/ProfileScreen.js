import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { auth } from '../firebase';


function ProfileScreen() {
const user = useSelector(selectUser);

    return (
        <div className="profileScreen">

            <Nav />
            <div className="navBackground"></div>
            <div className="profileScreen__body">
            <h1>Account</h1>
            <div className="profileScreen__info">
                <h5>MEMBERSHIP &amp; BILLING</h5>

                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <button 
                        onClick={() => auth.signOut()}                        className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProfileScreen
