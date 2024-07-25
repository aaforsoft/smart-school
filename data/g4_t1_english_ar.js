import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_english_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_english_ar_books_elements = "";
g4_t1_english_ar_books.forEach(function (item) {
  g4_t1_english_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_english_ar_books").innerHTML +=
  g4_t1_english_ar_books_elements;

// full-video -----------
var g4_t1_english_ar_fullvideo = [
  {
    video_title: "مستر انجليزي - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=e4c3ZT5HgrYAKa9q&amp;list=PLoADbtXeHbXVMThz0BPy1KocaFlcOPEpk",
  },
  {
    video_title: "مستر سيد - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=SShRK6qKknsB7_-M&amp;list=PLpybSqhnKfzYezleUvKF3H1_ZJZjCrO_P",
  },
  {
    video_title: "مستر اشرف نور الدين - مراجعة نهائية 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=h1Nh0qN5bonPN3hi&amp;list=PL1FM6pbaqA-QVlnabKnVTlH4PydxhQzEJ",
  },
];

let g4_t1_english_ar_fullvideo_elements = "";
g4_t1_english_ar_fullvideo.forEach(function (item) {
  g4_t1_english_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_english_ar_fullvideo").innerHTML +=
  g4_t1_english_ar_fullvideo_elements;
//-------------------

var g4_t1_english_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : 1",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : خوارزمية القسمة و العامل المشترك الأكبر و المضاعف المشترك الأصغر
      //الدروس
      //1 الدرس -1- 11

      {
        chapter_id: "1-1",
        chapter_name: "",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "",
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

draw_lessons(g4_t1_english_ar_lessons, "g4_t1_english_ar_lessons");
