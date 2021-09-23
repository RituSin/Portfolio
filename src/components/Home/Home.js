import style from './Home.css';
import { FaLinkedin , FaGithub} from 'react-icons/fa';


const Home = (props) => {
    // olor:' rgba(46, 62, 78, 1)
    return(
        <div className="container">
            <div className="overlay home" style={{background:'radial-gradient(ellipse at bottom, #0D1E31, #111)'}}>
                <div className='night'>
                    <div className="star" ></div>
                    <div className="star"></div>                    
                    <div className="star" ></div>                    
                    <div className="star" ></div>
                    <div className="star" ></div>
                </div>
                {/* <div className="person">
                    <div className="person-overlay"></div>
                   
                </div> */}
                <div className="home-text">
                   <h5 className="student">Software  &nbsp;engineer</h5>
                   <h1 className="name">Ritu Singh</h1>
                 
                   <p className="intro">                     
                       <a href="https://www.linkedin.com/in/ritusingh1017/" target="_blank" className="social-icons"><FaLinkedin className="social-icon"/></a>
                       <a href="https://github.com/RituSin"  target="_blank" ><FaGithub className="social-icon"/></a>
                   </p>
                </div>
            </div>
        </div>
    // <div className="home">
    //     <div className="container">
    //         <div className="person">
    //             <div className="person-overlay"></div>
    //             <img src={require('../../assets/person1.jpg').default} alt="" />
    //         </div>
    //         <div className="home-text">
    //             <h5 className="student">Software  &nbsp;engineer</h5>
    //             <h1 className="name">Ritu Singh</h1>
    //             <p className="intro">
    //                 Hello Guys, my name is Ritu Singh.
    //             </p>
    //         </div>
    //     </div>
    // </div>
    );
}

export default Home;
