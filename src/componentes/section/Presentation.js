import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB' 

function Presentation (){
    return (
        <div className={style.Presentation} id='Presentation'>
        <h4><strong>Bem vindo ao meu portfólio</strong></h4>
        <h1>Olá, eu sou James Oliveira!</h1>
        <p>Estudante de Deselvolvimento WEB.FULL STACK James Oliveira.<p>
        Quero usar as minhas habilidades Programação e edição em HTML, CSS, REACT e demais.</p>  Desenvolvi um projeto para iniciar minha busca por migração de área, para a área da tecnologia.<br/>
        </p>
        <ButtonA link='https://github.com/JamesOliveira023' text='Conecte-se comigo!'/>
        
        </div>
    )
}
export default Presentation