import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_math_ar_books_elements = "";
g4_t1_math_ar_books.forEach(function (item) {
  g4_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_math_ar_books").innerHTML +=
  g4_t1_math_ar_books_elements;

// full-video -----------
var g4_t1_math_ar_fullvideo = [
  {
    video_title: "مستر محمد ابراهيم - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=LDY4jC1jISHMmL3p&amp;list=PLYGJU1U6eacNS5f4tEoYFGMyJqPkymHIZ",
  },
  {
    video_title: "مستر محمد ابراهيم - مراجعة نهائية كل المواد 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=_FR_TAy-yTUzgHzm&amp;list=PLYGJU1U6eacNXYy0fQOb_Kt_FhX0IuhAz",
  },
  {
    video_title: "ميس سلوي حامد - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=-Y82siEKdzBoLIhW&amp;list=PLIGfCOmnXRytVjiOWJMvFWdzgP5NprY6M",
  },
];

let g4_t1_math_ar_fullvideo_elements = "";
g4_t1_math_ar_fullvideo.forEach(function (item) {
  g4_t1_math_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_math_ar_fullvideo").innerHTML +=
  g4_t1_math_ar_fullvideo_elements;
//-------------------

var g4_t1_math_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : ",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : خوارزمية القسمة و العامل المشترك الأكبر و المضاعف المشترك الأصغر
      //الدروس
      //1 الدرس -1- استخدام القسمة المطولة في العالم من حولنا
      {
        chapter_id: "1-1",
        chapter_name: " ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: " ",
            videos: [
              {
                video_id: "1-1-1-1",
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

draw_lessons(g4_t1_math_ar_lessons, "g4_t1_math_ar_lessons");
