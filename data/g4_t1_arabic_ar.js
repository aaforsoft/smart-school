import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_arabic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "",
  },
];

let g4_t1_arabic_ar_books_elements = "";
g4_t1_arabic_ar_books.forEach(function (item) {
  g4_t1_arabic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_arabic_ar_books").innerHTML +=
  g4_t1_arabic_ar_books_elements;

// full-video -----------
var g4_t1_arabic_ar_fullvideo = [
  {
    video_title: "قناة ياسين التعليمية - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=L6kRciMTOVaQWi_R&amp;list=PLyoCzR3ujHw-cyP4vq0Udj9b60MIHDjK8",
  },
  {
    video_title: "الدكتور وائل - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=mlYUT1I6wNNfcb3b&amp;list=PL2txTOcvKlzVjGCU-WzO9CoF-K3l6isDA",
  },
  {
    video_title: " قناة الرؤي التعليمية - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=0UARgj0z-kJfQkIj&amp;list=PLYlofddpyw4A6y8E3-KN5rmx04uJ5OeGB",
  },
  {
    video_title: "التأسيس السليم - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=6lh36iM3OQJXaGCH&amp;list=PLSceolq2C1zO8aM03LvVScFTeJ1gf31dc",
  },
  {
    video_title: "قناة مدرستنا - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=czh3xqIosYDwVri1&amp;list=PLZpdfXc71P-R9F1chYPncNnEfoiwRi2lV",
  },
];

let g4_t1_arabic_ar_fullvideo_elements = "";
g4_t1_arabic_ar_fullvideo.forEach(function (item) {
  g4_t1_arabic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_arabic_ar_fullvideo").innerHTML +=
  g4_t1_arabic_ar_fullvideo_elements;
//-------------------

var g4_t1_arabic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول:  ",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : عقلي
      //1 نص الاستماع : كن و لاتكن

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

draw_lessons(g4_t1_arabic_ar_lessons, "g4_t1_arabic_ar_lessons");
