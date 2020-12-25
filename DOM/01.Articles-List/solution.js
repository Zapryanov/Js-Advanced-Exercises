function createArticle() {
	
	
	let articlesWrapper = document.getElementById("articles");
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");
	
	if (title.value !== "" && content.value !== "") {
		let article = document.createElement("article");
		let h3 = document.createElement("h3");
		let p = document.createElement("p");

		h3.innerHTML = title.value;
		p.innerHTML = content.value;

		article.appendChild(h3);
		article.appendChild(p);

		articlesWrapper.appendChild(article);

	}

	title.value = "";
	content.value = "";
	
}