import React, {useState, useEffect} from "react";
import Posts from "../Posts/Posts";
import {Container, Box, makeStyles} from "@material-ui/core";

const Main = () => {
	// Fetch post and store it on state
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts/";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	const useStyles = makeStyles({
		wrapper: {
			display: "grid",
			gridGap: "15px",
			gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
			gridTemplateRows: "max-content",
			gridAutoFlow: "dense",
		},
		item: {},
	});
	const classes = useStyles();

	return (
		<Box py="2.5rem">
			<Container maxWidth="lg">
				<div className={classes.wrapper}>
					{posts.map((post) => (
						<div key={post.id} className={classes.item}>
							<Posts post={post}></Posts>
						</div>
					))}
				</div>
			</Container>
		</Box>
	);
};

export default Main;
