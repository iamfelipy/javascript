export default (nameElement, content) => {
    nameElement = nameElement.replace(/[^a-zA-z]/i, '') || 'div';
    const newElement = document.createElement(nameElement);
    newElement.innerText = content;
    document.body.appendChild(newElement);
}