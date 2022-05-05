import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editContactStart } from "../redux/action";
import {
  Input,
  Label,
  Select,
} from "@rebass/forms";
import { toast } from "react-toastify";
import { Box,Heading,Button } from "rebass";
import {css} from "@emotion/react"


const Edit = () => {
  const values = {
    firstName: "",
    lastName: "",
    Age: "",
    Height:"",
    Gender: ["male", "female"],
  };
  const [initialState, setState] = useState(values);
  const { contacts: data } = useSelector((state) => state.data);
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
    dispatch(editContactStart({ initialState, id }));
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
	padding=" 20px 0px"
	fontSize="40px"
	
      >update User</Heading>
        <Box 
  css={css`
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
`}
  as="form" onSubmit={handleSubmit}>
        <Box 
  display="flex"
	flexDirection="column"
  justifyContent="center"
	w="50%" m="10px 25%"
	>
          <Label 
          color="black" 
          margin="10px" htmlFor="firstName">firstName</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height="35px"
          color="black"
          display="block"
          borderRadius="50px"
          pl="20px"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          </Box>
          <Box  
  display="flex"
	flexDirection="column"
  justifyContent="center"
	w="50%" m="10px 25%"
  >
          <Label 
          color="black" 
          margin="10px" htmlFor="lastName">lastName</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height="35px" color="black"
          display="block" borderRadius="50px"
          paddingLeft="20px"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          </Box>
          <Box  
  display="flex"
	flexDirection="column"
	width="50%"
	justifyContent="center"
	margin="10px 25%">
          <Label 
          color="black" 
          margin="10px" htmlFor="Age">Age</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height="35px" color="black"
          display="block" borderRadius="50px"
          pl="20px"
            type="number"
            name="Age"
            value={Age}
            onChange={handleInputChange}
          />
          </Box>
          <Box  
  display="flex"
	flexDirection="column"
	width="50%"
	justifyContent="center"
	margin="10px 25%">
          <Label 
          color="black" 
          margin="10px" htmlFor="Height">Height</Label>
          <Input
           sx={{
            borderRadius:'50px'
          }}
          height="35px" color="black"
          display="block" borderRadius="50px"
          paddingLeft="20px"
            type="number"
            name="Height"
            value={Height}
            onChange={handleInputChange}
          />
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          width="50%"
          justifyContent="center"
          margin="0px 25%"
          >
            <Label 
            color="black" 
            margin="10px" 
            htmlFor="Gender">Select Gender</Label>
          <Select
          sx={{
            borderRadius:'50px'
          }}
          width="100px" height="30px"
          textAlign="center" 
          id="Gender"
          name="Gender" value={Gender} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          </Box>
          <Box 
  display="flex"
	padding="10px"
	margin="10px 20%"
  >
          <Button 
          css={css`
          background-color:green;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
          `}
         display="flex"
         cursor=" pointer"
         fontWeight=" 700"
         padding=" 7px 20px"
         border="none"
         margin=" 0px 20px"
         color=" #fff"
           type="submit">
            Update
          </Button>
          <Button
          css={css`
          background-color:red;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
          `}
         display="flex"
         cursor=" pointer"
         fontWeight=" 700"
         padding=" 7px 20px"
         border="none"
         margin=" 0px 20px"
         color=" #fff"
           onClick={() => history.push("/")}>cancel</Button>
          </Box>
          </Box>
        </>
  );
};

export default Edit;

