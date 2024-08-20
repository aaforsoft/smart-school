import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g6_t1_ict_ar_books = [
  // {
  //   title: "سلاح التلميذ - الكتاب كامل",
  //   link: "",
  // },
  {
    title: " مراجعة المتميز علي مقررات اكتوبر ، شرح + بنك اسئلة - 2023",
    link: "https://t.me/ELMotamyezSchool/11085",
  },
  {
    title: " مراجعة المتميز علي مقررات نوفمبر ، شرح + بنك اسئلة - 2023",
    link: "https://t.me/ELMotamyezSchool/11126",
  },
  {
    title: " مهام آدائية - 2023",
    link: "https://t.me/ELMotamyezSchool/11164",
  },
  {
    title: " مراجعة المتميز بنك اسئلة علي مقرر الفصل الدراسي الاول بالكامل- 2023",
    link: "https://t.me/ELMotamyezSchool/11188",
  },
];

let g6_t1_ict_ar_books_elements = "";
g6_t1_ict_ar_books.forEach(function (item) {
  g6_t1_ict_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_ict_ar_books").innerHTML +=
  g6_t1_ict_ar_books_elements;

// full-video -----------
var g6_t1_ict_ar_fullvideo = [
  {
    video_title: "مستر ابراهيم علي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=i7KidQ-Zk-vaE9Dm&amp;list=PL40k2ZQGp-mRrcwqyJnPcstoaKT7CX_A0",
  },
  {
    video_title: "ميس هالة النجار - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=8AGGcqrJu-wybSID&amp;list=PLI19jafvRlSDsFggfjR-OX55XV4AVYJbM",
  },


];

let g6_t1_ict_ar_fullvideo_elements = "";
g6_t1_ict_ar_fullvideo.forEach(function (item) {
  g6_t1_ict_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_ict_ar_fullvideo").innerHTML +=
  g6_t1_ict_ar_fullvideo_elements;
//-------------------

var g6_t1_ict_ar_lessons = [
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

draw_lessons(g6_t1_ict_ar_lessons, "g6_t1_ict_ar_lessons");
