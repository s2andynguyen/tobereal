// import React, { ReactNode, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { fadeIn } from '@/variants'

// interface SectionProps {
//     children: ReactNode
//     type?: 'up' | 'down' | 'left' | 'right'
//     delay: number
// }

// const Section: React.FC<SectionProps> = ({ children, type = 'up', delay }) => {
//     const ref = useRef(null)
//     const isInView = useInView(ref,{ once: true })

//     return (
//         <motion.div
//             ref={ref}
//             variants={fadeIn(type, delay)}
//             initial='hidden'
//             animate={isInView ? 'show' : 'hidden'}
//             exit='hidden'>
//             {children}
//         </motion.div>
//     )
// }

// export default Section

// Section.propTypes = {
//     children: Object.isRequired,
//     type: String.oneOf(['up', 'down', 'left', 'right']),
//     delay: Number.number.isRequired
// }
