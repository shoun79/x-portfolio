import { useEffect, useState } from "react";
import { info } from "../../User/User";

import DOTS from 'vanta/dist/vanta.dots.min';
import Trunk from 'vanta/dist/vanta.trunk.min';
import Typewriter from 'typewriter-effect';
import { Button } from "@mantine/core";


const About = () => {
    const [dat, setDat] = useState<any>(null);
    const [trunk, setTrunk] = useState<any>(null);

    useEffect(() => {
        if (!dat) {
            setDat(DOTS({
                el: "#bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                color2: 0x8892B0,
                backgroundColor: 0x0A192F,
                size: 2.8,
                showLines: false,
                specing: 20
            }))
        }

        if (!trunk) {
            setTrunk(Trunk({
                el: "#photo",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                backgroundColor: 0x0A192F,
                spacing: 0,
                chaos: 4.00
            }))
        }

        return () => {
            if (dat) dat.destroy()
            if (trunk) trunk.destroy()
        }
    }, [])
    return (
        <div className="flex items-center justify-center px-16 h-[80vh] font-mono overflow-hidden" id="bg">
            <div className="ml-20 w-3/5 flex flex-col">
                <h2 className="text-3xl text-primaryColor">Hi, I am</h2>
                <h1 className="text-6xl font-extrabold text-white">{info.name}</h1>
                <h2 className="text-white text-4xl flex font-semibold my-5">I am a&nbsp; <span className="text-primaryColor"><Typewriter
                    options={{
                        strings: info.stack,
                        autoStart: true,
                        loop: true,
                    }}
                /></span> </h2>
                <p className="text-textColor text-xl font-semibold text-justify w-[90%]">{info.bio}</p>
                <Button component="a" href="https://docs.google.com/document/d/1hqBsFRmUmpamsyKMVJQJ7wDQulp9n3WPC7VfidH0fi4/edit"
                    target="_blank"
                    variant="filled" color="#64FFDA" size="lg" className="!text-bgColor !w-fit mt-4" >Check Resume</Button>
            </div>
            <div id="photo" className="flex justify-center items-center w-[20vw] h-[50vh] mr-14 rounded-full overflow-hidden">
                <img src="shoun.jpg" alt="" className="w-[70%] rounded-full shadow-xl" />
            </div>
        </div>
    );
};

export default About;