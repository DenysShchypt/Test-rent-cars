import styled from 'styled-components';

export const StyledHeader = styled.header`
text-align: center;
.headerLink{
text-decoration: none;
color: black;
font-size: 20px;
padding: 20px;
margin-right: 25px;
display: inline-flex;
border: 1px solid black;
border-radius: 10px;
transition: all 0.3s;
}
.headerLink.active{
background-color: #3470ff;;
color: #fff;
}
`