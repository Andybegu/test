import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
	margin:0px;
	padding: 0px;
	background:blueblack;
}
`;

// export const Container = styled.div`
// 	font-family: Arial, Helvetica, sans-serif;
// 	background-color: blue;
// 	margin-left: 30px;
// 	back
// `;
export const FormInput = styled.form`
	height: 500px;
	margin: 30px 25%;
	padding: 20px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 40px rgba(0, 0, 0, 0);
	border-radius: 0px 100px 0px 100px;
	width: 50%;
	@media screen and (max-width: 1055px) {
		width: 90%;
		margin: 30px 2%;
		padding: 2px;
	}
`;
export const H1 = styled.h1`
	text-align: center;
	color: blueviolet;
	padding: 20px 0px;
	font-size: 40px;
	text-transform: uppercase;
`;
export const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: center;
	margin: 10px 25%;
	/* background-color: #777df4; */
`;
export const Form = styled.div``;
export const Label = styled.label`
	color: black;
	margin: 10px;
`;

export const Input = styled.input`
	height: 35px;
	color: black;
	display: block;
	border-radius: 50px;
	padding-left: 20px;
`;
export const Select = styled.select`
	width: 100px;
	height: 30px;
	text-align: center;
	border-radius: 50px;
`;
export const Option = styled.option`
	margin-top: 50px;
	/* background-color: palevioletred; */
`;

export const Button = styled.button`
	font-size: 30px;
	margin: 20px 20px 20px 60%;
	background-color: blueviolet;
	cursor: pointer;
	font-weight: 700;
	padding: 1px 40px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	border: none;

	&:hover {
		background-color: antiquewhite;
	}
`;
export const Erorr = styled.div`
	color: red;
	margin-left: 300px;
	font-size: 20px;
`;
export const ParantButton = styled.div`
	display: flex;
	padding: 10px;
	margin: 20px 50%;
`;
export const ButtonType = styled.button`
	display: flex;
	background-color: ${(props) => (props.primary ? 'blueviolet' : 'red')};
	cursor: pointer;
	font-weight: 700;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	border-radius: 50px;
	padding: 7px 20px;
	border: none;
	margin: 0px 20px;
	color: #fff;
`;
