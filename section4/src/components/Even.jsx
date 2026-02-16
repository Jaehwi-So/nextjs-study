import { useEffect } from "react";

export default function Even(){
    useEffect(() => {
        return () => {
            console.log("Even Unmount");
        }
    }, [])
    return (
        <div>
            짝수입니다!
        </div>
    );
}