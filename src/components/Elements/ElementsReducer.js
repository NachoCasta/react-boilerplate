import uuidv1 from "uuid/v1";
const loremIpsum = require("utils/loremIpsum");

export const initialState = {
    list: {
        "123": {
            title: "Element 1",
            description: loremIpsum.subtitle1,
            content: loremIpsum.paragraph1
        },
        "456": {
            title: "Element 2",
            description: loremIpsum.subtitle2,
            content: loremIpsum.paragraph2
        },
        "-023mvdjsfj23k": {
            title: "Element 3",
            description: loremIpsum.subtitle1,
            content: loremIpsum.paragraph3
        }
    },
    query: ""
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_ELEMENTS":
            return { ...state, list: payload };
        case "ADD_NEW_ELEMENT":
            return { ...state, list: { ...state.list, ...payload } };
        case "SET_ELEMENT":
            return { ...state, list: { ...state.list, ...payload } };
        case "REMOVE_ELEMENT":
            delete state.list[payload];
            return state;
        case "SET_ELEMENTS_QUERY":
            return { ...state, query: payload };
        default:
            return state;
    }
};

export const actions = dispatch => ({
    newElement: () => {
        const element = {
            title: loremIpsum.title,
            description: loremIpsum.subtitle2,
            content: loremIpsum.paragraph4
        };
        const id = uuidv1();
        dispatch(newElement(id, element));
    },
    setElement: (id, element) => dispatch(setElement(id, element)),
    removeElement: id => dispatch(removeElement(id)),
    setQuery: query => dispatch(setQuery(query))
});

const setElements = elements => ({
    type: "SET_ORGANIZATIONS",
    payload: elements
});

const newElement = (id, element) => ({
    type: "ADD_NEW_ELEMENT",
    payload: { [id]: element }
});

const setElement = (id, element) => ({
    type: "SET_ELEMENT",
    payload: { [id]: element }
});

const removeElement = id => ({
    type: "REMOVE_ELEMENT",
    payload: id
});

const setQuery = query => ({ type: "SET_QUERY", payload: query });
