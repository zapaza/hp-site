import { HttpRequest } from './request';

export interface IProfileInfo {
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand:{
        wood: string;
        core: string;
        length: number;
    },
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;
}

export class GetHogwardsData extends HttpRequest {
    constructor () {
      super('http://hp-api.herokuapp.com/api');
    };
   
    async getAllCharacters(): Promise<IProfileInfo[]> {
      let response = await this.get('/characters');
      return response.data as IProfileInfo[];
    };
    
    async getStudents(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/students');
        return response.data as IProfileInfo[];
    };
    
    async getStaff(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/staff');
        return response.data.users as IProfileInfo[];
    };

    async getSlytherin(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/house/slytherin');
        return response.data.users as IProfileInfo[];
    }

    async getGryffindor(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/house/gryffindor');
        return response.data.users as IProfileInfo[];
    }
    
    async getHufflepuff(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/house/hufflepuff');
        return response.data.users as IProfileInfo[];
    }
    
    async getRavenclaw(): Promise<IProfileInfo[]> {
        let response = await this.get('/characters/house/ravenclaw');
        return response.data.users as IProfileInfo[];
    }

    
  }