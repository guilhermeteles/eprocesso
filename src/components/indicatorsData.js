import {
    faNotEqual,
    faUserTag,
    faBalanceScale,
    faMoneyBillWave,
    faUserInjured,
    faUserPlus,
    faLaptop,
    faThList,
    faCoins,
    faLink,
    faKey,
    faEdit,
    faListOl,
    faUserSecret,
    faStickyNote,
  } from '@fortawesome/free-solid-svg-icons';
  
  export const groupsData = [
    {
      title: "Interessado",
      color: "#C7EFE2",
      items: [
        { id: 1, color:"#EDF5FF", icon: faNotEqual, title: "Contribuinte Diferenciado", status:"Diferenciado" },
        { id: 2, color:"#FFF5C2", icon: faUserTag, title: "Contribuinte Especial", status:"Parcialmente" },
        { id: 3, color:"#FFF2F5", icon: faBalanceScale, title: "Existe Responsável Solidário/Subsidiário", status:"Subsidiário" },
        { id: 4, color:"#EDF5FF", icon: faMoneyBillWave, title: "Grande Devedor", status:"Devedor" },
        { id: 5, color:"#FFF5C2", icon: faUserInjured, title: "Prioridade por Moléstia Grave ou Deficiência", status:"Sem prioridade" },
        { id: 6, color:"#FFF2F5", icon: faUserPlus, title: "Prioridade Baseada no Estatuto do Idoso", status:"Idoso" },
      ],
    },
    {
      title: "Processo",
      color: "#C7EFE2",
      items: [
        { id: 7, color:"#EDF5FF", icon: faLaptop, title: "Cadastro Efetivado no SIEF Processos", status:"SIEF" },
        { id: 8, color:"#FFF5C2", icon: faThList, title: "Contencioso de Baixa Complexidade", status:"Alta complexidade" },
        { id: 9, color:"#FFF2F5", icon: faCoins, title: "Contencioso de Pequeno Valor", status:"Baixo valor" },
        { id: 10, color:"#EDF5FF", icon: faLink, title: "Juntado ou Vinculado", status:"Juntado" },
        { id: 11, color:"#FFF5C2", icon: faKey, title: "Nível de Sigilo", status:"Alto sigilo" },
        { id: 12, color:"#FFF2F5", icon: faEdit, title: "Nota de Processo", status:"Sem nota" },
        { id: 13, color:"#EDF5FF", icon: faListOl, title: "Prioridade do Processo", status:"Baixa" },
        { id: 14, color:"#FFF5C2", icon: faUserSecret, title: "Segredo de Justiça", status:"Confidencial" },
        { id: 15, color:"#FFF2F5", icon: faStickyNote, title: "SJD Pendente", status:"Sem pendências" },
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