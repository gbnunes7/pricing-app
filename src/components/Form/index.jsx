const Form = () => {
    return(
        <form className="bg-gray-600 flex flex-col p-6 m-3.5 gap-2 rounded shadow-md">
            <label className="text-xl text-white" for="custoMercadoria">Custo de Mercadoria</label>
            <input type="text" id="custoMercadoria" required placeholder="Ex: 2.99" name="custoMercadoria" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" for="custoFixo">Custo Fixo</label>
            <input type="text" id="custoFixo" required placeholder="Ex: 2.99" name="custoFixo" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" for="Vendas Mensais">Vendas Mensais</label>
            <input type="text" id="vendasMensais" required placeholder="Ex: 15.000" name="vendasMensais" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" for="simplesNacional">Simples Nacional</label>
            <input type="text" id="simplesNacional" required placeholder="Ex: 12 (porcento)" name="simplesNacional" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" for="comissaoVendedor">Comissão Vendedor</label>
            <input type="text" id="comissaoVendedor" name="comissaoVendedor" required placeholder="Ex: 5 (porcento)" pattern="^\d+(\.\d+)?$"/>

            <label className="text-xl text-white" for="lucroDesejado">Lucro desejado sobre vendas</label>
            <input type="text" id="lucroDesejado" name="lucroDesejado" required placeholder="Ex: 2 (porcento)" pattern="^\d+(\.\d+)?$"/>

        </form>
    )
}

export default Form