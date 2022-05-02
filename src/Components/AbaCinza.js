import seta from "./Imagens/seta1.png"
import quimica from "./Imagens/icone-quimica.png"
import filosofia from "./Imagens/icone-filosofia.png"
import matematica from "./Imagens/icone-matematica.png"
import fisica from "./Imagens/icone-fisica.png"
import historia from "./Imagens/icone-historia.png"
import styles from "./AbaCinza.module.css"

function AbaCinza(){
    return(
        <section>
        <div className={styles.abacinza}>
          <img className={styles.seta1} src={seta} alt="seta1"/>
          <img className={styles.seta2} src={seta} alt="seta1"/>
          <img className={styles.icone1} src={quimica} alt="icone de química"/>
          <span className={styles.quimica}>Química</span>
          <img className={styles.icone2} src={filosofia} alt="icone de filosofia"/>
          <span className={styles.filosofia}>Filosofia</span>
          <img className={styles.icone3} src={matematica} alt="icone de matemática"/>
          <span className={styles.matematica}>Matemática</span>
          <img className={styles.icone4} src={fisica} alt="icone de física"/>
          <span className={styles.fisica}>Física</span>
          <img className={styles.icone5} src={historia} alt="icone de história"/>
          <span className={styles.historia}>História</span>
         </div>
         </section>
    );
}

export default AbaCinza;