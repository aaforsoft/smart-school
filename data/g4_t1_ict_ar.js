import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_ict_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_ict_ar_books_elements = "";
g4_t1_ict_ar_books.forEach(function (item) {
  g4_t1_ict_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_ict_ar_books").innerHTML +=
  g4_t1_ict_ar_books_elements;

// full-video -----------
var g4_t1_ict_ar_fullvideo = [

  {
    video_title: "ميس هالة النجار - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=Ep5JXQz-Oo6mo43M&amp;list=PLI19jafvRlSBSNk9yUXs5-ZZv5CHezhxY",
  },
  {
    video_title: "مستر ابراهيم علي - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=RUaweyg4i697vqa2&amp;list=PL40k2ZQGp-mSUk3El9iaeoH99K-XDNIfb",
  },
  {
    video_title: "EDU stars - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=0W6QSDRkRFqgG6so&amp;list=PLFmIVdxfJdIUyd61INpBHjYqai6saUs_w",
  },
  {
    video_title: "مستر محمد حسن - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=ZaceyP1axBPCMF1N&amp;list=PLA6_l4eLIzvvzfKBoCgD8GyrCh5PH5sp5",
  },

];

let g4_t1_ict_ar_fullvideo_elements = "";
g4_t1_ict_ar_fullvideo.forEach(function (item) {
  g4_t1_ict_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_ict_ar_fullvideo").innerHTML +=
  g4_t1_ict_ar_fullvideo_elements;
//-------------------

var g4_t1_ict_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : اا",
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

draw_lessons(g4_t1_ict_ar_lessons, "g4_t1_ict_ar_lessons");
