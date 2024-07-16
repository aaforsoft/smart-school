import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_science_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_science_ar_books_elements = "";
g4_t1_science_ar_books.forEach(function (item) {
  g4_t1_science_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_science_ar_books").innerHTML +=
  g4_t1_science_ar_books_elements;

// full-video -----------
var g4_t1_science_ar_fullvideo = [
  {
    video_title: "مستر محمد ابراهيم - شرح 2025",
    video_link: "https://www.youtube.com/embed/videoseries?si=eghFDheUfJU0vd4W&amp;list=PLYGJU1U6eacMJ3V3pReFJjTHjza3pM07T",
  },
  {
    video_title: "مستر محمد ابراهيم - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=YDQ5npJG3s-xNamc&amp;list=PLYGJU1U6eacNC0K-2mwmVfvPcTThnUW_2",
  },
  {
    video_title: "مستر ابراهيم السيد - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=Ad7o9JOAhYSpb2NV&amp;list=PLdNdsGStBEyDa7j24j9Z7eslT590S6H_W",
  },
  {
    video_title: "مستر عمر ادريس - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=9KH4-UOIxP8Q7hKt&amp;list=PLh7QybEarwmLGzlhzBbCyNxrvqtoanDpJ",
  },
  {
    video_title: "مستر  مجدي شنودة - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=xYiqds2q-EQvPf-A&amp;list=PLbqcG4v9ulx_t0PDP7jajrnNOGmCkCTWC",
  },
  {
    video_title: "مستر محمد ابراهيم - مراجعة كل المواد شهر اكتوبر 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=PkdPq9JOEZphtXsD&amp;list=PLYGJU1U6eacPb6iCtTA16U15CRgQaQuHc",
  },
  {
    video_title: "مستر محمد ابراهيم - مراجعة نهائية كل المواد 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=KqKvrCHC9783dd2E&amp;list=PLYGJU1U6eacNXYy0fQOb_Kt_FhX0IuhAz",
  },

];

let g4_t1_science_ar_fullvideo_elements = "";
g4_t1_science_ar_fullvideo.forEach(function (item) {
  g4_t1_science_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_science_ar_fullvideo").innerHTML +=
  g4_t1_science_ar_fullvideo_elements;
//-------------------

var g4_t1_science_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : و ",
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

draw_lessons(g4_t1_science_ar_lessons, "g4_t1_science_ar_lessons");
