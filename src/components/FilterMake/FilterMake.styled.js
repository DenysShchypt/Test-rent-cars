import styled from 'styled-components';

export const StyledFilter = styled.label`
display: flex;
flex-direction: column;


.brandSearch{
margin-bottom: 8px;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color: #8a8a89;
}
.variantSearch{

border: none;
border-radius: 14px;
padding: 14px 18px 14px 18px;
width: 224px;
height: 48px;
background: #f7f7fb;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.11111;
color: #121417;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  background-image: url("../../assets/icons/heart.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
`