import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [copiedText, setCopiedText] = useState(null);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div className='overflow-y-auto'>
            <div className="container mx-auto px-4 py-8 sm:pt-32 pt-64">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                    {/* First Card - 2 Columns */}
                    <div className="col-span-2 bg-white p-6 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col sm:flex-row h-fit items-end">
                        <div className="flex flex-col sm:flex-2 p-4">
                            <div className='flex gap-1'>
                                <button onClick={toggleFavorite}>
                                    <FontAwesomeIcon
                                        icon={isFavorited ? faStarSolid : faStarRegular}
                                        color={isFavorited ? 'gold' : '#2672DE'}
                                        className="cursor-pointer text-xs"
                                    />
                                </button>
                                <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">Processo</h3>
                            </div>

                            {/* Copyable Text Fields with reserved space for check icon */}
                            <h2
                                className={`text-xl ${copiedText === '10010.000037/0915-24' ? 'text-green-600 bg-green-50' : 'text-gray-800 bg-gray-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('10010.000037/0915-24')}
                            >
                                10010.000037/0915-24
                                <span className="ml-2">
                                    {copiedText === '10010.000037/0915-24' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '18px', height: '16px', display: 'block' }} />
                )}
                                </span>
                            </h2>

                            <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">Nome</h3>
                            <p
                                className={`text-gray-600 ${copiedText === 'Joana Nogueira Martins' ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('Joana Nogueira Martins')}
                            >
                                Joana Nogueira Martins
                                <span className="ml-2">
                                    {copiedText === 'Joana Nogueira Martins' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '16px', height: '16px' }} />
                )}
                                </span>
                            </p>

                            <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">NI</h3>
                            <span
                                className={`text-gray-600 ${copiedText === '123.456.789-01' ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('123.456.789-01')}
                            >
                                123.456.789-01
                                <span className="ml-2">
                                    {copiedText === '123.456.789-01' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '16px', height: '16px' }} />
                )}
                                </span>
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-1 p-4 ml-4">
                            <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">Situação no SIEF-Processos</h3>
                            <span
                                className={`text-gray-600 ${copiedText === 'Pendente' ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-red-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('Pendente')}
                            >
                                Pendente
                                <span className="ml-2">
                                    {copiedText === 'Pendente' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '16px', height: '16px' }} /> 
                )}
                                </span>
                            </span>

                            <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">Nível de Sigilo Interno</h3>
                            <span
                                className={`text-gray-600 ${copiedText === 'Básico Interno' ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-blue-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('Básico Interno')}
                            >
                                Básico
                                <span className="ml-2">
                                    {copiedText === 'Básico Interno' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '16px', height: '16px' }} /> 
                )}
                                </span>
                            </span>

                            <h3 className="text-2xs font-bold text-gray-700 uppercase pt-2 tracking-wide">Nível de Sigilo Externo</h3>
                            <span
                                className={`text-gray-600 ${copiedText === 'Básico Externo' ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-blue-50'} rounded-md px-2 py-1 w-fit mt-1 cursor-pointer flex items-center`}
                                onClick={() => handleCopy('Básico Externo')}
                            >
                                Básico
                                <span className="ml-2">
                                    {copiedText === 'Básico Externo' ? (
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                                    ) : (
                                        <span style={{ width: '16px', height: '16px' }} />
                )}
                                </span>
                            </span>
                        </div>
                    </div>



                    {/* Second Card - 1 Column */}
                    <div className="bg-white p-6 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-gray-800">Notas</h2>
                        <p className="text-gray-600 bg-yellow-50 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold">
                                    Usuário
                                </span>
                                <span className="text-xs">
                                    10/02/2023
                                </span>
                            </div>

                            Receba insights personalizados com base no seu ritmo de estudo, ajudando a ajustar o planejamento conforme sua necessidade.
                        </p>
                        <p className="text-gray-600 bg-yellow-50 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold">
                                    Usuário
                                </span>
                                <span className="text-xs">
                                    10/02/2023
                                </span>
                            </div>

                            Receba insights personalizados com base no seu ritmo de estudo, ajudando a ajustar o planejamento conforme sua necessidade.
                        </p>
                        <p className="text-gray-600 bg-yellow-50 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold">
                                    Usuário
                                </span>
                                <span className="text-xs">
                                    10/02/2023
                                </span>
                            </div>

                            Receba insights personalizados com base no seu ritmo de estudo, ajudando a ajustar o planejamento conforme sua necessidade.
                        </p>
                        {/* Repeat Note Block as Needed */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
