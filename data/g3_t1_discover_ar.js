import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g3_t1_discover_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1PYCMKgMLWwpZ6WnEvMYCqIgHxonp9_Yq/view?usp=drive_link",
  },
];

let g3_t1_discover_ar_books_elements = "";
g3_t1_discover_ar_books.forEach(function (item) {
  g3_t1_discover_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_discover_ar_books").innerHTML +=
  g3_t1_discover_ar_books_elements;
// full-video -----------
var g3_t1_discover_ar_fullvideo = [
  {
    video_title: "منصات تعليمية - شرح 2022",
    video_link: "https://www.youtube.com/embed/videoseries?si=29awdAWBdJzj_TFc&amp;list=PLUOeiPA5Mo5cxLis-J3HdQCbLSHLrr645",
  },
  {
    video_title: "قناة الضحي تعليمية - شرح 2020",
    video_link: "https://www.youtube.com/embed/videoseries?si=637evQVNVQF2gdcG&amp;list=PLWA6twJ9Qf7CmjUbnnjmttAM7kJM-R6B0",
  },
];

let g3_t1_discover_ar_fullvideo_elements = "";
g3_t1_discover_ar_fullvideo.forEach(function (item) {
  g3_t1_discover_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g3_t1_discover_ar_fullvideo").innerHTML +=
  g3_t1_discover_ar_fullvideo_elements;
//-------------------
var g3_t1_discover_ar_lessons = [
  //المحور 1
  //من أكون (الحياة الصحية)
  {
    section_id: "1",
    section_name: "من أكون  ( الحياة الصحية )",
    chapters: [
      //الموضوع 1
      // الفصل الاول : تنمية مهاراتي
      //الدروس
      //1 المهارات الحياتية
      //2 استخدام مهارات التفكير الناقد
      //3 ماذا أفعل إذا ... ؟
      {
        chapter_id: "1-1",
        chapter_name: "الفصل الاول : تنمية مهاراتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "المهارات الحياتية",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "منصات تعليمية",
                video_link:
                  "https://www.youtube.com/embed/Om0zrJdvWBM?si=BkwO-JedrbbBPiAv",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "استخدام مهارات التفكير الناقد",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "منصات تعليمية",
                video_link:
                  "https://www.youtube.com/embed/-QBoeTokDTE?si=FqngKBgoqqRo0y1R",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "ماذا أفعل إذا ... ؟",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "منصات تعليمية",
                video_link:
                  "https://www.youtube.com/embed/hpknfjl27-E?si=KmStnf0tArE_zcsh",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الفصل الثاني :  الحفاظ علي صحة الحسم
      //الدروس
      //1 اختيارات حسام
      //2 عادات صحية
      //3 الجلد و القلب
      //4 ماذا يحدث للطعام الذي نأكله
      {
        chapter_id: "1-2",
        chapter_name: "الفصل الثاني :  الحفاظ علي صحة الحسم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "اختيارات حسام",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: " ",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "عادات صحية",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: " ",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "الجلد و القلب",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: " ",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "ماذا يحدث للطعام الذي نأكله",
            videos: [
              {
                video_id: "1-2-4-1",
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

draw_lessons(g3_t1_discover_ar_lessons, "g3_t1_discover_ar_lessons");
