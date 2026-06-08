const apiUrl = import.meta.env.VITE_API_URL; //URL DA API, VINDO DO .ENV

const apiKey = import.meta.env.VITE_API_KEY; //CHAVE DA API, VINDO DO .ENV

export const apiInstance = {
  // Função get: usada para fazer requisições do tipo GET, que recebe como parâmetros
  // um método e params, que retornam um objeto.
  get: async (method, params = {}) => {
    try {
      const aux = []; //Inicia vazio para armazenar temporariamente os dados
      for (const key in params) {
        //Interar as propriedadades do objeto
        aux.push(`${key}=${params[key]}`); //Insere na lista os dois params
      }

      const urlParameters = aux.join("&"); // Junta as strings do aux com um &

      // Vai retornar o endereço URL com o método e a chave
      const fetchUrl = `${apiUrl}/${method}?key=${apiKey}&lang=pt&${urlParameters}`;

      //Retorna a resposta da requisição, função fetch é usada para fazer requisições HTTP
      const response = await fetch(fetchUrl, {
        method: "GET",
      });

      //Pega a resposta e converte em um objeto, com o .json
      const data = await response.json();

      return {
        success: response.ok, //Retorna um booleano
        body: data, // Retorno da API
      };
    } catch (error) {
      console.log(error);

      // Caso houver erro no try, a função ainda retorna uma resposta padronizada
      // Qualquer erro não previsto, retorna a mensagem desse erro ou 'erro interno' por padrão
      return {
        success: false,
        body: error?.message ?? "Erro Interno",
      };
    }
  },
};
