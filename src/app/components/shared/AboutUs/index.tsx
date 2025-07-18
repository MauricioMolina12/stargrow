'use client';

import { useMeeting } from "@/app/context/MeetingContext";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

const AboutUs = () => {

    const { show } = useMeeting();
    useIntersectionObserver('.parallax', { threshold: 0.4 }, 'all');


    return (
        <>
            <section className="w-full lg:py-16 flex flex-col items-center lg:flex-row">
                <figure className="w-full h-1/2 flex items-center justify-center parallax">
                    <img className="w-[250px] h-[250px] object-cover lg:w-[300px] lg:h-[300px]" src="/img/team.png" alt="team image" />
                </figure>
                <aside className="w-full h-1/2 flex flex-col justify-center gap-2.5 p-4">
                    <span className="parallax text-[var(--color-primary-to-white)]">Quienes somos</span>
                    <h1 className="parallax text-3xl font-bold lg:w-[70%] lg:text-4xl">En <span className="text-[var(--color-primary-to-white)]">Star Grow Studio</span> somos un equipo multidisciplinario apasionado por la tecnología, el diseño y la innovación</h1>
                    <p className="parallax text-[var(--color-dark-gray)]">Conectamos ideas con tecnología para transformar negocios y generar impacto real</p>
                    <button onClick={show} className="parallax cursor-pointer flex items-center gap-2 p-4 bg-amber-400 text-amber-50 w-fit rounded-2xl">Agenda tu cita <span className="material-symbols-outlined">arrow_forward</span></button>
                </aside>
            </section>
            {/* <section className="flex p-10 flex-col w-full lg:w-4/5 lg:mx-auto lg:my-0 min-h-[50vh]">
                <h2 className="text-2xl text-[var(--color-primary)] font-semibold">Conoce nuestro equipo</h2>
            </section> */}
        </>
    )
}

export default AboutUs;

