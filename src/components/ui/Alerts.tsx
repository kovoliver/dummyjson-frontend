import Alert from "./Alert";
import type { SimpleBoxProps } from "../../core/interfaces";

export function AlertPrimary(props: SimpleBoxProps) {
    return <Alert {...props} variant="primary" />;
}

export function AlertSecondary(props: SimpleBoxProps) {
    return <Alert {...props} variant="secondary" />;
}

export function AlertDanger(props: SimpleBoxProps) {
    return <Alert {...props} variant="danger" />;
}

export function AlertWarning(props: SimpleBoxProps) {
    return <Alert {...props} variant="warning" />;
}

export function AlertMain(props: SimpleBoxProps) {
    return <Alert {...props} variant="main" />;
}

export function AlertAccent(props: SimpleBoxProps) {
    return <Alert {...props} variant="accent" />;
}

export function AlertSuccess(props: SimpleBoxProps) {
    return <Alert {...props} variant="success" />;
}

export function AlertInfo(props: SimpleBoxProps) {
    return <Alert {...props} variant="info" />;
}