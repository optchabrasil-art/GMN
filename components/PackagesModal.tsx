'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Camera, ArrowLeft, ShieldCheck, CreditCard, QrCode, Lock } from 'lucide-react';
import Link from 'next/link';

interface PackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PackagesModal({ isOpen, onClose }: PackagesModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<'essencial' | 'avancado' | null>(null);

  const handleClose = () => {
    setSelectedPackage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 m-4"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedPackage ? (
              <div className="py-4 px-2 sm:px-6">
                <div className="flex items-center mb-8">
                  <button 
                    onClick={() => setSelectedPackage(null)} 
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors mr-4"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#3c4043]">
                    Resumo do Pedido
                  </h2>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                  {/* Left Col: Summary */}
                  <div className="md:col-span-2 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedPackage === 'essencial' ? 'Plano Único' : 'Plano Mensal'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#3c4043] mb-2">
                      Pacote {selectedPackage === 'essencial' ? 'Essencial' : 'Avançado'}
                    </h3>
                    <div className="text-4xl font-extrabold text-[#1a73e8] mb-6">
                      R$ {selectedPackage === 'essencial' ? '297' : '259'}
                      {selectedPackage === 'avancado' && <span className="text-sm text-gray-500 font-normal">/mês</span>}
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-700 border-b pb-2">Você está garantindo:</p>
                      <ul className="space-y-3 mt-4">
                        {selectedPackage === 'essencial' ? (
                          <>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Criação e otimização do perfil</li>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Inclusão de fotos estratégicas</li>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Configuração de SEO Local</li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Tudo do pacote Essencial</li>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> 3 posts estratégicos semanais</li>
                            <li className="flex items-start text-sm text-gray-600"><Check className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Gestão de avaliações e relatórios</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Right Col: Payment Options */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-[#3c4043] mb-4">Formas de Pagamento Aceitas</h4>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-green-300 transition-colors">
                        <div className="bg-green-50 p-3 rounded-full mr-4 shrink-0">
                          <QrCode className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Pix</p>
                          <p className="text-sm text-gray-500">Aprovação imediata. Rápido e 100% seguro.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-blue-300 transition-colors">
                        <div className="bg-blue-50 p-3 rounded-full mr-4 shrink-0">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Cartão de Crédito</p>
                          <p className="text-sm text-gray-500">À vista ou parcelado em até 2x com juros do cartão.</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="https://wa.me/5511921814523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-4 px-8 bg-[#1a73e8] text-white font-bold rounded-xl hover:bg-[#1557b0] transition-all shadow-md hover:shadow-lg text-lg group"
                    >
                      <Lock className="w-5 h-5 mr-2 opacity-80" />
                      Especialista 
                    </Link>
                    
                    <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                      <ShieldCheck className="w-4 h-4 mr-1 text-green-500" />
                      Seus dados estão protegidos e a transação é segura.
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3c4043] mb-4">
                    Nossos Pacotes
                  </h2>
                  <p className="text-[#5f6368] text-lg max-w-2xl mx-auto">
                    Escolha o plano ideal para destacar o seu negócio no Google e atrair mais clientes todos os dias.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pacote Essencial */}
                  <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col relative bg-white">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#3c4043] mb-2">Pacote Essencial</h3>
                      <p className="text-[#1a73e8] font-medium mb-4">Presença Profissional no Google</p>
                      <p className="text-sm text-[#5f6368] leading-relaxed">
                        Ideal para empresas que desejam aparecer no Google de forma profissional e otimizada, aumentando as chances de serem encontradas por novos clientes na região.
                      </p>
                    </div>

                    <div className="space-y-4 flex-1 mb-8">
                      <p className="font-semibold text-[#3c4043]">O que está incluso:</p>
                      <ul className="space-y-3">
                        {[
                          "Criação ou otimização completa do perfil no Google Business Profile",
                          "Configuração da categoria correta do negócio (ex: clínica, loja, restaurante, salão, etc.)",
                          "Criação de descrição estratégica, focada em buscas locais",
                          "Cadastro dos principais produtos ou serviços oferecidos pela empresa",
                          "Ajuste e padronização de horário de funcionamento, endereço e contatos",
                          "Inclusão de até 10 fotos do negócio, produtos ou serviços",
                          "1 post por semana no perfil do Google (promoções, novidades ou conteúdos estratégicos)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#5f6368]">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <div className="mb-6">
                        <p className="text-sm text-[#5f6368] mb-1">Prazo de implementação</p>
                        <p className="font-medium text-[#3c4043] flex items-center gap-2">
                          ⏱ Até 10 dias úteis
                        </p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-[#5f6368] mb-1">Investimento</p>
                        <p className="font-bold text-xl text-[#3c4043]">Pagamento único</p>
                      </div>
                      <button
                        onClick={() => setSelectedPackage('essencial')}
                        className="block w-full py-3 px-4 bg-white border-2 border-[#1a73e8] text-[#1a73e8] text-center font-medium rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Investimento 
                      </button>
                    </div>
                  </div>

                  {/* Pacote Avançado */}
                  <div className="border-2 border-[#1a73e8] rounded-2xl p-6 sm:p-8 flex flex-col relative bg-blue-50/30 shadow-lg">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a73e8] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Recomendado
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#3c4043] mb-2">Pacote Avançado</h3>
                      <p className="text-[#1a73e8] font-medium mb-4">Gestão e Crescimento no Google</p>
                      <p className="text-sm text-[#5f6368] leading-relaxed">
                        Ideal para empresas que querem manter o perfil ativo, bem avaliado e com maior destaque nas buscas, aumentando a confiança e a conversão de clientes.
                      </p>
                    </div>

                    <div className="space-y-4 flex-1 mb-8">
                      <p className="font-semibold text-[#3c4043]">O que está incluso:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm font-medium text-[#3c4043]">
                          <Check className="w-5 h-5 text-[#1a73e8] shrink-0 mt-0.5" />
                          <span>Tudo do Pacote Essencial</span>
                        </li>
                        <li className="text-sm font-semibold text-[#1a73e8] pt-2 pb-1">
                          + Gestão contínua do perfil
                        </li>
                        {[
                          "3 posts por semana no perfil do Google (promoções, novidades, produtos ou serviços)",
                          "Atualização mensal de 10 fotos do negócio.",
                          "Monitoramento e resposta estratégica às avaliações dos clientes",
                          "Estratégia simples para incentivar mais avaliações positivas",
                          "Relatório mensal detalhado de desempenho do perfil"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#5f6368]">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-200">
                      <div className="mb-6">
                        <p className="text-sm text-[#5f6368] mb-1">Prazo de implementação inicial</p>
                        <p className="font-medium text-[#3c4043] flex items-center gap-2">
                          ⏱ Até 10 dias úteis
                        </p>
                      </div>
                      <div className="mb-6">
                        <p className="text-sm text-[#5f6368] mb-1">Investimento</p>
                        <p className="font-bold text-xl text-[#3c4043]">Mensal <span className="text-sm font-normal text-[#5f6368]">(mínimo 3 meses)</span></p>
                      </div>
                      <button
                        onClick={() => setSelectedPackage('avancado')}
                        className="block w-full py-3 px-4 bg-[#1a73e8] text-white text-center font-medium rounded-lg hover:bg-[#1557b0] transition-colors shadow-md hover:shadow-lg"
                      >
                        Investimento 
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-sm">
                  <div className="bg-white p-4 rounded-full shadow-sm flex-shrink-0">
                    <Camera className="w-8 h-8 text-[#1a73e8]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#3c4043] mb-2">Serviço Adicional: Fotografia Profissional</h4>
                    <p className="text-[#5f6368] text-sm sm:text-base leading-relaxed">
                      As fotos inclusas nos pacotes acima devem ser fornecidas pelo cliente. Quer imagens de alta qualidade que realmente vendem? <strong>Oferecemos serviço de fotografia profissional para o seu negócio.</strong>
                    </p>
                    <p className="text-[#1a73e8] font-semibold mt-3 text-sm">
                      * Valores a consultar de acordo com a sua necessidade e localização.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                    <Link
                      href="https://wa.me/5511921814523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto py-3 px-6 bg-white border-2 border-[#1a73e8] text-[#1a73e8] text-center font-medium rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Consultar Valor
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
