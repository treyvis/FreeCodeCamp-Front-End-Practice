function convertHTML(str) {
	return str
		.replace(/&/g,"&amp;")
		.replace(/"/g,"&quot;")
		.replace(/'/g,"&apos;")
		.replace(/</g,"&lt;")
		.replace(/>/g,"&gt;");
}