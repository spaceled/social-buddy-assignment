import React from "react";
import "./App.css";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom";
import PostsDetails from "./components/PostsDetails/PostsDetails";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/post" component={Main} />
					<Route path="/post/:postId" component={PostsDetails} />
				</Switch>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;
