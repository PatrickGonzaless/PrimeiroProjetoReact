import star from "./Imagens/star.png"
import styles from "./Segunda.module.css"

function Segunda(){
    return(
        <section className={styles.section2}>
            <p className={styles.p1}>NOVIDADE NO BRAINLY</p>
            <h1>Descubra mais com as Soluções de Livros Didáticos</h1>
            <p className={styles.p2}>Aqui você encontra soluções passo a passo para as perguntas do seu livro didático, criadas por especialistas.</p>

            <img className={styles.livro1} width="100%" height="100%" src="https://srv-supersonic-images.z-dn.net/cover_images/7c10eca6-8903-44a9-9c8e-2e5d552b38c7.jpeg" aria-label="ensino-medio-contato-biologia-1-série-1" alt="ensino médio #contato biologia, 1° ano 1º ano"></img>
            <p className={styles.p3}>#Contato<br/> Biologia, 1° ano</p>
            

            <img className={styles.livro2} width="100%" height="100%" src="https://srv-supersonic-images.z-dn.net/cover_images/c4042a75-6aee-4216-8019-6c59fefe7f60.jpeg" aria-label="ensino-medio-contato-biologia-2-série-2" alt="ensino médio #contato biologia, 2° ano 2º ano"></img>
            <p className={styles.p4}>#Contato<br/> Biologia, 2° ano</p>

             <img className={styles.livro3} width="100%" height="100%" src="https://srv-supersonic-images.z-dn.net/cover_images/4bf539c7-bee1-487d-81f8-232abb17f1ac.jpeg" aria-label="ensino-fundamental-ii-a-conquista-da-matematica-2-série-8" alt="ensino fundamental ii a conquista da matemática, 8º ano"></img>
            <p className={styles.p5}>#A Conquista da<br/> Matemática, 8° ano</p>

            <img className={styles.livro4} width="100%" height="100%" src="https://srv-supersonic-images.z-dn.net/cover_images/4a3c1e0a-908c-42b9-a8e0-11efa71dac90.jpeg" aria-label="ensino-fundamental-ii-a-conquista-da-matematica-3-série-9" alt="ensino fundamental ii a conquista da matemática, 9º ano"></img>
            <p className={styles.p6}>#A Consquista da<br/> Matemática, 9° ano</p>
            
            <h2 className={styles.Encontre}>ENCONTRE SEU LIVRO</h2>
            <h1 className={styles.h12}>Feito por estudantes,<br/>apoiado por pais e mães.
            </h1>
            <img className={styles.star} src={star} alt="estrela de avaliação"/>
             <p className={styles.p7}>4.0</p>
             <p className={styles.p8}>Avaliação do GooglePlay</p>
         </section>
    );
}

export default Segunda;