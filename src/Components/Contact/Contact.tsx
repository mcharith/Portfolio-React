import './Contact.css'
import patter_img from '../../assets/purple-bird-64.png'
import email_icon from '../../assets/mail-icon.png'
import call_icon from '../../assets/call-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    return(
        <div className='contact'>
            <div className="contact-title">
                <h1>Get In touch</h1>
                <img src={patter_img} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email_icon} alt=""/><p>charithmihiranga453@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt=""/><p>+94 77 8986 962</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=""/><p>Matale,Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter Your name" name="name"/>

                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter Your Email" name="email"/>

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows={8} placeholder="Enter Your message"></textarea>

                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;