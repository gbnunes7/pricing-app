const Form = ({submit}) => {
    return(
        <form className="bg-gray-600 flex flex-col p-6 m-3.5 gap-2 rounded shadow-md md:w-2/4 lg:w-1/4">
            <label className="text-xl text-white" htmlFor="nomeMercadoria">Nome da Mercadoria</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="nomeMercadoria" required placeholder="Ex: Tecido Branco" name="nomeMercadoria" minLength="3" maxLength="120" pattern="^[A-Za-z\s]+$"/>
            
            <label className="text-xl text-white" htmlFor="custoMercadoria">Custo de Mercadoria</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="custoMercadoria" required placeholder="Ex: 2.99" name="custoMercadoria" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" htmlFor="custoFixo">Custo Fixo</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="custoFixo" required placeholder="Ex: 2.99" name="custoFixo" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" htmlFor="Vendas Mensais">Vendas Mensais</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="vendasMensais" required placeholder="Ex: 15.000" name="vendasMensais" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" htmlFor="simplesNacional">Simples Nacional</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="simplesNacional" required placeholder="Ex: 12 (porcento)" name="simplesNacional" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" htmlFor="comissaoVendedor">Comissão Vendedor</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="comissaoVendedor" name="comissaoVendedor" required placeholder="Ex: 5 (porcento)" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" htmlFor="lucroDesejado">Lucro desejado sobre vendas</label>
            <input className="border border-gray-300 p-1 rounded-md text-gray-700 placeholder-gray-500" type="text" id="lucroDesejado" name="lucroDesejado" required placeholder="Ex: 2 (porcento)" pattern="^\d+(\.\d+)?$"/>
            
            <button onSubmit={submit}className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Confirmar</button>
        </form>
    )
}

export default Form