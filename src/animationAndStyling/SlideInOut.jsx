import {motion} from "framer-motion";
import React from 'react';

function SlideInOut({children}) {


 const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2.5 } },
  exit: { opacity: 0, transition: { duration: 2.5 } },
};



  return (
    <div>
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      {children}
    </motion.div>

    </div>
  )
}

export default SlideInOut