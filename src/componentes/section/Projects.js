import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Cards from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'

function Projects (){
    return (
        <div className={styles.Projects} id='Projects'>
            <h1>Projetos</h1>
            <Cards
            img={lpdnc}
            title="LP - DNC" 
            tech="HTML ,CSS e JS"
            description="Desenvolvimento de um pesquisador de paises, projeto desafiador."
            repo="https://github.com/JamesOliveira023/PesquisadorDePaises"
            site="https://pesquiseopais.netlify.app/"/>
            <ButtonB text="Acesse o meu repositório" link="https://github.com/JamesOliveira023?tab=repositories"/>
        </div>
    )
}
export default Projects