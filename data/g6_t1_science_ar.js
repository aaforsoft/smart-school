import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g6_t1_science_ar_books = [
  // {
  //   title: "سلاح التلميذ - الكتاب كامل",
  //   link: "",
  // },
  {
    title: "مذكرة المتميز في العلوم -  المحور الأول كاملًا  2023",
    link: "https://t.me/ELMotamyezSchool/11080",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات أكتوبر 2023",
    link: "https://t.me/ELMotamyezSchool/11099",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات نوفمبر 2023",
    link: "https://t.me/ELMotamyezSchool/11134",
  },
  {
    title: "مهام ادائية استرشادية",
    link: "https://t.me/ELMotamyezSchool/11166",
  },
  {
    title: "المتميز الشامل - بنك اسئلة علي مقرر الفصل الدراسي الاول بالكامل 2023",
    link: "https://t.me/ELMotamyezSchool/11191",
  },
];

let g6_t1_science_ar_books_elements = "";
g6_t1_science_ar_books.forEach(function (item) {
  g6_t1_science_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_science_ar_books").innerHTML +=
  g6_t1_science_ar_books_elements;

// full-video -----------
var g6_t1_science_ar_fullvideo = [
  {
    video_title: "مستر محمد ابراهيم - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=aomv-JDBuDRPR1mN&amp;list=PLYGJU1U6eacMNZ7DFGu9t9XS0uxmqvZu-",
  },
  {
    video_title: "مستر ابراهيم السيد - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=DIltaw_7m25HyN5a&amp;list=PLdNdsGStBEyCwXfhKytRFI93PxvBuENja",
  },
  {
    video_title: " مس اسماء - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=fGmg2JGaUwWL07yk&amp;list=PLfwlsr4TlP5g1XIcPpiC-gGnvnLd9PcNo",
  },

];

let g6_t1_science_ar_fullvideo_elements = "";
g6_t1_science_ar_fullvideo.forEach(function (item) {
  g6_t1_science_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_science_ar_fullvideo").innerHTML +=
  g6_t1_science_ar_fullvideo_elements;
//-------------------

var g6_t1_science_ar_lessons = [
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

draw_lessons(g6_t1_science_ar_lessons, "g6_t1_science_ar_lessons");
