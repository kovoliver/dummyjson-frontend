import { useState } from "react";
import AuthService from "../app/AuthService";
import { InputMain } from "../components/ui/Inputs";
import { BoxSecondary } from "../components/ui/Boxes";
import { ButtonMain } from "../components/ui/Buttons";
import { apiCatch } from "../core/utils";
import { useUser } from "../components/modules/UserProvider";
import type { User } from "../core/types";
import { useNotify } from "../components/modules/NotificationProvider";

export default function Login() {
    const as: AuthService = new AuthService();
    const [username, setUsername] = useState<string>("emilys");
    const [password, setPassword] = useState<string>("emilyspass");
    const userContext = useUser();
    const notifyContext = useNotify();

    async function login(e:any):Promise<void> {
        e.preventDefault();

        try {
            const response = await as.login({
                username, password
            });

            const userData:User = {
                id:response.id,
                username:response.username,
                email:response.email,
                firstName:response.firstName,
                lastName:response.lastName,
                gender:response.gender
            };

            userContext.login(
                userData, 
                response.accessToken,
                response.refreshToken
            );
            
            notifyContext.setMessage("Hát most aztán sikerült bejelentkezned barátom!");
        } catch (err) {
            apiCatch(err);
        }
    };

    return (
        <div>
            <h1 className="text-xl text-center text-main mb-3 font-bold">Login</h1>
            
            <BoxSecondary customClasses={['max-w-md mx-auto text-center']}>
                <form>
                    <b className="block text-main mb-2">Username</b>

                    <InputMain
                        placeholder="username"
                        type="text" customClasses={['w-3/4']}
                        onChange={(e)=>setUsername(e.target.value)}
                        value="emilys"
                    />

                    <b className="block text-main mb-2">Password</b>

                    <InputMain
                        placeholder="password"
                        type="password" customClasses={['w-3/4']}
                        onChange={(e)=>setPassword(e.target.value)}
                        value="emilyspass"
                    />

                    <ButtonMain
                        text="Login"
                        icon="sign-in"
                        customClasses={['block mx-auto my-3']}
                        onClick={login}
                    />
                </form>
            </BoxSecondary>
        </div>
    );
}