import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {toast,Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { addContactStart } from "../redux/action";
import {
  Button,
  ContainerForm,
  FormInput,
  H1,
  Input,
  Label,
  Option,
  Select,
} from "../style/add";


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
  //const [error, setError] = useState([]);
  const { contacts: data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { firstName, lastName, Age,Height, Gender } = initialState;
  const currentId = useParams();
  const history = useHistory();
  const { id } = currentId;
  console.log("currentId", currentId);
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
      dispatch(addContactStart(initialState));
      history.push("/");
    }
   
    
  };

  return (
  <>
      <H1>Add User</H1>
        <FormInput onSubmit={handleSubmit}>
        <ContainerForm> 
          <Label>firstName</Label>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          </ContainerForm>
          <ContainerForm> 
          <Label>lastName</Label>
          <Input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          </ContainerForm>
          <ContainerForm>
          <Label>Age</Label>
          <Input
            type="number"
            name="Age"
            value={Age}
            onChange={handleInputChange}
          />
          </ContainerForm>
          <ContainerForm>
          <Label>Height</Label>
          <Input
            type="number"
            name="Height"
            value={Height}
            onChange={handleInputChange}
          />
          </ContainerForm>
          <ContainerForm>
            <Label>Gender</Label>
          <Select name="Gender" value={Gender} onChange={handleInputChange}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          </ContainerForm>
          <Button type="submit">Add</Button>
        </FormInput>
        </>
  );
};
export default Add;
