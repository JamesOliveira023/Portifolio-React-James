import style from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub   } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={style.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation' >Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills' >Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/jamesrodrigo01/'><FaInstagram size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/james-rodrigo/'><FaLinkedin size={30}/> </a> </li>
                <li><a href='https://github.com/JamesOliveira023'><FaGithub size={30}/></a> </li>
            </ul>
        </div>
    )
}
export default Navbar