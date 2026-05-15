import Alert from "./Alert";
import type { SimpleBoxProps } from "../../core/interfaces";

export function AlertPrimary(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="primary" textColor="white" />;
}

export function AlertSecondary(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="secondary" textColor="white" />;
}

export function AlertDanger(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="danger" textColor="white" />;
}

export function AlertWarning(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="warning" textColor="black" />;
}

export function AlertMain(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="main" textColor="white" />;
}

export function AlertAccent(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="accent" textColor="white" />;
}

export function AlertWhite(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="white" textColor="black" />;
}

export function AlertBlack(props: SimpleBoxProps) {
    return <Alert {...props} bgColor="black" textColor="white" />;
}