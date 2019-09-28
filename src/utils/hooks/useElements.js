import { useSelector, useActions } from "./";

export const useElements = () => useSelector(state => state.elements.list);

export const useFilteredElements = (filter, keys = false) => {
    const elements = useElements();
    const filteredKeys = Object.keys(elements).filter(key => filter(elements[key]));
    if (keys) {
        return filteredKeys;
    } else {
        const filtered = {};
        filteredKeys.forEach(key => (filtered[key] = elements[key]));
        return filtered;
    }
};

export const useFilteredElementsKeys = filter => useFilteredElements(filter, true);

export const useElement = id => useSelector(state => state.elements.list[id]);

export const useElementsActions = () => useActions(actions => actions.elements);

export const useElementsState = () =>
    useSelector(state => {
        const { query } = state.elements;
        return { query };
    });
