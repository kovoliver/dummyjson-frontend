import { useState } from "react";
import AuthService from "../app/AuthService";
import { ButtonMain } from "../components/ui/Buttons";
import { InputMain, InputPrimary } from "../components/ui/Inputs";

export default function Login() {
    const as:AuthService = new AuthService();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async ()=> {
        try {
            const response = await as.login({
                username, password
            });


        } catch(err) {
            console.log(err);
        }
    };

    return(
        <div>
            <form onSubmit={login}>
                <h4>Email</h4>
                <InputPrimary
                    placeholder="email cím"
                    onChange={(e)=>setUsername(e.target.value)}
                    size="sm"
                    type="email"
                />

                <h4>Password</h4>
                <InputPrimary
                    placeholder="email cím"
                    onChange={(e)=>setPassword(e.target.value)}
                    size="sm"
                    type="password"
                />

                <ButtonMain
                    text="login"
                    size="md"
                    icon="right-to-bracket"
                />

                <div className="bg-main p-4 border-secondary border-4"></div>
            </form>
        </div>
    );
}