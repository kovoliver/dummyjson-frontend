import MessageBox from "../ui/MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useConfirm } from "./ConfirmationProvider";
import Button from "../ui/Button";

export default function GlobalConfirmation() {
    const { 
        isVisible, 
        title, 
        message, 
        messageType, 
        confirmText, 
        cancelText, 
        confirmVariant, 
        cancelVariant, 
        confirmIcon, 
        cancelIcon,
        handleConfirm, 
        handleCancel 
    } = useConfirm();

    if (!isVisible) return null;

    return (
        <MessageBox
            isVisible={isVisible}
            setIsVisible={(visible) => { if (!visible) handleCancel(); }}
            message={message}
            setMessage={() => {}}
            title={title}
            variant={messageType}
        >
            <div className="flex justify-end gap-3 mt-6">
                <Button
                    text={cancelText}
                    onClick={handleCancel}
                    icon={cancelIcon}
                    variant={cancelVariant}
                    size="sm"
                />

                <Button
                    text={confirmText}
                    onClick={handleConfirm}
                    icon={confirmIcon}
                    variant={confirmVariant}
                    size="sm"
                />

            </div>
        </MessageBox>
    );
}