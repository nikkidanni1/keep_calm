import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { isBrowser, isMobile } from 'react-device-detect'
import styles from './SliderSection.module.css'

const SliderSection = ({ images }) => {
    const [translateXSlider, setTranslateXSlider] = useState(0)
    const [startPositionTranslateXSlider, setStartPositionTranslateXSlider] = useState(0)
    const [countSlides, setCountSlides] = useState(4.5)
    const [isMouseDown, setMouseDown] = useState(false)
    const [mouseDownXPosition, setMouseDownXPosition] = useState(0)

    const sliderSectionRef = useRef()
    const sliderRef = useRef()

    const handlerScroll = () => {
        let newTranslateX = window.pageYOffset - sliderSectionRef.current.offsetTop

        if (newTranslateX >= (sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth)) {
            newTranslateX = sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth
        }

        if (window.pageYOffset - sliderSectionRef.current.offsetTop <= 0) {
            newTranslateX = 0
        }

        setTranslateXSlider(newTranslateX)
    }

    const handleResize = () => {
        let slides
        if (window.innerWidth < 1024) {
            setTranslateXSlider(0)
            document.removeEventListener('scroll', handlerScroll)
            slides = 2.5
            if (window.innerWidth < 480) {
                slides = 1.5
            }
        } else {
            slides = 4.5
            document.addEventListener('scroll', handlerScroll)
        }
        setCountSlides(slides)
    }

    const handlePointerDown = (e) => {
        setMouseDown(true)
        setMouseDownXPosition(e.pageX)
    }

    const handlePointerUp = () => {
        setMouseDown(false)
        setMouseDownXPosition(0)
        setStartPositionTranslateXSlider(translateXSlider)
    }
    
    const handlePointerMove = (e) => {
        if (!isMouseDown) return

        let translateX = startPositionTranslateXSlider + mouseDownXPosition - e.pageX
        if (translateX < 0) {
            translateX = 0
        }

        if (translateX > sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth) {
            translateX = sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth
        }
        setTranslateXSlider(translateX)
    }

    const handlerTouchStart = (e) => {
        setMouseDownXPosition(e.targetTouches[0].pageX)
    }

    const handlerTouchMove = (e) => {
        let translateX = startPositionTranslateXSlider + 1.5 * (mouseDownXPosition - e.targetTouches[0].pageX)

        if (translateX < 0) {
            translateX = 0
        }

        if (translateX > sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth) {
            translateX = sliderRef.current.offsetWidth - sliderSectionRef.current.offsetWidth
        }

        setTranslateXSlider(translateX)
    }

    const handlerTouchEnd = () => {
        setMouseDownXPosition(0)
        setStartPositionTranslateXSlider(translateXSlider)
    }

    useEffect(() => {
        if (sliderSectionRef.current) {
            document.addEventListener('scroll', handlerScroll)
        }

        return () => {
            document.removeEventListener('scroll', handlerScroll)
        }
    }, [sliderSectionRef])

    useEffect(() => {
        if (sliderSectionRef.current && window.innerWidth < 1024) {
            if (isMobile) {
                sliderRef.current.addEventListener('touchstart', handlerTouchStart)
                sliderRef.current.addEventListener('touchmove', handlerTouchMove)
                sliderRef.current.addEventListener('touchend', handlerTouchEnd)
            }

            if (isBrowser) {
                sliderRef.current.addEventListener('pointerdown', handlePointerDown)
                sliderRef.current.addEventListener('pointerup', handlePointerUp)
                sliderRef.current.addEventListener('pointerleave', handlePointerUp)
                sliderRef.current.addEventListener('pointermove', handlePointerMove)
            }
        }

        return () => {
            if (isMobile) {
                sliderRef.current.removeEventListener('touchstart', handlerTouchStart)
                sliderRef.current.removeEventListener('touchmove', handlerTouchMove)
                sliderRef.current.removeEventListener('touchend', handlerTouchEnd)
            }
            if (isBrowser) {
                sliderRef.current.removeEventListener('pointerdown', handlePointerDown)
                sliderRef.current.removeEventListener('pointerup', handlePointerUp)
                sliderRef.current.removeEventListener('pointerleave', handlePointerUp)
                sliderRef.current.removeEventListener('pointermove', handlePointerMove)
            }

        }
    })

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const slideWidth = `calc(((100vw - 8vw) / ${countSlides}) - (var(--current-section-margin) / ${images.length}))`

    return (
        <section
            className={`section ${styles.root}`}
            style={{
                height: countSlides >= 4.5 ? `calc(${images.length} * ${slideWidth})` : 'max-content'
            }}
            ref={sliderSectionRef}
        >
            <div className={styles.root__content}>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div
                    className={styles.slider__wrapper}
                >
                    <div
                        className={styles.slider}
                        ref={sliderRef}
                        style={{
                            transform: `translate(-${translateXSlider}px, 0)`
                        }}
                    >
                        {images.map(item => (
                            <img
                                key={item}
                                className={styles.slider__slide}
                                src={item}
                                alt=""
                                draggable={false}
                                role="presentation"
                                style={{ width: `calc(((100vw - 8vw) / ${countSlides}) - (var(--current-section-margin) / ${images.length}))` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderSection