import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">رمز عبور را فراموش کرده اید؟</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">ورود به حساب کاربری</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        حساب کاربری ندارید؟{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          ثبت نام کنید!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}