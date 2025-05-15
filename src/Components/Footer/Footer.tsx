import './Footer.css'
import footer_logo from '../../assets/black-bird-64.png'
import user_icon from '../../assets/user-icon.png'

const Footer = () => {
    return(
       <div className="footer">
           <div className="footer-top">
               <div className="footer-top-left">
                   <img src={footer_logo} alt=""/>
                   <p>I am an experienced Software Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
               </div>
               <div className="footer-right-top">
                   <div className="footer-email-input">
                       <img src={user_icon} alt=""/>
                       <input type="email" placeholder='Enter your email'/>
                   </div>
                   <div className="footer-subscribe">Subscribe</div>
               </div>
           </div>
           <hr/>
           <div className="footer-bottom">
               <p className="footer-bottom-left">
                   ©️2025 Charith Siriwardana. All right reserved.
               </p>
               <div className="footer-bottom-right">
                   <p>Term of services</p>
                   <p>Privacy policy</p>
                   <p>Connect with me</p>
               </div>
           </div>
       </div>
    )
}

export default Footer