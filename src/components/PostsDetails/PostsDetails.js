import React, {useState, useEffect} from "react";
import {Card, CardContent, Typography, Container, Box} from "@material-ui/core";
import {useParams} from "react-router-dom";
import CommentDetails from "../CommentDetails/CommentDetails";

const PostsDetails = () => {
	// Find post using url parameter
	const {postId} = useParams();

	const [details, setDetails] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, []);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);

	return (
		<Box py="2.5rem">
			<Container maxWidth="lg">
				<Card>
					<CardContent>
						<Typography variant="h4" component="h3" gutterBottom>
							{details.title}
						</Typography>
						<Typography variant="body2" component="p" color="textSecondary">
							{details.body}
						</Typography>
					</CardContent>
				</Card>
				<CommentDetails comments={comments}></CommentDetails>
			</Container>
		</Box>
	);
};

export default PostsDetails;
