import './Hero.css'
import profile_img from '../../assets/profile-img.jpg'
const Hero = () =>{
    return(
        <div className= 'hero'>
            <img className="profile-img" src={profile_img} alt=""/>
            <h1><span>I’m Charith Siriwardana,</span> a Software Engineering undergraduate from Sri Lanka.</h1>
            <p>I'm Software Developer from Sri lanka.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero;