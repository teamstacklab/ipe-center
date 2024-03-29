import React from "react";
import { Form } from "@/components/Form";

export const RegisterForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>Nome:</Form.Label>
        <Form.Input controlId={"controlId"} placeholder={"Digite seu nome"} />
        <Form.Label>Email:</Form.Label>
        <Form.Input controlId={"email"} placeholder={"Digite seu email"} />
        <Form.Label>Username:</Form.Label>
        <Form.Input controlId={"username"} placeholder={"Digite seu username"} />
        <Form.Div>
          <Form.Div $column>
            <Form.Label>CPF:</Form.Label>
            <Form.Input controlId={"cpf"} placeholder={"Digite seu CPF"} />
          </Form.Div>
          <Form.Div $column>
            <Form.Label>Whatsapp:</Form.Label>
            <Form.Input controlId={"whatsapp"} placeholder={"Digite seu Whatsapp"} />
          </Form.Div>
        </Form.Div>
        <Form.Label>Nome da loja:</Form.Label>
        <Form.Input controlId={"loja"} placeholder={"Digite o nome da loja"} />
        <Form.Label>Senha:</Form.Label>
        <Form.Input
          name={"password"}
          placeholder={"Digite sua senha"}
          type={"password"}
        />
        <Form.Label>Confirmação da senha:</Form.Label>
        <Form.Input
          name={"confirmation"}
          placeholder={"Confirme sua senha"}
          type={"password"}
        />
        <Form.Submit>Pedir registro</Form.Submit>
      </Form>
    </React.Fragment>
  );
};
