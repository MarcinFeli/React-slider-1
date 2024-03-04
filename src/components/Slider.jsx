import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const cardInfo = [
	{ img: 'https://picsum.photos/200', text: 'Naprawa silnika' },
	{ img: 'https://picsum.photos/200', text: 'Wymiana opon' },
	{ img: 'https://picsum.photos/200', text: 'Diagnostyka komputerowa' },
	{ img: 'https://picsum.photos/200', text: 'Naprawa zawieszenia' },
	{ img: 'https://picsum.photos/200', text: 'Regeneracja skrzyń biegów' },
	{ img: 'https://picsum.photos/200', text: 'Serwis klimatyzacji' },
	{ img: 'https://picsum.photos/200', text: 'Wymiana rozrządu' },
];

export default function Slider1() {
	const swiperRef = useRef(null);
	const [showPrevButton, setShowPrevButton] = useState(false);
	const [showNextButton, setShowNextButton] = useState(true);

	const handleSlideChange = () => {
		const swiperInstance = swiperRef.current.swiper;
		setShowPrevButton(!swiperInstance.isBeginning);
		setShowNextButton(!swiperInstance.isEnd);
		const slides = swiperInstance.slides;
		const activeIndex = swiperInstance.activeIndex;
		slides.forEach((slide, index) => {
			const slideNext = slide.nextElementSibling;
			console.log(activeIndex, index);
			if (slideNext) {
				slideNext.style.opacity = activeIndex <= index + 2 ? '0.4' : '1';
			}
		});
	};

	const sliders = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	return (
		<div className='flex flex-col justify-center items-center h-screen bg-gray-200 w-full'>
			<div className='flex flex-col justify-center items-center h-screen w-full'>
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
			<div className='flex justify-center items-center gap-6 h-screen font-roboto'>
				<div className='bg-gray-100 w-full grid grid-cols-10'>
					<div className='col-span-3 flex flex-col gap-5 justify-center mx-auto p-10'>
						<div className='text-4xl font-semibold text-gray-700'>
							Serwis i naprawa Twojego auta
						</div>
						<div className='text-gray-700 text-sm font-normal'>
							Mamy w swojej bazie{' '}
							<span className='font-medium'>84 114 warsztatów </span> ocenionych
							srednio na <span className='font-medium'>⭐4.0</span>
						</div>
					</div>
					<div className='col-span-7 h-full w-full'>
						<Swiper
							ref={swiperRef}
							slidesPerView={0.9}
							centeredSlides={true}
							slidesPerGroupSkip={1}
							spaceBetween={30}
							grabCursor={true}
							breakpoints={{
								769: {
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
									<div className='h-1/2 overflow-hidden'>
										{index}
										<div className='p-10'>{item.text}</div>
									</div>
								</SwiperSlide>
							))}
							<div>
								<button
									className='slider2-button-prev left-32 absolute z-10 bg-yellow-400 h-20 w-20 p-4 rounded-full'
									style={{ display: showPrevButton ? 'block' : 'none' }}>
									<svg
										clip-rule='evenodd'
										fill-rule='evenodd'
										stroke-linejoin='round'
										stroke-miterlimit='2'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z'
											fill-rule='nonzero'
										/>
									</svg>
								</button>
							</div>
							<div>
								<button
									style={{ display: showNextButton ? 'block' : 'none' }}
									className='slider2-button-next absolute right-32 z-10 bg-yellow-400 h-20 w-20 p-4 rounded-full'>
									<svg
										clip-rule='evenodd'
										fill-rule='evenodd'
										stroke-linejoin='round'
										stroke-miterlimit='2'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z'
											fill-rule='nonzero'
										/>
									</svg>
								</button>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}
