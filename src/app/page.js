'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import cloud from "../../public/images/cloud.png";
import blockBrick from "../../public/images/blockBrick.png";
import blockQuestion from "../../public/images/blockQuestion.png";
import goomba from "../../public/images/goomba.webp";
import bush from "../../public/images/bush.png";
import mountain from "../../public/images/mountain.png";
import htmlLogo from "../../public/images/htmlLogo.png";
import bootstrapLogo from "../../public/images/bootstrapLogo.png";
import cssLogo from "../../public/images/cssLogo.png";
import githubLogo from "../../public/images/githubLogo.png";
import gitLogo from "../../public/images/gitLogo.png";
import jqueryLogo from "../../public/images/jqueryLogo.png";
import jsLogo from "../../public/images/jsLogo.png";
import laravelLogo from "../../public/images/laravelLogo.png";
import nextLogo from "../../public/images/nextLogo.png";
import phpLogo from "../../public/images/phpLogo.png";
import reactLogo from "../../public/images/reactLogo.png";
import sqlLogo from "../../public/images/sqlLogo.png";
import tailwindLogo from "../../public/images/tailwindLogo.png";
import brownMushroom from "../../public/images/brownMushroom.png";
import arrow from "../../public/images/arrow.png";
import moncookImg1 from "../../public/images/moncookImg1.webp";

const logoLists = [
	{
		name: "HTML",
		src: htmlLogo,
		score: 100
	},
	{
		name: "CSS",
		src: cssLogo,
		score: 95
	},
	{
		name: "JavaScript",
		src: jsLogo,
		score: 70
	},
	{
		name: "ReactJS",
		src: reactLogo,
		score: 60
	},
	{
		name: "NextJS",
		src: nextLogo,
		score: 55
	},
	{
		name: "jQuery",
		src: jqueryLogo,
		score: 70
	},
	{
		name: "Tailwind CSS",
		src: tailwindLogo,
		score: 90
	},
	{
		name: "Bootstrap",
		src: bootstrapLogo,
		score: 90
	},
	{
		name: "PHP",
		src: phpLogo,
		score: 50
	},
	{
		name: "Laravel",
		src: laravelLogo,
		score: 50
	},
	{
		name: "MySQL",
		src: sqlLogo,
		score: 60
	},
	{
		name: "GitHub",
		src: githubLogo,
		score: 60
	},
	{
		name: "Git",
		src: gitLogo,
		score: 50
	}
];

