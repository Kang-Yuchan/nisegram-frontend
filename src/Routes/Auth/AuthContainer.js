import React, { useState } from "react";
import useInput from "../../Hooks/userInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries"; 
import { toast } from "react-toastify";


export default () => {
    
    const [ action, setAction ] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const secret = useInput("");
    const email = useInput("");
    const requestSecretMutation = useMutation(LOG_IN, {
        variables: { email: email.value }
    });
    const createAccountMutation = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const confrimSecretMutation = useMutation(CONFIRM_SECRET, {
        variables: {
            email: email.value,
            secret: secret.value
        }
    })

    const localLogInMutation = useMutation(LOCAL_LOG_IN);
    

    const onSubmit = async e => {
        e.preventDefault();
        if(action === "logIn") {
            if (email.value !== "") {
                try {
                   const { data: { requestSecret }} = await requestSecretMutation();
                   if(!requestSecret){
                       toast.error("存在しないアカウントです。新たしいアカウントを登録してください。");
                       setTimeout(() => setAction("signUp"), 1000)
                   } else {
                       toast.success("ログイン認証のメールで、Login Secretをチェックしてください。");
                       setAction("confirm");
                   }
                } catch {
                    toast.error("認証ができません、再確認をしてください。")
                }
               
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
              try {  
               const { data: { createAccount } } = await createAccountMutation();
               if(!createAccount) {
                   toast.error("アカウントを作成できませんでした。");
               } else {
                   toast.success("アカウントが作成されました! ログインしてください。")
                   setTimeout(() => setAction("logIn"), 1000);
               }
              } catch (e) {
                  toast.error(e.message)
              }         
            } else {
                toast.error("全項目を入力してください。");
            }
          } else if (action === "confirm") {
                if(secret.value !== "") {
                    try {
                        const { 
                            data: { confirmSecret: token }
                        } = await confrimSecretMutation();
                        if(token !== "" && token !== undefined) {
                            localLogInMutation({variables: { token } });
                        } else {
                            throw Error();
                        }
                    } catch {
                        toast.error("シークレットを認証できませんでした、再確認してください。");
                    }
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
            secret={secret}
            onSubmit={onSubmit}
        />
    );
};