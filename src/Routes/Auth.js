import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox};
    border-radius: 0px;
    width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
`;

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

export default () => {
    
    const [ action, setAction ] = useState("logIn");
    
    return (
        <Wrapper>
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