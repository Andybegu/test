import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContactsStart, deleteContactStart } from "../redux/action";
import {
  P,
  CardWrapper,
  Button,
  Card
} from "../style/home";
const Home = () => {
  const { contacts: data } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsStart());
  }, [dispatch]);
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record ?")) {
      dispatch(deleteContactStart(id));
      dispatch(getContactsStart());
    }
  };

  return (
    <>
      <P>User Data</P>
      <CardWrapper >
            {Object.keys(data).map((id, index) => {
                
              return (
              
                <Card key={id}>
                <p>Name: {data[id].firstName}</p>
                <p>Salary: {data[id].lastName}</p>
                <p>AGE: {data[id].Age}</p>
                <p>Height:{data[id].Height}</p>
                <p>Gender: {data[id].Gender}</p>
                <Link to={`/update/${id}`}>
                     <Button>Edit</Button>
                    </Link>
                     <Button primary onClick={() => onDelete(id)}>
                       DELETE
                     </Button>
                     </Card>
                
              );
              
            })}
            </CardWrapper>
    </>
  );
};

export default Home;
