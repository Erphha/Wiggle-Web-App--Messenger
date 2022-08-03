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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="نام کاربری" />
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit"> ثبت نام در ویگل</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        حساب کاربری دارید؟
        <BoldLink href="#" onClick={switchToSignin}>
          وارد شوید!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}