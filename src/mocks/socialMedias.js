import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const socialMedias = {
    titulo: "Redes Sociais",
    lista: [
        {
            nome: "Github",
            imagem: github,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },

        {
            nome: "LinkedIn",
            imagem: linkedin,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default socialMedias;