import { create } from 'zustand';

const createCounterStore = ((set, get) => (
    { 
        number: 123,
        increaseCounterNumber: () => set((state) => ({ number: state.number + 1})),
        decreaseCounterNumber: () => set((state) => ({ number: state.number - 1})),
        logCounterNumber: () => {
            console.log(`Current number value equals ${get().number}`)
        }
     }
));

const createPokeStore = ((set) => (
    {
        pokemon: [],
        fetchPokemon: async () => {
            await fetch('https://pokeapi.co/api/v2/pokemon')
                    .then(res => res.json())
                    .then(data => set({ pokemon: data.results }))
                    .catch(err => console.error(err))
        }
    }
));

export const useCombinedStore = create((...params) => ({
    ...createCounterStore(...params),
    ...createPokeStore(...params)
}))