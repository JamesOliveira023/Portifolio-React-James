import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Cards({img, title , tech, description, repo, site , }){
    return (
        <div className={styles.card}>
        <a href={site}>
        <img src={img} />
        </a>
        <section>
            <h3>{title}</h3>
            <p><strong>Tecnologia:</strong>{tech}</p>
            <p>{description}</p>
            <ButtonB text='Acesse o repositorio' link={repo}/>
        </section>
        </div>
    )
}

export default Cards