export default function Home() {
	const [progressValue, setProgressValue] = useState(100);
	const [progressImg, setProgressImg] = useState(htmlLogo);
	const handleBtnClick = (newValue, newImg) => {
		if (newValue >= 0 && newValue <= 500) {
			setProgressValue(newValue);
			setProgressImg(newImg);
		} else {
			setProgressValue(0);
			setProgressImg(htmlLogo);
		}
	}

	const scrollableDivRef = useRef(null);

	const scrollLeft = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: 200, 
                behavior: 'smooth'
            });
        }
    };

	const scrollableDivRefPop = useRef(null);

	const scrollLeftPop = () => {
        if (scrollableDivRefPop.current) {
            scrollableDivRefPop.current.scrollBy({
                left: -160,
                behavior: 'smooth'
            });
        }
    };

    const scrollRightPop = () => {
        if (scrollableDivRefPop.current) {
            scrollableDivRefPop.current.scrollBy({
                left: 160, 
                behavior: 'smooth'
            });
        }
    };

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = () => {
		setIsPopupOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		document.body.style.overflow = 'auto';
	};

    return (
        <div>
            <section className="w-full h-dvh bg-[#A2ADFF] relative hidden!">
                <div className="flex flex-col items-center h-full">
                    <div className="bg-[#DE5819] mt-10 w-fill h-1/3 p-6 rounded-sm border-4 border-t-white border-l-white flex items-center justify-center relative">
                        <div className="flex justify-center items-start flex-col">
                            <h2 className="font-shadow text-[3.5rem] text-[#FDDFC9] leading-none text-shadow-lg text-shadow-black pb-6 font-bold m-0">
                                MYPORT
                            </h2>
                            <h2 className="font-shadow text-[6rem] text-[#FDDFC9] leading-none font-bold m-0 w-fit">
                                FOLIO
                            </h2>
                        </div>
                        <div className="dot-shadow w-2 h-2 bg-white absolute top-2 left-2"></div>
                        <div className="dot-shadow w-2 h-2 bg-white absolute top-2 right-2"></div>
                        <div className="dot-shadow w-2 h-2 bg-white absolute bottom-2 left-2"></div>
                        <div className="dot-shadow w-2 h-2 bg-white absolute bottom-2 right-2"></div>
                    </div>
					<div className="flex flex-col gap-2 absolute top-[21rem]">
						<Link href="#"><span className=" group/item text-white text-xl hover:text-gray-200 flex items-center justify-start gap-2">
							<Image src={brownMushroom} className="w-8 object-cover invisible group-hover/item:visible" />
							1 ABOUT</span>
						</Link>
						<Link href="#"><span className=" group/item text-white text-xl hover:text-gray-200 flex items-center justify-start gap-2">
							<Image src={brownMushroom} className="w-8 object-cover invisible group-hover/item:visible" />
							2 SKILLS</span>
						</Link>
						<Link href="#"><span className=" group/item text-white text-xl hover:text-gray-200 flex items-center justify-start gap-2">
							<Image src={brownMushroom} className="w-8 object-cover invisible group-hover/item:visible" />
							3 PROJECTS</span>
						</Link>
						<Link href="#"><span className=" group/item text-white text-xl hover:text-gray-200 flex items-center justify-start gap-2">
							<Image src={brownMushroom} className="w-8 object-cover invisible group-hover/item:visible" />
							4 CONTACT</span>
						</Link>
					</div>
                    <Image
                        src={cloud}
                        className="w-40 object-cover absolute top-[5rem] left-[5rem]"
                    />
                    <Image
                        src={cloud}
                        className="w-40 object-cover absolute top-[22rem] left-[8rem]"
                    />
                    <Image
                        src={cloud}
                        className="w-40 object-cover absolute top-[5rem] right-[5rem]"
                    />
                    <Image
                        src={cloud}
                        className="w-40 object-cover absolute top-[18rem] right-[17rem]"
                    />
                    <Image
                        src={blockBrick}
                        className="w-20 object-cover absolute top-[23rem] right-0"
                    />
                    <Image
                        src={blockBrick}
                        className="w-20 object-cover absolute top-[23rem] right-[10rem]"
                    />
                    <Image
                        src={blockQuestion}
                        className="nes-pointer w-20 object-cover absolute top-[23rem] right-[5rem]"
                    />
                    <Image
                        src={blockQuestion}
                        className="nes-pointer w-20 object-cover absolute top-[10rem] right-4"
                    />
                    <Link href="#about">
                        <Image
                            src={blockQuestion}
                            className="nes-pointer w-20 object-cover absolute top-[23rem] left-[30rem] hover:-translate-y-4 transition-all duration-300 ease-in-out"
                        />
                    </Link>
					<div className="group/item">
                        <div className="hidden group-hover/item:block">
                            <section className="message -left absolute left-[16rem] bottom-[13rem]">
                                <div class="nes-balloon from-left">
                                    <p>Hi i'm Mon</p>
                                </div>
                            </section>
                        </div>
                        <div className="absolute bottom-23 left-[12rem]">
                            <i className="nes-mario hover:animate-bounce nes-pointer"></i>
                        </div>
                    </div>
                    <div className="group/item">
                        <div className="hidden group-hover/item:block absolute right-[14rem] bottom-[12rem] z-10">
                            <section className="message -left">
                                <div class="nes-balloon from-right">
                                    <p>I'm a Front-end web developer.</p>
                                </div>
                            </section>
                        </div>
                        <Image
                            src={goomba}
                            className="w-20 object-cover absolute bottom-24 right-[12rem] hover:animate-bounce nes-pointer"
                        />
                    </div>
                    <Image
                        src={bush}
                        className="w-[20rem] object-cover absolute bottom-24 left-[30rem]"
                    />
                    <Image
                        src={mountain}
                        className="w-[18rem] object-cover absolute bottom-24 left-[52rem]"
                    />
                    <div class="brick w-full h-24 bg-white absolute bottom-0"></div>
                </div>
            </section>
			<div className="container mx-auto px-4 lg:px-10 py-10 flex flex-col gap-8 lg:gap-10">
				<div id="about">
					<div class="nes-container with-title">
						<p class="title">ABOUT ME</p>
						<h2 className="text-xl"><span className="nes-text is-primary text-xl me-3">#</span>I am a Front-End Developer</h2>
						<p className="indent-10">committed to creating outstanding and valuable digital products. I possess a deep understanding of User Experience (UX) and User Interface (UI), coupled with strong Front-End coding skills. I enjoy tackling complex problems and am always looking for ways to improve and refine my work.</p>
					</div>
				</div>
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
					<div class="nes-container with-title">
						<p class="title">PROFILE</p>
						<div class="lists pl-3 lg:pl-10">
							<ul class="nes-list is-circle grid gap-4">
								<li>Name : Suniti Sukontaprapun</li>
								<li>Nickname : Mon</li>
								<li>Age : 23 years</li>
								<li>Birthdate : 23 April 2002</li>
								<li>Nationality : Thai</li>
							</ul>
						</div>
					</div>
					<div class="nes-container with-title">
						<p class="title">EDUCATION</p>
						<div class="lists pl-3 lg:pl-10">
							<ul class="nes-list is-circle grid gap-4">
								<li>University : Rajamangala University of Technology Suvarnabhumi</li>
								<li>Degree : Bachelor</li>
								<li>Group : Business and Information Technology</li>
								<li>Branch : Information systems and digital innovation</li>
								<li>Graduation : 2024</li>
								<li>GPA : 3.18</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="nes-container with-title border-y-0! border-x-0! pb-0! px-0! lg:border-y-[4px]! lg:border-x-[4px]! lg:px-[2rem]! lg:pb-[2rem]!">
					<p class="title">WORK EXPERIENCE</p>
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
						<div class="nes-container with-title">
							<p class="title">Emwork Group Co., Ltd.</p>
							<div className="mb-4 pl-2">
								<h2>
									Position : Internship
								</h2>
								<h2 className="nes-text is-primary text-xs">
									Jun 2022 - Jan 2023
								</h2>
							</div>
							<div class="lists pl-3 lg:pl-10">
								<ul class="nes-list is-circle grid gap-4">
									<li>Studied software testing at the unit, system, and integration levels.</li>
									<li>Conducted user needs analysis.</li>
									<li>Provided on-site training to end-users.</li>
									<li>Learned  data analysis and dashboard creation using Power BI.</li>
									<li>Created video tutorials and user manuals.</li>
									<li>Managed administrative tasks and fulfilled ad-hoc assignments.</li>
								</ul>
							</div>
						</div>
						<div class="nes-container with-title">
							<p class="title">EMR Soft Co., Ltd.</p>
							<div className="mb-4 pl-2">
								<h2>
									Position : Interface design
								</h2>
								<h2 className="nes-text is-primary text-xs">
									Feb 2023 - Sep 2024
								</h2>
							</div>
							<div class="lists pl-3 lg:pl-10">
								<ul class="nes-list is-circle grid gap-4">
									<li>Gather user requirements.</li>
									<li>Design and develop user interfaces.</li>
									<li>Develop user-friendly frontend systems.</li>
									<li>Improve system usability and meet user needs.</li>
									<li>On-site to provide system training and support.</li>
									<li>On-site to client sites to troubleshoot and update systems.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="nes-container with-title">
					<p class="title">MY TECH STACK</p>
					<p className="indent-10 pb-4 lg:pb-10">I'm no pro, but I know these languages exeptionally well exept for React, which I am currently learning. I also have extensive experience in business management as well as team-work and leadership. My creativity is what puts me a cut above everyone else at my skill level, as well as how quickly I can learn new skills on the go!</p>
					<div class="nes-container is-rounded grid gap-4 lg:gap-10">
						<div  className="flex items-center gap-2 lg:gap-10">
							<Image
								src={progressImg}
								className="w-12 h-12 object-contain"
							/>
							<progress class="nes-progress" value={progressValue} max="100"></progress>
						</div>
						<div className=" items-center justify-around gap-2 lg:gap-10 flex-wrap grid grid-cols-2 lg:grid-cols-4">
							{logoLists.map((list, index) => 
								<button type="button" class="nes-btn w-auto" onClick={() => handleBtnClick(list.score, list.src)}>
									<div className="flex justify-center lg:justify-start items-center gap-2 text-sm">
										<Image key={index} src={list.src} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
										<div className="hidden lg:block">
											{list.name}
										</div>
									</div>
								</button>
							)}
						</div>
					</div>
				</div>
				<div class="nes-container with-title px-4! lg:px-[2rem]!">
					<p class="title">MY PROJECTS</p>
					<div className="flex flex-col-reverse gap-6 lg:flex-col">
						<div className="flex gap-4 justify-end">
							<button type="button" class="nes-btn w-auto" onClick={scrollLeft}>
								<Image src={arrow} className="w-10 object-contain rotate-180" />
							</button>
							<button type="button" class="nes-btn w-auto" onClick={scrollRight}>
								<Image src={arrow} className="w-10 object-contain" />
							</button>
						</div>
						<div className="w-full flex overflow-x-scroll gap-6 snap-x snap-mandatory pb-0 lg:pb-6 box-project" ref={scrollableDivRef}>
							{Array.from({ length: 6 }, (_, i) => (
								<div key={i} class="nes-container with-title p-2! lg:p-[2rem]! is-centered lg:w-[26rem] grid gap-6 snap-center hover:scale-[98%]">
									<Image src={moncookImg1} className="w-full h-[10rem] object-cover" />
									<p className="text-xl text-start m-0!">Mon Cooking</p>
									<div className="flex gap-3">
										<button type="button" class="nes-btn is-disabled w-full">
											Website
										</button>
										<button type="button" class="nes-btn w-full" onClick={openPopup}>
											Detail
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div class="nes-container with-title">
					<p class="title">MY CONTSCT</p>
					<div className="">
						<div className="flex items-center gap-4 lg:gap-10 mb-6 flex-wrap">
							<Link href="">
								<i class="nes-icon facebook is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
							</Link>
							<Link href="">
								<i class="nes-icon instagram is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
							</Link>
							<Link href="">
								<i class="nes-icon github is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
							</Link>
							<Link href="">
								<i class="nes-icon gmail is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
							</Link>
							<Link href="">
								<i class="nes-icon linkedin is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out"></i>
							</Link>
						</div>
						<p className="indent-10">
							If you are a potential client or employer then please feel free to contact me any time! Just make sure to include your name, your companies name, and what you're interested in. Thank you!!
						</p>
					</div>
				</div>
			</div>

			{isPopupOpen && (
				<section className="mx-auto px-4! lg:px-[2rem]! lg:w-1/2 fixed inset-x-0 top-8 lg:top-12 z-20">
					<div class="nes-container with-title bg-white relative px-4! lg:px-[2rem]!">
						<div class="nes-container with-title ">
							<p class="title">text</p>
							<div className="flex justify-center gap-3 mb-6">
								<button type="button" class="nes-btn w-auto" onClick={scrollLeftPop}>
									<Image src={arrow} className="w-10 object-contain rotate-180" />
								</button>
								<div className="w-full flex overflow-x-scroll gap-3 snap-x snap-mandatory box-project" ref={scrollableDivRefPop}>
									{Array.from({ length: 6 }, (_, i) => (
										<div key={i} class="w-[26rem] grid snap-center">
											<div className="w-[16rem]">
												<Image src={moncookImg1} className="w-full h-[10rem] object-cover" />
											</div>
										</div>
									))}
								</div>
								<button type="button" class="nes-btn w-auto" onClick={scrollRightPop}>
									<Image src={arrow} className="w-10 object-contain" />
								</button>
							</div>
							<p className="indent-10 text-sm">committed to creating outstanding and valuable digital products. I possess a deep understanding of User Experience (UX) and User Interface (UI), coupled with strong Front-End coding skills. I e.</p>
							
							<div className="absolute -right-8 lg:-right-13 -top-13">
								<button type="button" class="nes-btn is-error w-fit" onClick={closePopup}>
									x
								</button>
							</div>
						</div>
					</div>
				</section>
			)}

			{isPopupOpen && (
				<div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full opacity-50  bg-black z-10" onClick={closePopup}></div>
			)}
        </div>
    );
}
