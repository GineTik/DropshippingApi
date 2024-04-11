'use client'
import { useEffect, useState } from 'react'

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

export default function useWindowDimensions(): {
	height: number
	width: number
} {
	const [windowDimensions, setWindowDimensions] = useState<any>()

	useEffect(() => {
		setWindowDimensions(getWindowDimensions())

		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions ?? { width: -1, height: -1 }
}
