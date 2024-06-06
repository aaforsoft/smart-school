import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_arabic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1sIsY6TSR-NsQNia9TfmfroU0ztgLm65b/view?usp=drive_link",
  },
];

let g5_t1_arabic_ar_books_elements = "";
g5_t1_arabic_ar_books.forEach(function (item) {
  g5_t1_arabic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_arabic_ar_books").innerHTML +=
  g5_t1_arabic_ar_books_elements;

var g5_t1_arabic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول: أكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : عرفت قدراتي
      //1 قصة الاستماع (أنا أستطيع)
      //2 لاحظ واستنتج (حروف تنطق ولا تكتب)
      //3 قصة ( اكتشف مهاراتك )
      //4 لاحظ واكتشف أقسام الكلام
      //5 النص المعلوماتي (الاختلاف والتميز )
      //6 لاحظ واكتشف الأسماء الموصولة
      //7 التعبير الكتابي - كتابة سيرة ذاتية
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الاول: عرفت قدراتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "قصة الاستماع (أنا أستطيع)",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "لاحظ واستنتج (حروف تنطق ولا تكتب)",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "قصة ( اكتشف مهاراتك )",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "لاحظ واكتشف أقسام الكلام",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "النص المعلوماتي (الاختلاف والتميز )",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-1-6",
            lesson_name: "لاحظ واكتشف الأسماء الموصولة",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-1-7",
            lesson_name: "التعبير الكتابي - كتابة سيرة ذاتية",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : تساءلت وبادرت
      //1 قصة الاستماع (لماذا ؟)
      //2 لاحظ واستنتج ( الهمزة المتطرفة على السطر)
      //3 النص الشعري (رسالة المعلم)
      //4 لاحظ واكتشف علامات رفع المبتدأ والخبر والفاعل
      //5 النص المعلوماتي (الأهم فالمهم)
      //6 الاحظ واكتشف المفعول به
      //7 التعبير الكتابي كتابة استقصاء
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني : تساءلت وبادرت",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "قصة الاستماع (لماذا ؟)",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "لاحظ واستنتج ( الهمزة المتطرفة على السطر)",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "النص الشعري (رسالة المعلم)",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "لاحظ واكتشف علامات رفع المبتدأ والخبر والفاعل",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "النص المعلوماتي (الأهم فالمهم)",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name: "الاحظ واكتشف المفعول به",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-2-7",
            lesson_name: "التعبير الكتابي كتابة استقصاء",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : خططت وثابرت
      //1 قصة سأحاول من جديد
      //2 لاحظ واكتشف أهمية ضبط الكلمات
      //3 لاحظ واكتشف تقديم المفعول به على الفاعل
      //4 قصة السمكات الثلاث كليلة ودمنة
      //5 لاحظ واكتشف إعراب الفاعل والمفعول به في حالة الإفراد
      //6 التعبير الكتابي كتابة قصة قصيرة
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث : خططت وثابرت",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "قصة سأحاول من جديد",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "لاحظ واكتشف أهمية ضبط الكلمات",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "لاحظ واكتشف تقديم المفعول به على الفاعل",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "قصة السمكات الثلاث كليلة ودمنة",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به في حالة الإفراد",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name: "التعبير الكتابي كتابة قصة قصيرة",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 2
  // المحور الثاني : علاقاتي مع الآخرين
  {
    section_id: "2",
    section_name: "المحور الثاني : علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // الموضوع الاول :  أشكالهم تميزهم
      //1 قصة الاستماع (أنت أجمل )
      //2 لاحظ واستنتج ( الهمزة المتوسطة )
      //3 قصة الأرانب وملك الفيلة كليلة ودمنة
      //4 لاحظ واكتشف إعراب الفاعل والمفعول به المثنى
      //5 النص المعلوماتي الجمال الحقيقي
      //6 لاحظ واكتشف إعراب الفاعل والمفعول به جمع التكسير
      //7 التعبير الكتابي كتابة وصف
      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الاول :  أشكالهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "قصة الاستماع (أنت أجمل )",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "لاحظ واستنتج ( الهمزة المتوسطة )",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "قصة الأرانب وملك الفيلة كليلة ودمنة",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به المثنى",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "النص المعلوماتي الجمال الحقيقي",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به جمع التكسير",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-1-7",
            lesson_name: "التعبير الكتابي كتابة وصف ",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : لغاتهم تميزهم
      //1 قصة الاستماع (صداقة بلا قيود)
      //2 لاحظ واستنتج علامات الترقيم
      //3 النص الشعري (لغة الأجداد).
      //4 لاحظ واكتشف إعراب الفاعل والمفعول به جمع المذكر السالم
      //5 النص المعلوماتي مميزون باختلاف
      //6 لاحظ واكتشف إعراب الفاعل والمفعول به جمع المؤنث السالم
      //7 التعبير الكتابي كتابة مناقشة فكرة
      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني : لغاتهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "قصة الاستماع (صداقة بلا قيود)",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "لاحظ واستنتج علامات الترقيم",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "النص الشعري (لغة الأجداد)",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name:
              "لاحظ واكتشف إعراب الفاعل والمفعول به جمع المذكر السالم",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name: "النص المعلوماتي مميزون باختلاف",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-2-6",
            lesson_name:
              "لاحظ واكتشف إعراب الفاعل والمفعول به جمع المؤنث السالم",
            videos: [
              {
                video_id: "2-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-2-7",
            lesson_name: "التعبير الكتابي كتابة مناقشة فكرة",
            videos: [
              {
                video_id: "2-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : عاداتهم تميزهم
      //1 قصة شتاء دافئ وجميل
      //2 لاحظ واكتشف (مراجعة على إعراب الفاعل والمفعول به)
      //3 النص المعلوماتي (طعامهم يميزهم)
      //4 لاحظ واكتشف (مراجعة عامة)
      //5 التعبير الكتابي كتابة مقالة رأي
      //6 اختبار الموضوع الثالث
      //7 معجمي الصغير
      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث : عاداتهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة شتاء دافئ وجميل",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "لاحظ واكتشف (مراجعة على إعراب الفاعل والمفعول به)",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name: "النص المعلوماتي (طعامهم يميزهم)",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "لاحظ واكتشف (مراجعة عامة)",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-3-5",
            lesson_name: "التعبير الكتابي كتابة مقالة رأي",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-3-6",
            lesson_name: "اختبار الموضوع الثالث",
            videos: [
              {
                video_id: "2-3-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-3-7",
            lesson_name: "معجمي الصغير",
            videos: [
              {
                video_id: "2-3-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g5_t1_arabic_ar_lessons, "g5_t1_arabic_ar_lessons");
