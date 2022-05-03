import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editContactStart } from "../redux/action";
import {
  ButtonType,
  ContainerForm,
  FormInput,
  H1,
  Input,
  Label,
  Option,
  Select,
  ParantButton
} from "../style/add";
import { toast } from "react-toastify";

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
      <H1>update User</H1>
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
          <Select name="Gender" onChange={handleInputChange}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          </ContainerForm>
          <ParantButton>
          <ButtonType type="submit" primary>
            Update
          </ButtonType>
          <ButtonType onClick={() => history.push("/")}>cancel</ButtonType>
          </ParantButton>
        </FormInput>
  
        </>
  );
};

export default Edit;

// "form-group d-flex align-items-center justify-content-between my-2"
