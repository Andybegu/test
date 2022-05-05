import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getUserStart, deleteUserStart } from "../redux/action";
import { Box,Button,Heading ,Text} from "rebass";
import {css} from "@emotion/react"

const Home = () => {
  const { users: data } = useSelector((state) => state.data);
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
      <Box 
      display= "flex"
      flexWrap="wrap"
      height=" 50%"
      margin="10px 5%"
      padding="0px 20px"
       >
            {Object.keys(data).map((id, index) => {
                
              return (
              
                <Box 
                w="50%" p="70px" m="20px 10px"
               css={css`
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0);
      border-radius: 0px 50px 0px 50px;
      @media screen and (max-width: 1055px) {
        width: 90%;
      }
    `}
	fontFamily="arial, sans-serif"
     >
                <Text p={2} m={0} >Name: {data[id].firstName}</Text>
                <Text p={2}>Salary: {data[id].lastName}</Text>
                <Text p={2}>AGE: {data[id].Age}</Text>
                <Text p={2}>Height:{data[id].Height}</Text>
                <Text p={2}>Gender: {data[id].Gender}</Text>
                
                <Link  to={`/update/${id}`}>
                     <Button 
                     sx={{
                      textTransform:'uppercase'
                    }}
                     css={css`
                     border-radius: 20px;
                    text-transform=uppercase;
                    box-shadow=0 0 10px rgba(0, 0, 0, 0.3);
                     `}
                     color="black"
                     bg="green"
                     border-radius="40px"
                     fontSize="16px"
                     cursor="pointer"
                     padding=" 7px 15px"
                     margin="10px"
                     border="none"
                     justifyContent=" space-between"
                     textTransform="uppercase"
                     fontWeight="700"
                    
                     >Edit</Button>
                    </Link>
                     <Button
                     sx={{
                      textTransform:'uppercase'
                    }}
                    css={css`
                    border-radius: 20px;
                   text-transform=uppercase;
                   box-shadow= 0 0 10px rgba(0, 0, 0, 0.3);
                    `}
                    color="black"
                    bg="red"
                    fontSize="16px"
                    cursor="pointer"
                    padding=" 7px 10px"
                    margin="5px"
                    border="none"
                    justifyContent=" space-between"
                    textTransform="uppercase"
                    fontWeight="700"  onClick={() => onDelete(id)}>
                       DELETE
                     </Button>
                     
                     </Box>
                
              );
              
            })}
            </Box>
    </>
  );
};

export default Home;
