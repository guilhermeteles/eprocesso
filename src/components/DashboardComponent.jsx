import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faFolder, faNoteSticky, faHand, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons/faThList';
import { useState } from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const notes = [
        {
            type: 'process',
            name: 'João Silva',
            date: '10/02/2023',
            content: 'Análise completa do progresso do processo de estudo. Identificou-se a necessidade de revisão dos materiais antes de avançar para o próximo módulo.',
            bgColor: 'bg-yellow-100'
        },
        {
            type: 'team',
            name: 'Maria Fernandes',
            date: '12/02/2023',
            content: 'Equipe de suporte registrou o ajuste do cronograma com base nos feedbacks mais recentes. Novas sugestões de conteúdo foram adicionadas à lista.',
            bgColor: 'bg-amber-100'
        },
        {
            type: 'user',
            name: 'Carlos Oliveira',
            date: '14/02/2023',
            content: 'Comentário do usuário sobre o material: "A revisão está sendo útil, mas seria interessante incluir mais exemplos práticos para fixação."',
            bgColor: 'bg-orange-100'
        },
        {
            type: 'user',
            name: 'Ana Costa',
            date: '15/02/2023',
            content: 'Feedback do usuário: "O cronograma tem funcionado bem, mas preciso de mais tempo para os temas avançados."',
            bgColor: 'bg-orange-100'
        },
    ];
    

    const filteredNotes = filter === 'all' ? notes : notes.filter(note => note.type === filter);

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
                                icon={faFileCircleExclamation}
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
                                icon={faNoteSticky}
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
                    <div className="bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-4 h-fit ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-md font-semibold text-gray-800 flex items-center ">
                                <FontAwesomeIcon icon={faEdit} className="mr-2" />
                                Notas
                            </h2>
                            <select
                                value={filter}
                                onChange={handleFilterChange}
                                className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="all">Todas as notas</option>
                                <option value="process">Notas de Processo</option>
                                <option value="team">Notas de Equipe</option>
                                <option value="user">Notas de Usuário</option>
                            </select>
                        </div>
                        <div className=' overflow-auto flex flex-col gap-4'>
                            {filteredNotes.map((note, index) => (
                                <p key={index} className={`text-gray-600 ${note.bgColor} px-3 py-2 rounded-md`}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-semibold">
                                            {note.name}
                                        </span>
                                        <span className="text-xs">
                                            {note.date}
                                        </span>
                                    </div>
                                    {note.content}
                                </p>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
