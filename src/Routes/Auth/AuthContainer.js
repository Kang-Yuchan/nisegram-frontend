import React, { useState } from "react";
import useInput from "../../Hooks/userInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries"; 
import { toast } from "react-toastify";


export default () => {
    
    const [ action, setAction ] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const requestSecret = useMutation(LOG_IN, {
        variables: { email: email.value },
        update: (_, { data }) => {
            const { requestSecret } = data;
            if(!requestSecret){
                toast.error("存在しないアカウントです。新たしいアカウントを登録してください。");
                setTimeout(() => setAction("signUp"), 1000)
            }
        }
    });
    const createAccount = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const onSubmit = e => {
        e.preventDefault();
        if(action === "logIn") {
            if (email.value !== "") {
                requestSecret();
            } else {
                toast.error("メールアドレスを入力してください。");
            }
        } else if(action === "signUp") {
            if (

            email.value !== "" &&
            username.value !== "" &&
            firstName.value !== "" &&
            lastName.value !== ""
            
            ) {
                createAccount();         
            } else {
                toast.error("全項目を入力してください。");
            }
          }
    };
    return (
        <AuthPresenter 
            setAction={setAction} 
            action={action} 
            username={username} 
            firstName={firstName} 
            lastName={lastName}
            email={email}
            onSubmit={onSubmit}
        />
    );
};