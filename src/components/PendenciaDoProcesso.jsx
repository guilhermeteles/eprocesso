export default function PendenciaDoProcesso() {
    return (
        <>
            <div className="break-words flex flex-col gap-2">
                <div className="break-words bg-[#FBFCFD] p-4 rounded-md">
                    <div className="break-words text-xs bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Ciência Pendente</div>
                    <div className="break-words mt-2">
                        <div className="break-words font-bold">Nome da Pendência de Ciência</div>
                        <div className="break-words text-sm">Aguardando resposta do usuário.</div>
                    </div>
                </div>
                <div className="break-words bg-[#FBFCFD] p-4 rounded-md">
                    <div className="break-words text-xs bg-[#FFF5C2] px-2 py-1 rounded-sm w-fit">Manifestação Pendente</div>
                    <div className="break-words mt-2">
                        <div className="break-words font-bold">Nome da Pendência de Manifestação</div>
                        <div className="break-words text-sm">Resposta do cliente ainda não recebida.</div>
                    </div>
                </div>
            </div>
        </>
    )
}