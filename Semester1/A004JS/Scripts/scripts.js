// Use the write method of the document to write properties

window.document.write('<p id=highlight>');

window.document.write('<strong>URL:</strong>' + window.document.URL);

window.document.write('<br> <strong>Title:</strong>' + window.document.title);

window.document.write(
	'<br> <strong>Last Modified:</strong>' + window.document.lastModified
);

window.document.write('</p>');
