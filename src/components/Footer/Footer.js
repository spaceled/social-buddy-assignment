import React from "react";
import "./Footer.css";
import { Container } from "@material-ui/core";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; <a href="/about"> Online News Portal</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
