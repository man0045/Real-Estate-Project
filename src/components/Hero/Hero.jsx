import React, {useState} from 'react'
import axios from 'axios';
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"
import {motion} from 'framer-motion'
const Hero = () =>{
    const [data, setData] = useState('');
    async function sendData(e){
        e.preventDefault();
        console.log(data);
        const data1 = await axios.post('http://localhost:3000/getData', {
            data: data
          })
    }
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity:1}}
                        transition = {{
                            duration:2,
                            type:"spring"
                        }}>
                            Discover<br/>Most Suitable<br/>property</motion.h1>
                    </div>
                
                    <div className="flexColStart hero-des">
                        <span className = "secondaryText">Find a variety of Properties that suits you very Easily</span>
                        <span className="secondaryText">Forget all Difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color = "var(--blue)" size= {25}/>
                        <input type="text" value={data} onChange={(e) => setData(e.target.value)}/>
                        <button className="button" onClick={(e) => sendData(e)}>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end ={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end ={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end ={28}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winnings</span>
                        </div>
                    </div>

                </div>
                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x: "7rem", opacity:0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration:2,
                        type: "spring"
                    }}
                    className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default Hero