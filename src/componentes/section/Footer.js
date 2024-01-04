import { FaInstagram, FaLinkedin, FaGithub   } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
            <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/jamesrodrigo01/'><FaInstagram size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/james-rodrigo/'><FaLinkedin size={30}/> </a> </li>
                <li><a href='https://github.com/JamesOliveira023'><FaGithub size={30}/></a> </li>
            </ul>
            <p>james.jhey020@hotmail.com</p>
            <p>James Oliveira © 2023 </p>
            </div>
        )
}
export default Footer