import imghome from "./Imagens/imghome.png"
import lupa from "./Imagens/lupa.png"
import styles from "./PrimeiraSection.module.css"

function PrimeiraSection(){
    return(
        <section className={styles.section1}>
        <h1>Vá do<br/> questionamento ao<br/> entendimento. </h1>
        <p>Brainly é a comunidade de compartilhamento de conhecimento onde 350 milhões de alunos e<br/> especialistas unem forças para responder às questões de dever de casa mais difíceis.</p>
        <input className={styles.input} type="text" placeholder="Qual a sua pergunta?"/>
        <img src={imghome} alt="Imagem da Home"/> <img className={styles.lupa} src={lupa} alt="Lupa"/>
      </section>
    );
}

export default PrimeiraSection;