import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode | ReactNode[]
}

function AnimatedAppearance({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedAppearance
