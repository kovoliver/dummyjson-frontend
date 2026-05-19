import Box from "./Box";
import type { SimpleBoxProps } from "../../core/interfaces";

export function BoxPrimary(props: SimpleBoxProps) {
    return <Box {...props} variant="primary"/>;
}

export function BoxSecondary(props: SimpleBoxProps) {
    return <Box {...props} variant="secondary" />;
}

export function BoxDanger(props: SimpleBoxProps) {
    return <Box {...props} variant="danger" />;
}

export function BoxWarning(props: SimpleBoxProps) {
    return <Box {...props} variant="warning" />;
}

export function BoxMain(props: SimpleBoxProps) {
    return <Box {...props} variant="main" />;
}

export function BoxAccent(props: SimpleBoxProps) {
    return <Box {...props} variant="accent" />;
}