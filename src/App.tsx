import Input from "./components/ui/Input";
import { ButtonBlack, ButtonSecondary } from "./components/ui/Buttons";

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus, faTrash,faCheck,
    faXmark, faChevronRight,
    faChevronLeft,faEllipsisVertical,
    faGear, faUser, faMagnifyingGlass, 
    faFloppyDisk, faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { BoxDanger } from "./components/ui/Boxes";
import { AlertDanger, AlertMain } from "./components/ui/Alerts";

library.add(
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight, faChevronLeft,
    faEllipsisVertical, faGear, faUser,
    faMagnifyingGlass, faFloppyDisk, faCircleXmark
);

function App() {
    return (
        <>
            <div className="p-">
                <h1 className="text-amber-50 text-2xl">Hellóka!</h1>
                <ButtonSecondary
                    text="Click me baby!"
                    size="sm"
                    icon="floppy-disk"
                    onClick={()=>alert("Hűha!")}
                    customClasses={['m-2']}
                />

                <ButtonBlack
                    text="Click me baby!"
                    size="sm"
                    icon="floppy-disk"
                    onClick={()=>alert("Csuhajja!")}
                    customClasses={['m-2']}
                />

                <BoxDanger
                    children={[<h1>Sajt</h1>]}
                    padding="md"
                    borderWidth={2}
                />

                <AlertDanger 
                    text="Figyelem! Ez egy törölhető üzenet." 
                    padding="md" borderWidth={2} 
                    customClasses={['m-2']}
                />

                <AlertMain customClasses={["m-2"]} padding="lg" rounded="rounded-xl">
                    <h4 className="font-bold">Info</h4>
                    <p>Sikeresen telepítetted a rendszert!</p>
                </AlertMain>

                <div className="m-2">
                    <Input
                        placeholder="Írd be!"
                        textColor="black"
                        bgColor="white"
                        borderColor="primary"
                        size="sm"
                        customClasses={['w-[25%]']}
                        onChange={() => console.log("változok!")}
                    />
                </div>
            </div>
        </>
    )
}

export default App;