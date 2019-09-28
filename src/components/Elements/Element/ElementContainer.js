import React from "react";
import ElementView from "./ElementView";
import { useElement, useElementsActions, useEdit, history } from "utils";

const Element = ({ id }) => {
    const { setElement, removeElement } = useElementsActions();
    const element = useElement(id);
    const { data, edit, onEdit, onCancel, onSave, getOnChange } = useEdit(
        element,
        element => setElement(id, element)
    );
    const onDelete = () => {
        removeElement(id);
        history.push("/elements");
    };
    return (
        <ElementView
            {...data}
            edit={edit}
            onTitleChange={getOnChange("title")}
            onDescriptionChange={getOnChange("description")}
            onContentChange={getOnChange("content")}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
            onDelete={onDelete}
        />
    );
};

export default Element;
