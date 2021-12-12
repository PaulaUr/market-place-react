import styled from "@emotion/styled";

const commonStyles = `
    margin: 0 0 8px;
    font-weight: bold;
    font-size: 13px;
`;

export const CardDescriptionContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
`
export const CardDescriptionStyle = styled.p`
${commonStyles}
`;

export const CardDescriptionOldStyle = styled.p`
${commonStyles}
text-decoration: line-through;
margin: 0 5px 0;

`;
export const CardDescriptionOnSaleStyle = styled.p`
${commonStyles}
color: red;
font-size: 15px;
margin: 0 5px 6px;

`;


