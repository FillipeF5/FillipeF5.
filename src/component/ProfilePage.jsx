import React from 'react';
import { Download, Mail, Phone, Linkedin, Github, Code, Database, BarChart } from 'lucide-react';
import { FaCss3, FaReact, FaNode } from 'react-icons/fa';


const ProfilePage = () => {
    const handleDownload = () => {
        alert('PDF download functionality would be implemented here');
    };

    const skills = [
        { name: 'HTML5', icon: <Code className="h-6 w-6 text-blue-400" /> },
        { name: 'CSS3', icon: <FaCss3 className="h-6 w-6 text-blue-400" /> },
        { name: 'ReactJS', icon: <FaReact className="h-6 w-6 text-blue-400" /> },
        { name: 'NodeJS', icon: <FaNode className="h-6 w-6 text-blue-400" /> },
        { name: 'SQL', icon: <Database className="h-6 w-6 text-blue-400" /> },
        { name: 'Power BI', icon: <BarChart className="h-6 w-6 text-blue-400" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">

            {/* Header with gradient background */}
            <header className="relative bg-gradient-to-r from-blue-900 via-blue800 to-gray-900 overflow-hidden pb-12">
                <div
                    className="absolute inset-0 opacity-60 bg-right bg-no-repeat"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
                        url('/Perfil.jpg')
                      `,
                      backgroundSize:"contain"
                    }}>
                </div>

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>
                <div className="container mx-auto px-6 py-20 relative">
                    <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                        Fillipe F. Monteiro
                    </h1>
                    <h2 className="text-2xl font-light mb-6">Assistente Administrativo</h2>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors mb-8"
                    >
                        <Download size={20} /> Exportar PDF
                    </button>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-6">
                        <a href="mailto:fillipefreitas@live.com" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <Mail size={20} />
                            <span>fillipefreitas@live.com</span>
                        </a>
                        <a href="tel:+5531996793255" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <Phone size={20} />
                            <span>(31) 99679-3255</span>
                        </a>
                        <a href="https://www.linkedin.com/in/fillipe-f-monteiro-363971203/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/FillipeF5" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <Github size={20} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </header>


            <main className="container mx-auto px-6 py-12">
                {/* About Section */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4">Sobre Mim</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Profissional com ampla experiência no setor administrativo, com habilidade em gestão do tempo e organização. Utilizo a tecnologia de forma eficiente para otimizar processos, o que despertou meu interesse em buscar novos conhecimentos e desafios nessa área.
                    </p>
                </section>

                {/* Certificates */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4">Certificados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">Basic Frontend</h4>
                            <p className="text-gray-400 mb-2">Descomplica Faculdade Digital</p>
                            <p className="text-sm text-gray-500">240 horas</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">Object-Oriented Developer</h4>
                            <p className="text-gray-400 mb-2">Descomplica Faculdade Digital</p>
                            <p className="text-sm text-gray-500">240 horas</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">Programmer</h4>
                            <p className="text-gray-400 mb-2">Descomplica Faculdade Digital</p>
                            <p className="text-sm text-gray-500">160 horas</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">Figma Design de Interfaces</h4>
                            <p className="text-gray-400 mb-2">Udemy</p>
                            <p className="text-sm text-gray-500">13.5 horas</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">ReactJS</h4>
                            <p className="text-gray-400 mb-2">Coodesh</p>
                            <p className="text-sm text-gray-500">78,3% de aproveitamento</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h4 className="font-bold mb-2">Prompts com IA</h4>
                            <p className="text-gray-400 mb-2">Descomplica Faculdade Digital</p>
                            <p className="text-sm text-gray-500">2 horas</p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold mb-4">Experiência</h3>
                    <div className="space-y-6">
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-bold">Assistente de Escritório</h4>
                            <p className="text-blue-400">Pró Saúde</p>
                            <p className="text-gray-400">06/2021 - Atual</p>
                            <p className="text-gray-300 mt-2">
                                Manipulação de dados, alimentação de indicadores, verificação e coleta de dados, acompanhamento de KPIs e elaboração de relatórios gerenciais. Auxílio na coordenação de equipe e gestão de ocupação médica em consultórios.
                            </p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-bold">Auxiliar Administrativo</h4>
                            <p className="text-blue-400">Faculdade Única</p>
                            <p className="text-gray-400">10/2022 - 03/2023</p>
                            <p className="text-gray-300 mt-2">
                                Rotinas administrativas em Mecanografia.
                            </p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-bold">Auxiliar Administrativo</h4>
                            <p className="text-blue-400">Hospital Mater Dei</p>
                            <p className="text-gray-400">09/2018 - 12/2020</p>
                            <p className="text-gray-300 mt-2">
                                Rotina administrativa em hospital de grande porte. Atendimento a clientes, entrega de resultados, apoio ao faturamento.
                            </p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="font-bold">Auxiliar Administrativo</h4>
                            <p className="text-blue-400">Fundação São Francisco Xavier</p>
                            <p className="text-gray-400">10/2015 - 09/2018</p>
                            <p className="text-gray-300 mt-2">
                                Rotina administrativa em hospital de grande porte. Atendimento a clientes, apoio ao faturamento.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h3 className="text-2xl font-bold mb-4">Tecnologias</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors flex items-center">
                                {skill.icon}
                                <span className="text-blue-400 font-medium ml-2">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProfilePage;