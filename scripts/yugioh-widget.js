// マスターデュエル用ウィジェットクラス
class YugiohWidget extends BaseWidget {
    constructor() {
        super();
        this.gameType = 'yugioh';
        this.coinSuccesses = 0;
        this.coinFails = 0;
    }

    // マスターデュエル用の表示更新関数
    updateDisplay() {
        super.updateDisplay(); // 親クラスの表示更新を呼び出し
        
        const totalCoins = this.coinSuccesses + this.coinFails;
        
        document.getElementById('coinSuccess').textContent = this.coinSuccesses;
        document.getElementById('successRate').textContent = (totalCoins > 0 ? Math.round((this.coinSuccesses / totalCoins) * 100) : 0) + '%';
        
        // 詳細エリアも更新
        document.getElementById('detailCoinSuccess').textContent = this.coinSuccesses;
        document.getElementById('detailCoinFail').textContent = this.coinFails;
    }

    // マスターデュエル用のコイン関数
    addCoinSuccess() { 
        this.coinSuccesses++; 
        this.updateDisplay(); 
    }

    addCoinFail() { 
        this.coinFails++; 
        this.updateDisplay(); 
    }

    // マスターデュエル用のリセット関数
    resetAll() { 
        super.resetAll(); // 親クラスのリセットを呼び出し
        this.coinSuccesses = 0; 
        this.coinFails = 0; 
        this.updateDisplay(); 
    }

    // マスターデュエル用のキーボードショートカット
    initializeKeyboardShortcuts() {
        super.initializeKeyboardShortcuts(); // 親クラスのキーボードショートカットを呼び出し
        
        // コイン用のショートカットを追加
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 's': case 'S': this.addCoinSuccess(); break;
                case 'f': case 'F': this.addCoinFail(); break;
            }
        });
    }
}

// マスターデュエル用の初期化関数
function initializeYugiohWidget() {
    currentWidget = new YugiohWidget();
    currentWidget.initialize();
} 