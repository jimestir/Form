import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  Label,
  ContainTerms,
  ContainButtonCenter,
  Button,
  MessageSuccessful,
  MessageError,
} from "./elements/Form.js";
import Input from "./components/Input";

function App() {
  const [user, setUser] = useState({
    countryside: "",
    valid: null,
  });

  const [name, setName] = useState({
    countryside: "",
    valid: null,
  });
  const [password, setPassword] = useState({
    countryside: "",
    valid: null,
  });
  const [password2, setPassword2] = useState({
    countryside: "",
    valid: null,
  });
  const [email, setEmail] = useState({
    countryside: "",
    valid: null,
  });
  const [phone, setPhone] = useState({
    countryside: "",
    valid: null,
  });
  const [terms, setTerms] = useState(false);
  const [formValidate, setFormValidate] = useState(null);

  const RegEx = {
    userRegex: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    passwordRegex: /^.{4,12}$/, // 4 a 12 digitos.
    emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneRegex: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validatePassword2 = () => {
    if (password.countryside.length > 0) {
      if (password.countryside !== password2.countryside)
        setPassword2((prevState) => {
          console.log(prevState);
          return { ...prevState, validate: "false" };
        });
      else
        setPassword2((prevState) => {
          console.log(prevState);
          return { ...prevState, validate: "true" };
        });
    }
  };

  const onchangeTerms = (e) => {
    setTerms(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      user.validate === "true" &&
      name.validate === "true" &&
      password.validate === "true" &&
      password2.validate === "true" &&
      email.validate === "true" &&
      phone.validate === "true" &&
      terms
    ) {
      setFormValidate(true);
      setUser({ countryside: "", validate: null });
      setName({ countryside: "", validate: null });
      setPassword({ countryside: "", validate: null });
      setPassword2({ countryside: "", validate: null });
      setEmail({ countryside: "", validate: null });
      setPhone({ countryside: "", validate: null });
    } else setFormValidate(false);
  };

  return (
    <main>
      <Form action="" onSubmit={onSubmit}>
        <Input
          state={user}
          setState={setUser}
          label="User"
          placeholder="Username"
          type="text"
          name="user"
          legendError="The username must be from 4 to 16 digits and can only contain numbers, letters and underscores."
          regex={RegEx.userRegex}
        />
        <Input
          state={name}
          setState={setName}
          label="Name"
          type="text"
          name="name"
          legendError="The name can only contain letters and spaces."
          regex={RegEx.nameRegex}
        />
        <Input
          state={password}
          setState={setPassword}
          label="Password"
          type="password"
          name="password"
          legendError="The password must be between 4 and 12 digits."
          regex={RegEx.passwordRegex}
        />
        <Input
          state={password2}
          setState={setPassword2}
          label="Repeat Password"
          type="password"
          name="password2"
          legendError="Both passwords must match."
          fn={validatePassword2}
        />
        <Input
          state={email}
          setState={setEmail}
          label="Email"
          type="email"
          name="email"
          legendError="The mail can only contain letters, numbers and periods."
          regex={RegEx.emailRegex}
        />
        <Input
          state={phone}
          setState={setPhone}
          label="Phone"
          type="phone"
          name="phone"
          legendError="The phone can only contain numbers and the maximum is 7 apart from the operator"
          regex={RegEx.phoneRegex}
        />

        <ContainTerms>
          <Label>
            <input type="checkbox" checked={terms} onChange={onchangeTerms} />I
            accept the terms and conditions.
          </Label>
        </ContainTerms>
        {formValidate === false && (
          <MessageError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Please fill in the form correctly.
            </p>
          </MessageError>
        )}
        <ContainButtonCenter>
          <Button type="submit">Submit</Button>
          {formValidate === true && (
            <MessageSuccessful>Submit form successfully!</MessageSuccessful>
          )}
        </ContainButtonCenter>
      </Form>
    </main>
  );
}

export default App;
