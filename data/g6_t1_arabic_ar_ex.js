function draw_exam_items_list(item, index) {
  let answers = "";
  // re arrange answers
  item.a.sort(() => Math.random() - 0.5);
  item.a.forEach(function (answer) {
    answers += `
            <div class="col s12 m6">
                    <button data-parent="${answer.result}" data-currentQuestionNum="${index}" onclick="clickAnswer(this)" class="btn-large blue lighten-5 black-text answer answerQNumber${index}">${answer.text}</button>
            </div>
                `;
  });
  return `
        <div id="q${index}" class="hide qdiv">
            <div class="question z-depth-1 center lime lighten-5">
                <h5>
                    ${item.q}
                </h5>
            </div>
            <div class="answers">
                <div id="a${index}" class="row">
                    ${answers}
                </div>
                <div class="nextPrevious">
                    <div class="row">
                        <div class="col s12">
                            <button id="next${index}" data-currentQuestionNum="${index}" onclick="clickNext(this)" class="btn-large deep-orange lighten-3 black-text disabled nextBtn">التالي</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
}

var exam1 = {
  title: "الإملاء",
  questionsList: [
    {
      q: "يرى الكاتب أن فقدان مهارات الاستماع أمر صعب للغاية",
      a: [
        { text: "صح", result: "true" },
        { text: "خطأ", result: "false" },
      ],
    },
    {
      q: "الشخص المشغول بما في رأسه ، ولا ينتبه لحديثك هو فاقد المهارات الاستماع الجيد ",
      a: [
        { text: "صح", result: "true" },
        { text: "خطأ", result: "false" },
      ],
    },
    {
      q: "الكاتب يرى أن الذي لا يمتلك مهارات ............يُضَيَّعُ أوقاتنا  ",
      a: [
        { text: "الكتابة ", result: "false" },
        { text: "الاستماع ", result: "true" },
        { text: "القراءة ", result: "false" },
        { text: "التحدث ", result: "false" },
      ],
    },
    {
      q: "يحرص محمد على تدوين النصائح القيمة : معني تدوين ؟",
      a: [
        { text: "قراءة ", result: "false" },
        { text: "مراجعة ", result: "false" },
        { text: "نقل ", result: "false" },
        { text: "كتابة ", result: "true" },
      ],
    },
    {
      q: "يساعد الاستماع الفعال على نجاح الطلاب أكاديميا واجتماعيا ",
      a: [
        { text: "صح", result: "true" },
        { text: "خطأ", result: "false" },
      ],
    },
    {
      q: "يجب على الطلاب أن يهملوا تطوير مهارات الاستماع",
      a: [
        { text: "صح", result: "false" },
        { text: "خطأ", result: "true" },
      ],
    },
    {
      q: "تحقيق ما يأملونه ويحلمون به : معنى يأملونه ",
      a: [
        { text: "يرجونه ", result: "true" },
        { text: "يُحبُّونَه ", result: "false" },
        { text: "يُفَضِّلُونَه ", result: "false" },
        { text: "يُقَرِّبُونَهُ ", result: "false" },
      ],
    },
    {
      q: "تعجب المتحدث من لون غلاف الكتاب",
      a: [
        { text: "صح", result: "false" },
        { text: "خطأ", result: "true" },
      ],
    },
    {
      q: "......نصح الاب ابنة بطريقة",
      a: [
        { text: "مباشرة", result: "false" },
        { text: "غير مباشرة", result: "true" },
        { text: "صعبة", result: "false" },
        { text: "غير جيدة", result: "false" },
      ],
    },
    {
      q: "........يرشد الكتاب الي",
      a: [
        { text: "عدم الاستسلام", result: "false" },
        { text: "المحاولة", result: "false" },
        { text: "السعي", result: "false" },
        { text: "جميع ما سيق", result: "true" },
      ],
    },

  ],
};
// draw exam num items
let examCount = exam1.questionsList.length;

for (let i = 1; i <= examCount; i++) {
  if (i == 1) {
    document.getElementById("questionNum").innerHTML += `
        <div class="col s3 m2 l1"><button id="qNum${i}" data-currentQuestionNum="${i}" class="btn black-text yellow lighten-5 qNum">${i}</button></div>
        `;
  } else {
    document.getElementById("questionNum").innerHTML += `
        <div class="col s3 m2 l1"><button id="qNum${i}" data-currentQuestionNum="${i}" class="btn yellow lighten-5 black-text qNum disabled">${i}</button></div>
        `;
  }
}

let g6_t1_arabic_ar_ex = "";
exam1.questionsList.forEach(function (item, index) {
  index++;
  g6_t1_arabic_ar_ex += draw_exam_items_list(item, index);
});

document.getElementById("g6_t1_arabic_ar_ex1").innerHTML += g6_t1_arabic_ar_ex;
