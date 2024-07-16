import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g6_t1_professional_skills_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g6_t1_professional_skills_ar_books_elements = "";
g6_t1_professional_skills_ar_books.forEach(function (item) {
  g6_t1_professional_skills_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_professional_skills_ar_books").innerHTML +=
  g6_t1_professional_skills_ar_books_elements;

// full-video -----------
var g6_t1_professional_skills_ar_fullvideo = [
  {
    video_title: "مستر ابراهيم علي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=sQ0znl1aezdiC5Dh&amp;list=PL40k2ZQGp-mR6-BDH-Xb1MzuxrMkAzcst",
  },
  {
    video_title: "ميس هالة النجار - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=IPRclBDPaPEBy8js&amp;list=PLI19jafvRlSDbxXcFz29S7Ow8swekc41i",
  },
  {
    video_title: "منصات تعليمية - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=1ZtA7DNG87G_-8Vt&amp;list=PLUOeiPA5Mo5eQRDPP17TevRVL2my8mOkA",
  },

];

let g6_t1_professional_skills_ar_fullvideo_elements = "";
g6_t1_professional_skills_ar_fullvideo.forEach(function (item) {
  g6_t1_professional_skills_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_professional_skills_ar_fullvideo").innerHTML +=
  g6_t1_professional_skills_ar_fullvideo_elements;
//-------------------

var g6_t1_professional_skills_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : عملية القسمة و العوامل و المضاعفات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : خوارزمية القسمة و العامل المشترك الأكبر و المضاعف المشترك الأصغر
      //الدروس
      //1 الدرس -1- استخدام القسمة المطولة في العالم من حولنا

      {
        chapter_id: "1-1",
        chapter_name:
          "",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "",
                video_link:
                  "",
              },

            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g6_t1_professional_skills_ar_lessons, "g6_t1_professional_skills_ar_lessons");
