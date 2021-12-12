import styled from "@emotion/styled";


const applyStyleOnSale = ({applyOnSale}) => {
  const colorStyle = applyOnSale && 'red';
  return `color: ${colorStyle}`
}

const commonStyles = `
  width: 100%;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`;

export const CardTitleStyle = styled.div`
  ${commonStyles}
`;
export const CardTitleOnSaleStyle = styled("div")`
  ${commonStyles}
  ${applyStyleOnSale}
`;