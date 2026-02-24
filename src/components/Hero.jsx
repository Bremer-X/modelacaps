import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered fade up for text elements
            gsap.from('.hero-elem', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative w-full h-[100dvh] bg-dark flex flex-col justify-end overflow-hidden pb-24">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
            <div className="absolute inset-0 z-0 bg-primary/20 mix-blend-overlay" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 w-full max-w-[1200px]">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="hero-elem inline-flex items-center gap-2 border border-background/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-background/80 text-xs font-mono uppercase tracking-widest">Ação Queima-Gordura 24h</span>
                    </div>

                    {/* Heading - Preset A pattern: [Ação direta] o / [Resultado]. */}
                    <h1 className="flex flex-col gap-2 mb-10">
                        <span className="hero-elem font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-background tracking-tight">
                            Acelere o metabolismo.
                        </span>
                        <span className="hero-elem font-serif italic text-6xl md:text-8xl lg:text-9xl text-background leading-[0.9]">
                            Emagreça <span className="text-accent">14x</span>.
                        </span>
                    </h1>

                    <p className="hero-elem text-background/70 font-sans text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                        ModelaCaps — a fórmula termogênica de precisão que elimina gordura corporal sem dieta radical.
                    </p>

                    <button className="hero-elem magnetic-btn bg-accent text-background px-10 py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase">
                        <span className="hover-bg bg-orange-700"></span>
                        <span className="content">QUERO EXPERIMENTAR AGORA</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
