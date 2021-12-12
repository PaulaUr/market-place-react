import styled from "@emotion/styled";


const applyStyleOutOfStock = ({stock}) => {
  const opacityStyle = stock === 0 ? '0.5' : '1.0'
  return `opacity: ${opacityStyle}`
}

export const CardImgStyle = styled.div`
  display: block;
  width: calc(100% + 2rem);
  margin: -1rem -1rem 0;
  ${applyStyleOutOfStock}
`;
export const CardBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(63, 81, 181, 0.6);
  color: white;
`;



