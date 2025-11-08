'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Bubble class
    class Bubble {
      x: number
      y: number
      radius: number
      speedY: number
      speedX: number
      opacity: number
      color: string
      pulseSpeed: number
      pulsePhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.radius = Math.random() * 60 + 20
        this.speedY = Math.random() * 1 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        
        const colors = [
          'rgba(102, 126, 234, ',
          'rgba(118, 75, 162, ',
          'rgba(240, 147, 251, ',
          'rgba(255, 215, 0, ',
          'rgba(0, 255, 255, ',
          'rgba(255, 105, 180, '
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y -= this.speedY
        this.x += this.speedX
        this.pulsePhase += this.pulseSpeed

        // Reset bubble when it goes off screen
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius
          this.x = Math.random() * canvas.width
        }

        // Bounce off sides
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.speedX *= -1
        }
      }

      draw() {
        if (!ctx) return
        
        const pulse = Math.sin(this.pulsePhase) * 5
        const currentRadius = this.radius + pulse

        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius
        )
        gradient.addColorStop(0, this.color + (this.opacity * 0.8) + ')')
        gradient.addColorStop(0.5, this.color + (this.opacity * 0.4) + ')')
        gradient.addColorStop(1, this.color + '0)')

        ctx.beginPath()
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Inner highlight
        const highlightGradient = ctx.createRadialGradient(
          this.x - currentRadius * 0.3,
          this.y - currentRadius * 0.3,
          0,
          this.x,
          this.y,
          currentRadius * 0.7
        )
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, ' + (this.opacity * 0.6) + ')')
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.arc(this.x, this.y, currentRadius * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = highlightGradient
        ctx.fill()
      }
    }

    // Create bubbles
    const bubbles: Bubble[] = []
    const bubbleCount = 25

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble())
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach(bubble => {
        bubble.update()
        bubble.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
