import MessageBox from "../ui/MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useConfirm } from "./ConfirmationProvider";

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
                <button
                    onClick={handleCancel}
                    className={`px-4 py-2 rounded font-medium flex items-center gap-2 cursor-pointer transition-colors variant-${cancelVariant} bg-gray-200 hover:bg-gray-300 text-black`}
                >
                    {cancelIcon && <FontAwesomeIcon icon={cancelIcon} />}
                    {cancelText}
                </button>

                <button
                    onClick={handleConfirm}
                    className={`px-4 py-2 rounded font-medium flex items-center gap-2 cursor-pointer transition-colors variant-${confirmVariant} ${
                        confirmVariant === "danger" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    {confirmIcon && <FontAwesomeIcon icon={confirmIcon} />}
                    {confirmText}
                </button>

            </div>
        </MessageBox>
    );
}