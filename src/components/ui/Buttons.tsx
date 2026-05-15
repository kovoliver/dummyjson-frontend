import type { SimpleButtonProps } from "../../core/interfaces";
import Button from "./Button";

export function ButtonPrimary(props: SimpleButtonProps) {
    return <Button {...props} bgColor="primary" textColor="white" />;
}

export function ButtonSecondary(props: SimpleButtonProps) {
    return <Button {...props} bgColor="secondary" textColor="white" />;
}

export function ButtonDanger(props: SimpleButtonProps) {
    return <Button {...props} bgColor="danger" textColor="white" />;
}

export function ButtonWarning(props: SimpleButtonProps) {
    return <Button {...props} bgColor="warning" textColor="black" />;
}

export function ButtonMain(props: SimpleButtonProps) {
    return <Button {...props} bgColor="main" textColor="white" />;
}

export function ButtonAccent(props: SimpleButtonProps) {
    return <Button {...props} bgColor="accent" textColor="white" />;
}

export function ButtonWhite(props: SimpleButtonProps) {
    return <Button {...props} bgColor="white" textColor="black" />;
}

export function ButtonBlack(props: SimpleButtonProps) {
    return <Button {...props} bgColor="black" textColor="white" />;
}