import React, { useState, useEffect } from "react";

// create your App component here
function App(props) {
	const [loaded, setLoaded] = useState(false);
	const [url, setUrl] = useState("");

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((data) => {
				setUrl(data.message);
				setLoaded(true);
			});
	}, []);

	if (!loaded) return <p>Loading...</p>;

	return <img src={url} alt="A Random Dog" />;
}

export default App;
