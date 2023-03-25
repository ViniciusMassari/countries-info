import styled from "styled-components";



export const DetailsMainContainer = styled.section`
max-width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column; 
min-height: 100vh;


    a{
        display: flex;
        justify-content: space-evenly;
        border-radius: 50px;
        margin: 1rem;
        width: 10rem;
        padding: 10px;
        
    }
`


export const DetailsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media(max-width: 1290px){
    &{
        grid-template-columns: 1fr;
        justify-content: center;
        align-items:center;
        text-align: center;
    }
}
`

export const Flag = styled.div`
margin-top:10px;
max-width: 31.6rem;
margin: 1rem auto;
img{
    max-width: 100%;
}
`

export const CountryDetails = styled.section`
display:grid;
grid-template-columns: 1fr 1fr;
@media(max-width: 1290px){
    &{
        grid-template-columns: 1fr;
    }
}
h3{
    margin-top: 3rem;
    font-size: 1.5rem;
}
`

export const PrimaryInfo = styled.section`
grid-column: 1;
p{
    font-size: 1.2rem;
    margin: 1rem 0;
}

span{
    font-size: 1rem;
}

span #border{
    margin-left: 5px;
    padding: 3px;
    border: 1px solid black;
}

@media(max-width: 1290px){
    .borderCountries{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
}


`

export const SecondaryInfo = styled.section`
grid-column: 2;
p{
    font-size: 1.2rem;
    margin: 1rem 0;
}

span{
    font-size: 1rem;
}



@media(max-width: 1290px){
    &{
        grid-column: 1;
    }
}
`

