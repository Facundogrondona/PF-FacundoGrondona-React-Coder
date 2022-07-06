//Elements and modules

import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import swal from "sweetalert";

//Styles

import "./SearchButton.scss";

function SearchButton() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputTextSanit = inputText.replace(/\s/g, "");
    if (inputTextSanit === "") {
      swal({
        title: "Ingrese un producto",
        icon: "warning",
        button: "Aceptar",
      });
      setInputText("");
      return false;
    } else if (inputTextSanit.length < 3) {
      swal({
        title: "Ingrese un producto con mas de 3 caracteres",
        icon: "warning",
        button: "Aceptar",
      });
      setInputText(" ");
      return false;
    } else {
      navigate(`/result/${inputTextSanit}`);
    }
    setInputText("");
  };
  const navigate = useNavigate();

  return (
    <>
      <Form className="styleForm" onSubmit={handleSubmit}>
        <FormControl
          aria-label="Buscar"
          aria-describedby="buttonSearch"
          placeholder="Buscar..."
          value={inputText}
          className="inputSearch Ease-In"
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          className="buttonSearch"
          type="submit"
        >
          <SearchIcon />
        </Button>
      </Form>
    </>
  );
}

export default SearchButton;
