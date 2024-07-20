function matchText() {
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;

    if (text1 === text2) {
        document.getElementById('matchResult').innerText = 'Texts match!';
    } else {
        document.getElementById('matchResult').innerText = 'Texts do not match.';
    }
}
