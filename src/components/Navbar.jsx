import React, { useEffect, useState } from 'react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-8 py-4 flex items-center justify-between gap-12
        ${scrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-dark/10 shadow-lg w-[min(90%,1200px)]'
                    : 'bg-transparent border border-transparent w-[min(90%,1200px)]'
                }
      `}
        >
            <div className={`font-sans font-bold text-xl tracking-tight ${scrolled ? 'text-dark' : 'text-background'}`}>
                Modela<span className="text-primary">Caps</span><sup className="text-[10px]">&reg;</sup>
            </div>

            <div className={`hidden md:flex gap-8 text-sm font-medium ${scrolled ? 'text-dark/70' : 'text-background/80'}`}>
                <a href="#proposta" className="hover:text-primary transition-colors">A Proposta</a>
                <a href="#protocolo" className="hover:text-primary transition-colors">O Protocolo</a>
                <a href="#planos" className="hover:text-primary transition-colors">Planos</a>
            </div>

            <button className="magnetic-btn bg-accent text-background px-6 py-2.5 rounded-full font-bold text-sm tracking-wide">
                <span className="hover-bg bg-orange-700"></span>
                <span className="content">COMEÇAR AGORA</span>
            </button>
        </nav>
    );
}
