
import {useEffect, useRef} from 'react'

export default function useUpdate(callback){
    const isMountRef = useRef(false); 

    useEffect(() => {
        if(!isMountRef.current){  
        isMountRef.current = true;
        return;
        }

        callback();
    });  

}