import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_islamic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_islamic_ar_books_elements = "";
g4_t1_islamic_ar_books.forEach(function (item) {
  g4_t1_islamic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_islamic_ar_books").innerHTML +=
  g4_t1_islamic_ar_books_elements;

// full-video -----------
var g4_t1_islamic_ar_fullvideo = [
  {
    video_title: "حسام ابو انس - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=yXFpXkE4PgceYqG2&amp;list=PLvZB_eXVOBDAJTtcfbolOA0QmdGzTQqUn",
  },
];

let g4_t1_islamic_ar_fullvideo_elements = "";
g4_t1_islamic_ar_fullvideo.forEach(function (item) {
  g4_t1_islamic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_islamic_ar_fullvideo").innerHTML +=
  g4_t1_islamic_ar_fullvideo_elements;
//-------------------

var g4_t1_islamic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: " ",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الأول : تكريم الله - تعالى- للإنسان

      {
        chapter_id: "1-1",
        chapter_name: " ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الأول : ",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: " ",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
draw_lessons(g4_t1_islamic_ar_lessons, "g4_t1_islamic_ar_lessons");
