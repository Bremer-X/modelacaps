import React from 'react';

export function Pricing() {
    return (
        <section className="py-32 bg-background relative z-20" id="planos">
            <div className="container mx-auto px-6 max-w-[1200px]">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
                        Acesso ao Protocolo
                    </span>
                    <h2 className="font-serif italic text-5xl md:text-7xl text-dark tracking-tight mb-6">
                        Escolha seu Nível.
                    </h2>
                    <p className="font-sans text-dark/70 max-w-lg mx-auto">
                        Disponível em 3 formatos de tratamento baseados no seu objetivo metabólico. Frete expresso incluso em todos os protocolos.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    {/* Kit 1 */}
                    <div className="glass-card p-8 flex flex-col items-center text-center">
                        <span className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2">Iniciante</span>
                        <h3 className="font-sans font-bold text-2xl text-dark mb-2">Essencial</h3>
                        <p className="text-sm text-dark/60 mb-8 border-b border-dark/10 pb-6 w-full">Tratamento de 1 Mês</p>

                        <div className="mb-8">
                            <div className="text-sm text-dark/40 line-through mb-1">R$ 197,90</div>
                            <div className="flex items-start justify-center text-primary">
                                <span className="text-sm mt-1 mr-1">R$</span>
                                <span className="text-5xl font-bold font-sans">19<span className="text-2xl">,90</span></span>
                            </div>
                            <div className="text-xs text-dark/50 mt-1 uppercase tracking-wider">12x sem juros</div>
                        </div>

                        <button className="magnetic-btn w-full bg-white border border-dark/10 text-dark px-6 py-4 rounded-full font-bold text-xs tracking-widest uppercase">
                            <span className="hover-bg bg-background"></span>
                            <span className="content">Selecionar</span>
                        </button>
                    </div>

                    {/* Kit 2 - Highlight */}
                    <div className="glass-card p-10 flex flex-col items-center text-center bg-primary text-background border-primary transform scale-105 shadow-2xl z-10">
                        <div className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Recomendado</div>
                        <span className="font-mono text-xs text-background/60 uppercase tracking-widest mb-2">Avançado</span>
                        <h3 className="font-sans font-bold text-3xl text-white mb-2">Performance</h3>
                        <p className="text-sm text-background/80 mb-8 border-b border-background/20 pb-6 w-full">Tratamento de 3 Meses</p>

                        <div className="mb-8">
                            <div className="text-sm text-background/50 line-through mb-1">R$ 397,90</div>
                            <div className="flex items-start justify-center text-white">
                                <span className="text-sm mt-1 mr-1">R$</span>
                                <span className="text-6xl font-bold font-sans">29<span className="text-3xl">,90</span></span>
                            </div>
                            <div className="text-xs text-background/70 mt-1 uppercase tracking-wider">12x sem juros</div>
                        </div>

                        <button className="magnetic-btn w-full bg-accent text-white px-6 py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_#CC583340]">
                            <span className="hover-bg bg-orange-700"></span>
                            <span className="content">Selecionar Pacote</span>
                        </button>
                    </div>

                    {/* Kit 3 */}
                    <div className="glass-card p-8 flex flex-col items-center text-center">
                        <span className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2">Completo</span>
                        <h3 className="font-sans font-bold text-2xl text-dark mb-2">Enterprise</h3>
                        <p className="text-sm text-dark/60 mb-8 border-b border-dark/10 pb-6 w-full">Tratamento de 6 Meses</p>

                        <div className="mb-8">
                            <div className="text-sm text-dark/40 line-through mb-1">R$ 597,90</div>
                            <div className="flex items-start justify-center text-primary">
                                <span className="text-sm mt-1 mr-1">R$</span>
                                <span className="text-5xl font-bold font-sans">39<span className="text-2xl">,90</span></span>
                            </div>
                            <div className="text-xs text-dark/50 mt-1 uppercase tracking-wider">12x sem juros</div>
                        </div>

                        <button className="magnetic-btn w-full bg-white border border-dark/10 text-dark px-6 py-4 rounded-full font-bold text-xs tracking-widest uppercase">
                            <span className="hover-bg bg-background"></span>
                            <span className="content">Selecionar</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
