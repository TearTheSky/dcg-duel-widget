// ウィジェットの状態管理
let wins = 0;
let losses = 0;
let coinSuccesses = 0;
let coinFails = 0;

// 表示更新関数
function updateDisplay() {
    const totalMatches = wins + losses;
    const totalCoins = coinSuccesses + coinFails;
    
    document.getElementById('matchCount').textContent = totalMatches;
    document.getElementById('coinSuccess').textContent = coinSuccesses;
    document.getElementById('successRate').textContent = (totalCoins > 0 ? Math.round((coinSuccesses / totalCoins) * 100) : 0) + '%';
    document.getElementById('winCount').textContent = wins;
    document.getElementById('winRate').textContent = (totalMatches > 0 ? Math.round((wins / totalMatches) * 100) : 0) + '%';
    
    // 詳細エリアも更新
    document.getElementById('detailCoinSuccess').textContent = coinSuccesses;
    document.getElementById('detailCoinFail').textContent = coinFails;
    document.getElementById('detailWin').textContent = wins;
    document.getElementById('detailLose').textContent = losses;
}

// ボタンアクション関数
function addWin() { 
    wins++; 
    updateDisplay(); 
}

function addLose() { 
    losses++; 
    updateDisplay(); 
}

function addCoinSuccess() { 
    coinSuccesses++; 
    updateDisplay(); 
}

function addCoinFail() { 
    coinFails++; 
    updateDisplay(); 
}

function resetAll() { 
    wins = 0; 
    losses = 0; 
    coinSuccesses = 0; 
    coinFails = 0; 
    updateDisplay(); 
}

// テーマ切り替え機能
function initializeThemeSelector() {
    document.getElementById('themeSelect').addEventListener('change', function() {
        const theme = this.value;
        const mainTable = document.getElementById('mainTable');
        mainTable.className = 'main-table theme-' + theme;
        
        // テーマエリアにもクラスを付与
        document.querySelector('.theme-area').className = 'theme-area theme-' + theme;
        
        // ボタンエリアにもクラスを付与
        document.querySelector('.btn-area').className = 'btn-area theme-' + theme;
    });
}

// キーボードショートカット
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'w': case 'W': addWin(); break;
            case 'l': case 'L': addLose(); break;
            case 's': case 'S': addCoinSuccess(); break;
            case 'f': case 'F': addCoinFail(); break;
            case 'r': case 'R': resetAll(); break;
        }
    });
}

// 初期化関数
function initializeWidget() {
    initializeThemeSelector();
    initializeKeyboardShortcuts();
    updateDisplay();
}

// DOM読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', initializeWidget); 