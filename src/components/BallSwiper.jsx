import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import "swiper/css";
import Rudrakshi from '../assets/RudraksMala.png'
import TulsiMala from '../assets/TulsiMala.png'
import Sphatic from '../assets/Sphatic.png'
import Chandan from '../assets/Chandan.png'
import Lava from '../assets/Lava.png'
import BeadSwipe from '../assets/SwipeSound.mp3'

const BallSwiper = ({ Mala, ballType }) => {
    const ballRefs = useRef([]);
    const swiperRef = useRef();

    const beadAudio = useRef(new Audio(BeadSwipe))


    const ballTypeImages = {
        rudraksha: Rudrakshi,
        tulsi: TulsiMala,
        sphatic: Sphatic,
        chandan: Chandan,
        lava: Lava,
    };


    const totalBalls = parseInt(Mala) || 0;
    const slides = Array.from({ length: totalBalls }, (_, i) => i);

    const [count, setCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);


    const handleSlideChange = (swiper) => {
        const audio = beadAudio.current;
        audio.pause()
        audio.currentTime = 0
        audio.volume = 0.6
        audio.play().catch((e) => console.warn('Audio play prevented:',e))
        const active = swiper.realIndex;

        setCount(active + 1);
        setActiveIndex(active);


        ballRefs.current.forEach((el, idx) => {
            if (!el) return;
            gsap.to(el, {
                width: idx === active ? 160 : 96,
                height: idx === active ? 160 : 96,
                y: idx === active ? 0 : -24,
                duration: 0.7,
                ease: "power2.out",
            });
        });
    };

    const handleReset = () => {
        setCount(0);
        swiperRef.current?.slideTo(0);    
    };





    const handleNext = () => {
        if (count < totalBalls) {
            setCount((prev) => prev + 1);
            const nextIndex = (activeIndex + 1) % totalBalls;
            swiperRef.current?.slideToLoop(nextIndex);
        }
    };



    if (!Mala || totalBalls <= 0) return null;

    return (
        <div className="w-screen h-screen  bg-[#e3e0d6] flex flex-col items-center justify-center gap-6 px-4 pt-15 font-marcellus">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-600 font-marcellus sm:pt-2 pt-30">Japa Counter</h1>
                <p className="text-lg text-gray-600 font-semibold">
                    Count: {count} / {totalBalls}
                </p>
            </div>


            <Swiper
                direction="vertical"
                slidesPerView={3}
                centeredSlides={true}
                loop={false}
                speed={600}
                allowTouchMove={true}
                mousewheel={true}
                pagination={{ clickable: true }}
                spaceBetween={5}
                grabCursor={true}
                touchRatio={1}
                longSwipesRatio={0.1}
                slideToClickedSlide={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                className="w-full h-[60vh] max-w-sm bg-amber-400 rounded-2xl "
            >
                {slides.map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center h-96">
                            <img
                                ref={(el) => (ballRefs.current[index] = el)}
                                src={ballTypeImages[ballType] || Rudrakshi}
                                alt={ballType}
                                className={`rounded-full object-cover ${activeIndex === index ? "w-40 h-40" : "w-24 h-24 -translate-y-6"
                                    } select-none`}
                            />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>


            <button
                type="button"
                className="mt-4 px-10 py-3 bg-[#2d2d2d] text-white rounded hover:bg-black  transition"
                onClick={handleReset}
            >
                Reset
            </button>

        </div>
    );
};

export default BallSwiper;
