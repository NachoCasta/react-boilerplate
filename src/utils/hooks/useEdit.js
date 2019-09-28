import { useState } from "react";

export default (state, setState, initialEdit = false) => {
    const [edit, setEdit] = useState(initialEdit);
    const [copy, setCopy] = useState(state);
    const onEdit = () => {
        setCopy(state);
        setEdit(true);
    };
    const onCancel = () => setEdit(false);
    const onSave = () => {
        setState(copy);
        setEdit(false);
    };
    const data = edit ? copy : state;
    const getOnChange = field => e => {
        e.persist();
        setCopy(state => ({
            ...state,
            [field]: e.target.value
        }));
    };
    return { data, edit, onEdit, onCancel, onSave, getOnChange, setCopy };
};
