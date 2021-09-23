import { useEffect } from 'react';
import'./AboutMe.css';

const AboutMe  = () => 
{
    // const textArray= ["Hi, My name is ritu singh.\n zxs", "This is just for testing"];
    // const typingDelay = 200;
    // const nextTextDelay = 2000;
    // let textarrayIndex = 0;
    // let charIndex = 0;

    // useEffect(() => {
    //     setTimeout(type, nextTextDelay+250)

    // }, [])

    // const type = () => {
    //     const typedTextSpan = document.querySelector(".typed-text")
    //     if(charIndex< textArray[textarrayIndex].length)
    //     {
    //         typedTextSpan.textContent += textArray[textarrayIndex].charAt(charIndex);
    //         charIndex+=1;
    //         setTimeout(type, typingDelay);
    //     }
    //     else{
    //         textarrayIndex+=1
    //     }

    //     console.log(charIndex,textarrayIndex, typedTextSpan.textContent)
        
    // }
    

    return(
        <div className="container aboutme_container">
            <h1 className="title introduction">Now, little bit about myself.... </h1>
            <div className="overlay aboutme_page">
                <div className="aboutme_page_section">
                    {console.log("I'm proficient in Javascript, React, Angular, Html, Css, C#.net, Dotnet core, Pyhon , SQL server and mongodb.".length)}
                    <p> {">"}&nbsp;Hi, My name is Ritu Singh!</p>
                    <br/>

                    <p> {">"}&nbsp;I'm working in ITC Infotech as a software developer.</p>
                    <p> {">"}&nbsp;I'm proficient in Javascript, React, Angular, Html, Css, C#.net, Dotnet core, Pyhon , SQL server and MongoDB.</p>
                    
                    
                    <p> {">"}&nbsp;I enjoy learning new technologies and creating something with it , I enjoy coding and creating perfomant UI.</p>
                
                    <p> {">"}&nbsp;Other then this, I enjoy watching tv series, playing video games and outdoor activities.</p>
                
                    <p>{">"}&nbsp; Well, that's all about me.&#x1F60a;</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;
