
import styled, {createGlobalStyle} from "styled-components"


export const GlobalStyle=createGlobalStyle`
body{
	margin:0px;
	padding: 0px;
	background:blueblack;
}
`

export const Container=styled.div`
font-family:Arial, Helvetica, sans-serif ;
background-color:blue;
margin-left:30px;
`

export const H1=styled.h1`
/* "text-center text-dark py-3 display-2"; */
text-align:center ;
color:blueviolet ;
padding-top:20px ;
font-size:70px ;
text-transform:uppercase;
`
export const ContainerForm=styled.div`
display:flex;
flex-direction:column;
width:300px;
justify-content:center;
margin-top:10px 

`
export const Form=styled.div`


`
export const Label=styled.label`
color:black;
margin:10px;
`

export const Input =styled.input`
    height:30px;
	color: black;
    display: block;
	
`
export const Select=styled.select`
width:100px;
height:30px;
text-align:center;
`
export const Option=styled.option`
margin-top:50px ;
background-color:palevioletred;
`

export const Button=styled.button`
 font-size:30px ;
 margin-left:550px ;
 background-color:blueviolet ;
 cursor:pointer ;
 font-weight:700 ;
 padding:1px 40px ;
 box-shadow:0 0 10px rgba(0,0,0,0.15) ;
 border-radius:20px ;

 &:hover{
	 opacity:0.9 ;
	 transform:scale(0.98) ;
 }
`;
export const Erorr=styled.div`
    color: red;
    margin-left:300px;
	font-size: 20px;
	
`
export const FormInput=styled.form`	
    height: 500px;
	margin: 300px;
	padding: 20px;
	margin-top: 30px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 40px rgba(0, 0, 0, 0);
	border-radius: 0px 0px 0px 0px;
`

export const ButtonType=styled.button`
display:flex;
 margin:5px ;
 background-color:${(props)=>(props.primary?"blueviolet":"red")} ;
 cursor:pointer ;
 font-weight:700 ;
 box-shadow:0 0 10px rgba(0,0,0,0.15) ;
 border-radius:50px ;
`





