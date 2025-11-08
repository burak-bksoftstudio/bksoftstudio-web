import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Apple-style parallax component
 * Çocuk elementlerini scroll sırasında smooth bir şekilde hareket ettirir
 */
export const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * Scroll-triggered fade in animation
 */
export const FadeInSection = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Scale on scroll animation
 */
export const ScaleOnScroll = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * Blur on scroll - background elements
 */
export const BlurOnScroll = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10])

  return (
    <motion.div
      ref={ref}
      style={{ filter: blur.get() ? `blur(${blur.get()}px)` : 'none' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger children animation
 */
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Rotate on scroll
 */
export const RotateOnScroll = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  )
}

export default {
  ParallaxSection,
  FadeInSection,
  ScaleOnScroll,
  BlurOnScroll,
  StaggerContainer,
  StaggerItem,
  RotateOnScroll,
}
