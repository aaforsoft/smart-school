import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g3_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1n4z_eyTg-7qE6iKqIWD3umn9hW8rs7cQ/view?usp=drive_link",
  },
];

let g3_t1_math_ar_books_elements = "";
g3_t1_math_ar_books.forEach(function (item) {
  g3_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_math_ar_books").innerHTML +=
  g3_t1_math_ar_books_elements;

var g3_t1_math_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحتويات",
    chapters: [
      //الموضوع 1
      //الفصل الاول
      //الدروس
      //1 الدرس 1 الأنماط
      //2 الدرس 2 مزيد من التمثيل البياني بالاعمدة
      //3 الدرس 3 التمثيل البياني بالنقاط
      //4 الدرس 6:4 قياس الاطول بالسنتيمير وبالمتر و بالميليمتر
      {
        chapter_id: "1-1",
        chapter_name: "الفصل الاول",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس 1 الأنماط",
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
            lesson_name: "الدرس 2 مزيد من التمثيل البياني بالاعمدة",
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
            lesson_name: "الدرس 3 التمثيل البياني بالنقاط",
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
            lesson_name:
              "الدرس 6:4 قياس الاطول بالسنتيمير وبالمتر و بالميليمتر",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //الفصل الثاني
      //الدروس
      //1 الدرس 1 الآلاف
      //2 الدرس 2 مزيد من الآلاف
      //3 الدرس 4:3 عشرات الآلاف - مئات الآلاف - صيغ مختلفة لكتابة الأعداد
      //4 الدرس 5 المصفوفات
      //5 الدرس 6 مفهوم الضرب
      //6 الدرس 7 خاصية الابدال في الضرب
      {
        chapter_id: "1-2",
        chapter_name: "الفصل الثاني",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس 1 الآلاف",
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
            lesson_name: "الدرس 2 مزيد من الآلاف",
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
            lesson_name:
              "الدرس 4:3 عشرات الآلاف - مئات الآلاف - صيغ مختلفة لكتابة الأعداد",
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
            lesson_name: "الدرس 5 المصفوفات",
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
            lesson_name: "الدرس 6 مفهوم الضرب",
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
            lesson_name: "الدرس 7 خاصية الابدال في الضرب",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //الفصل الثالث
      //الدروس
      //1 الدرس 2:1 مسائل كلامية علي الضرب , تطبيقات حياتية علي الضرب
      //2 الدرس 3 مضاعفات العددين 2و3
      //3 الدرس 4 مضاعفات العددين 5و10
      //4 الدرس 5 عوامل العدد باستخدام المصفوفات
      //5 الدرس 7:6 الوقت , تطبيقات حياتية علي الوقت
      //6 الدرس 9:8 مفهوم القسمة , تطبيقات حياتية علي القسمة
      //7 الدرس 10 العلاقة بين الضرب والقسمة
      {
        chapter_id: "1-3",
        chapter_name: "الفصل الثالث",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name:
              "الدرس 2:1 مسائل كلامية علي الضرب , تطبيقات حياتية علي الضرب",
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
            lesson_name: "الدرس 3 مضاعفات العددين 2و3",
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
            lesson_name: "الدرس 4 مضاعفات العددين 5و10",
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
            lesson_name: "الدرس 5 عوامل العدد باستخدام المصفوفات",
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
            lesson_name: "الدرس 7:6 الوقت , تطبيقات حياتية علي الوقت",
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
            lesson_name: "الدرس 9:8 مفهوم القسمة , تطبيقات حياتية علي القسمة",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-3-7",
            lesson_name: "الدرس 10 العلاقة بين الضرب والقسمة",
            videos: [
              {
                video_id: "1-3-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 4
      //الفصل الرابع
      //الدروس
      //1 الدرس 1 المضلعات
      //2 الدرس 2 خواص الاشكال الرباعية
      //3 الدرس 3 المساحة
      //4 الدرس 4 مستطيلات متساوية المساحة
      //5 الدرس 5 المساحة باستخدام النماذج
      //6 الدرس 7:6 المساحة بتقسيم المصفوفات , خاصية التوزيع في الضرب
      {
        chapter_id: "1-4",
        chapter_name: "الفصل الرابع",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-4-1",
            lesson_name: "الدرس 1 المضلعات",
            videos: [
              {
                video_id: "1-4-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-4-2",
            lesson_name: "الدرس 2 خواص الاشكال الرباعية",
            videos: [
              {
                video_id: "1-4-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-4-3",
            lesson_name: "الدرس 3 المساحة",
            videos: [
              {
                video_id: "1-4-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-4-4",
            lesson_name: "الدرس 4 مستطيلات متساوية المساحة",
            videos: [
              {
                video_id: "1-4-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-4-5",
            lesson_name: "الدرس 5 المساحة باستخدام النماذج",
            videos: [
              {
                video_id: "1-4-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-4-6",
            lesson_name:
              "الدرس 7:6 المساحة بتقسيم المصفوفات , خاصية التوزيع في الضرب",
            videos: [
              {
                video_id: "1-4-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 5
      //الفصل الخامس
      //الدروس
      //1 الدرس 1 محيط المضلعات
      //2 الدرس 2 المحيط و المساحة
      //3 الدرس 4:3 المساحة باستخدام الابعاد , المساحة باستراتيجيات متنوعة
      //4 الدرس 6:5 محيطات مختلفة لنفس المساحة , مساحات مختلفة لنفس المحيط
      //5 الدرس 7 تطبيقات حياتية علي المحيط و المساحة
      //6 الدرس 9 الضرب في مضاعفات العدد 10
      {
        chapter_id: "1-5",
        chapter_name: "الفصل الخامس",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-5-1",
            lesson_name: "الدرس 1 محيط المضلعات",
            videos: [
              {
                video_id: "1-5-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-5-2",
            lesson_name: "الدرس 2 المحيط و المساحة",
            videos: [
              {
                video_id: "1-5-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-5-3",
            lesson_name:
              "الدرس 4:3 المساحة باستخدام الابعاد , المساحة باستراتيجيات متنوعة",
            videos: [
              {
                video_id: "1-5-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-5-4",
            lesson_name:
              "الدرس 6:5 محيطات مختلفة لنفس المساحة , مساحات مختلفة لنفس المحيط",
            videos: [
              {
                video_id: "1-5-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-5-5",
            lesson_name: "الدرس 7 تطبيقات حياتية علي المحيط و المساحة",
            videos: [
              {
                video_id: "1-5-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-5-6",
            lesson_name: "الدرس 9 الضرب في مضاعفات العدد 10",
            videos: [
              {
                video_id: "1-5-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 6
      //الفصل السادس
      //الدروس
      //1 الدرس 1 انماط الضرب في مضاعفات العدد 10
      //2 الدرس 2 استراتيجيات الضرب في العدد 9
      //3 الدرس 3 حقائق الضرب و الجمع
      //4 الدرس 4 مقارنة و ترتيب الاعداد بصيغ متنوعة
      //5 الدرس 5 استراتيجيات الجمع
      //6 الدرس 6 استراتيجيات الطرح
      //7 الدرس 7 تطبيقات حياتية علي الجمع و الطرح
      //8 الدرس 9:8 السعة , قراءة السعة
      {
        chapter_id: "1-6",
        chapter_name: "الفصل السادس",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-6-1",
            lesson_name: "الدرس 1 انماط الضرب في مضاعفات العدد 10",
            videos: [
              {
                video_id: "1-6-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-6-2",
            lesson_name: "الدرس 2 استراتيجيات الضرب في العدد 9",
            videos: [
              {
                video_id: "1-6-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-6-3",
            lesson_name: "الدرس 3 حقائق الضرب و الجمع",
            videos: [
              {
                video_id: "1-6-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-6-4",
            lesson_name: "الدرس 4 مقارنة و ترتيب الاعداد بصيغ متنوعة",
            videos: [
              {
                video_id: "1-6-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-6-5",
            lesson_name: "الدرس 5 استراتيجيات الجمع",
            videos: [
              {
                video_id: "1-6-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-6-6",
            lesson_name: "الدرس 6 استراتيجيات الطرح",
            videos: [
              {
                video_id: "1-6-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-6-7",
            lesson_name: "الدرس 7 تطبيقات حياتية علي الجمع و الطرح",
            videos: [
              {
                video_id: "1-6-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-6-8",
            lesson_name: "الدرس 9:8 السعة , قراءة السعة",
            videos: [
              {
                video_id: "1-6-8-1",
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

draw_lessons(g3_t1_math_ar_lessons, "g3_t1_math_ar_lessons");
