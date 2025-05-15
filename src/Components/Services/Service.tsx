import './Services.css'
import pattern_logo from '../../assets/purple-bird-64.png'
import arrow_icon from '../../assets/right-arrow-50.png'
import Service_data from "../../assets/service_data.ts";

const Service = () => {
    return(
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={pattern_logo} alt=""/>
            </div>
            <div className="service-container">
                {Service_data.map((service,index)=> {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon } alt=""/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Service