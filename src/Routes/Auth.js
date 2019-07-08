import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/userInput";


const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox};
    border-radius: 0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
`;

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 7px;
            }
        }
        button {
            margin-top: 10px;
        }
    }
`;

export default () => {
    
    const [ action, setAction ] = useState("logIn");
    const username = useInput("");
    const password = useInput("");
    const fullName = useInput("");
    const email = useInput("");

    return (
        <Wrapper>
            <Form>
                {action === "logIn" ? (
                    <form>
                        <Input placeholder={"ユーザーネーム"} {...username } />
                        <Input placeholder={"パスワード"} {...password } type="password" />
                        <Button text={"ログイン"} />
                    </form>
                ) : (
                    <form>
                        <Input placeholder={"メールアドレス"} {...email } type="email" />
                        <Input placeholder={"フルネーム"} {...fullName }/>
                        <Input placeholder={"ユーザーネーム"} {...username } />
                        <Input placeholder={"パスワード"} {...password } type="password" />
                        <Button text={"登録する"} />
                    </form>
                )}
            </Form>
            <StateChanger>
                {action === "logIn" ? (
                  <>
                    アカウントをお持ちでないですか？{" "}
                    <Link onClick={() => setAction("signUp")}>登録する</Link>
                  </>
                ) : (
                  <>
                    アカウントはお持ちですか？{" "}
                    <Link onClick={() => setAction("logIn")}>ログインする</Link>
                  </>
                )}
            </StateChanger>
        </Wrapper>
    );
};