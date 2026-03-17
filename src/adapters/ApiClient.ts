import axios, { AxiosInstance } from 'axios';
/**
 * ApiClient provides methods for making API requests
 */
class ApiClient {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.example.com'
    });
  }
  /**
   * Makes a GET request to the specified endpoint
   * @param {string} endpoint
   * @returns {Promise<any>}
   */
  async get(endpoint: string): Promise<any> {
    return this.axiosInstance.get(endpoint);
  }
}
export { ApiClient };