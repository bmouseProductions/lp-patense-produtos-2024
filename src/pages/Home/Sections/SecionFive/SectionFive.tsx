import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import novaItaberaba from '../../../../assets/images/SectionFive/novaitaberabalp.webp'
import biguacu from '../../../../assets/images/SectionFive/biguaculp.webp'
import paracity from '../../../../assets/images/SectionFive/paranacitylp.webp'
import comboriu from '../../../../assets/images/SectionFive/camboriu.webp'
import itajai from '../../../../assets/images/SectionFive/itajailp.webp'
import agua from '../../../../assets/images/SectionFive/aguasanta.webp'
import bfmo from '../../../../assets/images/SectionFive/bfmo.webp'

import peixe from '../../../../assets/images/SectionFive/fish.svg'
import bovino from '../../../../assets/images/SectionFive/cow.svg'
import suino from '../../../../assets/images/SectionFive/pig.svg'
import ave from '../../../../assets/images/SectionFive/chicken.svg'

export default function SectionFive() {

    return (
        <section className='container py-20 px-5 md:px-10 mx-auto flex flex-col-reverse lg:flex-row gap-5'>
            <Swiper
                centeredSlides= {true}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                className="mySwiper w-full lg:max-w-[600px]  md:min-h-[850px] lg:min-h-[800px] "
            >
                <SwiperSlide>
                    <div className="w-full  !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full  shadow-lg rounded-[30px] " src={novaItaberaba} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE FAROL - NOVA ITABERABA</h2>
                            <div >
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={ave} alt="" />
                                        <p>Aves</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] '  fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (49) 3520 - 2000</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>Rodovia BR 282 km, 561,Bairro Interior,Nova Itaberaba - SC, CEP: 89818-000.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full shadow-lg rounded-[30px] " src={biguacu} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE AGROFORTE - BIGUAÇU</h2>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={peixe} alt="" />
                                        <p>Peixe</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (48) 3513 - 2222</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>Rua Oaddy Adriano, s/ nº,Bairro Areias de Cima, Biguaçu - SC,CEP: 88168-675.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full shadow-lg rounded-[30px] " src={paracity} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE FARICON - PARANACITY</h2>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={peixe} alt="" />
                                        <p>Peixe</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={ave} alt="" />
                                        <p>Aves</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (44) 3132 - 1100</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>Rodovia PR 464, Km 08 s/ nº,Bairro Zona Rural,Paranacity - PR,CEP: 87660-000.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full shadow-lg rounded-[30px] " src={comboriu} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE MARINHO - CAMBORIÚ</h2>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex flex-col md:flex-row gap-5">
                                        <div className="flex items-center gap-2">
                                            <img className="w-[40px] " src={peixe} alt="" />
                                            <p>Peixe</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <img className="w-[40px] " src={ave} alt="" />
                                            <p>Aves</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row gap-5">
                                        <div className="flex items-center gap-2">
                                            <img className="w-[40px] " src={bovino} alt="" />
                                            <p>Bovino</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <img className="w-[40px] " src={suino} alt="" />
                                            <p>Suíno</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (47) 3363 - 7298</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>Rodovia BR 101, km 128 s/ nº, Bairro Várzea do Ranchinho,Camboriú - SC,CEP: 88349-175.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full shadow-lg rounded-[30px] " src={agua} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE SEBBO - ÁGUA SANTA</h2>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={ave} alt="" />
                                        <p>Aves</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (54) 3180 - 0201</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>AC L Gruta, s/ nº,Bairro Interior,Água Santa - RS,CEP: 99965-000.</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" !flex flex-col items-center justify-center gap-5 " >
                            <img className="w-full shadow-lg rounded-[30px] " src={itajai} alt="" />
                            <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px]  ">
                                <h2 className="text-xl font-semibold ">FAROL - UNIDADE KENYA - ITAJAÍ</h2>
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                    <div className="flex gap-5">
                                        <div className="flex items-center gap-2">
                                            <img className="w-[40px] " src={peixe} alt="" />
                                            <p>Peixe</p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="flex gap-3 items-center" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>

                                    <div className="w-2/3 md:w-auto flex flex-wrap gap-5">
                                        <div>
                                            <span className='font-semibold'>Administrativo:</span>
                                            <p>+55 (47) 3224 - 3450</p>
                                        </div>
                                        <div>
                                            <span className='font-semibold'>Meio Ambiente:</span>
                                            <p>+55 (47) 99754 - 0752</p>
                                        </div>

                                        <div>
                                            <span className='font-semibold'>Suprimentos:</span>
                                            <p>+55 (48) 99833 - 2002</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="w-[80%] flex flex-col">
                                        <span className="text-lg font-semibold">Local</span>
                                        <p>Rua Francisco Reis, 1521, Cordeiros, Itajaí - SC, CEP: 88311-750.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" !flex flex-col items-center justify-center gap-5 " >
                        <img className="w-full shadow-lg rounded-[30px] " src={bfmo} alt="" />
                        <div className="w-full h-full px-5 py-4 flex flex-col gap-4 bg-[#dedede] shadow-lg text-[#106037] rounded-[30px] ">
                            <h2 className="text-xl font-semibold ">FAROL - UNIDADE BFP - ITAJAÍ</h2>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-semibold">Produtos produzidos a partir de:</span>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[40px] " src={peixe} alt="" />
                                        <p>Peixe</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex gap-3 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Telefone</span>
                                    <p>+55 (47) 3346 - 6189</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path className='text-[#106037] ' fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="w-[80%] flex flex-col">
                                    <span className="text-lg font-semibold">Local</span>
                                    <p>R. Ver. Germano Luís Viêira, 6479° Bairro Arraial dos Cunhas, Itajaí - SC, CEP: 88318-120</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="w-full lg:w-1/3 xl:w-1/2 flex flex-col">
                <div className="text-4xl md:text-5xl  2xl:text-7xl  uppercase font-extrabold text-[#fd6f2e]">
                    O nosso grupo possui mais de 12 unidades industriais
                </div>
                <div className="justify-center p-5 mt-6 w-full text-xl leading-7 text-justify text-black rounded-[30px] max-md:px-5 max-md:max-w-full">
                Hoje, são mais de 12 unidades espalhadas pelas regiões sul, sudeste e nordeste do Brasil. O Grupo Patense também conquistou com êxito o mercado internacional e atualmente exporta seus produtos para 28 países em 4 continentes do planeta.
                </div>
            </div>
        </section>
    )
}