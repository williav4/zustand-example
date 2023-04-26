import { useCombinedStore } from '../state/Store';

export const Counter = () => {
    const counterNumber = useCombinedStore(state => state.number);
    const increase = useCombinedStore(state => state.increaseCounterNumber);
    const decrease = useCombinedStore(state => state.decreaseCounterNumber);

    return (
        <>
            <button onClick={increase}>+</button>
            {counterNumber}
            <button onClick={decrease}>-</button>
        </>
    )
}