import styles from "./Footer.module.css"
import instagram from "./Imagens/instagram.png"
import playstore from "./Imagens/playstore.png"
import applestore from "./Imagens/applestore.png"

function Footer(){
    return(
        <footer>
          <div className={styles.sabemos}>
              <h2>NÓS SABEMOS</h2>
              <img src={instagram} alt="Instagram"/>
              <p>Este site utiliza cookies sob política<br/>de cookies . Você pode editar as<br/>configurações de cookies no seu<br/>navegador.</p>
              <div className={styles.empresas}>
                  <h3>EMPRESAS</h3>
                  <p>
                      Quem somos<br/>
                      Blog<br/>
                      Trabalhe conosco<br/>
                      Anuncie Conosco<br/>
                      Condições de uso<br/>
                      Política de direitos autorais<br/>
                      Política de privacidade<br/>
                      Política de cookies<br/>
                  </p>
              </div>
              <div className={styles.comunidade}>
                  <h3>COMUNIDADE</h3>
                  <p>
                    Comunidade Brainly<br/>
                    Brainly para escolas e professores<br/>
                    Comunidade para os pais<br/>
                    Código de conduta<br/>
                    Diretrizes da comunidade<br/>
                    Brainly Insights<br/>
                    Seja voluntário<br/>
                    </p>
              </div>
              <div className={styles.ajuda}>
                  <h3>AJUDA</h3>
                  <p>
                    Cadastro<br/>
                    Central de ajuda<br/>
                    Central de segurança<br/>
                    Acordo de divulgação responsável<br/>
                    </p>
              </div>
              <div className={styles.baixe}>
                <h3>Baixe o app do Brainly</h3>
                <img className={styles.play} src={playstore}/>
                <img className={styles.apple} src={applestore}/>
              </div>
              <div className={styles.Browser}>
                  Brainly.com.br
              </div>
          </div>
          
        </footer>
    );
}

export default Footer;