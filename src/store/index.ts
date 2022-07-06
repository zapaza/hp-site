import { ActionContext, createStore } from "vuex";
import { GetHogwardsData, IProfileInfo } from '../request/getHogwardsData';


interface IState {
  allCharacters: IProfileInfo[],
  students: IProfileInfo[],
  staff: IProfileInfo[],
  slytherin: IProfileInfo[],
  gryffindor: IProfileInfo[],
  hufflepuff: IProfileInfo[],
  ravenclaw: IProfileInfo[]
}


export const store = createStore({
    state: {
      allCharacters: [],
      students: [],
      staff: [],
      slytherin: [],
      gryffindor: [],
      hufflepuff: [],
      ravenclaw: [],
    },
    actions:{
      async getAllCharacters(ctx) {
       const data = await new GetHogwardsData().getAllCharacters();

       ctx.commit('updateAllCharacters', data)
      },

      async getStudents() {
        const data = await new GetHogwardsData().getStudents();
      },

      async getStaff(ctx) {
        const data = await new GetHogwardsData().getStaff();

        ctx.commit('updateStaff', data)
      },

      async getSlytherin() {
        const data = await new GetHogwardsData().getSlytherin();
      },

      async getGryffindor() {
        const data = await new GetHogwardsData().getGryffindor();
      },

      async getHufflepuff() {
        const data = await new GetHogwardsData().getHufflepuff();
      },

      async getRavenclaw() {
        const data = await new GetHogwardsData().getRavenclaw();
      },
    },
    mutations: {
      updateAllCharacters(state: IState, data: IProfileInfo[]) {
        state.allCharacters = data;
      },

      updateStaff(state: IState, data: IProfileInfo[]) {
        state.staff = data;
      },
    },

    getters: {
      showAllCharacters (state: IState) {
        return state.allCharacters;
      },

      showStaff (state: IState) {
        return state.staff;
      }
    },
  })