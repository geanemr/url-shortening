export const useLocalStorage = () => {
    const setItem = <T>(key: string, value: T) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Erro ao salvar no localStorage", error);
      }
    };
  
    const getItem = <T>(key: string): T | null => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error("Erro ao recuperar do localStorage", error);
        return null;
      }
    };
  
    const removeItem = (key: string) => {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.error("Erro ao remover do localStorage", error);
      }
    };
  
    return { setItem, getItem, removeItem };
  };
  