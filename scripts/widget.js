// 基底ウィジェットクラス - 共通機能を提供
class BaseWidget {
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.gameType = 'base';
    }

    // 共通の表示更新関数
    updateDisplay() {
        const totalMatches = this.wins + this.losses;
        
        document.getElementById('matchCount').textContent = totalMatches;
        document.getElementById('winCount').textContent = this.wins;
        document.getElementById('winRate').textContent = (totalMatches > 0 ? Math.round((this.wins / totalMatches) * 100) : 0) + '%';
        document.getElementById('detailWin').textContent = this.wins;
        document.getElementById('detailLose').textContent = this.losses;
    }

    // 共通の勝利/敗北関数
    addWin() { 
        this.wins++; 
        this.updateDisplay(); 
    }

    addLose() { 
        this.losses++; 
        this.updateDisplay(); 
    }

    // 共通のリセット関数
    resetAll() { 
        this.wins = 0; 
        this.losses = 0; 
        this.updateDisplay(); 
    }

    // テーマ切り替え機能（共通）
    initializeThemeSelector() {
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            themeSelect.addEventListener('change', function() {
                const theme = this.value;
                const mainTable = document.getElementById('mainTable');
                if (mainTable) {
                    mainTable.className = 'main-table theme-' + theme;
                }
                
                // テーマエリアにもクラスを付与
                const themeArea = document.querySelector('.theme-area');
                if (themeArea) {
                    themeArea.className = 'theme-area theme-' + theme;
                }
                
                // ボタンエリアにもクラスを付与
                const btnArea = document.querySelector('.btn-area');
                if (btnArea) {
                    btnArea.className = 'btn-area theme-' + theme;
                }
            });
        }
    }

    // キーボードショートカット（共通）
    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'w': case 'W': this.addWin(); break;
                case 'l': case 'L': this.addLose(); break;
                case 'r': case 'R': this.resetAll(); break;
            }
        });
    }

    // 初期化関数（共通）
    initialize() {
        this.initializeThemeSelector();
        this.initializeKeyboardShortcuts();
        this.updateDisplay();
    }
}

// グローバル変数として基底クラスのインスタンスを保持
let currentWidget = null;

// ウィジェットの初期化関数（外部から呼び出し可能）
function initializeWidget() {
    if (currentWidget) {
        currentWidget.initialize();
    }
} 