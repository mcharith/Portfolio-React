import './About.css'
import about_img from '../../assets/about-img.jpg'
import pattern_logo from '../../assets/purple-bird-64.png'

const About = () => {
    return(
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={pattern_logo} alt=""/>
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={about_img} alt=""/>
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Software Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"55%"}}/></div>
                        <div className="about-skill"><p>Mysql</p><hr style={{width:"65%"}}/></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"68"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"63%"}}/></div>
                        <div className="about-skill"><p>React</p><hr style={{width:"40%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years Of Experience</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Project Completed</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years Of Experience</p>
                </div>
            </div>
        </div>
    )
}

export default About