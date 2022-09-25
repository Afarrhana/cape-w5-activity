import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    let navigate = useNavigate();

    return (
        <nav className="main-nav">
            <div class="navbar">
                <a onClick={() => navigate('/')}>Home</a>
                <div class="dropdown">
                    <button class="dropbtn">Challenges
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Challenge 1</a>
=                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Exercises
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a onClick={() => navigate('/exe1')}>Exercise 1</a>
                        <a onClick={() => navigate('/exe2')}>Exercise 2</a>
                        <a onClick={() => navigate('/exe3')}>Exercise 3</a>
                        <a onClick={() => navigate('/exe4')}>Exercise 4</a>
                        <a onClick={() => navigate('/exe5')}>Exercise 5</a>
                        <a onClick={() => navigate('/exe6')}>Exercise 6</a>
                        <a onClick={() => navigate('/exe7')}>Exercise 7</a>
                        <a onClick={() => navigate('/exe8')}>Exercise 8</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">SnapShot
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="https://github.com/Yog9/SnapShot">Link Original Github</a>
                        <a href="https://yog9.github.io/SnapShot/">Demo SnapShot</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
