const translations = {
    en: {
        // 游戏页面翻译
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
        footer: "All Rights Reserved",

        // 首页翻译
        home: {
            hero: {
                title: "Train Your Memory, Enhance Your Mind",
                description: "Challenge yourself with our scientific memory training games.",
                cta: "Start Training Now"
            },
            features: {
                title: "Why Choose Our Memory Test?",
                scientific: {
                    title: "Scientific Approach",
                    description: "Based on proven cognitive science principles, our game progressively challenges your memory capacity from 1 to 100 digits."
                },
                adaptive: {
                    title: "Adaptive Difficulty",
                    description: "Start with simple single-digit numbers and advance to complex 100-digit sequences as your memory improves."
                },
                feedback: {
                    title: "Instant Feedback",
                    description: "Get immediate results and track your progress with our intuitive scoring system and visual progress bar."
                }
            },
            howToPlay: {
                title: "How to Play",
                steps: {
                    start: {
                        title: "Start Your Journey",
                        description: "Begin with single-digit numbers and progress through increasingly challenging levels up to 100 digits."
                    },
                    memorize: {
                        title: "Memorize Numbers",
                        description: "You have 5 seconds to memorize each number that appears on your screen. Focus and concentrate!"
                    },
                    recall: {
                        title: "Test Your Recall",
                        description: "After the number disappears, type what you remember into the input box. Accuracy is key!"
                    },
                    track: {
                        title: "Track Progress",
                        description: "Watch your progress on the 100-level progress bar. Each correct answer brings you closer to mastery."
                    }
                }
            },
            benefits: {
                title: "Benefits of Memory Training",
                focus: {
                    title: "Improved Focus",
                    description: "Enhance your concentration and attention span through regular practice."
                },
                retention: {
                    title: "Better Retention",
                    description: "Strengthen your ability to remember and recall information quickly."
                },
                cognitive: {
                    title: "Cognitive Growth",
                    description: "Exercise your brain and promote neural plasticity."
                },
                agility: {
                    title: "Mental Agility",
                    description: "Develop faster thinking and information processing skills."
                }
            },
            scoring: {
                title: "Scoring System",
                perfect: {
                    title: "Perfect Score (100 points)",
                    description: "Complete mastery of all 100 levels"
                },
                excellent: {
                    title: "Excellence (80-99 points)",
                    description: "Outstanding memory performance"
                },
                proficient: {
                    title: "Proficient (60-79 points)",
                    description: "Good memory skills with room for improvement"
                },
                developing: {
                    title: "Developing (1-59 points)",
                    description: "Keep practicing to enhance your memory"
                }
            },
            games: {
                title: "Memory Training Games",
                numberMemory: {
                    title: "Number Memory",
                    description: "Remember and repeat increasingly long number sequences",
                    rules: {
                        title: "Game Rules",
                        rule1: "Each level shows a sequence of numbers",
                        rule2: "Remember the sequence within 3 seconds",
                        rule3: "Input the numbers in the correct order",
                        rule4: "Progress through levels to improve your memory",
                        rule5: "Game ends if you make a mistake"
                    },
                    startButton: "Start Game",
                    level: "Level",
                    gameOver: "Game Over!",
                    score: "Score",
                    restartButton: "Play Again"
                },
                letterPairs: {
                    title: "Letter Pairs",
                    description: "Match pairs of letters within 60 seconds",
                    rules: {
                        title: "Game Rules",
                        time: "Find all letter pairs within 60 seconds",
                        pairs: "Click on matching letter pairs to remove them",
                        scoring: "Clear all pairs to win!"
                    },
                    gameOver: {
                        title: "Game Over!",
                        timeUp: "Time's up!",
                        restart: "Play Again"
                    },
                    gameWon: {
                        title: "Congratulations!",
                        message: "You found all pairs!",
                        restart: "Play Again"
                    }
                },
                wordChain: {
                    title: "Word Chain",
                    description: "Connect words using the last letter",
                    rules: {
                        title: "Game Rules",
                        time: "15 seconds per word",
                        levels: "20 levels to complete",
                        scoring: "1 point per level, 16+ points for excellence"
                    }
                },
                schulteGrid: {
                    title: "Schulte Grid",
                    description: "Improve your peripheral vision and concentration with this classic attention training tool.",
                    difficulty: "Difficulty",
                    stats: "Best Time: 25s"
                },
                cardMemory: {
                    title: "Card Memory",
                    description: "Remember and recall playing cards in sequence. Perfect for developing visual memory.",
                    difficulty: "Difficulty",
                    stats: "Max Cards: 52"
                },
                patternMemory: {
                    title: "Pattern Memory",
                    description: "Remember and reproduce complex patterns to enhance your spatial memory abilities.",
                    difficulty: "Difficulty",
                    stats: "Patterns: 20"
                },
                numberMatch: {
                    title: "Number Match",
                    description: "Match and clear identical numbers",
                    rules: {
                        title: "Game Rules",
                        grid: "Find matching numbers in a 5×5 grid",
                        time: "Complete as many matches as possible within 60 seconds",
                        scoring: "Score points based on the number of matches (2 numbers = 2 points, etc.)",
                        end: "Game ends when time runs out or no matches remain"
                    },
                    start: "Start Game",
                    gameOver: {
                        title: "Game Over!",
                        timeUp: "Time's up!",
                        restart: "Play Again"
                    },
                    noMatches: {
                        title: "No More Matches!",
                        message: "No more matching numbers available",
                        restart: "Play Again"
                    }
                },
                codeBreaker: {
                    title: "Code Breaker",
                    description: "Break the secret 4-digit code",
                    rules: {
                        title: "Game Rules",
                        goal: "Break the 4-digit code within 10 attempts",
                        hint: "After each guess, get hints in the format: xAyB",
                        hintExplain: "A = correct number & position, B = correct number only",
                        example: "Example: 2A1B means 2 correct numbers in correct positions, 1 correct number in wrong position"
                    },
                    start: "Start Game",
                    submit: "Submit",
                    gameWon: {
                        title: "Congratulations!",
                        message: "You broke the code!",
                        restart: "Play Again"
                    },
                    gameLost: {
                        title: "Game Over",
                        message: "The code was:",
                        restart: "Try Again"
                    }
                },
                numberPuzzle: {
                    title: "Number Puzzle",
                    description: "Arrange numbers in order",
                    rules: {
                        title: "Game Rules",
                        goal: "Arrange numbers from 1 to 8 in order",
                        move: "Click numbers next to the empty space to move them",
                        time: "Complete the puzzle within 90 seconds",
                        scoring: "Fewer moves mean a better score"
                    },
                    start: "Start Game",
                    gameWon: {
                        title: "Congratulations!",
                        message: "You solved the puzzle!",
                        restart: "Play Again"
                    },
                    gameLost: {
                        title: "Time's Up!",
                        message: "Keep trying to improve your speed!",
                        restart: "Try Again"
                    }
                },
                memoryTest: {
                    title: "Memory Level Test",
                    description: "Test your short-term memory level",
                    rules: {
                        title: "Memory Level Test",
                        intro: "This test is designed by international brain training and rehabilitation experts and doctors to assess your short-term memory level.",
                        main: "You will see a sequence of numbers. Click them in reverse order.",
                        example: "Example: If you see 1,2,3,4, click: 4,3,2,1",
                        difficulty: "The difficulty increases with each level",
                        practice: "You can practice multiple times to get familiar with the rules"
                    },
                    start: "Start Test",
                    submit: "Submit",
                    next: "Next Level",
                    levelResult: {
                        correctTitle: "Correct!",
                        correctMessage: "Well done! Get ready for the next level.",
                        wrongTitle: "Incorrect",
                        wrongMessage: "Keep practicing to improve your memory."
                    },
                    finalResult: {
                        title: "Test Complete!",
                        levelReached: "Levels Completed: {level}",
                        excellent: "Memory Level: Excellent (80-100)",
                        good: "Memory Level: Good (60-79)",
                        average: "Memory Level: Average (40-59)",
                        needsPractice: "Memory Level: Needs Practice (0-39)",
                        restart: "Try Again"
                    }
                },
                numberMaze: {
                    title: "Number Maze",
                    description: "Navigate through a maze of odd numbers",
                    rules: {
                        title: "Game Rules",
                        grid: "Navigate through a 5×5 number maze",
                        movement: "Move only through cells with odd numbers",
                        goal: "Start from top-left, reach bottom-right",
                        penalty: "Each wrong move deducts 2 points",
                        time: "Complete within 120 seconds"
                    },
                    result: {
                        success: "Congratulations!",
                        successMessage: "You successfully completed the maze!",
                        failure: "Time's Up!",
                        failureMessage: "You ran out of time. Try again!"
                    }
                }
            },
            footer: "All Rights Reserved"
        }
    },
    zh: {
        // 游戏页面翻译
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
        footer: "版权所有",

        // 首页翻译
        home: {
            hero: {
                title: "训练记忆力，提升思维能力",
                description: "通过科学的记忆力训练游戏挑战自己",
                cta: "立即开始训练"
            },
            features: {
                title: "为什么选择我们的记忆力测试？",
                scientific: {
                    title: "科学方法",
                    description: "基于认知科学原理，游戏从1位数到100位数逐步挑战你的记忆容量。"
                },
                adaptive: {
                    title: "自适应难度",
                    description: "从简单的个位数开始，随着记忆力提升逐步过渡到复杂的100位数序列。"
                },
                feedback: {
                    title: "即时反馈",
                    description: "通过直观的计分系统和进度条，实时追踪你的进步。"
                }
            },
            howToPlay: {
                title: "如何玩",
                steps: {
                    start: {
                        title: "开启旅程",
                        description: "从1位数开始，逐步挑战更高难度的关卡，直至100位数。"
                    },
                    memorize: {
                        title: "记忆数字",
                        description: "你有5秒钟时间记住屏幕上显示的数字。保持专注！"
                    },
                    recall: {
                        title: "测试记忆",
                        description: "数字消失后，在输入框中输入你记住的数字。准确性是关键！"
                    },
                    track: {
                        title: "追踪进度",
                        description: "在100关进度条上查看你的进展。每个正确答案都让你更接近大师级水平。"
                    }
                }
            },
            benefits: {
                title: "记忆训练的好处",
                focus: {
                    title: "提升注意力",
                    description: "通过定期练习增强集中力和注意力持续时间。"
                },
                retention: {
                    title: "增强记忆力",
                    description: "强化快速记忆和回忆信息的能力。"
                },
                cognitive: {
                    title: "认知成长",
                    description: "锻炼大脑，促进神经可塑性。"
                },
                agility: {
                    title: "思维敏捷",
                    description: "发展更快的思考和信息处理能力。"
                }
            },
            scoring: {
                title: "评分系统",
                perfect: {
                    title: "完美分数（100分）",
                    description: "完全掌握所有100个级别"
                },
                excellent: {
                    title: "优秀（80-99分）",
                    description: "出色的记忆表现"
                },
                proficient: {
                    title: "熟练（60-79分）",
                    description: "良好的记忆技能，仍有提升空间"
                },
                developing: {
                    title: "发展中（1-59分）",
                    description: "继续练习以提升记忆力"
                }
            },
            games: {
                title: "记忆力训练游戏",
                numberMemory: {
                    title: "数字记忆",
                    description: "记忆并重复越来越长的数字序列",
                    rules: {
                        title: "游戏规则",
                        rule1: "每一关会显示一串数字",
                        rule2: "在3秒内记住这串数字",
                        rule3: "按正确顺序输入数字",
                        rule4: "通过关卡来提升记忆力",
                        rule5: "输入错误则游戏结束"
                    },
                    startButton: "开始游戏",
                    level: "关卡",
                    gameOver: "游戏结束！",
                    score: "得分",
                    restartButton: "再玩一次"
                },
                letterPairs: {
                    title: "字母配对",
                    description: "在60秒内找出所有字母对",
                    rules: {
                        title: "游戏规则",
                        time: "在60秒内找出所有字母对",
                        pairs: "点击匹配的字母对将其消除",
                        scoring: "消除所有字母对即可获胜！"
                    },
                    gameOver: {
                        title: "游戏结束！",
                        timeUp: "时间到！",
                        restart: "再玩一次"
                    },
                    gameWon: {
                        title: "恭喜！",
                        message: "你找到了所有的配对！",
                        restart: "再玩一次"
                    }
                },
                wordChain: {
                    title: "单词接龙",
                    description: "用上一个单词的最后一个字母开始新单词",
                    rules: {
                        title: "游戏规则",
                        time: "15秒钟每个单词",
                        levels: "20个关卡",
                        scoring: "每关1分，16+分为优秀"
                    }
                },
                schulteGrid: {
                    title: "舒尔特方格",
                    description: "通过这个经典的注意力训练工具提高你的周边视觉和集中力。",
                    difficulty: "难度",
                    stats: "最佳时间：25秒"
                },
                cardMemory: {
                    title: "扑克记忆",
                    description: "记忆并回忆扑克牌序列。完美训练视觉记忆力。",
                    difficulty: "难度",
                    stats: "最大卡数：52"
                },
                patternMemory: {
                    title: "图案记忆",
                    description: "记忆并重现复杂图案，增强你的空间记忆能力。",
                    difficulty: "难度",
                    stats: "图案数：20"
                },
                numberMatch: {
                    title: "数字消消乐",
                    description: "匹配并消除相同的数字",
                    rules: {
                        title: "游戏规则",
                        grid: "在5×5的方阵中找出相同的数字",
                        time: "在60秒内完成尽可能多的匹配",
                        scoring: "根据匹配数量获得分数（2个数字=2分，以此类推）",
                        end: "时间结束或无可匹配数字时游戏结束"
                    },
                    start: "开始游戏",
                    gameOver: {
                        title: "游戏结束！",
                        timeUp: "时间到！",
                        restart: "再玩一次"
                    },
                    noMatches: {
                        title: "无可匹配！",
                        message: "没有更多可匹配的数字了",
                        restart: "再玩一次"
                    }
                },
                codeBreaker: {
                    title: "密码破解",
                    description: "破解4位数字密码",
                    rules: {
                        title: "游戏规则",
                        goal: "在10次尝试内破解4位数字密码",
                        hint: "每次猜测后，会得到提示：xAyB",
                        hintExplain: "A = 数字和位置都正确，B = 数字正确但位置错误",
                        example: "例如：2A1B表示2个数字位置正确，1个数字正确但位置错误"
                    },
                    start: "开始游戏",
                    submit: "提交",
                    gameWon: {
                        title: "恭喜！",
                        message: "你成功破解了密码！",
                        restart: "再玩一次"
                    },
                    gameLost: {
                        title: "游戏结束",
                        message: "正确密码是：",
                        restart: "重试"
                    }
                },
                numberPuzzle: {
                    title: "数字拼图",
                    description: "将数字按顺序排列",
                    rules: {
                        title: "游戏规则",
                        goal: "将1到8的数字按顺序排列",
                        move: "点击空白处旁边的数字进行移动",
                        time: "在90秒内完成拼图",
                        scoring: "移动步数越少，成绩越好"
                    },
                    start: "开始游戏",
                    gameWon: {
                        title: "恭喜！",
                        message: "你成功完成了拼图！",
                        restart: "再玩一次"
                    },
                    gameLost: {
                        title: "时间到！",
                        message: "继续努力提高速度！",
                        restart: "重试"
                    }
                },
                memoryTest: {
                    title: "记忆力水平测试",
                    description: "测试您的短期记忆力水平",
                    rules: {
                        title: "记忆力水平测试",
                        intro: "本测试由国际业内脑训练与脑康复专家与专科医生协同设计，可鉴定您的短期记忆力水平。",
                        main: "您将看到一组数字，请按逆序依次点击对应按钮。",
                        example: "例如：看到1、2、3、4，则点击：4、3、2、1",
                        difficulty: "随着关卡的深入，难度会逐渐增加",
                        practice: "您可以反复练习来熟悉规则，不影响结果准确性"
                    },
                    start: "开始测试",
                    submit: "提交",
                    next: "下一关",
                    levelResult: {
                        correctTitle: "正确！",
                        correctMessage: "做得好！准备进入下一关。",
                        wrongTitle: "错误",
                        wrongMessage: "继续练习以提高记忆力。"
                    },
                    finalResult: {
                        title: "测试完成！",
                        levelReached: "完成关卡：{level}",
                        excellent: "记忆力水平：优秀 (80-100)",
                        good: "记忆力水平：良好 (60-79)",
                        average: "记忆力水平：一般 (40-59)",
                        needsPractice: "记忆力水平：需要练习 (0-39)",
                        restart: "再试一次"
                    }
                },
                numberMaze: {
                    title: "数字迷宫",
                    description: "在奇数格子中寻找通往终点的路",
                    rules: {
                        title: "游戏规则",
                        grid: "在5×5的数字迷宫中移动",
                        movement: "只能走奇数数字的格子",
                        goal: "从左上角出发到达右下角",
                        penalty: "每走错一步扣2分",
                        time: "120秒内完成游戏"
                    },
                    result: {
                        success: "恭喜通关！",
                        successMessage: "你成功完成了迷宫挑战！",
                        failure: "时间到！",
                        failureMessage: "时间用完了，再试一次吧！"
                    }
                }
            },
            footer: "版权所有"
        }
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
        footer: "Todos los derechos reservados",
        home: {
            hero: {
                title: "Entrena tu Memoria, Mejora tu Mente",
                description: "Desafíate con nuestro juego científico de entrenamiento de memoria. Domina el arte de la memorización de números a través de niveles progresivos de dificultad.",
                cta: "Comienza a Entrenar Ahora"
            },
            features: {
                title: "Características",
                scientific: {
                    title: "Entrenamiento Científico",
                    description: "Basado en principios probados de la psicología cognitiva y la neurociencia."
                },
                adaptive: {
                    title: "Dificultad Adaptativa",
                    description: "El juego se adapta a tu nivel de habilidad para un desafío óptimo."
                },
                feedback: {
                    title: "Retroalimentación Instantánea",
                    description: "Recibe retroalimentación inmediata sobre tu rendimiento y progreso."
                }
            },
            howToPlay: {
                title: "Cómo Jugar",
                steps: {
                    start: {
                        title: "Comienza",
                        description: "Selecciona tu nivel de dificultad y prepárate para el desafío."
                    },
                    memorize: {
                        title: "Memoriza",
                        description: "Observa cuidadosamente la secuencia de números durante 5 segundos."
                    },
                    recall: {
                        title: "Recuerda",
                        description: "Ingresa los números en el orden correcto."
                    },
                    track: {
                        title: "Seguimiento",
                        description: "Observa tu progreso y mejora con cada intento."
                    }
                }
            },
            benefits: {
                title: "Beneficios",
                focus: {
                    title: "Mejor Concentración",
                    description: "Desarrolla una capacidad de concentración más fuerte y sostenida."
                },
                retention: {
                    title: "Mayor Retención",
                    description: "Mejora tu capacidad para retener y recordar información."
                },
                cognitive: {
                    title: "Agilidad Cognitiva",
                    description: "Aumenta tu velocidad de procesamiento mental y toma de decisiones."
                },
                agility: {
                    title: "Memoria de Trabajo",
                    description: "Fortalece tu memoria de trabajo para un mejor rendimiento diario."
                }
            },
            scoring: {
                title: "Sistema de Puntuación",
                perfect: {
                    title: "Puntuación Perfecta (100 puntos)",
                    description: "Dominio completo de los 100 niveles"
                },
                excellent: {
                    title: "Excelencia (80-99 puntos)",
                    description: "Rendimiento sobresaliente de memoria"
                },
                proficient: {
                    title: "Competente (60-79 puntos)",
                    description: "Buenas habilidades de memoria con margen de mejora"
                },
                developing: {
                    title: "Desarrollando (1-59 puntos)",
                    description: "Sigue practicando para mejorar tu memoria"
                }
            },
            games: {
                title: "Más Juegos de Memoria",
                numberMemory: {
                    title: "Memoria Numérica",
                    description: "Desafía tu memoria con secuencias numéricas progresivas de 1 a 100 dígitos.",
                    rules: {
                        title: "Reglas del Juego",
                        rule1: "Cada nivel muestra una secuencia de números",
                        rule2: "Recuerda la secuencia dentro de 3 segundos",
                        rule3: "Ingresa los números en el orden correcto",
                        rule4: "Avanza a través de los niveles para mejorar tu memoria",
                        rule5: "El juego termina si cometes un error"
                    },
                    startButton: "Comienza el Juego",
                    level: "Nivel",
                    gameOver: "¡Juego Terminado!",
                    score: "Puntaje",
                    restartButton: "Juega de Nuevo"
                },
                letterPairs: {
                    title: "Pares de Letras",
                    description: "Encuentra todos los pares de letras en 60 segundos",
                    difficulty: "Dificultad",
                    stats: "Mejor Tiempo: 25s"
                },
                wordChain: {
                    title: "Cadena de Palabras",
                    description: "Conecta palabras usando la última letra",
                    rules: {
                        title: "Reglas del Juego",
                        time: "15 segundos por palabra",
                        levels: "20 niveles para completar",
                        scoring: "1 punto por nivel, 16+ puntos para excelencia"
                    }
                },
                schulteGrid: {
                    title: "Tabla de Schulte",
                    description: "Mejora tu visión periférica y concentración con esta herramienta clásica de entrenamiento.",
                    difficulty: "Dificultad",
                    stats: "Mejor Tiempo: 25s"
                },
                cardMemory: {
                    title: "Memoria de Cartas",
                    description: "Recuerda y reproduce secuencias de cartas. Perfecto para desarrollar la memoria visual.",
                    difficulty: "Dificultad",
                    stats: "Máximo de Cartas: 52"
                },
                patternMemory: {
                    title: "Memoria de Patrones",
                    description: "Recuerda y reproduce patrones complejos para mejorar tus habilidades de memoria espacial.",
                    difficulty: "Dificultad",
                    stats: "Patrones: 20"
                },
                numberMatch: {
                    title: "Número Match",
                    description: "Matchea y elimina números idénticos",
                    rules: {
                        title: "Reglas del Juego",
                        grid: "Encuentra números idénticos en una cuadrícula de 5×5",
                        time: "Completa tantas coincidencias como sea posible dentro de 60 segundos",
                        scoring: "Puntuación basada en la cantidad de coincidencias (2 números = 2 puntos, etc.)",
                        end: "El juego termina cuando se acaba el tiempo o no quedan coincidencias"
                    },
                    start: "Comienza el Juego",
                    gameOver: {
                        title: "¡Juego Terminado!",
                        timeUp: "¡Tiempo agotado!",
                        restart: "Juega de Nuevo"
                    },
                    noMatches: {
                        title: "¡No hay más coincidencias!",
                        message: "No hay más números idénticos disponibles",
                        restart: "Juega de Nuevo"
                    }
                },
                codeBreaker: {
                    title: "Rompe el Código",
                    description: "Rompe el código secreto de 4 dígitos",
                    rules: {
                        title: "Reglas del Juego",
                        goal: "Rompe el código de 4 dígitos en 10 intentos",
                        hint: "Después de cada intento, obtén pistas en el formato: xAyB",
                        hintExplain: "A = número y posición correctos, B = número correcto solo",
                        example: "Ejemplo: 2A1B significa 2 números correctos en posiciones correctas, 1 número correcto en posición incorrecta"
                    },
                    start: "Comienza el Juego",
                    submit: "Enviar",
                    gameWon: {
                        title: "¡Felicitaciones!",
                        message: "¡Rompestel código!",
                        restart: "Juega de Nuevo"
                    },
                    gameLost: {
                        title: "¡Juego Terminado!",
                        message: "El código era:",
                        restart: "Vuelve a Intentarlo"
                    }
                },
                numberPuzzle: {
                    title: "Rompecabezas Numérico",
                    description: "Ordena los números en secuencia",
                    rules: {
                        title: "Reglas del Juego",
                        goal: "Ordena los números del 1 al 8 en secuencia",
                        move: "Haz clic en los números junto al espacio vacío para moverlos",
                        time: "Completa el rompecabezas en 90 segundos",
                        scoring: "Menos movimientos significan mejor puntuación"
                    },
                    start: "Comienza el Juego",
                    gameWon: {
                        title: "¡Felicitaciones!",
                        message: "¡Has resuelto el rompecabezas!",
                        restart: "Juega de Nuevo"
                    },
                    gameLost: {
                        title: "¡Se acabó el tiempo!",
                        message: "¡Sigue intentando mejorar tu velocidad!",
                        restart: "Intenta de Nuevo"
                    }
                },
                memoryTest: {
                    title: "Prueba de Nivel de Memoria",
                    description: "Evalúa tu nivel de memoria a corto plazo",
                    rules: {
                        title: "Prueba de Nivel de Memoria",
                        intro: "Esta prueba fue diseñada por expertos internacionales en entrenamiento cerebral y rehabilitación junto con médicos especialistas.",
                        main: "Verás una secuencia de números. Haz clic en ellos en orden inverso.",
                        example: "Ejemplo: Si ves 1,2,3,4, haz clic en: 4,3,2,1",
                        difficulty: "La dificultad aumenta con cada nivel",
                        practice: "Puedes practicar varias veces para familiarizarte con las reglas"
                    },
                    start: "Comenzar Prueba",
                    submit: "Enviar",
                    next: "Siguiente Nivel",
                    levelResult: {
                        correctTitle: "¡Correcto!",
                        correctMessage: "¡Bien hecho! Prepárate para el siguiente nivel.",
                        wrongTitle: "Incorrecto",
                        wrongMessage: "Sigue practicando para mejorar tu memoria."
                    },
                    finalResult: {
                        title: "¡Prueba Completada!",
                        levelReached: "Niveles Completados: {level}",
                        excellent: "Nivel de Memoria: Excelente (80-100)",
                        good: "Nivel de Memoria: Bueno (60-79)",
                        average: "Nivel de Memoria: Promedio (40-59)",
                        needsPractice: "Nivel de Memoria: Necesita Práctica (0-39)",
                        restart: "Intentar de Nuevo"
                    }
                },
                numberMaze: {
                    title: "Laberinto Numérico",
                    description: "Navega por números impares",
                    rules: {
                        title: "Reglas del Juego",
                        grid: "Navega por un laberinto de 5×5",
                        movement: "Solo puedes moverte por números impares",
                        goal: "Comienza arriba a la izquierda, llega abajo a la derecha",
                        penalty: "Cada movimiento incorrecto resta 2 puntos",
                        time: "Completa en 120 segundos"
                    },
                    result: {
                        success: "¡Felicitaciones!",
                        successMessage: "¡Has completado el laberinto con éxito!",
                        failure: "¡Se acabó el tiempo!",
                        failureMessage: "Se agotó el tiempo. ¡Inténtalo de nuevo!"
                    }
                }
            },
            footer: "Todos los Derechos Reservados"
        }
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
        footer: "全著作権所有",
        home: {
            hero: {
                title: "記憶力を鍛え、心を向上させる",
                description: "科学的な記憶トレーニングゲームで自分に挑戦しましょう。段階的な難易度で数字の記憶術をマスターします。",
                cta: "今すぐトレーニングを開始"
            },
            features: {
                title: "特徴",
                scientific: {
                    title: "科学的トレーニング",
                    description: "認知心理学と神経科学の実証された原理に基づいています。"
                },
                adaptive: {
                    title: "適応的難易度",
                    description: "最適な挑戦のためにあなたのスキルレベルに適応します。"
                },
                feedback: {
                    title: "即時フィードバック",
                    description: "パフォーマンスと進捗状況について即座にフィードバックを受け取ります。"
                }
            },
            howToPlay: {
                title: "遊び方",
                steps: {
                    start: {
                        title: "スタート",
                        description: "難易度を選択し、挑戦を準備します。"
                    },
                    memorize: {
                        title: "記憶",
                        description: "5秒間、数字の配列を注意深く観察します。"
                    },
                    recall: {
                        title: "想起",
                        description: "正しい順序で数字を入力します。"
                    },
                    track: {
                        title: "追跡",
                        description: "試行ごとに進捗状況を確認し、改善します。"
                    }
                }
            },
            benefits: {
                title: "メリット",
                focus: {
                    title: "集中力の向上",
                    description: "より強く持続的な集中力を養います。"
                },
                retention: {
                    title: "記憶力の向上",
                    description: "情報の保持と回想能力を向上させます。"
                },
                cognitive: {
                    title: "認知的敏捷性",
                    description: "精神的処理速度と意思決定能力を高めます。"
                },
                agility: {
                    title: "ワーキングメモリ",
                    description: "日常的なパフォーマンス向上のためにワーキングメモリを強化します。"
                }
            },
            scoring: {
                title: "スコアリングシステム",
                perfect: {
                    title: "パーフェクトスコア（100点）",
                    description: "全100レベルの完全習得"
                },
                excellent: {
                    title: "優秀（80-99点）",
                    description: "優れた記憶力パフォーマンス"
                },
                proficient: {
                    title: "熟練（60-79点）",
                    description: "良好な記憶力スキル（改善の余地あり）"
                },
                developing: {
                    title: "発展中（1-59点）",
                    description: "記憶力向上のため練習を継続"
                }
            },
            games: {
                title: "その他の記憶ゲーム",
                numberMemory: {
                    title: "数字記憶",
                    description: "1から100桁までの段階的な数列で記憶力に挑戦します。",
                    rules: {
                        title: "ゲームルール",
                        rule1: "各レベルで数字の配列が表示されます",
                        rule2: "3秒以内に数字の配列を覚えてください",
                        rule3: "正しい順序で数字を入力してください",
                        rule4: "レベルをクリアして記憶力を向上させましょう",
                        rule5: "不正解でゲーム終了です"
                    },
                    startButton: "ゲームを開始",
                    level: "レベル",
                    gameOver: "ゲーム終了！",
                    score: "スコア",
                    restartButton: "再度プレイ"
                },
                letterPairs: {
                    title: "文字ペア",
                    description: "60秒以内にすべての文字ペアを見つけましょう",
                    difficulty: "難易度",
                    stats: "ベストタイム：25秒"
                },
                wordChain: {
                    title: "単語接龍",
                    description: "前の単語の最後の文字から新しい単語を始めましょう",
                    rules: {
                        title: "ゲームルール",
                        time: "各単語15秒",
                        levels: "20レベルをクリア",
                        scoring: "各レベル1点、16+点で優秀"
                    }
                },
                schulteGrid: {
                    title: "シュルテ表",
                    description: "この古典的な注意力トレーニングツールで周辺視覚と集中力を向上させます。",
                    difficulty: "難易度",
                    stats: "ベストタイム：25秒"
                },
                cardMemory: {
                    title: "カード記憶",
                    description: "カードの配列を記憶し再現します。視覚記憶力の開発に最適です。",
                    difficulty: "難易度",
                    stats: "最大カード数：52"
                },
                patternMemory: {
                    title: "パターン記憶",
                    description: "複雑なパターンを記憶し再現して空間記憶能力を高めます。",
                    difficulty: "難易度",
                    stats: "パターン数：20"
                },
                numberMatch: {
                    title: "数字マッチ",
                    description: "同じ数字をマッチして消去します",
                    rules: {
                        title: "ゲームルール",
                        grid: "5×5の格子内で同じ数字を見つけましょう",
                        time: "60秒以内にできるだけ多くのマッチを完了しましょう",
                        scoring: "マッチ数に基づいてスコアを獲得します（2個の数字=2点など）",
                        end: "時間が終了したり、もうマッチが残っていない場合にゲーム終了"
                    },
                    start: "ゲームを開始",
                    gameOver: {
                        title: "ゲーム終了！",
                        timeUp: "時間が終了しました！",
                        restart: "再度プレイ"
                    },
                    noMatches: {
                        title: "もうマッチはありません！",
                        message: "もうマッチする数字はありません",
                        restart: "再度プレイ"
                    }
                },
                codeBreaker: {
                    title: "コードブレーカー",
                    description: "4桁のコードを破解します",
                    rules: {
                        title: "ゲームルール",
                        goal: "10回の試行で4桁のコードを破解します",
                        hint: "各試行後、ヒントを得ます：xAyB",
                        hintExplain: "A = 数字と位置が正解、B = 数字のみ正解",
                        example: "例：2A1Bは2つの数字が正解、1つの数字が位置が違います"
                    },
                    start: "ゲームを開始",
                    submit: "送信",
                    gameWon: {
                        title: "おめでとう！",
                        message: "コードを破解しました！",
                        restart: "再度プレイ"
                    },
                    gameLost: {
                        title: "ゲーム終了",
                        message: "正解のコードは：",
                        restart: "再度プレイ"
                    }
                },
                numberPuzzle: {
                    title: "数字パズル",
                    description: "数字を順番に並べる",
                    rules: {
                        title: "ゲームルール",
                        goal: "1から8までの数字を順番に並べる",
                        move: "空白の隣の数字をクリックして移動",
                        time: "90秒以内にパズルを完成させる",
                        scoring: "移動回数が少ないほど、スコアが高くなります"
                    },
                    start: "ゲームを開始",
                    gameWon: {
                        title: "おめでとう！",
                        message: "パズルを解きました！",
                        restart: "再度プレイ"
                    },
                    gameLost: {
                        title: "時間切れ！",
                        message: "スピードアップを目指して頑張りましょう！",
                        restart: "再挑戦"
                    }
                },
                memoryTest: {
                    title: "記憶力レベルテスト",
                    description: "短期記憶力レベルをテスト",
                    rules: {
                        title: "記憶力レベルテスト",
                        intro: "このテストは、国際的な脳トレーニングとリハビリの専門家と医師によって設計されました。",
                        main: "表示される数字を逆順にクリックしてください。",
                        example: "例：1、2、3、4が表示されたら、4、3、2、1の順でクリック",
                        difficulty: "レベルが上がるごとに難しくなります",
                        practice: "ルールに慣れるまで何度も練習できます"
                    },
                    start: "テスト開始",
                    submit: "送信",
                    next: "次のレベル",
                    levelResult: {
                        correctTitle: "正解！",
                        correctMessage: "よくできました！次のレベルに進みましょう。",
                        wrongTitle: "不正解",
                        wrongMessage: "練習を重ねて記憶力を向上させましょう。"
                    },
                    finalResult: {
                        title: "テスト完了！",
                        levelReached: "達成レベル：{level}",
                        excellent: "記憶力レベル：優秀 (80-100)",
                        good: "記憶力レベル：良好 (60-79)",
                        average: "記憶力レベル：平均 (40-59)",
                        needsPractice: "記憶力レベル：練習が必要 (0-39)",
                        restart: "もう一度"
                    }
                },
                numberMaze: {
                    title: "数字迷宮",
                    description: "奇数のマスを通って出口を目指せ",
                    rules: {
                        title: "ゲームルール",
                        grid: "5×5の数字迷宮を移動",
                        movement: "奇数のマスのみ通行可能",
                        goal: "左上から右下まで到達",
                        penalty: "間違えるごとに2点減点",
                        time: "制限時間は120秒"
                    },
                    result: {
                        success: "クリア！",
                        successMessage: "迷路を攻略しました！",
                        failure: "時間切れ！",
                        failureMessage: "時間切れです。もう一度挑戦しましょう！"
                    }
                }
            },
            footer: "全著作権所有"
        }
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
        footer: "모든 권리 보유",
        home: {
            hero: {
                title: "기억력을 훈련하고 마음을 향상시키세요",
                description: "과학적인 기억력 훈련 게임으로 자신에게 도전하세요. 단계적인 난이도로 숫자 암기를 마스터하세요.",
                cta: "지금 훈련 시작하기"
            },
            features: {
                title: "특징",
                scientific: {
                    title: "과학적 훈련",
                    description: "인지심리학과 신경과학의 입증된 원리를 기반으로 합니다."
                },
                adaptive: {
                    title: "적응적 난이도",
                    description: "최적의 도전을 위해 당신의 실력 수준에 맞춰집니다."
                },
                feedback: {
                    title: "즉각적인 피드백",
                    description: "성과와 진행 상황에 대한 즉각적인 피드백을 받습니다."
                }
            },
            howToPlay: {
                title: "게임 방법",
                steps: {
                    start: {
                        title: "시작",
                        description: "난이도를 선택하고 도전을 준비하세요."
                    },
                    memorize: {
                        title: "암기",
                        description: "5초 동안 숫자 배열을 주의 깊게 관찰하세요."
                    },
                    recall: {
                        title: "회상",
                        description: "올바른 순서로 숫자를 입력하세요."
                    },
                    track: {
                        title: "추적",
                        description: "시도마다 진행 상황을 확인하고 개선하세요."
                    }
                }
            },
            benefits: {
                title: "이점",
                focus: {
                    title: "집중력 향상",
                    description: "더 강하고 지속적인 집중력을 기릅니다."
                },
                retention: {
                    title: "기억력 향상",
                    description: "정보 유지와 회상 능력을 향상시킵니다."
                },
                cognitive: {
                    title: "인지적 민첩성",
                    description: "정신적 처리 속도와 의사결정 능력을 높입니다."
                },
                agility: {
                    title: "작업 기억력",
                    description: "일상적인 수행 능력 향상을 위해 작업 기억력을 강화합니다."
                }
            },
            scoring: {
                title: "점수 시스템",
                perfect: {
                    title: "완벽 점수 (100점)",
                    description: "모든 100레벨 완벽 숙달"
                },
                excellent: {
                    title: "우수 (80-99점)",
                    description: "탁월한 기억력 성과"
                },
                proficient: {
                    title: "숙련 (60-79점)",
                    description: "良好한 기억력 기술 (향상 가능)"
                },
                developing: {
                    title: "발전 중 (1-59점)",
                    description: "기억력 향상을 위해 계속 연습하세요"
                }
            },
            games: {
                title: "더 많은 기억력 게임",
                numberMemory: {
                    title: "숫자 기억",
                    description: "1에서 100자리까지의 단계적인 숫자 배열로 기억력에 도전하세요.",
                    rules: {
                        title: "게임 규칙",
                        rule1: "각 레벨에서 숫자의 배열이 표시됩니다",
                        rule2: "3초 이내에 숫자의 배열을 기억하세요",
                        rule3: "올바른 순서로 숫자를 입력하세요",
                        rule4: "레벨을 클리어하여 기억력을 향상시키세요",
                        rule5: "오답이면 게임 종료"
                    },
                    startButton: "게임 시작",
                    level: "레벨",
                    gameOver: "게임 종료!",
                    score: "점수",
                    restartButton: "다시 하기"
                },
                letterPairs: {
                    title: "문자 짝",
                    description: "60초 이내에 모든 문자 짝을 찾으세요",
                    difficulty: "난이도",
                    stats: "최고 기록: 25초"
                },
                wordChain: {
                    title: "단어 체인",
                    description: "前の 단어의 마지막 글자로 새로운 단어를 시작하세요",
                    rules: {
                        title: "게임 규칙",
                        time: "각 단어 15초",
                        levels: "20레벨을 클리어",
                        scoring: "각 레벨 1점, 16+점에서 우수"
                    }
                },
                schulteGrid: {
                    title: "슐테 그리드",
                    description: "이 고전적인 주의력 훈련 도구로 주변 시야와 집중력을 향상시키세요.",
                    difficulty: "난이도",
                    stats: "최고 기록: 25초"
                },
                cardMemory: {
                    title: "카드 기억",
                    description: "카드 배열을 기억하고 재현하세요. 시각적 기억력 개발에 완벽합니다.",
                    difficulty: "난이도",
                    stats: "최대 카드 수: 52"
                },
                patternMemory: {
                    title: "패턴 기억",
                    description: "복잡한 패턴을 기억하고 재현하여 공간 기억력을 향상시키세요.",
                    difficulty: "난이도",
                    stats: "패턴 수: 20"
                },
                numberMatch: {
                    title: "숫자 매칭",
                    description: "같은 숫자를 매칭하여 제거하세요",
                    rules: {
                        title: "게임 규칙",
                        grid: "5×5 격자 내에서 같은 숫자를 찾으세요",
                        time: "60초 이내에 가능한 많은 매칭을 완료하세요",
                        scoring: "매칭 수에 따라 점수를 획득합니다 (2개의 숫자=2점 등)",
                        end: "시간이 종료되거나 더 이상 매칭할 숫자가 없을 때 게임 종료"
                    },
                    start: "게임 시작",
                    gameOver: {
                        title: "게임 종료!",
                        timeUp: "시간이 종료되었습니다!",
                        restart: "다시 시작"
                    },
                    noMatches: {
                        title: "더 이상 매칭할 숫자가 없습니다!",
                        message: "더 이상 매칭할 숫자가 없습니다",
                        restart: "다시 시작"
                    }
                },
                codeBreaker: {
                    title: "코드 브레이커",
                    description: "4자리 코드를 깨세요",
                    rules: {
                        title: "게임 규칙",
                        goal: "10회의 시도에서 4자리 코드를 깨세요",
                        hint: "각 시도 후, 힌트를 얻으세요: xAyB",
                        hintExplain: "A = 숫자와 위치가 정답, B = 숫자만 정답",
                        example: "예: 2A1B는 2개의 숫자가 정답, 1개의 숫자가 위치가 틀림"
                    },
                    start: "게임 시작",
                    submit: "제출",
                    gameWon: {
                        title: "축하합니다!",
                        message: "코드를 깼습니다!",
                        restart: "다시 시작"
                    },
                    gameLost: {
                        title: "게임 종료",
                        message: "정답 코드는:",
                        restart: "다시 시작"
                    }
                },
                numberPuzzle: {
                    title: "숫자 퍼즐",
                    description: "숫자를 순서대로 배열",
                    rules: {
                        title: "게임 규칙",
                        goal: "1부터 8까지의 숫자를 순서대로 배열하세요",
                        move: "빈 공간 옆의 숫자를 클릭하여 이동",
                        time: "90초 안에 퍼즐을 완성하세요",
                        scoring: "이동 횟수가 적을수록 더 좋은 점수"
                    },
                    start: "게임 시작",
                    gameWon: {
                        title: "축하합니다!",
                        message: "퍼즐을 해결했습니다!",
                        restart: "다시 하기"
                    },
                    gameLost: {
                        title: "시간 초과!",
                        message: "속도 향상을 위해 계속 노력하세요!",
                        restart: "재도전"
                    }
                },
                memoryTest: {
                    title: "기억력 수준 테스트",
                    description: "단기 기억력 수준 테스트",
                    rules: {
                        title: "기억력 수준 테스트",
                        intro: "이 테스트는 국제적인 두뇌 훈련 및 재활 전문가와 의사가 공동으로 설계했습니다.",
                        main: "숫자 순서를 보고 역순으로 클릭하세요.",
                        example: "예: 1,2,3,4가 보이면 4,3,2,1 순서로 클릭",
                        difficulty: "레벨이 올라갈수록 난이도가 증가합니다",
                        practice: "규칙에 익숙해질 때까지 반복 연습할 수 있습니다"
                    },
                    start: "테스트 시작",
                    submit: "제출",
                    next: "다음 레벨",
                    levelResult: {
                        correctTitle: "정답!",
                        correctMessage: "잘 했어요! 다음 레벨을 준비하세요.",
                        wrongTitle: "오답",
                        wrongMessage: "기억력 향상을 위해 계속 연습하세요."
                    },
                    finalResult: {
                        title: "테스트 완료!",
                        levelReached: "완료한 레벨: {level}",
                        excellent: "기억력 수준: 우수 (80-100)",
                        good: "기억력 수준: 양호 (60-79)",
                        average: "기억력 수준: 보통 (40-59)",
                        needsPractice: "기억력 수준: 연습 필요 (0-39)",
                        restart: "다시 시도"
                    }
                },
                numberMaze: {
                    title: "숫자 미로",
                    description: "홀수 칸을 통해 출구를 찾아라",
                    rules: {
                        title: "게임 규칙",
                        grid: "5×5 숫자 미로에서 이동",
                        movement: "홀수 칸만 이동 가능",
                        goal: "왼쪽 상단에서 오른쪽 하단까지",
                        penalty: "잘못된 이동마다 2점 감점",
                        time: "120초 안에 완료"
                    },
                    result: {
                        success: "축하합니다!",
                        successMessage: "미로를 성공적으로 통과했습니다!",
                        failure: "시간 초과!",
                        failureMessage: "시간이 초과되었습니다. 다시 도전하세요!"
                    }
                }
            },
            footer: "모든 권리 보유"
        }
    },
};

