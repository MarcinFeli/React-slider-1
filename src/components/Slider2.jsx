import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import LeftArrow from './icons/LeftArrow'
import RightArrow from './icons/RightArrow'

import 'swiper/css'
import '../index.css'

import { Navigation } from 'swiper/modules'

const cardInfo = [
	{ img: 'https://picsum.photos/200', text: 'Naprawa silnika' },
	{ img: 'https://picsum.photos/200', text: 'Wymiana opon' },
	{ img: 'https://picsum.photos/200', text: 'Diagnostyka komputerowa' },
	{ img: 'https://picsum.photos/200', text: 'Naprawa zawieszenia' },
	{ img: 'https://picsum.photos/200', text: 'Regeneracja skrzyń biegów' },
	{ img: 'https://picsum.photos/200', text: 'Serwis klimatyzacji' },
	{ img: 'https://picsum.photos/200', text: 'Wymiana rozrządu' },
]

export default function Slider1() {
	const swiperRef = useRef(null)
	const [showPrevButton, setShowPrevButton] = useState(false)
	const [showNextButton, setShowNextButton] = useState(true)

	const handleSlideChange = () => {
		const swiperInstance = swiperRef.current.swiper
		setShowPrevButton(!swiperInstance.isBeginning )
		setShowNextButton(!swiperInstance.isEnd)
		const slides = swiperInstance.slides
		const activeIndex = swiperInstance.activeIndex

		slides.forEach((slide, index) => {
			const slideOpacity = activeIndex >= index + 2 || activeIndex <= index - 2 ? '0.4' : '1'
			slide.style.opacity = slideOpacity
		})
	}
	return (
		<div className='flex flex-col justify-center items-center bg-gray-200 w-full'>
			<div className='flex justify-center items-center gap-6 font-roboto'>
				<div className='bg-gray-100 w-full grid grid-cols-1 sm:grid-cols-10'>
					<div className='sm:col-span-3 flex flex-col gap-5 justify-center mx-auto p-10'>
						<div className='text-4xl font-semibold text-gray-700'>Serwis i naprawa Twojego auta</div>
						<div className='text-gray-700 text-sm font-normal'>
							Mamy w swojej bazie <span className='font-medium'>84 114 warsztatów </span> ocenionych srednio na{' '}
							<span className='font-medium'>⭐4.0</span>
						</div>
					</div>
					<div className='sm:col-span-7 h-full w-full'>
						<Swiper
							ref={swiperRef}
							slidesPerView={0.9}
							centeredSlides={true}
							slidesPerGroupSkip={1}
							spaceBetween={30}
							grabCursor={true}
							initialSlide={1}
							breakpoints={{
								769: {
									slidesPerView: 1.9,
									slidesPerGroup: 1,
								},
								992: {
									slidesPerView: 2.9,
									slidesPerGroup: 1,
								},
								1280: {
									slidesPerView: 4.9,
									slidesPerGroup: 1,
								},
							}}
							scrollbar={true}
							onSlideChange={handleSlideChange}
							navigation={{
								prevEl: '.slider2-button-prev',
								nextEl: '.slider2-button-next',
								hideOnClick: true,
							}}
							modules={[Navigation]}
							className='slider2 h-full w-1/2'>
							{cardInfo.map((item, index) => (
								<SwiperSlide key={index} className='overflow-hidden h-full'>
									<img className='h-[50%] w-full' src={item.img} alt='' />
									<div className='h-1/2 overflow-hidden mt-5'>
										<div>{item.text}</div>
									</div>
								</SwiperSlide>
							))}
							<div>
								<button
									className='slider2-button-prev max-xl:bottom-10 left-10 xl:left-32 absolute z-10 bg-yellow-400 h-16 w-16 p-4 rounded-full'
									style={{ display: showPrevButton ? 'block' : 'none' }}>
									<LeftArrow />
								</button>
							</div>
							<div>
								<button
									style={{ display: showNextButton ? 'block' : 'none' }}
									className='slider2-button-next absolute max-xl:bottom-10 right-10 xl:right-32 z-10 bg-yellow-400 h-16 w-16 p-4 rounded-full'>
									<RightArrow />
								</button>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
