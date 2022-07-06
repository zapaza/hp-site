import axios, { AxiosInstance } from 'axios'

export const httpHeaders = { accept: 'application/json' }

export abstract class HttpRequest {
  protected baseUrl: string;
  private axiosInstance: AxiosInstance | any = null;
   
  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
    this.axiosInstance = axios.create({})
    this.enableInterceptors();
  }

  private enableInterceptors () {
    // Here's where you can define common refetching logic
  }

  protected get (url: string, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'GET',
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null
    });
  }

  protected post (url: string, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'POST',
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null
    });
  }
}
