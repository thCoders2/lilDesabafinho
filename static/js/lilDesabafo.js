// Instruções para lilDesabafo.js

// devera salvar as informações com localStorage prefixo padrão 'lilDesabafo-' por exemplo: 
// lilDesabafo-desabafo -> desabafo um json assim => {'desabafo':'Um desabafinho para usar como exemplo, não espere muito de mim'}
// lilDesabafo-autor -> json autor -> autor = JSON.parse(localStorage.getItem('lilDesabafo-autorKarminha', None)) => {'autor':'karminha', 'cor1':'#f00', 'cor2':'#AAAAFF', 'desabafos':['first','desabei :3']}
// lilDesabafo-autores -> array de autores -> sendo possivel adicionar, ou remover autores e até baixar autores
// lilDesabafo-database -> é importante que a database seja possivel fazer o download, com funções deve ter um botão de download para salvar os desabafos

// Variável para controlar o estado do som
let soundEnabled = true;

// Função para alternar o som
function toggleSound() {
    soundEnabled = !soundEnabled;
    document.getElementById('soundImage').src = soundEnabled ? 'static/imgs/somAtivado.png' : 'static/imgs/somDesativado.png';
}

// Função para ajustar o textArea
function adjustTextArea() {
    const textArea = document.getElementById('desabafoArea');
    const textLength = textArea.value.length;
    const comboUpSound = new Audio('static/sons/comboUp.mp3');
    const comboDownSound = new Audio('static/sons/comboDown.mp3');

    // Ajusta a altura do textArea conforme o conteúdo
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';

    // Ajusta a largura e toca o som conforme a quantidade de caracteres
    if (textLength > 1500) {
        textArea.style.width = '100%';
        if (soundEnabled) comboUpSound.play();
    } else {
        textArea.style.width = '50%';
        if (soundEnabled) comboDownSound.play();
    }
}

// Funções para trabalhar com localStorage
function saveToLocalStorage(prefix, key, data) {
    localStorage.setItem(prefix + key, JSON.stringify(data));
}

function getFromLocalStorage(prefix, key, defaultValue = null) {
    const item = localStorage.getItem(prefix + key);
    return item ? JSON.parse(item) : defaultValue;
}

// Exemplo de uso
saveToLocalStorage('lilDesabafo-', 'desabafo', {'desabafo': 'Um desabafinho para usar como exemplo, não espere muito de mim'});
