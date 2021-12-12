import styled from '@emotion/styled';


const applyStyleToOnSale = ({applyOnSale}) => {
    const borderStyle = applyOnSale ? '1px solid red' : '1px solid transparent'
    return `border: ${borderStyle}`
}

export const CardListContainerStyle = styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
    row-gap: 3rem;
    font-size: 16px;
    justify-content: space-between; 
    margin-top: 30px;
`

export const CardListItemStyle = styled.div`
    margin: 8px;
    padding: 18px;
    text-align: center;
    border-radius: 0.3rem;


    ${applyStyleToOnSale}

`