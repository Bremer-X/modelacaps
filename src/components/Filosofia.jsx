import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Filosofia() {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Simple fade up for the text parts, triggered on scroll
            gsap.from('.philo-text-1', {
                scrollTrigger: {
                    trigger: comp.current,
                    start: 'top 70%',
                },
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            });

            gsap.from('.philo-text-2', {
                scrollTrigger: {
                    trigger: comp.current,
                    start: 'top 50%',
                },
                y: 40,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.2
            });

            // Subtle parallax on the background image
            gsap.to('.philo-bg', {
                scrollTrigger: {
                    trigger: comp.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y: 100,
                ease: 'none'
            });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative w-full py-40 bg-dark overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background with subtle parallax */}
            <div className="absolute inset-0 pointer-events-none opacity-20 philo-bg">
                <div
                    className="absolute inset-[-100px] bg-cover bg-center mix-blend-luminosity grayscale"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 bg-dark/80" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-[1000px] text-center">
                <p className="philo-text-1 font-sans font-medium text-lg md:text-2xl text-background/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                    A maioria do mercado de suplementos foca em: <span className="text-background">promessas radicais de dietas impossíveis.</span>
                </p>

                <h2 className="philo-text-2 font-serif italic text-4xl md:text-6xl lg:text-7xl text-background leading-tight">
                    Nós focamos em: <span className="text-accent underline decoration-1 underline-offset-8">Regulação Metabólica</span> contínua e natural.
                </h2>
            </div>
        </section>
    );
}
