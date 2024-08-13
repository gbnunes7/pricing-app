import { useEffect, useState } from "react";
const Sheet = () => {
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/users")
			.then((resultado) => resultado.json())
			.then((dados) => {
				setProdutos(dados);
			});
	}, []);

	return (
		<table className="w-3/4 h-full bg-white border border-gray-200">
			<thead className="bg-gray-100 border-b border-gray-300">
				<tr>
					<th className="py-2 px-1 text-left text-gray-600">Name</th>
					<th className="py-2 px-1 text-left text-gray-600">
						Custo Mercadoria
					</th>
					<th className="py-2 px-1 text-left text-gray-600">Custo Fixo</th>
					<th className="py-2 px-1 text-left text-gray-600">Vendas Mensais</th>
					<th className="py-2 px-1 text-left text-gray-600">
						Simples Nacional
					</th>
					<th className="py-2 px-1 text-left text-gray-600">Comissão</th>
					<th className="py-2 px-1 text-left text-gray-600">Lucro</th>
				</tr>
			</thead>
			<tbody>
				{produtos.map((item) => (
					<tr key={item.id} className="border-b border-gray-200">
						<td className="py-2 px-1">{item.name}</td>
						<td className="py-2 px-1">{item.custo}</td>
						<td className="py-2 px-1">{item.custoFixo}</td>
						<td className="py-2 px-1">{item.vendasMensais}</td>
						<td className="py-2 px-1">{item.simplesNacional}</td>
						<td className="py-2 px-1">{item.comissao}</td>
						<td className="py-2 px-1">{item.lucro}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Sheet;
