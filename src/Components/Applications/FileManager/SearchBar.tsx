import React, { ChangeEvent } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setSearchTerm } from "@/Redux/Reducers/FileManagerSlice";

const SearchBar = () => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <Form className="form-inline">
      <FormGroup className="d-flex align-items-center mb-0">
        <i className="fa fa-search" />
        <Input className="form-control-plaintext" type="text" value={searchTerm} onChange={(e) => handleChange(e)} placeholder='Search...' />
      </FormGroup>
    </Form>
  );
};
export default SearchBar;