import styles from "./Comentarios.module.css"
import seta from "./Imagens/seta1.png";
import perfil from "./Imagens/perfil.jpg"
import verificacao from "./Imagens/verificacao.png"

function Comentarios(){
    return(
        <section>
    <section className={styles.Comentarios}>
          <p>"Maravilhoso! Me ajuda em todos trabalhos e deveres de<br/>casa."</p>
      </section>
      <section>
      <img className={styles.seta1} src={seta}/>
      <img className={styles.seta2} src={seta}/>
      <img className={styles.perfil1} src={perfil}/>
      <img className={styles.perfil2} src={perfil}/>
      <img className={styles.perfil3} src={perfil}/>
      <img className={styles.perfil4} src={perfil}/>
      <img className={styles.perfil5} src={perfil}/>
      <p className={styles.p2}>User</p>
      <img className={styles.verificacao} src={verificacao}/>
      <h1 className={styles.verifh1}>Aproveite a inteligência de milhares de<br/> especialistas em todo o mundo</h1>
      </section>
      </section>
    );
}

export default Comentarios;