import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Activity, Clock, Crosshair, Calendar, Check, Save } from 'lucide-react';

export function Features() {
    return (
        <section className="py-32 bg-background relative z-20" id="proposta">
            <div className="container mx-auto px-6 max-w-[1200px]">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-xl">
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                            01 — Artefatos Funcionais
                        </span>
                        <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight leading-tight">
                            Engenharia termogênica em cada cápsula.
                        </h2>
                    </div>
                    <p className="font-serif italic text-2xl text-dark/60 max-w-sm">
                        Precisão botânica para o seu metabolismo.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DiagnosticScrambler />
                    <TelemetryTypewriter />
                    <ProtocolScheduler />
                </div>
            </div>
        </section>
    );
}

// ----------------------------------------------------
// CARD 1: Diagnostic Scrambler
// ----------------------------------------------------
function DiagnosticScrambler() {
    const [items, setItems] = useState([
        { id: 1, label: 'Oxidação Visceral', value: '24/7 Ativa', stat: '+340%' },
        { id: 2, label: 'Gasto Calórico Basal', value: 'Otimizado', stat: 'MAX' },
        { id: 3, label: 'Aceleração Termogênica', value: 'Niv. Avançado', stat: '14x' },
    ]);

    useEffect(() => {
        const timer = setInterval(() => {
            setItems(prev => {
                const newItems = [...prev];
                const last = newItems.pop();
                newItems.unshift(last);
                return newItems;
            });
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="glass-card p-8 flex flex-col h-[420px] relative group overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
                <Activity className="text-accent w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-dark">Queima Contínua</h3>
            </div>

            <p className="text-sm text-dark/60 mb-8 max-w-[240px]">
                Ação termogênica ininterrupta que elimina gordura mesmo em repouso.
            </p>

            {/* Scrambler UI */}
            <div className="relative flex-1 mt-auto">
                <div className="absolute inset-0 flex flex-col justify-end pb-4">
                    {items.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`absolute bottom-0 w-full bg-white border border-dark/10 rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${idx === 0 ? 'translate-y-0 scale-100 opacity-100 z-30 shadow-sm' :
                                    idx === 1 ? '-translate-y-4 scale-[0.95] opacity-60 z-20' :
                                        '-translate-y-8 scale-[0.9] opacity-30 z-10'}
              `}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-mono text-[10px] text-dark/50 uppercase tracking-widest">{item.label}</span>
                                <span className="font-sans font-bold text-accent text-sm">{item.stat}</span>
                            </div>
                            <div className="font-serif italic text-xl text-dark">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ----------------------------------------------------
// CARD 2: Telemetry Typewriter
// ----------------------------------------------------
function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const [msgIdx, setMsgIdx] = useState(0);

    const messages = [
        "> Picos de insulina estabilizados.",
        "> Apetite reduzido em 68%.",
        "> Bloqueio de absorção de lipídios.",
        "> Regulação do cortisol atingida."
    ];

    useEffect(() => {
        let currentText = '';
        let charIdx = 0;
        const fullText = messages[msgIdx];

        const typeInt = setInterval(() => {
            if (charIdx < fullText.length) {
                currentText += fullText[charIdx];
                setText(currentText);
                charIdx++;
            } else {
                clearInterval(typeInt);
                setTimeout(() => {
                    setMsgIdx(prev => (prev + 1) % messages.length);
                }, 2000);
            }
        }, 40);

        return () => clearInterval(typeInt);
    }, [msgIdx]);

    return (
        <div className="glass-card p-8 flex flex-col h-[420px] bg-dark text-background border-dark/20 relative group">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Crosshair className="text-primary w-5 h-5" />
                    <h3 className="font-sans font-bold text-lg text-background/90">Controle Preciso</h3>
                </div>
                <div className="flex items-center gap-2 bg-background/10 px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest">Live Feed</span>
                </div>
            </div>

            <p className="text-sm text-background/50 mb-auto max-w-[240px]">
                Monitoramento e regulação autonômica do apetite e picos glicêmicos.
            </p>

            {/* Terminal UI */}
            <div className="bg-black/40 border border-background/10 rounded-2xl p-5 h-32 relative font-mono text-xs leading-relaxed text-primary overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
                <span className="text-background/80">{text}</span>
                <span className="inline-block w-1.5 h-3 bg-accent animate-pulse ml-1 align-middle" />
            </div>
            <div className="mt-4 flex gap-1">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-1 flex-1 bg-primary/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary/60 w-full origin-left"
                            style={{ animation: `pulse-bar ${1 + Math.random()}s infinite alternate` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// ----------------------------------------------------
// CARD 3: Protocol Scheduler
// ----------------------------------------------------
function ProtocolScheduler() {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Cursor sequence
            tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0 })
                .to(cursorRef.current, { opacity: 1, duration: 0.3 })
                .to(cursorRef.current, { x: 120, y: 30, duration: 1, ease: 'power2.inOut' }) // Move to a day cell
                .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // Click
                .to('.day-cell-active', { backgroundColor: '#CC5833', color: '#fff', scale: 1.05, duration: 0.3 }, '-=0.1')
                .to(cursorRef.current, { x: 180, y: 120, duration: 1, ease: 'power2.inOut', delay: 0.5 }) // Move to save
                .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // Click 
                .to('.btn-save', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, '-=0.1')
                .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
                .to('.day-cell-active', { backgroundColor: 'transparent', color: '#1A1A1A', scale: 1, duration: 0.3 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="glass-card p-8 flex flex-col h-[420px] relative group overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
                <Clock className="text-secondary w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-dark">Definitivo</h3>
            </div>

            <p className="text-sm text-dark/60 mb-8 max-w-[240px]">
                Protocolo anti-efeito sanfona gravado no seu ritmo circadiano.
            </p>

            {/* Scheduler UI */}
            <div className="bg-white border border-dark/10 rounded-2xl p-4 mt-auto relative">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-dark/5">
                    <span className="font-sans font-bold text-xs text-dark">Doses Diárias</span>
                    <Calendar className="w-3 h-3 text-dark/40" />
                </div>

                <div className="grid grid-cols-7 gap-1 mb-6">
                    {dias.map((d, i) => (
                        <div
                            key={i}
                            className={`text-[10px] font-mono h-8 rounded shrink-0 flex items-center justify-center transition-all ${i === 3 ? 'day-cell-active border border-dark/10' : 'text-dark/40'}`}
                        >
                            {d}
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-mono text-dark/50">Sincronizado</span>
                    </div>
                    <button className="btn-save bg-dark text-white rounded px-3 py-1.5 text-[10px] font-sans flex items-center gap-1">
                        <Save className="w-3 h-3" /> Salvar
                    </button>
                </div>

                {/* Animated SVG Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute top-0 left-0 pointer-events-none z-50 w-5 h-5"
                    style={{
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                        transformOrigin: 'top left'
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L9.5 21L12.5 14.5L19.5 10L4 4Z" fill="white" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
