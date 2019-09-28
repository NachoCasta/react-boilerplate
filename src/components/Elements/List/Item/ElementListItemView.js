import React from "react";
import { List, Icon, Avatar } from "components/UI";
import { Link } from "react-router-dom";

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={ { marginRight: 8 } } />
        {text}
    </span>
);

const ElementListItem = ({ title, description, content, avatar, href }) => (
    <List.Item
        key={title}
        actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />
        ]}
        extra={
            <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
        }
    >
        <List.Item.Meta
            avatar={<Avatar src={avatar} />}
            title={<Link to={href}>{title}</Link>}
            description={description}
        />
        {content}
    </List.Item>
);

export default ElementListItem;
