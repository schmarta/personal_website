"use client";

import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";
import Image from "next/image";

function SocialLink({ icon, link } : {
    icon: React.ReactNode,
    link: string
}) {
    return (
        <div className={`hover:bg-foreground hover:text-background rounded
                         duration-200 transition-colors text-4xl p-1`}
             onClick={ () => open(link) }>
            {icon}
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <section className={"h-dvh flex split"}>
                <div className={"flex m-auto flex-col gap-1"}>
                    <div className={"flex flex-row m-auto"}>
                        <div className={"relative md:w-55 w-25 md:my-4 my-2"}>
                            <Image src={"/me.jpeg"} alt={"Lucas Marta"} fill />
                        </div>
                        <div className={"border m-3"}></div>
                        <div>
                            <h1 className={"md:text-9xl text-6xl font-mono font-bold"}>LUCAS</h1>
                            <h1 className={"md:text-9xl text-6xl font-mono font-bold"}>MARTA</h1>
                        </div>
                    </div>

                    <small className={"font-sans text-center font-thin"}>
                        Computer Science Teacher / Frontend Designer / Software Engineer
                    </small>

                    <div className={"flex flex-row gap-2 mt-2 justify-center"}>
                        <SocialLink icon={<FaGithub />} link={"https://github.com/schmarta"} />
                        <SocialLink icon={<FaInstagram />} link={"https://instagram.com/lucas.schmarta"} />
                        <SocialLink icon={<FaLinkedin />} link={"https://www.linkedin.com/in/lucas-marta-498b2b32b/"} />
                    </div>
                </div>

            </section>
        </main>
    );
}
