import styled from 'styled-components';


export const CardWrapper = styled.div`
    display: flex;
    flex-direction:row;	
    height: 50%;
	margin: 20px;
	border-radius: 0px 0px 0px 0px;
`;

export const P=styled.p`
margin-left:40px;
text-transform:uppercase;
font-size:40px;
justify-content:center;
`;

// export const Wrapper=styled.div`
// display:flex;
// flex-direction:row;
// 	height: 70%;
// 	margin: 20px;
// 	padding: 20px;
// 	margin-top: 30px;
// 	font-family: Quicksand, arial, sans-serif;
// 	box-shadow: 0 0 20px rgba(0, 0, 0, 1), 0 0px 40px rgba(0, 0, 0, 0);
// 	border-radius: 0px 40px 0px 40px;
// `
export const Card=styled.div`
    width:40%;
	padding:20px;
	font-family:arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 40px rgba(0, 0, 0, 0);
	border-radius: 0px 0px 0px 0px;
`
// export const Label=styled.label`
// color:black;
// margin:10px;
// font-size:20px
// display:flex;

// `
export const ParantButton = styled.div`
	display: flex;
	padding:10px;
	margin:20px
`;
export const Button = styled.button`
	color: black;
	border-radius:40px;
	font-size: 16px;
	cursor: pointer;
	padding: 10px;
	margin:10px;
	justify-content:space-between;
	text-transform: uppercase;
 font-weight:700 ;
 box-shadow:0 0 10px rgba(0,0,0,0.3) ;
`;

