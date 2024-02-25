import styled from 'styled-components';

export const StyleCar = styled.div`

max-width: 274px;
display: flex;
flex-wrap: wrap;
align-content: space-between;
.boxImg{
position: relative;  
}
.carImg{
border-radius: 14px;
width: 100%;
height: 268px;
margin-bottom: 14px;
background: #f3f3f2, linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%);
}
.heart{
position: absolute;
top: 14px; 
right: 14px; 
width: 18px; 
height: 18px;
stroke:white;
}
.activeHeart{
fill: #3470FF;
stroke: none;
}
.heartBtn{
  background-color: inherit;
  border: none;
}

.description{
margin-bottom: 28px;
}

.titleDescription{
display: flex;
padding-right: 9px;
margin-bottom: 8px;
align-items: baseline;
}

.titleCar{
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
color: #121417;
}
.modelColor{
    color: #3470ff;
}
.price{
    margin-left: auto;
}
.carFeatures{
    display: flex;
    flex-wrap: wrap;
    padding-right: 4px;
}
.carText{
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);
}
.carBtn{
margin-top: auto;
border:none;
border-radius: 12px;
padding: 1px 99px;
width: 274px;
height: 44px;
background: #3470ff;
font-family: "Manrope", sans-serif;
font-weight: 600;
font-size: 12px;
line-height: 1.42857;
color: #fff;
cursor: pointer;
}

`