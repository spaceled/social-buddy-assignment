import React from "react";
import {ListItem, Avatar, ListItemAvatar, ListItemText, Typography, Divider} from "@material-ui/core";

const Comment = (props) => {
	const {comment} = props;
	
	return (
		<>
			<ListItem alignItems="flex-start" key={comment.id}>
				<ListItemAvatar>
					<Avatar src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} alt="" />
				</ListItemAvatar>
				<ListItemText
					primary={comment.name}
					secondary={
						<>
							<Typography component="span" variant="body2" color="textPrimary">
								{comment.email}
							</Typography>
							{`  ${comment.body}`}
						</>
					}
				></ListItemText>
			</ListItem>
			<Divider variant="inset" />
		</>
	);
};

export default Comment;