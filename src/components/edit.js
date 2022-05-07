import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUserStart } from "../redux/action";
import { toast } from "react-toastify";
import {css} from "@emotion/react"
import { Box,Heading,Button } from "rebass";
import {
  Input,
  Label,
  Select,
} from "@rebass/forms";


const Edit = () => {
  const values = {
    firstName: "",
    lastName: "",
    Age: "",
    Height:"",
    Gender: ["male", "female"],
  };
  const [initialState, setState] = useState(values);
  const { users: data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { firstName, lastName, Age,Height, Gender } = initialState;
  const currentId = useParams();
  const history = useHistory();
  const { id } = currentId;
  useEffect(() => {
    if (!(id)) {
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };
  const handleSubmit = (e, obj) => {
    e.preventDefault();
    if ( !firstName ||!lastName ||!Age ||!Height || !Gender) {
      return toast.warning("Please fill in all fields!!");
    }
    else if(Age<15 || Age>60)
    {
      return toast.error("USER IS OUTSIDE OF THE AGE BOUNDARY")
    }
    
    else {
    dispatch(editUserStart({ initialState, id }));
    history.push("/");}
  };
  return (
    <>
       <Heading 
      sx={{
        textTransform:'uppercase'
      }}
        textAlign="center"
	color="blueviolet"
	p=" 20px 0px"
	fontSize="40px"
	
      >update User</Heading>
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
          <Box 
  display="flex" p={10} my={10} mx={200}
  >
          <Button 
          sx={{
            textTransform:'uppercase',
            cursor:'pointer'
          }}
          css={css`
          background-color:green;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
          &:hover{
            background-color: black;
          }
          `}
         display="flex"
         cursor=" pointer"
         fontWeight={700}
         pt={2} px={18} mx={20}
         color="#fff"
        type="submit"
           >
            Update
          </Button>
          <Button
          sx={{
            textTransform:'uppercase',
            cursor:'pointer'
          }}
          css={css`
          background-color:red;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
          &:hover{
            background-color: black;
          }
          `}
         display="flex"
         fontWeight={700}
         pt={2} px={18} mx={20}
         color=" #fff"
           onClick={() => history.push("/")}>cancel</Button>
          </Box>
          </Box>
        </>
  );
};

export default Edit;

