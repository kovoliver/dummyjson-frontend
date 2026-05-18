import Input from "./Input";
import type { SimpleInputProps } from "../../core/interfaces";


export function InputPrimary(props: SimpleInputProps) {
    return <Input {...props} bgColor="primary" textColor="white" borderColor="primary"/>;
}

export function InputSecondary(props: SimpleInputProps) {
    return <Input {...props} bgColor="secondary" textColor="white" borderColor="secondary" />;
}

export function InputDanger(props: SimpleInputProps) {
    return <Input {...props} bgColor="danger" textColor="white" borderColor="danger" />;
}

export function InputWarning(props: SimpleInputProps) {
    return <Input {...props} bgColor="warning" textColor="black" borderColor="warning" />;
}

export function InputMain(props: SimpleInputProps) {
    return <Input {...props} bgColor="main" textColor="white" borderColor="main" />;
}

export function InputAccent(props: SimpleInputProps) {
    return <Input {...props} bgColor="accent" textColor="white" borderColor="accent" />;
}

export function InputWhite(props: SimpleInputProps) {
    return <Input {...props} bgColor="white" textColor="black" borderColor="white" />;
}

export function InputBlack(props: SimpleInputProps) {
    return <Input {...props} bgColor="black" textColor="white" borderColor="black" />;
}