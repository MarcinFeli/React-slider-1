import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider1() {
	const sliders = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
	];
	return (
		<div className='flex flex-col justify-center items-center h-screen bg-gray-200 w-full'>
			<h1 className='mb-5 text-2xl font-bold'>Owl</h1>
			<Swiper
				centeredSlides={true}
				slidesPerView={1.5}
				spaceBetween={30}
				loop={true}
				grabCursor={true}
				pagination={{ el: '.swiper-custom-pagination', clickable: true }}
				modules={[Pagination]}
				className='mySwiper'>
				{sliders.map((slide, index) => (
					<SwiperSlide key={index}>
						{({ isNext, isActive, isPrev }) => (
							<div>
								{isActive && slide}
								{(isNext || isPrev) && (
									<div className='swiper-lazy-preloader'></div>
								)}
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			<div className='flex justify-center mt-6 swiper-custom-pagination' />
		</div>
	);
}
