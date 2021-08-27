const quiz = [
    {
        question: "最も売れたゲーム機器はどれでしょう？",
        answers: [
            "ニンテンドーDS",
            "psp",
            "プレーステーション3",
            "ニンテンドースイッチ"
            ],
        correct: "ニンテンドーDS"
    },
    {
        question: "糸井重里が企画にかかわったゲームタイトルはどれでしょう？",
        answers: [
            "スーパーマリオブラザーズ3",
            "MATHER2",
            "スーパードンキーコング",
            "星のカービィ"
            ],
        correct: "MATHER2"
    }, {
        question: "ファイナルファンタジーXの主人公は誰でしょう？",
        answers: [
            "クラウド",
            "ティーダ",
            "セシル",
            "フリオニール"
            ],
        correct: "ティーダ"
    } 
];

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

//問題文と選択肢をHTMLに反映
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
}
};

setupQuiz();


//正誤判断
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;
    if(quizIndex < quizLength) {
        setupQuiz(quizIndex);
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
