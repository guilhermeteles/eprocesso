import { useState } from 'react';

const Dashboard = ({ selectedItems, setSelectedItems }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);


  const cardsData = [
    { 
      id: 1, 
      icon: 'gavel', 
      title: "Reuniões de Julgamento", 
      content: `
      <div class="break-words flex flex-col gap-2">
          <div class="break-words bg-[#FBFCFD] p-4 rounded-md">
              <div class="break-words flex justify-between">
                  <div class="break-words text-xs bg-[#FFF3F2] px-2 py-1 rounded-sm">Pauta em suplementação</div>
                  <div class="break-words text-sm">11/08/2024</div>
              </div>
              <div class="break-words mt-2">
                  <div class="break-words font-bold">Reunião com o Cliente</div>
                  <div class="break-words text-sm">Discussão sobre a apresentação da tela de visualização do projeto.</div>
              </div>
          </div>
          <div class="break-words bg-[#FBFCFD] p-4 rounded-md">
              <div class="break-words flex justify-between">
                  <div class="break-words text-xs bg-[#E3F5E1] px-2 py-1 rounded-sm">Agendada</div>
                  <div class="break-words text-sm">11/08/2024</div>
              </div>
              <div class="break-words mt-2">
                  <div class="break-words font-bold">Reunião com o Cliente</div>
                  <div class="break-words text-sm">Revisão final do projeto antes da entrega.</div>
              </div>
          </div>
          <div class="break-words bg-[#FBFCFD] p-4 rounded-md">
              <div class="break-words flex justify-between">
                  <div class="break-words text-xs bg-[#FFF5C2] px-2 py-1 rounded-sm">Em agendamento</div>
                  <div class="break-words text-sm">11/08/2024</div>
              </div>
              <div class="break-words mt-2">
                  <div class="break-words font-bold">Reunião com a Equipe Técnica</div>
                  <div class="break-words text-sm">Planejamento da próxima fase do projeto.</div>
              </div>
          </div>
      </div>
      ` 
  },
  { 
      id: 2, 
      icon: 'tasks', 
      title: "Pendências do Processo",
      content: `
      <div class="break-words flex flex-col gap-2">
          <div class="break-words bg-[#FBFCFD] p-4 rounded-md">
              <div class="break-words text-xs bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Ciência Pendente</div>
              <div class="break-words mt-2">
                  <div class="break-words font-bold">Nome da Pendência de Ciência</div>
                  <div class="break-words text-sm">Aguardando resposta do usuário.</div>
              </div>
          </div>
          <div class="break-words bg-[#FBFCFD] p-4 rounded-md">
              <div class="break-words text-xs bg-[#FFF5C2] px-2 py-1 rounded-sm w-fit">Manifestação Pendente</div>
              <div class="break-words mt-2">
                  <div class="break-words font-bold">Nome da Pendência de Manifestação</div>
                  <div class="break-words text-sm">Resposta do cliente ainda não recebida.</div>
              </div>
          </div>
      </div>
      ` 
  },
  { 
      id: 3, 
      icon: 'edit', 
      title: "Notas",
      content: `
      <div class="break-words flex flex-col gap-2">
          <div class="break-words bg-[#FFF5C2] p-4 rounded-md">
              <div class="break-words flex justify-between">
                  <div class="break-words text-xs font-bold">Autor: Nome do Autor da Nota</div>
                  <div class="break-words text-xs">Data: 20/02/2023</div>
              </div>
              <div class="break-words text-sm mt-2">Nota: Detalhes relevantes sobre o progresso do projeto e observações importantes.</div>
          </div>
          <div class="break-words bg-[#FFF5C2] p-4 rounded-md">
              <div class="break-words flex justify-between">
                  <div class="break-words text-xs font-bold">Autor: Nome do Autor da Nota</div>
                  <div class="break-words text-xs">Data: 20/02/2023</div>
              </div>
              <div class="break-words text-sm mt-2">Nota: Informações sobre as próximas etapas a serem seguidas.</div>
          </div>
      </div>
      ` 
  },
  { 
      id: 4, 
      icon: 'clock', 
      title: "Temporalidade do Processo",
      content: `
      <div class="break-words flex flex-col gap-2">
          <div class="break-words bg-[#F8DFE2] h-12 rounded-md flex justify-between items-center px-4">
              <div class="break-words font-semibold">Usuário</div>
              <div class="break-words font-bold">20 dias</div>
          </div>
          <div class="break-words bg-[#FEE685] h-12 rounded-md flex justify-between items-center px-4">
              <div class="break-words font-semibold">Atividade</div>
              <div class="break-words font-bold">40 dias</div>
          </div>
          <div class="break-words bg-[#D4E5FF] h-12 rounded-md flex justify-between items-center px-4">
              <div class="break-words font-semibold">Equipe</div>
              <div class="break-words font-bold">45 dias</div>
          </div>
      </div>
      ` 
  },
  { 
      id: 5, 
      icon: 'info-circle', 
      title: "Descrição do Processo",
      content: `
      <div class="break-words flex flex-col gap-2">
          <div class="break-words text-xs">Prioridade do Processo</div>
          <div class="break-words text-sm font-semibold">Sem prioridade</div>
          <div class="break-words text-xs">Existem Providências Abertas?</div>
          <div class="break-words text-sm font-semibold"><div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
          <div class="break-words text-xs">Providências</div>
          <div class="break-words text-sm font-semibold">Desistência: aguardando confirmação.</div>
      </div>
      ` 
  },
  { 
    id: 6, 
    icon: 'file-invoice-dollar', 
    title: "Sobre a Inscrição na Dívida Ativa da União",
    content: `
    <div class="break-words flex flex-col gap-2">
        <div class="break-words text-xs">Prioridade do Processo</div>
        <div class="break-words text-sm font-semibold">Sem prioridade</div>
        <div class="break-words text-xs">Indicador de Providência Aberta</div>
        <div class="break-words text-sm font-semibold">
            <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
        </div>
        <div class="break-words text-xs">Providência(s)</div>
        <div class="break-words text-sm font-semibold">DESISTÊNCIA</div>
        <div class="break-words text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="break-words text-sm font-semibold">30/03/2024</div>
        <div class="break-words text-xs">Nome(s) Responsável(is) pela Abertura da(s) Providência(s)</div>
        <div class="break-words text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="break-words text-xs">Alerta de Providência com Prazo</div>
        <div class="break-words text-sm font-semibold">
            <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
        </div>
        <div class="break-words text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="break-words text-sm font-semibold">
            <div class="break-words bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
        </div>
        <div class="break-words text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="break-words text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELICIO DE CARVALHO</div>
        <div class="break-words text-xs">Observações</div>
        <div class="break-words text-sm">Este processo pode ter implicações financeiras e deve ser acompanhado regularmente.</div>
    </div>
    ` 
},

    { id: 7, icon:'paper-plane', title: "Sobre o Controle / Fluxo do Processo",
      content: `
      <div class="break-words flex flex-col gap-2">
        <div class="break-words text-xs">Prioridade do Processo</div>
        <div class="break-words text-sm font-semibold">Sem prioridade</div>
        <div class="break-words text-xs">Indicador se Existe Providência Aberta</div>
        <div class="break-words text-sm font-semibold"><div class="break-words  bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="break-words text-xs">Providência(s)</div>
        <div class="break-words text-sm font-semibold">DESISTÊNCIA</div>
        <div class="break-words text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="break-words text-sm font-semibold">30/03/2024</div>
        <div class="break-words text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="break-words text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="break-words text-xs">Alerta de Providência com Prazo</div>
        <div class="break-words text-sm font-semibold"><div class="break-words  bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="break-words text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="break-words text-sm font-semibold"><div class="break-words bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="break-words text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="break-words text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
      { 
        id: 8, 
        icon: 'clipboard-check', 
        title: "Sobre o Estado do Processo",
        content: `
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Classificação do Processo</div>
                <div class="text-sm font-semibold">Sem Prioridade</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Existência de Providências Pendentes</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Tipo de Providência</div>
                <div class="text-sm font-semibold">DESISTÊNCIA</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Data Limite para Providência</div>
                <div class="text-sm font-semibold">30/03/2024</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Responsável pela Abertura</div>
                <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Alerta de Prazo</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Prazo Vencido</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Destinatário da Providência</div>
                <div class="text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
        </div>
        ` 
    }
    
    ,
      { 
        id: 9, 
        icon: 'eye', 
        title: "Sobre o Interessado",
        content: `
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Urgência do Processo</div>
                <div class="text-sm font-semibold">Sem Urgência</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Status de Providência Aberta</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Tipo de Providência</div>
                <div class="text-sm font-semibold">DESISTÊNCIA</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Data Limite da Providência</div>
                <div class="text-sm font-semibold">30/03/2024</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Responsável pela Abertura</div>
                <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Alerta de Prazo Ativo</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Prazo Expirado?</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Destinatário da Providência</div>
                <div class="text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
        </div>
        ` 
    }
    ,
      { 
        id: 10, 
        icon: 'balance-scale-right', 
        title: "Sobre o Julgamento",
        content: `
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Urgência do Processo</div>
                <div class="text-sm font-semibold">Sem Urgência</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Status de Providência</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="text-xs text-gray-500">Tipo de Providência</div>
                    <div class="text-sm font-semibold">DESISTÊNCIA</div>
                </div>
                <div>
                    <div class="text-xs text-gray-500">Data Limite para Providência</div>
                    <div class="text-sm font-semibold">30/03/2024</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Responsável pela Abertura</div>
                <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
    
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <div class="text-xs text-gray-500">Alerta de Prazo</div>
                    <div class="text-sm font-semibold">
                        <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Ativo</div>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500">Prazo Expirado?</div>
                    <div class="text-sm font-semibold">
                        <div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
                    </div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Destinatário da Providência</div>
                <div class="text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
        </div>
        ` 
    }
    ,
      { 
        id: 11, 
        icon: 'list-alt', 
        title: "Sobre o Pedido Existente no Processo",
        content: `
        <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Nível de Urgência</div>
                <div class="text-sm font-semibold">Baixa Prioridade</div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Status de Providência</div>
                <div class="text-sm font-semibold">
                    <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Aberta</div>
                </div>
            </div>
    
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="text-xs text-gray-500">Tipo de Providência</div>
                    <div class="text-sm font-semibold">Renúncia</div>
                </div>
                <div>
                    <div class="text-xs text-gray-500">Data Limite</div>
                    <div class="text-sm font-semibold">30 de Março de 2024</div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Responsável pela Abertura</div>
                <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
    
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <div class="text-xs text-gray-500">Alertas de Prazo</div>
                    <div class="text-sm font-semibold">
                        <div class="bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Ativo</div>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500">Prazo Expirado?</div>
                    <div class="text-sm font-semibold">
                        <div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
                    </div>
                </div>
            </div>
    
            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-500">Destinatário da Providência</div>
                <div class="text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
        </div>
        ` 
    }
    ,
      { 
        id: 12, 
        icon: 'user-tie', 
        title: "Sobre o Responsável",
        content: `
        <div class="break-words flex flex-col gap-4">
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Nome do Responsável</div>
                <div class="break-words text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Cargo</div>
                <div class="break-words text-sm font-semibold">Analista de Processos</div>
            </div>
    
            <div class="break-words grid grid-cols-2 gap-4">
                <div>
                    <div class="break-words text-xs">Data de Abertura da Providência</div>
                    <div class="break-words text-sm font-semibold">15/01/2024</div>
                </div>
                <div>
                    <div class="break-words text-xs">E-mail de Contato</div>
                    <div class="break-words text-sm font-semibold">florisvaldo.carvalho@exemplo.com</div>
                </div>
            </div>
    
            <div class="break-words grid grid-cols-2 gap-4">
                <div>
                    <div class="break-words text-xs">Telefone de Contato</div>
                    <div class="break-words text-sm font-semibold">(71) 1234-5678</div>
                </div>
                <div>
                    <div class="break-words text-xs">Status do Responsável</div>
                    <div class="break-words text-sm font-semibold">
                        <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Ativo</div>
                    </div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Observações</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#F1F3F6] p-2 rounded-sm w-full">
                        Comprometido em manter a comunicação regular com a equipe.
                    </div>
                </div>
            </div>
            
            <div class="break-words bg-[#F1F3F6] p-2 rounded-sm mt-4">
                <div class="break-words text-xs">Outras Informações</div>
                <div class="break-words text-sm">
                    Este responsável está em contato direto com as partes envolvidas e sempre disponível para esclarecimentos.
                </div>
            </div>
        </div>
        ` 
    }
    ,
      { 
        id: 13, 
        icon: 'check-double', 
        title: "Sobre o Trabalho com o Processo",
        content: `
        <div class="break-words flex flex-col gap-4">
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Prioridade do Processo</div>
                <div class="break-words text-sm font-semibold">Sem prioridade</div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Indicador de Providência Aberta</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Tipo de Providência</div>
                <div class="break-words text-sm font-semibold">DESISTÊNCIA</div>
            </div>
    
            <div class="break-words grid grid-cols-2 gap-4">
                <div>
                    <div class="break-words text-xs">Data do Prazo</div>
                    <div class="break-words text-sm font-semibold">30/03/2024</div>
                </div>
                <div>
                    <div class="break-words text-xs">Responsável pela Abertura</div>
                    <div class="break-words text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Alerta de Prazo</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Alerta de Prazo Expirado</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Destinatário da Providência</div>
                <div class="break-words text-sm font-semibold">DRF/SALVADOR/BA - FLORISVALDO FELICIO DE CARVALHO</div>
            </div>
    
            <div class="break-words bg-[#F1F3F6] p-2 rounded-sm mt-4">
                <div class="break-words text-xs">Observações Adicionais</div>
                <div class="break-words text-sm">
                    É importante manter contato frequente com os responsáveis para garantir o andamento do processo.
                </div>
            </div>
        </div>
        ` 
    }
    ,
      { 
        id: 14, 
        icon: 'search-dollar', 
        title: "Sobre os Valores",
        content: `
        <div class="break-words flex flex-col gap-4">
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Prioridade do Processo</div>
                <div class="break-words text-sm font-semibold">Média Prioridade</div>
            </div>
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Status da Dívida Ativa</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Ativa</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Tipo de Dívida</div>
                <div class="break-words text-sm font-semibold">Tributária</div>
            </div>
    
            <div class="break-words grid grid-cols-2 gap-4">
                <div>
                    <div class="break-words text-xs">Data de Vencimento</div>
                    <div class="break-words text-sm font-semibold">15/04/2024</div>
                </div>
                <div>
                    <div class="break-words text-xs">Valor Total da Dívida</div>
                    <div class="break-words text-sm font-semibold">R$ 10.500,00</div>
                </div>
            </div>
    
            <div class="break-words grid grid-cols-2 gap-4">
                <div>
                    <div class="break-words text-xs">Responsável pelo Acompanhamento</div>
                    <div class="break-words text-sm font-semibold">MARCOS SILVA</div>
                </div>
                <div>
                    <div class="break-words text-xs">Nome do Contato para Negociação</div>
                    <div class="break-words text-sm font-semibold">ANA CARLA</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Penalidades Aplicadas</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Multa de 10%</div>
                </div>
            </div>
    
            <div class="break-words flex justify-between items-center">
                <div class="break-words text-xs">Condições de Pagamento</div>
                <div class="break-words text-sm font-semibold">
                    <div class="break-words bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Parcelamento Disponível</div>
                </div>
            </div>
            <div class="break-words bg-[#F1F3F6] p-2 rounded-sm">
              <div class="break-words text-xs">Observações Importantes</div>
              <div class="break-words text-sm">
                  O valor da dívida pode ser renegociado conforme as condições do contribuinte.
              </div>
            </div>
        </div>
        ` 
    }
    
    ,
  ];
  
  
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === index) return;
    setDraggedOverItem(index);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!e.relatedTarget?.closest('.draggable-card')) {
      setDraggedOverItem(null);
    }
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedItem === dropIndex) return;

    const newItems = [...selectedItems];
    const draggedItemContent = newItems[draggedItem];
    
    // Remove item from old position
    newItems.splice(draggedItem, 1);
    // Add item to new position
    newItems.splice(dropIndex, 0, draggedItemContent);

    setSelectedItems(newItems);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <div className="mt-4">
      <div className="masonry-layout">
        {selectedItems.map((itemId, index) => {
          const card = cardsData.find(card => card.id === itemId);

          return card ? (
            <div
              key={card.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              className={`draggable-card bg-white rounded-lg shadow-sm transition-all mb-6 ${
                draggedItem === index ? 'opacity-50' : ''
              } ${draggedOverItem === index ? 'border-2 border-blue-500' : ''}`}
            >
              <div className="p-6 text-[#3D4551]">
                <div className="flex justify-between items-center mb-4">
                  <div className='flex'>
                  <i className={`fas fa-${card.icon} me-2 mt-1.5`}></i>
                  <h2 className="text-lg leading-6 font-semibold">{card.title}</h2>
                  </div>
                  
                  
                  <div className="cursor-grab p-2 rounded-lg hover:border-gray-200  border-white border h-fit flex items-center">
                    {/* <span className="absolute tooltiptext">Arrastar</span> */}
                    <i className="text-gray-200 fa-solid fa-grip-lines rotate-45"></i>
                  </div>
                </div>
                <p className="text-gray-600"><div dangerouslySetInnerHTML={{ __html: card.content }} /></p>
              </div>
            </div>
          ) : (
            <div key={itemId} className="bg-gray-200 p-4 rounded-lg">
              <p>Card not found for ID: {itemId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
