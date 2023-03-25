import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 250px;
min-height: 350px;
background-color:#fff;


&.darkTheme{
    background: #333;
}
`

export const CardImageContainer = styled.div`

img{
    max-width: 100%;
}
`

export const CountryInfo = styled.section`
margin:0.675rem;
padding: 20px;
display:flex;
flex-direction: column;

text-align: start;
align-self:center;
h2{
        font-size: 1.1rem;
    }

   p{
    font-size:0.875rem;
    margin: 10px 0;
   }
`