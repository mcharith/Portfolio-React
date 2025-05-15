import project1_img from './java-fx-application.png';
import project2_img from './hibernate.png';
import project3_img from './html-css-portfolio.png';
import project4_img from './html-javascript-calculator.png';
import project5_img from './servlet-application.png';
import project6_img from './journeypass.jpg';

interface MyworkDataItem {
    w_no: number;
    w_name: string;
    w_image: string;
}

const MyWork_data: MyworkDataItem[] = [
    {
        w_no: 1,
        w_name: "Java-FX-Application",
        w_image: project1_img
    },
    {
        w_no: 2,
        w_name: "Hibernate",
        w_image: project2_img
    },
    {
        w_no: 3,
        w_name: "HTML-CSS-Portfolio",
        w_image: project3_img
    },
    {
        w_no: 4,
        w_name: "HTML-JS-Calculator",
        w_image: project4_img
    },
    {
        w_no: 5,
        w_name: "Servlet-Application",
        w_image: project5_img
    },
    {
        w_no: 6,
        w_name: "Spring-boot-Web-Application",
        w_image: project6_img
    }
];

export default MyWork_data;