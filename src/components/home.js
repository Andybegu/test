import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getUserStart, deleteUserStart } from "../redux/action";
import { Box,Button,Heading ,Text,Card} from "rebass";
import {css,keyframes} from "@emotion/react"


const Home = () => {
  const { users: data } = useSelector((state) => state.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserStart());
  }, [dispatch]);
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteUserStart(id));
      dispatch(getUserStart());
    }
  };
  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  return (
    <>

      <Heading
       sx={{
        textTransform:'uppercase'
      }}
        textAlign="center"
	color="blueviolet"
	padding=" 20px 0px"
	fontSize="40px"
      >User Data</Heading>

       {loading && <Box css={css`
       animation: ${rotate360} 1s linear infinite;
       transform: translateZ(0);
    
       border-top: 2px solid grey;
       border-right: 2px solid grey;
       border-bottom: 2px solid grey;
       border-left: 4px solid black;
       background: transparent;
       width: 204px;
       height: 204px;
       border-radius: 50%;
       margin: 10% 45%;
       `}></Box>}

      <Box 
      display= "flex"
      flexWrap="wrap"
      height={50}
      my={10} mx={50} px={20}
       >
            {Object.keys(data).map((id, index) => {
                
              return (
              
                <Card key={id}
                w={50} p={70} my={20} mx={10}
                fontFamily="arial, sans-serif"
               css={css`
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0);
      border-radius: 0px 50px 0px 50px;
      @media screen and (max-width: 1055px) {
        width: 90%;
      }
    `}
	
     >
                <Text p={2}>Name: {data[id].firstName}</Text>
                <Text p={2}>Salary: {data[id].lastName}</Text>
                <Text p={2}>AGE: {data[id].Age}</Text>
                <Text p={2}>Height:{data[id].Height}</Text>
                <Text p={2}>Gender: {data[id].Gender}</Text>
                
                <Link to={`/update/${id}`}>
                     <Button 
                     sx={{
                      textTransform:'uppercase',
                      cursor:'pointer'
                    }}
                     css={css`
                     border-radius: 20px;
                    box-shadow=0 0 10px rgba(0, 0, 0, 0.3);
                     `}
                     color="black" bg="green"
                     fontSize="16px"
                     py={2} px={15} m={10}
                     justifyContent=" space-between"
                     fontWeight={700}
                     >Edit</Button>
                    </Link>
                     <Button
                     sx={{
                      textTransform:'uppercase',
                      cursor:'pointer'
                    }}
                    css={css`
                    border-radius: 20px;
                   box-shadow= 0 0 10px rgba(0, 0, 0, 0.3);
                    `}
                    color="black" bg="red"
                     fontSize="16px"
                     py={2} px={15} m={10}
                     justifyContent=" space-between"
                     fontWeight={700}
                      onClick={() => onDelete(id)}>
                       DELETE
                     </Button>
                     
                     </Card>
                
              );
              
            })}
            </Box>
            {data.length === 0 && !loading&& (
				<Text>No Employees Found!</Text>
			)}
            {error && !loading && <Text>{error}</Text>}
    </>
  );
};

export default Home;
