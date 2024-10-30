import {
    faPerson,
    faHandshake,
    faSackDollar,
    faWheelchair,
    faPersonCane,
    faDatabase,
    faNoteSticky,
    faChartSimple,
    faLink,
    faLock,
    faKey,
    faFileArrowUp,
    faDollarSign,
    faMagnifyingGlassMinus,
  } from '@fortawesome/free-solid-svg-icons';
  
  export const groupsData = [
    {
      title: "Indicadores do Interessado",
      color: "#92D9BB",
      items: [
        { id: 1, color:"#EDF5FF", icon: faPerson, title: "Contribuinte Diferenciado", status:"Diferenciado" },
        { id: 2, color:"#FFF5C2", icon: faPerson, title: "Contribuinte Especial", status:"Parcialmente" },
        { id: 3, color:"#FFF2F5", icon: faHandshake, title: "Existe Responsável Solidário/Subsidiário", status:"Subsidiário" },
        { id: 4, color:"#EDF5FF", icon: faSackDollar, title: "Grande Devedor", status:"Devedor" },
        { id: 5, color:"#FFF5C2", icon: faWheelchair, title: "Prioridade por Moléstia Grave ou Deficiência", status:"Sem prioridade" },
        { id: 6, color:"#FFF2F5", icon: faPersonCane, title: "Prioridade Baseada no Estatuto do Idoso", status:"Idoso" },
      ],
    },
    {
      title: "Indicadores do Processo",
      color: "#92D9BB",
      items: [
        { id: 7, color:"#EDF5FF", icon: faDatabase, title: "Cadastro Efetivado no SIEF Processos", status:"SIEF" },
        { id: 8, color:"#FFF5C2", icon: faMagnifyingGlassMinus, title: "Contencioso de Baixa Complexidade", status:"Alta complexidade" },
        { id: 9, color:"#FFF2F5", icon: faDollarSign, title: "Contencioso de Pequeno Valor", status:"Baixo valor" },
        { id: 10, color:"#EDF5FF", icon: faLink, title: "Juntado ou Vinculado", status:"Juntado" },
        { id: 11, color:"#FFF5C2", icon: faLock, title: "Nível de Sigilo", status:"Alto sigilo" },
        { id: 12, color:"#FFF2F5", icon: faNoteSticky, title: "Nota de Processo", status:"Sem nota" },
        { id: 13, color:"#EDF5FF", icon: faChartSimple, title: "Prioridade do Processo", status:"Baixa" },
        { id: 14, color:"#FFF5C2", icon: faKey, title: "Segredo de Justiça", status:"Confidencial" },
        { id: 15, color:"#FFF2F5", icon: faFileArrowUp, title: "SJD Pendente", status:"Sem pendências" },
      ],
    },
  ];
  
  export const getIndicatorById = (id) => {
    for (const group of groupsData) {
      const item = group.items.find(item => item.id === id);
      if (item) return item;
    }
    return null;
  };