import React from "react";
import {
    CardContainer,
    Flex,
    Box,
    EditableTextBlock,
    Divider,
    Button
} from "components/UI";

const Element = ({
    edit,
    title,
    onTitleChange,
    description,
    onDescriptionChange,
    content,
    onContentChange,
    onEdit,
    onCancel,
    onSave,
    onDelete
}) => (
    <CardContainer
        title={
            <EditableTextBlock
                edit={edit}
                value={title}
                onChange={onTitleChange}
                autosize={ { maxRows: 1 } }
            />
        }
        heading
    >
        <Flex justifyContent="flex-end">
            {edit ? (
                <React.Fragment>
                    <Box pr={1}>
                        <Button type="primary" icon="save" onClick={onSave}>
                            Save
                        </Button>
                    </Box>
                    <Box>
                        <Button type="danger" icon="close" onClick={onCancel}>
                            Cancel
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box pr={1}>
                        <Button type="primary" icon="edit" onClick={onEdit}>
                            Edit
                        </Button>
                    </Box>
                    <Box>
                        <Button type="danger" icon="delete" onClick={onDelete}>
                            Delete
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Flex>
        <Flex>
            <Box width={1} p={1}>
                <EditableTextBlock
                    title="Description"
                    edit={edit}
                    value={description}
                    onChange={onDescriptionChange}
                />
            </Box>
            <Divider />
            <Box width={1} p={1}>
                <EditableTextBlock
                    title="Content"
                    edit={edit}
                    value={content}
                    onChange={onContentChange}
                />
            </Box>
        </Flex>
    </CardContainer>
);

export default Element;
