import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB' 

function Presentation (){
    return (
        <div className={style.Presentation} id='Presentation'>
        <h4><strong>Bem vindo ao meu portfólio</strong></h4>
        <h1>Olá, eu sou James Oliveira!</h1>
        <p>TEXTO SOBRE MIM.<br/>
        </p>
        <ButtonA link='https://github.com/JamesOliveira023' text='Conecte-se comigo!'/>
        
        </div>
    )
}
export default Presentation