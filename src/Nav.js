import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();


    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);

        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img
            onClick={() => history.push("/")}
            className='nav__logo'
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
            <img
            onClick={() => history.push("/profile")}
            className='nav__avatar'
            src="https://occ-0-456-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABW91hUV-HH6GcMZh8tmyG0092xvVo4TbKUai2Ju0x5mIB-oYki4BR0dm3ePE2ZUeylyCfUxVso2Re9qdcUYoC5mfZw.png?r=c71" alt="" />
            

            </div>
            
        </div>
    )
}

export default Nav
