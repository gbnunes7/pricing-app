import { useState,useEffect } from "react"
import Sheet from "../Sheet"



const Form = () => {

    const [nome,setNome] = useState('')
    const [custoMercadoria, setCustoMercadoria] = useState('')
    const [custoFixo, setCustoFixo] = useState('')
    const [vendasMensais, setVendasMensais] = useState('')
    const [simplesNacional, setSimplesNacional] = useState('')
    const [comissaoVendedor, setComissaoVendedor] = useState('')
    const [lucro, setLucro] = useState('')
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
		fetch("http://localhost:3001/users")
			.then((resultado) => resultado.json())
			.then((dados) => {
				setProdutos(dados);
			});
	}, []);
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
                name: nome,
                custo: parseFloat(custoMercadoria) || 0,
                custoFixo: parseFloat(custoFixo) || 0,
                vendasMensais: parseFloat(vendasMensais) || 0,
                simplesNacional: parseFloat(simplesNacional) || 0,
                comissao: parseFloat(comissaoVendedor) || 0,
                lucro: parseFloat(lucro) || 0,
				};
	
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
    
            setProdutos([...produtos, data]);
    
            setNome('');
            setCustoMercadoria('');
            setCustoFixo('');
            setVendasMensais('');
            setSimplesNacional('');
            setComissaoVendedor('');
            setLucro('');
    
            console.log('Success: ', data);
        } catch (error) {
            console.error('Error' + error)
        }

    }

    return(
        <div className="flex h-full">
        <form onSubmit={handleSubmit} className="bg-gray-600 flex flex-col p-6 m-3.5 gap-2 rounded shadow-md md:w-2/4 lg:w-1/4 h-3/4">
            <label className="text-xl text-white" htmlFor="nomeMercadoria">Nome da Mercadoria</label>
            <input value={nome} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="nomeMercadoria" required placeholder="Ex: Tecido Branco" name="nomeMercadoria" minLength="3" maxLength="120" pattern="^[A-Za-z\s]+$" onChange={(e) => setNome(e.target.value)}/>
            
            <label className="text-xl text-white" htmlFor="custoMercadoria">Custo de Mercadoria</label>
            <input value={custoMercadoria} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="custoMercadoria" required placeholder="Ex: 2.99" name="custoMercadoria" pattern="^\d+(\.\d+)?$" onChange={(e) => setCustoMercadoria(e.target.value)}/>

            <label className="text-xl text-white" htmlFor="custoFixo">Custo Fixo</label>
            <input value={custoFixo} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="custoFixo" required placeholder="Ex: 2.99" name="custoFixo" pattern="^\d+(\.\d+)?$" onChange={(e) => setCustoFixo(e.target.value)}/>

            <label className="text-xl text-white" htmlFor="Vendas Mensais">Vendas Mensais</label>
            <input value={vendasMensais} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="vendasMensais" required placeholder="Ex: 15.000" name="vendasMensais" pattern="^\d+(\.\d+)?$" onChange={(e) => setVendasMensais(e.target.value)}/>

            <label className="text-xl text-white" htmlFor="simplesNacional">Simples Nacional</label>
            <input value={simplesNacional} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="simplesNacional" required placeholder="Ex: 12 (porcento)" name="simplesNacional" pattern="^\d+(\.\d+)?$" onChange={(e) => setSimplesNacional(e.target.value)}/>

            <label className="text-xl text-white" htmlFor="comissaoVendedor">Comissão Vendedor</label>
            <input value={comissaoVendedor} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="comissaoVendedor" name="comissaoVendedor" required placeholder="Ex: 5 (porcento)" pattern="^\d+(\.\d+)?$" onChange={(e) => setComissaoVendedor(e.target.value)}/>

            <label className="text-xl text-white" htmlFor="lucroDesejado">Lucro desejado sobre vendas</label>
            <input value={lucro} className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="number" id="lucroDesejado" name="lucroDesejado" required placeholder="Ex: 2 (porcento)" pattern="^\d+(\.\d+)?$" onChange={(e) => setLucro(e.target.value)}/>
            
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Confirmar</button>
        </form>
        <Sheet produtos={produtos}/>
        </div>
    )
}

export default Form