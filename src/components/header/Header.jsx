import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories } from "../../helper/data";

export const Header = ({setClick}) => {
  return (
    
    <Container className="header">
      <div className="d-flex align-items-center">
      <img src="./img/book-2343533_1280.webp" alt="" width="150px"/>
      <h1>Bookstore</h1>
      </div>
     
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
   {categories.map((category)=> (
    <Button type="button" onClick={(e)=>setClick(e.target.textContent)}>{category.toUpperCase()}</Button>
   ))}
      </Stack>
    </Container>
  );
};