const defaultLanguage = 'en';

// 获取翻译文本
function getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = translations[lang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            console.warn(`Translation missing for: ${key} in language: ${lang}`);
            return key;
        }
    }
    
    return translation;
}

// 设置语言
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }

    localStorage.setItem('preferred-language', lang);
    document.documentElement.setAttribute('lang', lang);
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const text = getTranslation(key, lang);
        if (text) {
            element.textContent = text;
        }
    });

    // 更新选择器的值
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = lang;
    }
}

// 获取当前语言
function getCurrentLanguage() {
    return localStorage.getItem('preferred-language') || 'en';
}

// 获取URL参数中的语言设置
function getUrlLanguage() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang');
}

// 获取浏览器语言
function getBrowserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.split('-')[0];
}

// 更改语言
function changeLanguage(lang) {
    if (translations[lang]) {
        setLanguage(lang);
    } else {
        console.error('Unsupported language:', lang);
    }
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
    const urlLang = getUrlLanguage();
    const storedLang = localStorage.getItem('preferred-language');
    const browserLang = getBrowserLanguage();
    
    let initialLang = 'en';
    
    if (urlLang && translations[urlLang]) {
        initialLang = urlLang;
    } else if (storedLang && translations[storedLang]) {
        initialLang = storedLang;
    } else if (browserLang && translations[browserLang]) {
        initialLang = browserLang;
    }
    
    setLanguage(initialLang);
});

// 全局语言管理
const languageManager = {
    currentLang: 'en',
    
    init() {
        // 优先从localStorage获取语言设置
        const storedLang = localStorage.getItem('preferred-language');
        const urlLang = this.getUrlLanguage();
        const browserLang = this.getBrowserLanguage();
        
        // 按优先级设置语言：URL > localStorage > 浏览器语言 > 默认语言
        this.currentLang = urlLang || storedLang || browserLang || 'en';
        this.setLanguage(this.currentLang);
    },
    
    getUrlLanguage() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        return translations[lang] ? lang : null;
    },
    
    getBrowserLanguage() {
        const lang = navigator.language.split('-')[0];
        return translations[lang] ? lang : null;
    },
    
    setLanguage(lang) {
        if (!translations[lang]) {
            console.error('Language not supported:', lang);
            return;
        }
        
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        document.documentElement.setAttribute('lang', lang);
        
        // 更新页面文本
        this.updatePageText();
        
        // 触发自定义事件
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    },
    
    updatePageText() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });
    },
    
    getTranslation(key) {
        const keys = key.split('.');
        let translation = translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation missing for: ${key} in language: ${this.currentLang}`);
                return key;
            }
        }
        
        return translation;
    }
};

// 初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    languageManager.init();
});
