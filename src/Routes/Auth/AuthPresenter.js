import React from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

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

const LogoImg = styled.img`
    margin-left: 44px;
    margin-top: -20px;
    margin-bottom: 30px;
`;

export default ({
    action,
    username,
    firstName,
    lastName,
    email,
    setAction,
    onSubmit,
    secret
}) => (
    <Wrapper>
        <Form>
        <LogoImg width= "170px" height= "70px" src="https://i.gyazo.com/bb3f106dc610ff280bece282e96c2c9a.png" />
            {action === "logIn" && (
                <>
	                <Helmet>
                        <title>Log In | Nisegram</title>
                    </Helmet>
                    <form onSubmit={onSubmit}>
                        <Input placeholder={"メールアドレス"} {...email } type="email" />
                        <Button text={"ログイン"} />
                    </form>
                </>
            )} 
            {action === "signUp" && (
                <>
                    <Helmet>
                        <title>Sign Up | Nisegram</title>
                    </Helmet>
                    <form onSubmit={onSubmit}>
                        <Input placeholder={"名前"} {...firstName }/>
                        <Input placeholder={"姓"} {...lastName }/>
                        <Input placeholder={"メールアドレス"} {...email} type="email" />
                        <Input placeholder={"ユーザーネーム"} {...username} />
                        <Button text={"登録する"} />
                    </form>
                </>
            )}
             {action === "confirm" && (
                <>
                    <Helmet>
                        <title>Confirm Secret | Nisegram</title>
                    </Helmet>
                    <form onSubmit={onSubmit}>
                        <Input placeholder={"ログインシークレット"} required {...secret } />
                        <Button text={"認証する"} />
                    </form>
                </>
             )}
        </Form>
        
        {action !== "confirm" && (
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
        )}
    </Wrapper>
);
