"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Transition from './components/Transition';



const Template = ({children}) => {

  return (
<>
<AnimatePresence mode='wait'>
    <Transition/>
    {children}
</AnimatePresence>
    </>
  );
};

export default Template;
