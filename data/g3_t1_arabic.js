import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g3_t1_arabic_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1fbF5BMUza7csyAvOWH49NGb972idv2Wi/view?usp=sharing",
  },
];

let g3_t1_arabic_books_elements = "";
g3_t1_arabic_books.forEach(function (item) {
  g3_t1_arabic_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_arabic_books").innerHTML +=
  g3_t1_arabic_books_elements;

var g3_t1_arabic_lessons = [
  //المحور 1
  {
    section_id: 1,
    section_name: " المحور الأول: مَنْ أكون ؟ الحياة الصحية",
    chapters: [
      //الموضوع 1
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الاول: جسمي السليم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "مراجعة علي ما سبق دراسته",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "ميس نادية فاروق حصة 1",
                video_link:
                  "https://www.youtube.com/embed/eC0n2_O3bMM?si=CG5Gt9pxR0KqKcuN",
              },
              {
                video_id: "1-1-1-2",
                video_title: "ميس نادية فاروق حصة 2",
                video_link:
                  "https://www.youtube.com/embed/5n8UQOXmU3M?si=lzlpCBjWAMdAc9FB",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "التقييم التشخيصي",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CQNAg075s7E?si=086SoTKt7uc5UnFG",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "الدليل العام لنصوص الاستماع",
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
            lesson_name: "قصة الاستماع (أخاف من العدوى)",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/-Jlj4jAAv_0?si=4FwelmVubSCFKV3K",
              },
              {
                video_id: "1-1-4-2",
                video_title: "ميس نادية فاروق",
                video_link:
                  "https://www.youtube.com/embed/-9DyOYC3thc?si=chm3N2wMLBDVUqAP",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "لاحظ وتعلم التاء المفتوحة والتاء المربوطة، والهاء",
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
            lesson_name: "الدليل العام لنصوص القراءة وأنشطتها",
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
            lesson_name: "قصة (أدواتي الشخصية)",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/369nbOWr-Rk?si=Uw7MxsrMw83lc8s6",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-1-8",
            lesson_name: "لاحظ واكتشف أسلوب النهي",
            videos: [
              {
                video_id: "1-1-8-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 9
          {
            lesson_id: "1-1-9",
            lesson_name: "نشيد (صحتنا سر سعادتنا)",
            videos: [
              {
                video_id: "1-1-9-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CcIqwzhk8Ao?si=jl4x4HgFxzxhKzS3",
              },
            ],
          },
          //الدرس 10
          {
            lesson_id: "1-1-10",
            lesson_name: "لاحظ واكتشف ( فعل الأمر )",
            videos: [
              {
                video_id: "1-1-10-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 11
          {
            lesson_id: "1-1-11",
            lesson_name: "التعبير الكتابي نموذج كتابة لافتة مصورة",
            videos: [
              {
                video_id: "1-1-11-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CRh7rQjj-wg?si=Uibmqsm4ClJDwrrH",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني :  غذائي الصحي ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "قصة الاستماع الأطعمة البحرية",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/hRwDP92A1-A?si=IdDwPJpZ8tCBXNO_",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "لاحظ وتعلم الأصوات الطويلة والقصيرة",
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
            lesson_name: "قصة ( طبق الطعام )",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/rOYu4ZSfOjQ?si=yXpW5ZbRPzqzG-7U",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "لاحظ واكتشف الفعل المضارع مع المذكر والمؤنث",
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
            lesson_name: "النص المعلوماتي (جسمي وعناصر الغذاء)",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/sMFlcjMMs4I?si=Udu3Vmrp6HU-fPip",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name:
              "لاحظ واكتشف لام التعليل وأدوات الاستفهام وعلامات الترقيم",
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
            lesson_name: "التعبير الكتابي ( نموذج كتابة مطوية )",
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
      // الدروس
      //1 قصة الاستماع ( الفوز الحقيقي ) .
      //2  لاحظ وتعلم ( الحركة الطويلة والقصيرة ).
      //3  قصة (أنا قوي )
      //4  (لاحظ واكتشف) أسلوب التعجب
      //5  النص المعلوماتي ( أصغر سباحة ).
      //6  لاحظ واكتشف (الكلمات الدالة على الماضي والمضارع، والفعل الماضي مع المذكر والمؤنث )
      //7  التعبير الكتابي ( نموذج كتابة قصة مصورة )
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث : روحي الرياضية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "قصة الاستماع ( الفوز الحقيقي )",
            videos: [
              {
                video_id: "1-3-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/f_uQfxr2Ehs?si=TJaTb3CRQDjpqT0s",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "لاحظ وتعلم ( الحركة الطويلة والقصيرة )",
            videos: [
              {
                video_id: "1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "قصة (أنا قوي)",
            videos: [
              {
                video_id: "1-3-3",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/sCDqLAIX7lA?si=AugI3vIzoI23px7X",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "(لاحظ واكتشف) أسلوب التعجب ",
            videos: [
              {
                video_id: "1-3-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "النص المعلوماتي ( أصغر سباحة )",
            videos: [
              {
                video_id: "1-3-5",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/SuI_6GjcTXk?si=b8OUF0zj1nsm-4N-",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name:
              "لاحظ واكتشف (الكلمات الدالة على الماضي والمضارع، والفعل الماضي مع المذكر والمؤنث )",
            videos: [
              {
                video_id: "1-3-6",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-3-7",
            lesson_name: "التعبير الكتابي ( نموذج كتابة قصة مصورة )",
            videos: [
              {
                video_id: "1-3-7",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/j_5N34DiktM?si=0248CzrEROrVOIbx",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 2
  {
    section_id: "2",
    section_name: "المحور الثاني: العالم من حولي (الاهتمام بعالمنا)",
    chapters: [
      //الموضوع 1
      // الدروس
      //1 قصة الاستماع ( فكرة ومعلومة )
      //2 لاحظ وتعلم الألف اللينة
      //3 قصة في منزلي فراشة
      //4 لاحظ واكتشف ظرف المكان
      //5 نشيد (أرضي موطني)
      //6 لاحظ واكتشف أسلوب النداء
      //7 التعبير الكتابي نموذج كتابة فقرة

      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الاول: الكوكب الذي نعيش فيه",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "قصة الاستماع ( فكرة ومعلومة )",
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
            lesson_name: "لاحظ وتعلم الألف اللينة",
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
            lesson_name: "قصة في منزلي فراشة",
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
            lesson_name: "لاحظ واكتشف ظرف المكان",
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
            lesson_name: "نشيد (أرضي موطني)",
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
            lesson_name: "لاحظ واكتشف أسلوب النداء",
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
            lesson_name: "التعبير الكتابي نموذج كتابة فقرة",
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
      // الدروس
      //1 قصة الاستماع (السلحفاة البحرية )
      //2 لاحظ وتعلم (الشدة )
      //3 قصة ( غابات البامبو)
      //4 لاحظ واكتشف (جمع المذكر والمؤنث)
      //5 النص المعلوماتي الشعاب المرجانية
      //6 لاحظ واكتشف (ظرف الزمان )
      //7 التعبير الكتابي نموذج كتابة خبر في جريدة

      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني: نحن و كوكب الارض ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "قصة الاستماع (السلحفاة البحرية )",
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
            lesson_name: "لاحظ وتعلم (الشدة )",
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
            lesson_name: "قصة ( غابات البامبو)",
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
            lesson_name: "لاحظ واكتشف (جمع المذكر والمؤنث)",
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
            lesson_name: "النص المعلوماتي الشعاب المرجانية",
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
            lesson_name: "لاحظ واكتشف (ظرف الزمان )",
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
            lesson_name: "التعبير الكتابي نموذج كتابة خبر في جريدة",
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
      // مسئوليتي
      // الدروس
      //1 قصة الاستماع (مقابلة مع عالم بيئة )
      //2 لاحظ وتعلم (التنوين).
      //3 قصة آدم المبتكر
      //4 لاحظ واكتشف ( حروف الجر )
      //5 النص المعلوماتي ( متجر النفايات )
      //6 لاحظ واكتشف ( حروف العطف )
      //7 التعبير الكتابي نموذج كتابة رسالة اقتراح

      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث: مسئوليتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة الاستماع (مقابلة مع عالم بيئة )",
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
            lesson_name: "لاحظ وتعلم (التنوين)",
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
            lesson_name: "قصة آدم المبتكر",
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
            lesson_name: "لاحظ واكتشف ( حروف الجر )",
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
            lesson_name: "النص المعلوماتي ( متجر النفايات )",
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
            lesson_name: "لاحظ واكتشف ( حروف العطف )",
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
            lesson_name: "التعبير الكتابي نموذج كتابة رسالة اقتراح",
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

draw_lessons(g3_t1_arabic_lessons, "g3_t1_arabic_lessons");
