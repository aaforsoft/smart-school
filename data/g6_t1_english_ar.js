import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g6_t1_english_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g6_t1_english_ar_books_elements = "";
g6_t1_english_ar_books.forEach(function (item) {
  g6_t1_english_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_english_ar_books").innerHTML +=
  g6_t1_english_ar_books_elements;

// full-video -----------
var g6_t1_english_ar_fullvideo = [
  {
    video_title: "مستر انجليزي - شرح 2025",
    video_link: "https://www.youtube.com/embed/videoseries?si=_qMS7-UZpFuITY2m&amp;list=PLoADbtXeHbXV-8tOKXDVNgRakXGNMqxjt",
  },
  {
    video_title: "مستر انجليزي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=hoTUQvskRVA54K8W&amp;list=PLoADbtXeHbXUIJ1BKZFGwyufF8XJ8rtSE",
  },
  {
    video_title: "مستر سيد - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=sARSN0WrC5hIPLlU&amp;list=PLpybSqhnKfzYDTamAbisvmBEhvBsbhjJg",
  },
  {
    video_title: "مستر اشرف نور الدين - مراجعة المعاصر 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=AHczJS_M68fPSZG3&amp;list=PL1FM6pbaqA-QgAbMnqyvMZpF1MBvyF5UZ",
  },
];

let g6_t1_english_ar_fullvideo_elements = "";
g6_t1_english_ar_fullvideo.forEach(function (item) {
  g6_t1_english_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_english_ar_fullvideo").innerHTML +=
  g6_t1_english_ar_fullvideo_elements;
//-------------------

var g6_t1_english_ar_lessons = [
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

draw_lessons(g6_t1_english_ar_lessons, "g6_t1_english_ar_lessons");
