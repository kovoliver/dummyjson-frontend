import MessageBox from "../ui/MessageBox";
import Button from "../ui/Button";
import { useConfirmationStore } from "../../core/stores/confirmationStore";

export default function GlobalConfirmation() {
    const isVisible = useConfirmationStore((state) => state.isVisible);
    const title = useConfirmationStore((state) => state.title);
    const message = useConfirmationStore((state) => state.message);
    const messageType = useConfirmationStore((state) => state.messageType);
    const confirmText = useConfirmationStore((state) => state.confirmText);
    const cancelText = useConfirmationStore((state) => state.cancelText);
    const confirmVariant = useConfirmationStore((state) => state.confirmVariant);
    const cancelVariant = useConfirmationStore((state) => state.cancelVariant);
    const confirmIcon = useConfirmationStore((state) => state.confirmIcon);
    const cancelIcon = useConfirmationStore((state) => state.cancelIcon);
    
    const handleConfirm = useConfirmationStore((state) => state.handleConfirm);
    const handleCancel = useConfirmationStore((state) => state.handleCancel);

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