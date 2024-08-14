const Sheet = ({produtos}) => {
	

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
				{produtos.map((produto) => (
					<tr key={produto.id} className="border-b border-gray-200">
						<td className="py-2 px-1">{produto.name}</td>
						<td className="py-2 px-1">{produto.custo}</td>
						<td className="py-2 px-1">{produto.custoFixo}</td>
						<td className="py-2 px-1">{produto.vendasMensais}</td>
						<td className="py-2 px-1">{produto.simplesNacional}</td>
						<td className="py-2 px-1">{produto.comissao}</td>
						<td className="py-2 px-1">{produto.lucro}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Sheet;
