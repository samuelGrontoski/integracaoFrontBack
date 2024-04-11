// Componentes
import { Sidebar } from '../components/sidebar';
import { BarraPesquisa } from '../components/barra_pesquisa';
import { HelloUser } from '../components/hello_user';

import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CollapsibleTable } from "../components/collapsible_table"


export function Chamados() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(fetchData, 3000); // Busca os dados a cada 1 minuto
        return () => clearInterval(intervalId); // Limpa o temporizador quando o componente é desmontado
    }, []);

    // useEffect(function () {
    //     const socket = io('http://127.0.0.1:5000'); // Conectar ao servidor de WebSocket do backend


    //     // Manipular eventos de atualização de dados
    //     socket.on('dadosAtualizados', () => {
    //         fetchData(); // Buscar dados quando os dados forem atualizados no backend
    //     });
    //     return () => socket.disconnect(); // Desconectar quando o componente for desmontado
    // }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/dadoschamados');
            if (response.ok) {
                const data = await response.json();
                setDados(data);
            } else {
                console.error('Erro ao buscar dados: ', response.statusText);
            }
        } catch (error) {
            console.error("Erro fetching dados: ", error)
        }
    };

    return (
        <div>
            <body>
                <div className="bg-cinza-200 fixed inset-y-0 w-screen" />
                <div className="bg-pec fixed inset-y-0 left-0 w-[200px]">
                    <Sidebar />
                </div>
                <main className='absolute inset-y-0 right-0 w-10/12 grid content-start gap-y-5 p-10'>
                    <BarraPesquisa />
                    <HelloUser user={"usuário"} />
                    <div className="py-5">
                        <CollapsibleTable />
                    </div>
                    {/* <div className='grid justify-items-center p-5'>
                            <table className="table-fixed table-xs w-11/12 md:w-full border-collapse text-xs">
                                <thead>
                                    <tr className='bg-table_header'>
                                        <th className='p-2 border border-slate-600'>Tipo</th>
                                        <th className='p-2 border border-slate-600'>Status</th>
                                        <th className='p-2 border border-slate-600'>Duração Total</th>
                                        <th className='p-2 border border-slate-600'>Tempo de Atendimento</th>
                                        <th className='p-2 border border-slate-600'>Tipo de Chamado</th>
                                        <th className='p-2 border border-slate-600'>Local</th>
                                        <th className='p-2 border border-slate-600'>Produto</th>
                                        <th className='p-2 border border-slate-600'>Cliente</th>
                                        <th className='p-2 border border-slate-600'>Responsável</th>
                                        <th className='p-2 border border-slate-600'>Descrição do chamado</th>
                                        <th className='p-2 border border-slate-600'>Operador</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dados.map(chamado => (
                                        <tr className='bg-white' key={chamado.cha_id}>
                                            <td className='border border-slate-600'>{chamado.cha_tipo}</td>
                                            <td className='border border-slate-600'>{chamado.cha_status}</td>
                                            <td className='border border-slate-600'>{chamado.cha_data_hora_abertura}</td>
                                            <td className='border border-slate-600'>{chamado.cha_data_hora_atendimento}</td>
                                            <td className='border border-slate-600'>{chamado.cha_tipo}</td>
                                            <td className='border border-slate-600'>{chamado.cha_DT}</td>
                                            <td className='border border-slate-600'>{chamado.cha_produto}</td>
                                            <td className='border border-slate-600'>{chamado.cha_cliente}</td>
                                            <td className='border border-slate-600'>{chamado.cha_acao}</td>
                                            <td className='border border-slate-600'>{chamado.cha_descricao}</td>
                                            <td className='border border-slate-600'>{chamado.cha_operador}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> */}
                </main>
            </body>

        </div>
    )
}