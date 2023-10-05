'use client';

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadMOdal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }
    return ( 
        <>
        <AuthModal/>
        <UploadMOdal/>
        </>
     );
}
 
export default ModalProvider;