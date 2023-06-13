import axios from "axios";

/**
 * Instancia do axios responsavel por fazer as requisições http para o backend
 * Já contém a URL base, entao so precisa passar os endpoints ao usar os metodos http
 */
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
