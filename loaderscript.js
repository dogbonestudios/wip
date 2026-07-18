import sheet from './loader.css' with { type: 'css'};

function stateChange(sheet) {
    setTimeout(function () {
        if (sheet == -1) {
            window.location.href = 'main.html'
        }
    }, 5000);
}

