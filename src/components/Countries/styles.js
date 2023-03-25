import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 100%;
background: ${(props) => props.darkMode === true ? "#222E37" : "" };
`

export const SearchCountry = styled.span`
display: flex;
margin: 1rem;
width: 100%;
gap: 10px;
justify-content: space-around;
div{
    display: flex;
    gap: 10px;
    align-items: center
}
    input{
        min-width: 15rem;
        height: 2rem;
        border-radius: 10px;
        border: none;
        padding: 10px;
        outline: none;
        &:focus, &:hover{
           outline: solid #333 1px;
        }
    }

    button{
        cursor: pointer;
        padding: 10px;
        border: none;
        color: inherit;
        border-radius: 10px;
    }
`

export const SelectRegion = styled.div`
select{
    border: none;
    border-radius: 50px;
    padding: 8px;
}
`

export const CardsWrapper = styled.section`
display: flex;
flex-wrap: wrap;
margin: 1rem;
gap: 1rem;
justify-content: center;
`