import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Protocol() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.card-stack');

            cards.forEach((card, i) => {
                if (i < cards.length - 1) { // Apply stacking effect for all except the last card
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'top top',
                        endTrigger: cards[cards.length - 1],
                        end: 'bottom bottom',
                        pin: true,
                        pinSpacing: false,
                    });

                    // Animate the card scaling down and fading when the next one covers it
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(10px)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        }
                    });
                }
            });

            // Card 1 Animation - Rotating Motifs (Gear/Helix)
            gsap.to('.card-1-gear', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
            gsap.to('.card-1-gear-reverse', { rotation: -360, duration: 25, repeat: -1, ease: 'linear' });

            // Card 2 Animation - Laser Scanner
            gsap.to('.card-2-laser', {
                y: 200,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'power1.inOut'
            });

            // Card 3 Animation - ECG Pulse
            gsap.to('.card-3-pulse', {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: 'linear'
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-background" id="protocolo">
            {/* Sticky Card 1 */}
            <div className="card-stack h-[100vh] w-full flex items-center justify-center bg-background transform-gpu">
                <div className="container mx-auto px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-primary/60 mb-6 block">Fase 01</span>
                        <h2 className="font-serif italic text-6xl md:text-8xl text-dark mb-8">Ativação<br />Termogênica</h2>
                        <p className="font-sans text-xl text-dark/70 max-w-md leading-relaxed">
                            O corpo eleva sua temperatura interna levemente, acionando a quebra imediata de células adiposas estocadas.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full flex items-center justify-center bg-primary/5 rounded-[3rem] overflow-hidden border border-primary/10">
                        {/* SVG Motifs */}
                        <svg viewBox="0 0 100 100" className="absolute w-64 h-64 text-primary opacity-20 card-1-gear">
                            <path fill="currentColor" d="M50 5C45 5 40 10 40 10C30 15 20 20 15 30C10 40 10 50 10 50C10 55 15 60 15 60C20 70 30 80 40 85C40 85 45 90 50 90C55 90 60 85 60 85C70 80 80 70 85 60C85 60 90 55 90 50C90 50 90 40 85 30C80 20 70 15 60 10C60 10 55 5 50 5ZM50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75C36.2 75 25 63.8 25 50C25 36.2 36.2 25 50 25Z" />
                        </svg>
                        <svg viewBox="0 0 100 100" className="absolute w-40 h-40 text-accent opacity-30 card-1-gear-reverse">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Sticky Card 2 */}
            <div className="card-stack h-[100vh] w-full flex items-center justify-center bg-[#eae8e1] transform-gpu">
                <div className="container mx-auto px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] w-full flex items-center justify-center bg-dark rounded-[3rem] overflow-hidden">
                        {/* Laser Grid */}
                        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CC5833 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="card-2-laser absolute top-0 left-0 w-full h-1 bg-accent z-10 shadow-[0_0_20px_#CC5833]" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-primary/60 mb-6 block">Fase 02</span>
                        <h2 className="font-serif italic text-6xl md:text-8xl text-dark mb-8">Varredura<br />&amp; Detox</h2>
                        <p className="font-sans text-xl text-dark/70 max-w-md leading-relaxed">
                            Toxinas e metais pesados são escaneados e expelidos via sistema linfático, desinchando o corpo rapidamente.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sticky Card 3 */}
            <div className="card-stack h-[100vh] w-full flex items-center justify-center bg-primary transform-gpu">
                <div className="container mx-auto px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-background/60 mb-6 block">Fase 03</span>
                        <h2 className="font-serif italic text-6xl md:text-8xl text-background mb-8">Manutenção<br />Celular</h2>
                        <p className="font-sans text-xl text-background/80 max-w-md leading-relaxed">
                            As células adiposas são reprogramadas para não armazenarem excessos, garantindo a estabilidade do peso.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full flex items-center justify-center bg-dark/20 rounded-[3rem] overflow-hidden">
                        <svg viewBox="0 0 200 100" className="w-full h-full text-accent px-8">
                            <path
                                className="card-3-pulse"
                                d="M10,50 L40,50 L50,20 L60,80 L70,50 L100,50 L110,30 L120,70 L130,50 L190,50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeDasharray="400"
                                strokeDashoffset="400"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
