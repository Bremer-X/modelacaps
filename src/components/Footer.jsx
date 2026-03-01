import React from 'react';

export function Footer() {
    return (
        <footer className="bg-dark rounded-t-[4rem] px-6 py-20 mt-10 relative z-20">
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/10 pb-16 mb-16">
                    <div className="md:col-span-2">
                        <div className="font-sans font-bold text-2xl tracking-tight text-background mb-4">
                            Modela<span className="text-primary">Caps</span><sup className="text-[10px]">&reg;</sup>
                        </div>
                        <p className="text-background/60 text-sm max-w-xs leading-relaxed">
                            Engenharia termogênica de precisão. O protocolo definitivo para reprogramação metabólica.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background mb-6">Navegação</h4>
                        <div className="flex flex-col gap-4 text-sm text-background/60">
                            <a href="#proposta" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Proposta de Valor</a>
                            <a href="#protocolo" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">O Protocolo</a>
                            <a href="#planos" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Planos & Preços</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background mb-6">Legal</h4>
                        <div className="flex flex-col gap-4 text-sm text-background/60">
                            <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Termos de Uso</a>
                            <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Privacidade</a>
                            <a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Contato</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-background/40 text-xs">
                        &copy; {new Date().getFullYear()} ModelaCaps. Todos os direitos reservados.
                    </div>

                    {/* OS Status Indicator */}
                    <div className="flex items-center gap-2 bg-black/50 border border-background/10 px-4 py-2 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                        <span className="font-mono text-[10px] text-background/70 uppercase tracking-widest">
                            Sistema Operacional Ativo
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
