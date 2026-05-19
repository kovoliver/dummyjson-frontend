import { Outlet } from "react-router-dom";
import Alert from "../ui/Alert";
import { useNotify } from "../modules/NotificationProvider";
import { useEffect } from "react";

export default function GuestLayout() {
    const notifyContext = useNotify();

    const getMessages = ()=>{
        if(!notifyContext.message) return <p></p>;
        if(typeof notifyContext.message === "string") return <p>{notifyContext.message}</p>;
        
        return notifyContext.message.map((m, i)=><p key={i}>{m}</p>);
    };

    useEffect(()=> {
        if(notifyContext.message) 
            notifyContext.setIsVisible(true);
        else
            notifyContext.setIsVisible(false);
    }, [notifyContext.message]);

    return(
        <div className="max-w-6xl mx-auto rounded-md bg-amber-50 border border-[color-mix(in_oklch,var(--color-accent),black_5%)] p-10">
            <Alert
                children={getMessages()}
                variant={notifyContext.messageType}
                isVisible={notifyContext.isVisible}
                setIsVisible={notifyContext.setIsVisible}
                onClose={()=>notifyContext.setMessage("")}
            />
            <Outlet/>
        </div>
    );
}