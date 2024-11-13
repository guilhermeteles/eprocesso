import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck,faFolder,faNoteSticky, faHand, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons/faThList';

const Dashboard = () => {

    return (
        <div className='overflow-y-auto'>
            <div className=" mx-auto px-8 py-8">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">


                    <div className="bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-2 h-fit">
                        <h2 className="text-md font-semibold text-gray-800 mb-2">
                            <FontAwesomeIcon
                                icon={faThList}
                                className='mr-2'
                            />
                            Pendências do Processo</h2>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faDatabase}
                                className='mr-2 mt-0.5'
                            />
                            <p>Finalizar o cadastro do processo no SIEF-Processos</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faFolder}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe SJD a ser avaliada</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faNoteSticky}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe documento a ser efetivado</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faNoteSticky}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe providência aberta</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe nota para o processo ativa</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe ciência pendente</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe manifestação pendente</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faHand}
                                className='mr-2 mt-0.5'
                            />
                            <p>Existe alegação</p>
                        </p>
                        <p className="text-gray-600 bg-red-100 px-3 py-2 rounded-md flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={faClipboardList}
                                className='mr-2 mt-0.5'
                            />
                            <p>Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida</p>
                        </p>
                    </div>


                    {/* Second Card - 1 Column */}
                    <div className="bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-4 h-fit">
                        <h2 className="text-md font-semibold text-gray-800">
                            <FontAwesomeIcon
                                icon={faEdit}
                                className='mr-2'
                            />
                            Notas</h2>
                        <p className="text-gray-600 bg-yellow-100 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold">
                                    Nota de Usuário
                                </span>
                                <span className="text-xs">
                                    10/02/2023
                                </span>
                            </div>

                            Receba insights personalizados com base no seu ritmo de estudo, ajudando a ajustar o planejamento conforme sua necessidade.
                        </p>
                        <p className="text-gray-600 bg-amber-100 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold">
                                    Nota de Equipe
                                </span>
                                <span className="text-xs">
                                    10/02/2023
                                </span>
                            </div>

                            Receba insights personalizados com base no seu ritmo de estudo, ajudando a ajustar o planejamento conforme sua necessidade.
                        </p>
                        <p className="text-gray-600 bg-orange-100 px-3 py-2 rounded-md">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-semibold">
                                    Nota de Processo
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
