import React from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
} from "@material-ui/core";
import {Link} from "react-router-dom";

const Posts = (props) => {
	const {id, title, body} = props.post;

	const useStyles = makeStyles({
		media: {
			height: 120,
		},
		linkStyle: {
			textDecoration: "none",
		},
	});
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardContent>
					<Typography variant="h6" component="h5">
						{title}
					</Typography>
					<Typography variant="body2" component="p" color="textSecondary">
						{body}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to={`/post/${id}`} className={classes.linkStyle}>
					<Button variant="contained" color="primary">See More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Posts;
