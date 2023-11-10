import React from 'react';
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div class="home" id="home">
                <main>
                    <h1>Devstar</h1>
                    <p>Solves your doubt</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="" srcset="" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores minus
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                     <h1>who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi quas, quasi, repudiandae cupiditate omnis blanditiis
                        placeat praesentium quis magni, officiis accusamus consectetur
                        laboriosam dignissimos provident facilis quidem necessitatibus
                        quam fuga alias amet ab vero!</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div><h1>Brands</h1>
                <article>
                    <div style={{ animationDelay: "0.3s" }}><AiFillGoogleCircle /><p>google</p></div>
                    <div style={{ animationDelay: "0.5s" }}><AiFillAmazonCircle /><p>amazon</p></div>
                    <div style={{ animationDelay: "0.7s" }}><AiFillYoutube /><p>youtube</p></div>
                    <div style={{ animationDelay: "0.1s" }}><AiFillInstagram /><p>instagram</p></div>
                </article>
                </div>
            </div>





        </>
    );
};

export default Home;