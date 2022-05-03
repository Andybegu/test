import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: 50%;
	margin: 10px 5%;
	padding: 0px 20px;
	/* background-color: red; */
`;

export const P = styled.p`
	margin-left: 6%;
	text-transform: uppercase;
	font-size: 40px;
	justify-content: center;
`;

export const Card = styled.div`
	width: 20%;
	padding: 20px;
	margin: 10px 10px;
	font-family: arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 40px rgba(0, 0, 0, 0);
	border-radius: 0px 30px 0px 30px;

	@media screen and (max-width: 1058px) {
		width: 90%;
	}
`;

export const Button = styled.button`
	color: black;
	border-radius: 40px;
	font-size: 16px;
	cursor: pointer;
	padding: 7px 15px;
	margin: 10px;
	border: none;
	justify-content: space-between;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	background-color: ${(props) => (props.primary ? 'red' : 'green')};
`;
