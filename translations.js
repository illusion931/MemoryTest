const translations = {
    en: {
        title: "Memory Training",
        description: "Challenge your memory limits, enhance your brain power",
        selectLanguage: "Select Your Language",
        startGame: "Start Game",
        gameRules: {
            title: "Game Rules:",
            rule1: "1. The game has 100 levels, starting from 1 digit to 100 digits",
            rule2: "2. Each level shows a number for 5 seconds, try to remember it",
            rule3: "3. After 5 seconds, enter the number you remembered",
            rule4: "4. Get 1 point for each correct answer, game over if wrong",
            rule5: "5. Total score is 100, above 80 is excellent"
        },
        countdown: "Countdown: ",
        seconds: "seconds",
        enterNumber: "Please enter the number",
        submit: "Submit",
        gameOver: "Game Over!",
        yourScore: "Your Score: ",
        excellent: "Excellent! Your memory is amazing!",
        good: "Good! Keep it up!",
        tryAgain: "Keep practicing, you'll do better!",
        restart: "Restart",
        footer: "All Rights Reserved"
    },
    zh: {
        title: "记忆力训练",
        description: "挑战你的记忆极限，提升大脑能力",
        selectLanguage: "选择语言",
        startGame: "开始游戏",
        gameRules: {
            title: "游戏规则：",
            rule1: "1. 游戏共有100关，从1位数开始到100位数",
            rule2: "2. 每关显示5秒钟的数字，请努力记住它",
            rule3: "3. 5秒后数字消失，需要在输入框中输入刚才看到的数字",
            rule4: "4. 答对得1分，答错游戏结束",
            rule5: "5. 总分100分，80分以上为优秀"
        },
        countdown: "倒计时：",
        seconds: "秒",
        enterNumber: "请输入数字",
        submit: "提交",
        gameOver: "游戏结束！",
        yourScore: "你的得分：",
        excellent: "优秀！你的记忆力非常棒！",
        good: "不错！继续加油！",
        tryAgain: "继续练习，相信你会做得更好！",
        restart: "重新开始",
        footer: "版权所有"
    },
    es: {
        title: "Entrenamiento de Memoria",
        description: "Desafía tus límites de memoria, mejora tu poder cerebral",
        selectLanguage: "Selecciona tu idioma",
        startGame: "Comenzar Juego",
        gameRules: {
            title: "Reglas del Juego:",
            rule1: "1. El juego tiene 100 niveles, desde 1 dígito hasta 100 dígitos",
            rule2: "2. Cada nivel muestra un número durante 5 segundos, trata de recordarlo",
            rule3: "3. Después de 5 segundos, ingresa el número que recordaste",
            rule4: "4. Obtén 1 punto por cada respuesta correcta, el juego termina si te equivocas",
            rule5: "5. El puntaje total es 100, más de 80 es excelente"
        },
        countdown: "Cuenta regresiva: ",
        seconds: "segundos",
        enterNumber: "Por favor ingresa el número",
        submit: "Enviar",
        gameOver: "¡Juego Terminado!",
        yourScore: "Tu Puntaje: ",
        excellent: "¡Excelente! ¡Tu memoria es increíble!",
        good: "¡Bien! ¡Sigue así!",
        tryAgain: "Sigue practicando, ¡lo harás mejor!",
        restart: "Reiniciar",
        footer: "Todos los derechos reservados"
    },
    ja: {
        title: "記憶力トレーニング",
        description: "記憶の限界に挑戦し、脳力を向上させよう",
        selectLanguage: "言語を選択",
        startGame: "ゲームを開始",
        gameRules: {
            title: "ゲームルール：",
            rule1: "1. ゲームは1桁から100桁まで、全100レベルあります",
            rule2: "2. 各レベルで5秒間数字が表示されます。覚えてください",
            rule3: "3. 5秒後、表示された数字を入力してください",
            rule4: "4. 正解で1点獲得、不正解でゲーム終了です",
            rule5: "5. 総得点は100点満点で、80点以上が優秀です"
        },
        countdown: "カウントダウン：",
        seconds: "秒",
        enterNumber: "数字を入力してください",
        submit: "送信",
        gameOver: "ゲーム終了！",
        yourScore: "あなたのスコア：",
        excellent: "素晴らしい！記憶力が抜群です！",
        good: "よくできました！その調子で！",
        tryAgain: "練習を続けましょう。きっと上手くなります！",
        restart: "リスタート",
        footer: "全著作権所有"
    },
    ko: {
        title: "기억력 훈련",
        description: "기억력의 한계에 도전하고 두뇌 능력을 향상시키세요",
        selectLanguage: "언어 선택",
        startGame: "게임 시작",
        gameRules: {
            title: "게임 규칙:",
            rule1: "1. 게임은 1자리부터 100자리까지 총 100레벨입니다",
            rule2: "2. 각 레벨에서 5초 동안 숫자가 표시됩니다. 기억하세요",
            rule3: "3. 5초 후 숫자가 사라지면 기억한 숫자를 입력하세요",
            rule4: "4. 정답은 1점, 오답이면 게임 종료",
            rule5: "5. 총점 100점, 80점 이상이 우수"
        },
        countdown: "카운트다운: ",
        seconds: "초",
        enterNumber: "숫자를 입력하세요",
        submit: "제출",
        gameOver: "게임 종료!",
        yourScore: "당신의 점수: ",
        excellent: "훌륭합니다! 당신의 기억력이 대단해요!",
        good: "잘했어요! 계속 힘내세요!",
        tryAgain: "계속 연습하면 더 잘할 수 있어요!",
        restart: "다시 시작",
        footer: "모든 권리 보유"
    }
};

// 获取用户的浏览器语言
function getBrowserLanguage() {
    const lang = navigator.language.toLowerCase().split('-')[0];
    return translations[lang] ? lang : 'en';
}

// 获取URL参数中的语言设置
function getUrlLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    return translations[lang] ? lang : null;
}

// 获取当前语言
function getCurrentLanguage() {
    return getUrlLanguage() || localStorage.getItem('userLanguage') || getBrowserLanguage();
}

// 设置语言
function setLanguage(lang) {
    if (translations[lang]) {
        localStorage.setItem('userLanguage', lang);
        return translations[lang];
    }
    return translations['en']; // 默认英语
}

// 获取翻译文本
function getTranslation(lang = getCurrentLanguage()) {
    return translations[lang] || translations['en'];
}
