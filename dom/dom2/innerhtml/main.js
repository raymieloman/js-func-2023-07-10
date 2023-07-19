function chinese() {
    var div = document.getElementById('demo');
    div.innerHTML = '<p>这是新添加的段落</p>';
}

function showInnerText() {
    var div = document.getElementById('innerDemo');
    alert(div.innerText);
}

function showTextContent() {
    var div = document.getElementById('innerDemo');
    alert(div.textContent);
}