import { draw_sub_books_list, draw_lessons ,draw_fullvideo_list} from "./fun.js";
var g5_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1yA21hRVQc1nsPqsj7kiQMflFaCvY8IYL/view?usp=drive_link",
  },
];

let g5_t1_math_ar_books_elements = "";
g5_t1_math_ar_books.forEach(function (item) {
  g5_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_math_ar_books").innerHTML +=
  g5_t1_math_ar_books_elements;

  // full-video -----------
var g5_t1_math_ar_fullvideo = [
  {
    video_title: "مستر محمد ابراهيم - شرح 2025",
    video_link: "https://www.youtube.com/embed/videoseries?si=lhhA7UEev70nsjgB&amp;list=PLr3deliUOGZsJXeKUIC1PYoyFSy8IgCWJ",
  },
  {
    video_title: "مستر محمد ابراهيم - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=p-ZBUu3-dQr7I5f1&amp;list=PLr3deliUOGZuq2ZmiSMExkdE42lgRMBbm",
  },
  {
    video_title: "مستر محمد ابراهيم - ملخص نهاية الترم 2024",
    video_link: "https://www.youtube.com/embed/GTqnNCLxzrU?si=hOOsOmDMFu36gNT5",
  },
  {
    video_title: "مستر محمد ابراهيم - المتميز نهاية الترم 2024",
    video_link: "https://www.youtube.com/embed/fprm18QUtto?si=qo_oJm1tsJXNZCrQ",
  },
];

let g5_t1_math_ar_fullvideo_elements = "";
g5_t1_math_ar_fullvideo.forEach(function (item) {
  g5_t1_math_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g5_t1_math_ar_fullvideo").innerHTML +=
  g5_t1_math_ar_fullvideo_elements;
//-------------------
var g5_t1_math_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : القيمة المكانية للأعداد العشرية وحسابها",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : الكسور العشرية حتى جزء من الألف
      //الدروس
      //1 الدرس -1- الكسور العشرية حتى جزء من الألف
      //2 الدرسان - 2 ، 3 - تغيير القيم المكانية , تكوين الكسور العشرية وتحليلها
      //3 الدرس -4- مقارنة الكسور العشرية
      //4 الدرس -5- تقريب الكسور العشرية
      {
        chapter_id: "1-1",
        chapter_name: "المفهوم الاول : الكسور العشرية حتى جزء من الألف",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس -1- الكسور العشرية حتى جزء من الألف",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "محمد ابراهيم- تأسيس",
                video_link: "https://www.youtube.com/embed/PK5lK3oGoF4?si=hW1XrEi4yt0QsDsi",
              },
              {
                video_id: "1-1-1-2",
                video_title: "محمد ابراهيم-2024",
                video_link: "https://www.youtube.com/embed/LMEnl6yP8SM?si=l5-RXB_om_-s1NYW",
              },
              {
                video_id: "1-1-1-3",
                video_title: "محمد ابراهيم-2025",
                video_link: "https://www.youtube.com/embed/JEeSW8QBlbY?si=9yVSLeBdcW-seUKB",
              },
              {
                video_id: "1-1-1-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name:
              "الدرسان - 2 ، 3 - تغيير القيم المكانية , تكوين الكسور العشرية وتحليلها",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/qRzob0VkVnQ?si=sZICTJeC5LPXKKVv",
              },
              {
                video_id: "1-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "الدرس -4- مقارنة الكسور العشرية",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/99p6YRRof0c?si=t13k7K9w5JkMKzZt",
              },
              {
                video_id: "1-1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "الدرس -5- تقريب الكسور العشرية",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/1CJYtef1_XE?si=VHmbD5VSb5zzWZDF",
              },
              {
                video_id: "1-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : جمع وطرح الكسور العشرية
      //الدروس
      // الدرسان 6-7 تقدير مجموع الأعداد العشرية نمذجة جمع الكسور العشرية
      // الدروس 8-10 نمذجة طرح الكسور العشرية , تقدير الفرق بين عددين عشريين , طرح الكسور العشرية حتى جزء من الألف
      // الدرس -11- مسائل كلامية على الكسور العشرية
      {
        chapter_id: "1-2",
        chapter_name: "المفهوم الثاني : جمع وطرح الكسور العشرية",
        lessons: [
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name:
              "الدرسان 6-7 تقدير مجموع الأعداد العشرية نمذجة جمع الكسور العشرية",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/Eu5aGvu8rs4?si=RlyHM-yMrWMZEhm0",
              },
              {
                video_id: "1-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name:
              "الدروس 8-10 نمذجة طرح الكسور العشرية , تقدير الفرق بين عددين عشريين , طرح الكسور العشرية حتى جزء من الألف",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/AD1ig22IsOc?si=VyTTT4_OngZB_EHi",
              },
              {
                video_id: "1-2-6-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-2-7",
            lesson_name: "الدرس -11- مسائل كلامية على الكسور العشرية",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/pBoODScGLSs?si=bWH4Q5GQtnxW0ILZ",
              },
              {
                video_id: "1-2-7-2",
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
  {
    section_id: "2",
    section_name: "الوحدة الثانية : العلاقات بين الأعداد",
    chapters: [
      //الموضوع 1
      //المفهوم الأول: التعبيرات الرياضية والمعادلات والعالم من حولنا
      // الدروس
      // الدرس -1- التعبيرات الرياضية والمعادلات والمتغيرات
      // الدرسان - 2 , 3- المتغيرات في المعادلات ,  القصص والأعداد
      {
        chapter_id: "2-1",
        chapter_name:
          "المفهوم الأول: التعبيرات الرياضية والمعادلات والعالم من حولنا",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس -1- التعبيرات الرياضية والمعادلات والمتغيرات",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/8UzX6QJLt-k?si=xbNb5ge-Dr3HG49y",
              },
              {
                video_id: "2-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name:
              "الدرسان - 2 , 3- المتغيرات في المعادلات ,  القصص والأعداد",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/cAlbRROKB4Y?si=fQhpBSsLHSBGyXso",
              },
              {
                video_id: "2-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني العوامل والمضاعفات
      // الدروس
      //1 الدرسان -4 , 5- تحليل العدد إلى عوامل أولية , العامل المشترك الأكبر ع.م.ا
      //2 الدرسان -6 , 7- تحديد المضاعفات , المضاعف المشترك الأصغر م.م.أ
      //3 الدرس -8- عوامل أم مضاعفات ؟
      {
        chapter_id: "2-2",
        chapter_name: "المفهوم الثاني : العوامل والمضاعفات",
        lessons: [
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name:
              "الدرسان -4 , 5- تحليل العدد إلى عوامل أولية , العامل المشترك الأكبر ع.م.ا",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/BOtqgfQhnCA?si=A3_svU8OEs5l8lLa",
              },
              {
                video_id: "2-2-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name:
              "الدرسان -6 , 7- تحديد المضاعفات , المضاعف المشترك الأصغر م.م.أ",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/o1KS08dMf7M?si=PUaeF_6S1ypiq6eq",
              },
              {
                video_id: "2-2-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name: "الدرس -8- عوامل أم مضاعفات ؟",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/BtDuCjcN-ds?si=1RQrxpFU2FOKsWXD",
              },
              {
                video_id: "2-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 3
  {
    section_id: "3",
    section_name: "الوحدة الثالثة : ضرب الأعداد الصحيحة",
    chapters: [
      //الموضوع 1
      //المفهوم الأول : الضرب في عدد مكون من رقمين
      // الدروس
      //1 الدرسان -1 ، 2- استخدام نموذج مساحة المستطيل في عملية الضرب , خاصية التوزيع في عملية الضرب
      {
        chapter_id: "3-1",
        chapter_name: "المفهوم الأول : الضرب في عدد مكون من رقمين",
        lessons: [
          //الدرس 1
          {
            lesson_id: "3-1-1",
            lesson_name:
              "الدرسان -1 ، 2- استخدام نموذج مساحة المستطيل في عملية الضرب , خاصية التوزيع في عملية الضرب",
            videos: [
              {
                video_id: "3-1-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/RUP0kXwbtPk?si=Q3b4jmnnrsZfIOvb",
              },
              {
                video_id: "3-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : ضرب عدد مكون من 4 أرقام في عدد فكون من رقمين
      // الدروس
      //1 الدرسان -3 ، 4- الضرب في عدد مكون من رقمين باستخدام الخوارزمية المعيارية , ضرب الأعداد متعددة الأرقام
      //2 الدرس -5- مسائل كلامية على الضرب
      {
        chapter_id: "3-2",
        chapter_name:
          "المفهوم الثاني : ضرب عدد مكون من 4 أرقام في عدد فكون من رقمين",
        lessons: [
          //الدرس 1
          {
            lesson_id: "3-2-1",
            lesson_name:
              "الدرسان -3 ، 4- الضرب في عدد مكون من رقمين باستخدام الخوارزمية المعيارية , ضرب الأعداد متعددة الأرقام",
            videos: [
              {
                video_id: "3-2-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/1xEkxFzUso0?si=zUQgeeMpR--ZC15Q",
              },
              {
                video_id: "3-2-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "3-2-2",
            lesson_name: "الدرس -5- مسائل كلامية على الضرب",
            videos: [
              {
                video_id: "3-2-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/Ue1-Cj2EUx4?si=wisDfX2dBIbr4Jv4",
              },
              {
                video_id: "3-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 4
  {
    section_id: "4",
    section_name: "الوحدة الرابعة : القسمة على أعداد صحيحة",
    chapters: [
      //الموضوع 1
      //المفهوم الأول : استخدام النماذج في عملية القسمة
      // الدروس
      //1 الدرسان - 1 ، 2 - القسمة على عدد مكون من رقمين , تقدير خارج القسمة
      {
        chapter_id: "4-1",
        chapter_name: "المفهوم الأول : استخدام النماذج في عملية القسمة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "4-1-1",
            lesson_name:
              "الدرسان - 1 ، 2 - القسمة على عدد مكون من رقمين , تقدير خارج القسمة",
            videos: [
              {
                video_id: "4-1-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/9aCLvWOhfKA?si=7f6eCemrbxisLmyg",
              },
              {
                video_id: "4-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //المفهوم الثاني : القسمة على عدد مكون من رقمين
      //1 الدرسان - 3 ، 4 - استخدام خوارزمية القسمة , علاقة القسمة بالضرب
      //2 الدرس -5- مسائل كلامية متعددة الخطوات
      {
        chapter_id: "4-2",
        chapter_name: "المفهوم الثاني : القسمة على عدد مكون من رقمين",
        lessons: [
          //الدرس 2
          {
            lesson_id: "4-2-2",
            lesson_name:
              "الدرسان - 3 ، 4 - استخدام خوارزمية القسمة , علاقة القسمة بالضرب",
            videos: [
              {
                video_id: "4-2-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/4-P7rSvtR-I?si=71SckUKKbo6SDe2i",
              },
              {
                video_id: "4-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "4-2-3",
            lesson_name: "الدرس -5- مسائل كلامية متعددة الخطوات",
            videos: [
              {
                video_id: "4-2-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/Da-gPpHdtQk?si=f_L2_vzVZEjs-lwF",
              },
              {
                video_id: "4-2-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 5
  {
    section_id: "5",
    section_name: "الوحدة الخامسة : عمليتا الضرب والقسمة مع الكسور العشرية",
    chapters: [
      //الموضوع 1
      //المفهوم الأول : ضرب الكسور العشرية
      // الدرس -1- الضرب في قوى العدد 10
      // الدرس -2- ضرب الكسور العشرية في أعداد صحيحة
      // الدرس -3- ضرب الأجزاء من عشرة في أجزاء من عشرة
      // الدروس -4 , 6 - ضرب الكسور العشرية باستخدام نموذج مساحة المستطيل , ضرب الكسور العشرية حتى جزء من مائة , ضرب الكسور العشرية حتى جزء من الألف
      // الدروس - 7 , 9 - الكسور العشرية والنظام المتري , القياس والكسور العشرية وقوى العدد 10 , حل مسائل كلامية متعددة الخطوات
      {
        chapter_id: "5-1",
        chapter_name: "المفهوم الأول : ضرب الكسور العشرية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "5-1-1",
            lesson_name: "الدرس -1- الضرب في قوى العدد 10",
            videos: [
              {
                video_id: "5-1-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/IaNlrAFH59Y?si=fDVlgJ7IJR3P8o0h",
              },
              {
                video_id: "5-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "5-1-2",
            lesson_name: "الدرس -2- ضرب الكسور العشرية في أعداد صحيحة",
            videos: [
              {
                video_id: "5-1-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/7U9lJQgqY8k?si=-1_BVkNFxVHd_LHI",
              },
              {
                video_id: "5-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "5-1-3",
            lesson_name: "الدرس -3- ضرب الأجزاء من عشرة في أجزاء من عشرة",
            videos: [
              {
                video_id: "5-1-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/lhO_W1ez8F8?si=0Q5nyCVQtmC5ZxM1",
              },
              {
                video_id: "5-1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "5-1-4",
            lesson_name:
              "الدروس -4 , 6 - ضرب الكسور العشرية باستخدام نموذج مساحة المستطيل , ضرب الكسور العشرية حتى جزء من مائة , ضرب الكسور العشرية حتى جزء من الألف",
            videos: [
              {
                video_id: "5-1-4-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/tGEORGODDvU?si=dg6sZJf6V8_MGp7N",
              },
              {
                video_id: "5-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "5-1-5",
            lesson_name:
              "الدروس - 7 , 9 - الكسور العشرية والنظام المتري , القياس والكسور العشرية وقوى العدد 10 , حل مسائل كلامية متعددة الخطوات",
            videos: [
              {
                video_id: "5-1-5-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/gEe0k2fX1BY?si=vNf13LCUPVB9MRiR",
              },
              {
                video_id: "5-1-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //المفهوم الثاني : قسمة الكسور العشرية
      // الدروس
      //1 الدرسان - 10 , 11 - القسمة على قوى العدد 10 , الأنماط والعلاقات في قوى العدد 10
      //2 الدرس -12- قسمة كسور عشرية على أعداد صحيحة
      //3 الدرس -13- قسمة كسور عشرية على كسور عشرية
      {
        chapter_id: "5-2",
        chapter_name: "المفهوم الثاني : قسمة الكسور العشرية",
        lessons: [
          //الدرس 6
          {
            lesson_id: "5-2-1",
            lesson_name:
              "الدرسان - 10 , 11 - القسمة على قوى العدد 10 , الأنماط والعلاقات في قوى العدد 10",
            videos: [
              {
                video_id: "5-2-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/TAGC2ec-lqQ?si=34CRcfTWuajxwCvN",
              },
              {
                video_id: "5-2-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "5-2-2",
            lesson_name: "الدرس -12- قسمة كسور عشرية على أعداد صحيحة",
            videos: [
              {
                video_id: "5-2-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/PyML_odIwsI?si=X3TkfqNIkOgmWuLT",
              },
              {
                video_id: "5-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "5-2-3",
            lesson_name: "الدرس -13- قسمة كسور عشرية على كسور عشرية",
            videos: [
              {
                video_id: "5-2-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/NzPOWbK0mac?si=CdFQAAc3cHyP8N9R",
              },
              {
                video_id: "5-2-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 6
  {
    section_id: "6",
    section_name: "الوحدة السادسة : التعبيرات العددية والأنماط",
    chapters: [
      //الموضوع 1
      //مفهوم الوحدة ، إيجاد قيمة التعبيرات العددية وتحليل الأنماط
      // الدروس
      //1 الدرسان -1 , 2- ترتيب إجراء العمليات الحسابية , تعبيرات عددية تتضمن أقواسا
      //3 الدرس -3- كتابة تعبير عددي لتمثيل موقف ما
      //3 الدرس -4- تحديد الأنماط العددية
      {
        chapter_id: "6-1",
        chapter_name:
          "مفهوم الوحدة ، إيجاد قيمة التعبيرات العددية وتحليل الأنماط",
        lessons: [
          //الدرس 1
          {
            lesson_id: "6-1-1",
            lesson_name:
              "الدرسان -1 , 2- ترتيب إجراء العمليات الحسابية , تعبيرات عددية تتضمن أقواسا",
            videos: [
              {
                video_id: "6-1-1-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/CHHE8VZIhhs?si=lt7VWEtIckSjUuK4",
              },
              {
                video_id: "6-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "6-1-2",
            lesson_name: "الدرس -3- كتابة تعبير عددي لتمثيل موقف ما",
            videos: [
              {
                video_id: "6-1-2-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/LYA0af8tN9s?si=zXknPRV5S_Z3BS7q",
              },
              {
                video_id: "6-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "6-1-3",
            lesson_name: "الدرس -4- تحديد الأنماط العددية",
            videos: [
              {
                video_id: "6-1-3-1",
                video_title: "محمد ابراهيم - 2024",
                video_link: "https://www.youtube.com/embed/cFl7n8vuqaw?si=itD2agkUSywj-2_q",
              },
              {
                video_id: "6-1-3-2",
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

draw_lessons(g5_t1_math_ar_lessons, "g5_t1_math_ar_lessons");
