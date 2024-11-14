import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFolder, faNoteSticky, faHand, faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faDatabase, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from './utils/formatDate';

const notes = [
    { id: 1, group: "process", date: "2024-11-11", content: "Reviewed initial case documentation and identified missing forms. Follow-up needed with user.", name: 'Julio Cesar' },
    { id: 2, group: "process", date: "2024-11-12", content: "Updated case status to 'In Progress' after reviewing submitted documents. Awaiting team approval for next steps.", name: 'Maria Fernandes' },
    { id: 3, group: "team", date: "2024-11-10", content: "Scheduled a team meeting to discuss case priorities for the week and assigned roles.", name: 'Carlos Lima' },
    { id: 4, group: "team", date: "2024-11-13", content: "Meeting conducted successfully. Next steps were delegated, and deadlines were set for each case file.", name: 'Ana Sousa' },
    { id: 5, group: "user", date: "2024-11-09", content: "User requested additional information about the process timeline and necessary documents.", name: 'Julio Cesar' },
    { id: 6, group: "user", date: "2024-11-14", content: "User submitted missing documentation. Case review has been updated accordingly.", name: 'Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon' },
    { id: 7, group: "process", date: "2024-11-14", content: "Finalized the report for the case summary. Forwarded it to the user for review.", name: 'Maria Fernandes' },
    { id: 8, group: "process", date: "2024-11-14", content: "Case closed with all actions documented. Archived case files for record-keeping.", name: 'Carlos Lima' },
];


const Dashboard = () => {
    const [filter, setFilter] = useState("last-of-each-group");
    const [filteredNotes, setFilteredNotes] = useState(getLastOfEachGroup(notes)); // Initialize with last of each group

    function getLastOfEachGroup(notes) {
        const latestNotes = {};
        notes.forEach(note => {
            const { group, date } = note;
            if (!latestNotes[group] || new Date(date) > new Date(latestNotes[group].date)) {
                latestNotes[group] = note;
            }
        });
        return Object.values(latestNotes);
    }

    function handleFilterChange(event) {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);

        let filteredNotes;
        if (selectedFilter === "last-of-each-group") {
            filteredNotes = getLastOfEachGroup(notes);
        } else if (selectedFilter === "all") {
            filteredNotes = notes;
        } else {
            filteredNotes = notes.filter(note => note.group === selectedFilter);
        }

        setFilteredNotes(filteredNotes);
    }

    const bgColors = {
        process: 'bg-[#EFF4DD]',
        team: 'bg-[#FEF0C8]',
        user: 'bg-[#F8EFF1]'
    };

    const badgeLabels = {
        process: <FontAwesomeIcon icon={faFileContract} className='ml-[1px]' />,
        team: <FontAwesomeIcon icon={faUsers} className='-ml-[2.7px]' />,
        user: <FontAwesomeIcon icon={faUserAlt} className='-ml-[1px]' />
    };

    const badgeColors = {
        process: 'bg-white border border-[#B8D293] text-gray-800 w-7 h-7 flex items-center',
        team: 'bg-white border border-[#FFBE2E] text-gray-800 w-7 h-7 flex items-center',
        user: 'bg-white border border-[#ECBEC6] text-gray-800 w-7 h-7 flex items-center'
    };

    return (
        <div className='grid grid-cols-3 h-full w-full p-8 gap-4'>
            <div className='bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-2 h-fit'>
                <h2 className="text-md font-semibold text-gray-800 mb-3 mt-1">
                    <FontAwesomeIcon icon={faList} className='mr-2' />
                    Pendências do Processo
                </h2>
                <div className='max-h-[calc(100vh-255px)] h-fit flex flex-col gap-2 overflow-auto'>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon icon={faDatabase} className='mr-2 mt-0.5' />
                        <p>Finalizar o cadastro do processo no SIEF-Processos</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faFolder}
                            className='mr-2 mt-0.5'
                        />
                        <p>Existe SJD a ser avaliada</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faFileCircleExclamation}
                            className='mr-2 mt-0.5'
                        />
                        <p>Existe documento a ser efetivado</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faFolderOpen}
                            className='mr-2 mt-0.5'
                        />
                        <p>Existe providência aberta</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faNoteSticky}
                            className='mr-2 mt-0.5'
                        />
                        <p>Existe nota para o processo ativa</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <div className="relative">
                            <span className="absolute top-[6px] left-[3.5px] text-[10px] font-bold">C</span>
                            <FontAwesomeIcon icon={faClipboard} className="mr-2 mt-0.5 text-lg" />
                        </div>
                        <p>Existe ciência pendente</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <div className="relative">
                            <span className="absolute top-[6.5px] left-[2.4px] text-[10px] font-bold">M</span>
                            <FontAwesomeIcon icon={faClipboard} className="mr-2 mt-0.5 text-lg" />
                        </div>
                        <p>Existe manifestação pendente</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faHand}
                            className='mr-2 mt-0.5'
                        />
                        <p>Existe alegação</p>
                    </p>
                    <p className="text-gray-700 bg-[#FDE0DB] px-3 py-2 rounded-md flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            className='mr-2 mt-0.5'
                        />
                        <p>Processo está em atividade de análise de quesitos e a ficha de quesitos ainda não foi respondida</p>
                    </p>

                </div>
            </div>
            <div className='bg-white px-6 pb-6 pt-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] flex flex-col gap-2 h-fit'>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-md font-semibold text-gray-800 flex items-center ">
                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                        Notas
                    </h2>
                    <select
                        value={filter}
                        onChange={handleFilterChange}
                        className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="last-of-each-group">Notas mais recentes</option>
                        <option value="all">Todas as notas</option>
                        <option value="process">Notas para Processo</option>
                        <option value="team">Notas para Equipe</option>
                        <option value="user">Notas para Usuário</option>
                    </select>
                </div>
                <div className='max-h-[calc(100vh-255px)] h-fit flex flex-col gap-4 overflow-auto w-full'>
                    {filteredNotes.map((note) => (
                        <div key={note.id} className={`text-gray-600 ${bgColors[note.group]} px-3 py-2 rounded-md w-full`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-semibold flex items-center gap-2 w-100">
                                    {/* Badge */}
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColors[note.group]}`}>
                                        {badgeLabels[note.group]}
                                    </span>

                                    {/* Note Name with Truncation */}
                                    <span className="flex-1 truncate min-w-0 w-40" title={note.name}>
                                        {note.name}
                                    </span>
                                </span>
                                <span className="text-xs">
                                    {formatDate(note.date)}
                                </span>
                            </div>
                            <p>{note.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




