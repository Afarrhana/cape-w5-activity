// Task:  Build a React page that replicates 
// HTML Multimedia (w3schools.com) from What is Multimedia? 
// until Common Video Formats
// There must be at least 4 components
import React, { Component } from 'react';

class PageMultimedia extends Component {
    render() {
        return (
            <section>
                <h1>Exercise 6 Multimedia</h1>
                <b>What is Multimedia?</b>
                <p>
                    Multimedia comes in many different formats. It can be almost anything you can
                    hear or see, like images, music, sound, videos, records, films, animations, and more.
                    Web pages often contain multimedia elements of different types and formats.
                </p>

                <h3>Component 1: Image</h3>
                <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" />

                <h3>Component 2: Youtube</h3>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>

                <h3>Component 3: Youtube</h3>
                <h3>Component 4: Youtube</h3>
                <h3>Component 5: Youtube</h3>

            </section>
        );
    }
}

export default PageMultimedia

