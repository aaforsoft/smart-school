import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_ict_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1T573CFYZAh-ldCnmK6ClgA9TcYE9Fnjx/view?usp=drive_link",
  },
];

let g5_t1_ict_ar_books_elements = "";
g5_t1_ict_ar_books.forEach(function (item) {
  g5_t1_ict_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_ict_ar_books").innerHTML +=
  g5_t1_ict_ar_books_elements;

var g5_t1_ict_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول",
    chapters: [
      //الموضوع 1
      // دور تكنولوجيا المعلومات والاتصالات في حياتنا
      //1 الدرس الأول: المستكشف النشط
      //2 الدرس الثاني: الأدوات الملحقة بالكمبيوتر
      //3 الدرس الثالث: الشبكات Networks
      //4 الدرس الرابع: أدوات التواصل الرقمي
      //5 الدرس الخامس: مشكلات الاتصال بشبكة الإنترنت وكيفية حلها
      //6 الدرس السادس: إدارة الملفات الرقمية
      //7 الدرس السابع: استراتيجيات البحث عن المعلومات
      //8 الدرس الثامن : مشاركة المعلومات
      {
        chapter_id: "1-1",
        chapter_name: "دور تكنولوجيا المعلومات والاتصالات في حياتنا",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الأول: المستكشف النشط",
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
            lesson_name: "الدرس الثاني: الأدوات الملحقة بالكمبيوتر",
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
            lesson_name: "الدرس الثالث: الشبكات Networks",
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
            lesson_name: "الدرس الرابع: أدوات التواصل الرقمي",
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
            lesson_name:
              "الدرس الخامس: مشكلات الاتصال بشبكة الإنترنت وكيفية حلها",
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
            lesson_name: "الدرس السادس: إدارة الملفات الرقمية",
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
            lesson_name: "الدرس السابع: استراتيجيات البحث عن المعلومات",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-1-8",
            lesson_name: "الدرس الثامن : مشاركة المعلومات",
            videos: [
              {
                video_id: "1-1-8-1",
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
    section_name: "المحور الثاني",
    chapters: [
      //الموضوع 1
      // احتياطات الامن والسلامة الرقمية
      //1 الدرس الأول: المستكشف النشط
      //2 الدرس الثاني : حماية أنفسنا ومعلوماتنا
      //3 الدرس الثالث : سرية كلمة المرور
      //4 الدرس الرابع : كيفية التعامل مع المواقع الإلكترونية المزيفة
      //5 الدرس الخامس: حقوق الملكية الفكرية
      //6 الدرس السادس: استخدام المصادر الرقمية
      //7 الدرس السابع: عمليات البحث المتقدمة
      //8 الدرس الثامن: توثيق المعلومات بطريقة صحيحة
      {
        chapter_id: "2-1",
        chapter_name: "احتياطات الامن والسلامة الرقمية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الأول: المستكشف النشط",
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
            lesson_name: "الدرس الثاني : حماية أنفسنا ومعلوماتنا",
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
            lesson_name: "الدرس الثالث : سرية كلمة المرور",
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
            lesson_name:
              "الدرس الرابع : كيفية التعامل مع المواقع الإلكترونية المزيفة",
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
            lesson_name: "الدرس الخامس: حقوق الملكية الفكرية",
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
            lesson_name: "الدرس السادس: استخدام المصادر الرقمية",
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
            lesson_name: "الدرس السابع: عمليات البحث المتقدمة",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "2-1-8",
            lesson_name: "الدرس الثامن: توثيق المعلومات بطريقة صحيحة",
            videos: [
              {
                video_id: "2-1-8-1",
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

draw_lessons(g5_t1_ict_ar_lessons, "g5_t1_ict_ar_lessons");
