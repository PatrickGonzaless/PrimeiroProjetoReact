import styles from "./Header.module.css"
import brainly from "./Imagens/Brainly.png"

function Header(){
    return(
      <header className={styles.header}>
      <img src={brainly} alt="Logo Brainly"/>
        <nav>
          <a href="#">ENTRAR</a>
          <a href="#">CADASTRE-SE JÁ</a>
          <a href="#"><spam className={styles.Pergunte}>FAÇA UMA PERGUNTA</spam></a>
          </nav>
      </header>
    );
}

export default Header;