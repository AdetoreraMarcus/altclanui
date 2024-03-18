import React from "react";
import CarouselWrapper from "./CarouselWrapper";
import ProductCard from "./product-card/ProductCard";
import AestheticsCard from "./product-card/AestheticsCard";
import useAesthetic from "../hooks/useAesthetics";
import Image from "next/image"
const data = [
	{
		"id":1,
		"aesthetic_name":"Art",
		"aesthetic_image":"https://altclanui.vercel.app/_next/image?url=https%3A%2F%2Faltclan-brands-api.onrender.com%2Fmedia%2Fenigmas.jpg&w=1920&q=75",
		
	},
	{
		"id":2,
		"aesthetic_name":"Aesthetics",
		"aesthetic_image":"https://altclanui.vercel.app/_next/image?url=https%3A%2F%2Faltclan-brands-api.onrender.com%2Fmedia%2Fdecors.jpg&w=1920&q=75",
		
	},
	{
		"id":3,
		"aesthetic_name":"Decors",
		"aesthetic_image":"https://altclanui.vercel.app/_next/image?url=https%3A%2F%2Faltclan-brands-api.onrender.com%2Fmedia%2FScreenshot_2024-02-26_144020.png&w=1920&q=75",
		
	},
	{
		"id":4,
		"aesthetic_name":"Antiques",
		"aesthetic_image":"",
		
	}
]

export default function Aesthetics2() {
	const brands = [1, 2, 3, 4];
	const products = [1, 2, 3, 4,];

	const carouselBreakpoints = {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	};

	const num = 2;
	num.toLocaleString();

	console.log("Aesthetic merchandise: ", data);

	return (
		<>
			<div className="p-5 pt-5 mt-5">
				<h4 className="text-center text-2xl capitalize">
					Shop by Aesthetics
				</h4>
				<br />
				<CarouselWrapper
					slidesPerView={2}
					spaceBetween={10}
					breakpoints={carouselBreakpoints}
					controls
				>
					{data.map((d, i) => {
						if (i <= 10) {
							return <div className="product-card">
                            <div className="product-card__img relative">
                                <Image src={d.aesthetic_image} fill alt={d.aesthetic_name} />
                            </div>
                            <div className="product-card__content">
                                <div className="product-card__info">
                                    <h1 className="product-card__name">{d.aesthetic_name}</h1>
                                    
                                </div>
                                <div className="product-card__actions flex flex-col items-center justify-between gap-y-3">
                                    
                                
                                </div>
                            </div>
                        </div>
						}
					})}
				</CarouselWrapper>
			</div>
		</>
	);
}
