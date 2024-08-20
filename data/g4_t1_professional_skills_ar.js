import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_professional_skills_ar_books = [
  // {
  //   title: "سلاح التلميذ - الكتاب كامل",
  //   link: "",
  // },
  {
    title: "مراجعة المتميز علي مقررات اكتوبر - شرح + بنك اسئلة 2023",
    link: "https://t.me/ELMotamyezSchool/11087",
  },
  {
    title: "مراجعة المتميز علي مقررات نوفمبر - شرح + بنك اسئلة 2023",
    link: "https://t.me/ELMotamyezSchool/11121",
  },
  {
    title: "مراجعة المتميز بنك اسئلة علي مقرر الفصل الدراسي الاول بالكامل 2023",
    link: "https://t.me/ELMotamyezSchool/11187",
  },
];

let g4_t1_professional_skills_ar_books_elements = "";
g4_t1_professional_skills_ar_books.forEach(function (item) {
  g4_t1_professional_skills_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_professional_skills_ar_books").innerHTML +=
  g4_t1_professional_skills_ar_books_elements;

// full-video -----------
var g4_t1_professional_skills_ar_fullvideo = [
  {
    video_title: "مستر ابراهيم علي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=d-iAnGFlD_lNbXz1&amp;list=PL40k2ZQGp-mTUpS6NaakrDAEh_yKYVTeJ",
  },
  {
    video_title: "مستر محمد شمس - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=tqMEFwOBsUG1Oa8e&amp;list=PL5FrCRc0siNE3jk2dM3FxRa8UrzzH8nTo",
  },
  {
    video_title: "ميس هالة النجار - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=_8q-W_XI6P-u_Kuz&amp;list=PLI19jafvRlSDlfD7bKMiKucW2prLy3ond",
  },
  {
    video_title: "منصات تعليمية - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=syMuS-pcLLeZUjwL&amp;list=PLUOeiPA5Mo5eAajXVFdzgpm0Yqs4BusM3",
  },

];

let g4_t1_professional_skills_ar_fullvideo_elements = "";
g4_t1_professional_skills_ar_fullvideo.forEach(function (item) {
  g4_t1_professional_skills_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_professional_skills_ar_fullvideo").innerHTML +=
  g4_t1_professional_skills_ar_fullvideo_elements;
//-------------------

var g4_t1_professional_skills_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : ال",
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

draw_lessons(g4_t1_professional_skills_ar_lessons, "g4_t1_professional_skills_ar_lessons");
