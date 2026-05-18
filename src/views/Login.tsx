import { useState } from "react";
import AuthService from "../app/AuthService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
    const as: AuthService = new AuthService();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async () => {
        try {
            const response = await as.login({
                username, password
            });


        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <Button
                size="md"
                variant="main"
                text="Nyomj meg!"
            />

            <Input
                type="text"
                placeholder="írj be valamit!"
                variant="primary"
                size="md"
            />
        </div>
    );
}