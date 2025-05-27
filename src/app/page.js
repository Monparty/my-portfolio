import Image from "next/image";
import Link from "next/link";
import cloud from "../../public/images/cloud.png";
import blockBrick from "../../public/images/blockBrick.png";
import blockQuestion from "../../public/images/blockQuestion.png";
import goomba from "../../public/images/goomba.webp";
import bush from "../../public/images/bush.png";
import mountain from "../../public/images/mountain.png";

export default function Home() {
  return (
    <div>
      <section className="w-full h-dvh bg-[#A2ADFF] relative">
        <div className="flex flex-col items-center h-full">
          <div className="bg-[#DE5819] mt-10 w-fill h-1/3 p-6 rounded-sm border-4 border-t-white border-l-white flex items-center justify-center relative">
            <div className="flex justify-center items-start flex-col">
              <h1 className="font-shadow text-[3.5rem] text-[#FDDFC9] leading-none text-shadow-lg text-shadow-black pb-6 font-bold m-0">MYPORT</h1>
              <h1 className="font-shadow text-[6rem] text-[#FDDFC9] leading-none font-bold m-0 w-fit">FOLIO</h1>
            </div>
            <div className="dot-shadow w-2 h-2 bg-white absolute top-2 left-2"></div>
            <div className="dot-shadow w-2 h-2 bg-white absolute top-2 right-2"></div>
            <div className="dot-shadow w-2 h-2 bg-white absolute bottom-2 left-2"></div>
            <div className="dot-shadow w-2 h-2 bg-white absolute bottom-2 right-2"></div>
          </div>
          <Image src={cloud} className="w-40 object-cover absolute top-[5rem] left-[5rem]"/>
          <Image src={cloud} className="w-40 object-cover absolute top-[22rem] left-[8rem]"/>
          <Image src={cloud} className="w-40 object-cover absolute top-[5rem] right-[5rem]"/>
          <Image src={cloud} className="w-40 object-cover absolute top-[18rem] right-[17rem]"/>
          <Image src={blockBrick} className="w-20 object-cover absolute top-[23rem] right-0"/>
          <Image src={blockBrick} className="w-20 object-cover absolute top-[23rem] right-[10rem]"/>
          <Image src={blockQuestion} className="nes-pointer w-20 object-cover absolute top-[23rem] right-[5rem]"/>
          <Image src={blockQuestion} className="nes-pointer w-20 object-cover absolute top-[10rem] right-4"/>
          <Link href="#about">
            <Image src={blockQuestion} className="nes-pointer w-20 object-cover absolute top-[23rem] left-[38rem] hover:-translate-y-4 transition-all duration-300 ease-in-out"/>
          </Link>
          <div className="group/item">
            <div className="hidden group-hover/item:block absolute right-[14rem] bottom-[12rem] z-10">
              <section className="message -left">
                <div class="nes-balloon from-right">
                  <p>I'm a Front-end Developer.</p>
                </div>
              </section>
            </div>
            <Image src={goomba} className="w-20 object-cover absolute bottom-24 right-[10rem] hover:animate-bounce nes-pointer"/>
          </div>
          <div className="group/item">
            <div className="hidden group-hover/item:block">
              <section className="message -left absolute left-[24rem] bottom-[13rem]">
                <div class="nes-balloon from-left">
                  <p>Hi i'm Mon</p>
                </div>
              </section>
            </div>
            <div className="absolute bottom-23 left-[20rem]">
              <i className="nes-mario hover:animate-bounce nes-pointer"></i>
            </div>
          </div>
          <Image src={bush} className="w-[20rem] object-cover absolute bottom-24 left-[30rem]"/>
          <Image src={mountain} className="w-[18rem] object-cover absolute bottom-24 left-[52rem]"/>
          <div class="brick w-full h-24 bg-white absolute bottom-0"></div>
        </div>
      </section>

      <div className="container mx-auto p-10 flex flex-col gap-22" id="about">
        <div className="flex gap-2">
          <a className="nes-btn" href="#">Normal</a>
          <button type="button" className="nes-btn is-primary">Primary</button>
          <button type="button" className="nes-btn is-success">Success</button>
          <button type="button" className="nes-btn is-warning">Warning</button>
          <button type="button" className="nes-btn is-error">Error</button>
          <button type="button" className="nes-btn is-disabled">Disabled</button>
          <label className="nes-btn">
            <span>Select your file</span>
          </label>
        </div>

        <div class="nes-container with-title is-centered">
          <p class="title">Container.is-centered</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div class="nes-container with-title">
          <p class="title">Container.is-dark</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div class="nes-container is-rounded">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div class="nes-container is-rounded is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </div>
    </div>
  );
}