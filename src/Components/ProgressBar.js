import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage';
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile}) => { 
    console.log(file)

    const { url, progress } = useStorage(file);  

    useEffect(() => {
        if(url) {
            setFile(null); 
        }
    }, [url, setFile])


    return (
        <>
            <motion.div className="progress-bar" 
                initial={{ width: 0}} 
                animate={{ width: progress + "%"}}
            >
            </motion.div>
            <span className="percentage">{Math.floor(progress) + " %"}</span>
        </>
    )
}

export default ProgressBar; 
