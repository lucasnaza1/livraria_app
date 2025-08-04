import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #340251ff 35%, #712b99 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        ont-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreve sua próxima leitura"/>
        </PesquisaContainer>
      
    )
}

export default Pesquisa;