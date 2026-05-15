import Box from "./Box";
import type { SimpleBoxProps } from "../../core/interfaces";

export function BoxPrimary(props: SimpleBoxProps) {
    return <Box {...props} bgColor="primary" textColor="white" />;
}

export function BoxSecondary(props: SimpleBoxProps) {
    return <Box {...props} bgColor="secondary" textColor="white" />;
}

export function BoxDanger(props: SimpleBoxProps) {
    return <Box {...props} bgColor="danger" textColor="white" />;
}

export function BoxWarning(props: SimpleBoxProps) {
    return <Box {...props} bgColor="warning" textColor="black" />;
}

export function BoxMain(props: SimpleBoxProps) {
    return <Box {...props} bgColor="main" textColor="white" />;
}

export function BoxAccent(props: SimpleBoxProps) {
    return <Box {...props} bgColor="accent" textColor="white" />;
}

export function BoxWhite(props: SimpleBoxProps) {
    return <Box {...props} bgColor="white" textColor="black" />;
}

export function BoxBlack(props: SimpleBoxProps) {
    return <Box {...props} bgColor="black" textColor="white" />;
}