import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Arlindo Custódio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na Universidade UNINTA, cursando engenharia da Computação, onde me encontro no 5º semestre, no entanto, em 2022 no mês de agosto, consegui uma bolsa grátis no PROUNI, no curso de Análise e Desenvolvimento de Sistemas, onde eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação e meu objetivo sempre foi  trabalhar com isso.
            </p>

            <p className={styles.paragrafo}>
                Em 2023 consegui outra bolsa de estudos, dessa vez da Alura, com o programa ONE, em sua 5ª turma, optei por escolher a especialização em Front-End e atualmente estou me aprofundando em React, através dos conteúdos disponibilizados, além de criar projetos pessoais usando o conhecimento adquirido durante a formação.
            </p>

        </PostModelo>
    )
}