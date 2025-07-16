// シャドウバースWB用ウィジェットクラス
class ShadowverseWidget extends BaseWidget {
    constructor() {
        super();
        this.gameType = 'shadowverse';
        this.firstCount = 0;  // 先攻数
        this.secondCount = 0; // 後攻数
        this.isFirstMode = true; // true: 先攻モード, false: 後攻モード
    }

    // シャドウバースWB用の表示更新関数
    updateDisplay() {
        super.updateDisplay(); // 親クラスの表示更新を呼び出し
        
        const totalTurns = this.firstCount + this.secondCount;
        
        // 先攻/後攻の表示を切り替え
        if (this.isFirstMode) {
            document.getElementById('coinLabel').textContent = '先攻';
            document.getElementById('coinSuccess').textContent = this.firstCount;
            document.getElementById('successRate').textContent = (totalTurns > 0 ? Math.round((this.firstCount / totalTurns) * 100) : 0) + '%';
            document.getElementById('detailLabel1').textContent = '先攻数：';
            document.getElementById('detailLabel2').textContent = '後攻数：';
            document.getElementById('detailCoinSuccess').textContent = this.firstCount;
            document.getElementById('detailCoinFail').textContent = this.secondCount;
        } else {
            document.getElementById('coinLabel').textContent = '後攻';
            document.getElementById('coinSuccess').textContent = this.secondCount;
            document.getElementById('successRate').textContent = (totalTurns > 0 ? Math.round((this.secondCount / totalTurns) * 100) : 0) + '%';
            document.getElementById('detailLabel1').textContent = '後攻数：';
            document.getElementById('detailLabel2').textContent = '先攻数：';
            document.getElementById('detailCoinSuccess').textContent = this.secondCount;
            document.getElementById('detailCoinFail').textContent = this.firstCount;
        }
    }

    // シャドウバースWB用の先攻/後攻関数
    addCoinSuccess() { 
        if (this.isFirstMode) {
            this.firstCount++;
        } else {
            this.secondCount++;
        }
        this.updateDisplay(); 
    }

    addCoinFail() { 
        if (this.isFirstMode) {
            this.secondCount++;
        } else {
            this.firstCount++;
        }
        this.updateDisplay(); 
    }

    // 先攻/後攻切り替え機能
    toggleFirstSecond() {
        this.isFirstMode = !this.isFirstMode;
        this.updateDisplay();
    }

    // シャドウバースWB用のリセット関数
    resetAll() { 
        super.resetAll(); // 親クラスのリセットを呼び出し
        this.firstCount = 0; 
        this.secondCount = 0; 
        this.updateDisplay(); 
    }

    // シャドウバースWB用のキーボードショートカット
    initializeKeyboardShortcuts() {
        super.initializeKeyboardShortcuts(); // 親クラスのキーボードショートカットを呼び出し
        
        // 先攻/後攻用のショートカットを追加
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 's': case 'S': this.addCoinSuccess(); break;
                case 'f': case 'F': this.addCoinFail(); break;
                case 't': case 'T': this.toggleFirstSecond(); break; // 先攻/後攻切り替え
            }
        });
    }
}

// シャドウバースWB用の初期化関数
function initializeShadowverseWidget() {
    currentWidget = new ShadowverseWidget();
    currentWidget.initialize();
}

// DOM読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', initializeShadowverseWidget); 