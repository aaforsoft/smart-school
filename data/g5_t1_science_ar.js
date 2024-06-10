import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_science_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1FbR9pOErwKpUd46GYl0XdiabmhsKIfV1/view?usp=drive_link",
  },
];

let g5_t1_science_ar_books_elements = "";
g5_t1_science_ar_books.forEach(function (item) {
  g5_t1_science_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_science_ar_books").innerHTML +=
  g5_t1_science_ar_books_elements;

var g5_t1_science_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول: الانظمة",
    chapters: [
      //الموضوع 1
      // المفهوم الاول: احتياجات النبات
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      //5 الدرس الخامس
      {
        chapter_id: "1-1",
        chapter_name: "المفهوم الاول: احتياجات النبات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "الدرس الخامس",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني: انتقال الطاقة في النظام البيئي
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      {
        chapter_id: "1-2",
        chapter_name: "المفهوم الثاني: انتقال الطاقة في النظام البيئي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // المفهوم الثالث: التغيرات في الشبكات الغذائية
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      {
        chapter_id: "1-3",
        chapter_name: "المفهوم الثالث: التغيرات في الشبكات الغذائية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //المحور 2
  {
    section_id: "2",
    section_name: "المحور الثاني: المادة والطاقة",
    chapters: [
      //الموضوع 1
      // المفهوم الاول: المادة في العلم من حولنا
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      //5 الدرس الخامس
      {
        chapter_id: "2-1",
        chapter_name: "المفهوم الاول: المادة في العلم من حولنا",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "الدرس الخامس",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني: وصف وقياس المادة
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      {
        chapter_id: "2-2",
        chapter_name: "المفهوم الثاني: وصف وقياس المادة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // المفهوم الثالث: مقارنة التغيرات في المادة
      //1 الدرس الاول
      //2 الدرس الثاني
      //3 الدرس الثالث
      //4 الدرس الرابع
      //5 الدرس الخامس
      {
        chapter_id: "2-3",
        chapter_name: "المفهوم الثالث: مقارنة التغيرات في المادة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "الدرس الاول",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "الدرس الثاني",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name: "الدرس الثالث",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "الدرس الرابع",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-3-5",
            lesson_name: "الدرس الخامس",
            videos: [
              {
                video_id: "2-3-5-1",
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

draw_lessons(g5_t1_science_ar_lessons, "g5_t1_science_ar_lessons");
