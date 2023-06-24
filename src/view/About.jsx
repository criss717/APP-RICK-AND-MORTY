import { styled } from "styled-components";

const DivStyled=styled.div`
    color: antiquewhite;
    filter: drop-shadow(2px 10px 1px black);

`
const About = () => {
    return ( 
        <DivStyled>
            <h1>Creado por su servidor Cristian Guzmán</h1>
            <hr></hr>
            <h2>Colombia-Pereira 2023</h2>
        </DivStyled>
     );
}
 
export default About;