import './MyWork.css'
import pattern_img from '../../assets/purple-bird-64.png'
// import arrow_icon from '../../assets/right-arrow-50.png'
import myworkData from "../../assets/mywork-data.ts";

const MyWork = () => {
    return(
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={pattern_img} alt=""/>
            </div>
            <div className="mywork-container">
                {myworkData.map((work,index) => {
                    return (
                        <img key={index} src={work.w_image} alt=""/>
                    )
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show more</p>
                {/*<img src={arrow_icon} alt=""/>*/}
            </div>
        </div>
    )
}

export default MyWork