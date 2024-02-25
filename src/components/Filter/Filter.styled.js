import styled from 'styled-components';

export const StyledFilter = styled.form`
width: 859px;
display: flex;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
margin-top: 50px;
align-items:flex-end;

.boxSearchFilter{
  display: flex;
  flex-direction: column;
}
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
padding: 14px 89px 14px 18px;
width: 224px;
height: 48px;
background: #f7f7fb;
}
.makeSearch{
margin-right: 18px;
border: none;
}
.searchBtn{
margin-left: auto;
border:none;
border-radius: 12px;
padding: 14px 44px;
width: 136px;
height: 48px;
background: #3470ff;
font-family: "Manrope", sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.42857;
color: #fff;
}
`