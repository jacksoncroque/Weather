import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { getForecast, getFutureForecast } from "../services/forecast";

// createContext cria um contexto global.
// Ele permite compartilhar dados entre componentes
// sem precisar passar props manualmente em cada nível.
const GlobalContext = createContext();

// Estado inicial da aplicação.
// Aqui ficam os valores padrões do contexto.
const initialState = {
  isLoading: false, // controla se algo está carregando
  inputValue: "", // armazena o valor do search
  currentForecast: null,
  tenDayForecast: [],
};

// Provider = componente responsável
// por disponibilizar os dados do contexto.
const GlobalProvider = ({ children }) => {
  // useState cria um estado local.
  // "state" guarda os dados.
  // "setState" atualiza os dados.
  const [state, setState] = useState(initialState);

  // Função que armazena o valor do input
  const handleSearchInputChange = (e) => {
    setState((prev) => {
      return { ...prev, inputValue: e.target.value };
    }); //"...state" usado para dizer que as outras propriedades do estado continuam iguais
  };

  // Função que limpa o valor do input
  const handleClearSearchInput = () => {
    setState((prev) => {
      return { ...state, inputValue: initialState.inputValue };
    }); //"inputValue: initialState.inputValue" para setar o valor default da aplicação
  };

  const showSucessMessage = (msg) => {
    toast.success(msg);
  };

  const showErrorMessage = (msg) => {
    toast.error(msg);
  };

  const dismissMessage = (msg) => {
    toast.dismiss(msg);
  };

  const handleSearchForecast = async (city = "Caxias do Sul") => {
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));

      const forecast = await getForecast(city);
      const futureForecast = await getFutureForecast(city, 10);

      setState((prev) => ({
        ...prev,
        currentForecast: forecast,
        tenDayForecast: futureForecast.forecast,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  // objeto que será compartilhado
  // para toda a aplicação.
  const values = {
    state,
    handleSearchInputChange,
    showSucessMessage,
    showErrorMessage,
    dismissMessage,
  };

  useEffect(() => {
    handleSearchForecast();
  }, []);

  // Provider envolve os componentes filhos
  // e entrega o "values" para todos eles.
  return (
    <GlobalContext.Provider value={values}>
      {children}{" "}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </GlobalContext.Provider>
  );
};

// Hook customizado.
// Facilita o uso do contexto nos componentes.
const useGlobalContext = () => {
  // useContext acessa os dados
  // armazenados no GlobalContext.
  return useContext(GlobalContext);
};

// exporta o Provider e o hook customizado
// para serem usados em outros arquivos.
export { GlobalProvider, useGlobalContext };
