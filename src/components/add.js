import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {toast,Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { addUserStart } from "../redux/action";
import {css} from "@emotion/react";
import {
  Button,
  Box,
  Heading
} from "rebass"
import {Input,Label,Select} from "@rebass/forms";



const Add = () => {
  toast.configure({
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    transition: Slide,
    pauseOnFocusLoss: false,
    
});
  const values = {
    firstName: "",
    lastName: "",
    Age: "",
    Height:"",
    Gender: ["male", "female"],
  };
  const [initialState, setState] = useState(values);
  const { users: data } = useSelector((state) => state.data);
  const { firstName, lastName, Age,Height, Gender } = initialState;
  const dispatch = useDispatch();
  const currentId = useParams();
  const history = useHistory();
  const { id } = currentId;
  useEffect(() => {
    if (!(id)) {
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
    setState({values})
  },[id, data]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !firstName ||!lastName ||!Age ||!Height || !Gender) {
      return toast.warning("Please fill in all fields!!");
    }
    else if(Age<15 || Age>60)
    {
      return toast.error("USER MUST BE BETWEEN AGE 15 AND 60")
    }
    else if(Height<1 || Height>3){
      return toast.error(`NO USER HAVING ${Height} HEIGHT`)
    }
    else if (!(id)) {
      dispatch(addUserStart(initialState));
      history.push("/");
    }
   
    
  };

  return (
  <>
      <Heading    
	sx={{ textTransform:'uppercase' }}
  textAlign="center" color="blueviolet" p={20}  fontSize={40}
      >Add User</Heading>
        <Box 
  css={css`
  
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0px 40px rgba(0, 0, 0, 0);
	border-radius: 0px 100px 0px 100px;
	width: 50%;
	@media screen and (max-width: 1055px) {
		width: 90%;
		margin: 30px 2%;
		padding: 2px;
	}
`}
my= {30} mx={400} p= {20} height= {500}
  as="form" onSubmit={handleSubmit}>
        <Box 
  display="flex"
	flexDirection="column"
  justifyContent="center"
	w={50} my={1} mx={170}
	>
          <Label 
          color="black" 
          m={10} 
          htmlFor="firstName">firstName</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height={35}
          pl={20}
          color="black"
          display="block"
            type="text"
            name="firstName"
            onChange={handleInputChange}
          />
          </Box>
          <Box  
   display="flex"
   flexDirection="column"
   justifyContent="center"
   w={50} my={1} mx={170}
  >
          <Label 
          color="black" 
          m={10} 
          htmlFor="lastName">lastName</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height={35}
          pl={20}
          color="black"
          display="block" 
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />
          </Box>
          <Box  
   display="flex"
   flexDirection="column"
   justifyContent="center"
   w={50} my={1} mx={170}
	>
          <Label 
          color="black" 
          m={10} 
          htmlFor="Age">Age</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height={35}
          pl={20}
          color="black"
          display="block"
            type="number"
            name="Age"
            onChange={handleInputChange}
          />
          </Box>
          <Box  
   display="flex"
   flexDirection="column"
   justifyContent="center"
   w={50} my={1} mx={170}
	>
          <Label 
          color="black" 
          m={10}
           htmlFor="Height">Height</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height={35} 
          pl={20}
          color="black"
          display="block" 
            type="number"
            name="Height"
            
            onChange={handleInputChange}
          />
          </Box>
          <Box
           display="flex"
           flexDirection="column"
           justifyContent="center"
           w={50} my={1} mx={170}
          >
            <Label 
            color="black" 
            m={10}
            htmlFor="Gender">Select Gender</Label>
          <Select
          sx={{
            borderRadius:'50px'
          }}
          width={100}
          height={32}
          textAlign="center" 
          id="Gender"
          name="Gender"  onChange={handleInputChange}>
            <option hidden>select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          </Box>
          <Button 
          sx={{
            textTransform:'uppercase',
            cursor:'pointer'
          }}
         css={css`
         border-radius: 20px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
         &:hover{
          background-color: black;
        }
       `}
        mt={10} mr={20}  mb={50} ml={450} p="1px 40px" bg="blueviolet"
       fontWeight="700" fontSize="30px"
          type="submit">Add</Button>
        </Box>
        </>
  );
};
export default Add;
