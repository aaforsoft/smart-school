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
            lesson_name: "الدرس الاول - نشاط 1 & 2 & 3",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/F3LGySvJGY0?si=nUy-ViN6bJQRAQOP",
              },
              {
                video_id: "1-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس الثاني - نشاط 4 & 5",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/dYFsbYaGsNg?si=3k6xGRomaiqljiHU",
              },
              {
                video_id: "1-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "الدرس الثالث - نشاط 6 & 7",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "مستر محمد ابراهيم6",
                video_link:
                  "https://www.youtube.com/embed/dYFsbYaGsNg?si=VabuumJ9vRHwsj9R&amp;start=904",
              },
              {
                video_id: "1-1-3-2",
                video_title: "مستر محمد ابراهيم7",
                video_link:
                  "https://www.youtube.com/embed/aFE4HJ6WZRk?si=SIOICliSfkEYAGzN",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "الدرس الرابع - نشاط 8 & 9 & 10",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "محمد ابراهيم 8",
                video_link:
                  "https://www.youtube.com/embed/aFE4HJ6WZRk?si=ZiVM1l6rSQdXhtiV&amp;start=230",
              },
              {
                video_id: "1-1-4-2",
                video_title: "محمد ابراهيم 9 & 10",
                video_link:
                  "https://www.youtube.com/embed/hFq4AQbH0r4?si=l5hweoDYxEGZueYq",
              },
              {
                video_id: "1-1-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "الدرس الخامس - نشاط 11 & 12",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "محمد ابراهيم 11 & 12",
                video_link:
                  "https://www.youtube.com/embed/hFq4AQbH0r4?si=pcMJLwv6QYdj89xA&amp;start=1291",
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
            lesson_name: "الدرس الاول - نشاط 1 & 2 & 3",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "محمد ابراهيم 1 & 2 & 3",
                video_link:
                  "https://www.youtube.com/embed/Ry2ctQO1oAs?si=IcK0MuV72XjJTeBL",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "الدرس الثاني - نشاط 4 & 5 & 6",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "محمد ابراهيم 4 & 5 & 6",
                video_link:
                  "https://www.youtube.com/embed/HzeRKY3hdUo?si=m3d5xndFXGMNWpZB",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "الدرس الثالث - نشاط 7 & 8 & 9",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "محمد ابراهيم 7 & 8 & 9",
                video_link:
                  "https://www.youtube.com/embed/6GjYM6pTjIU?si=5rqZGjlJsKmdFNCt",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "الدرس الرابع - نشاط 10 & 11",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "محمد ابراهيم 10 & 11",
                video_link:
                  "https://www.youtube.com/embed/KJaBC0Lw3JA?si=Sj7vIOQnAu9RnS5b",
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
            lesson_name: "الدرس الاول - نشاط 1 & 2 & 3",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "محمد ابراهيم 1 & 2 & 3",
                video_link:
                  "https://www.youtube.com/embed/Ig6XRUCAQ9w?si=C6hZq56fYOmeAYpK",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "الدرس الثاني - نشاط 4 & 5 & 6",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "محمد ابراهيم 4 & 5 & 6",
                video_link:
                  "https://www.youtube.com/embed/Rol9Yez5ojo?si=Lu5XnfiPUErj0QR1",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "الدرس الثالث - نشاط 7 & 8",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "محمد ابراهيم 7 & 8",
                video_link:
                  "https://www.youtube.com/embed/PvZz4xSq9sE?si=d1eMK4HKtuIeB7Hb",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "الدرس الرابع - نشاط 9 & 10",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "محمد ابراهيم 9 & 10",
                video_link:
                  "https://www.youtube.com/embed/uo7kkS2z7ho?si=EzFq6v6LzTbWsOE9",
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
            lesson_name: "الدرس الاول - نشاط 1 & 2",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "محمد ابراهيم 1 & 2",
                video_link:
                  "https://www.youtube.com/embed/NaRVl86EWss?si=IrWRt5Aw9VXYaglC",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "الدرس الثاني - نشاط 3 & 4",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "محمد ابراهيم 3 & 4",
                video_link:
                  "https://www.youtube.com/embed/NaRVl86EWss?si=IrWRt5Aw9VXYaglC&amp;start=827",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "الدرس الثالث - نشاط 5 & 6 & 7",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "محمد ابراهيم 5 & 6 & 7",
                video_link:
                  "https://www.youtube.com/embed/xElF0RlEvQI?si=0dkQhEgvljlTBzs-",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "الدرس الرابع - نشاط 8 & 9",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "محمد ابراهيم 8 & 9",
                video_link:
                  "https://www.youtube.com/embed/94SiBHE5LNc?si=5l5LycLqSPSjt6BG",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "الدرس الخامس - نشاط 10 & 11",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "محمد ابراهيم 10 & 11",
                video_link:
                  "https://www.youtube.com/embed/94SiBHE5LNc?si=geBT_fhIePKm5O70&amp;start=1102",
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
            lesson_name: "الدرس الاول - نشاط 1 & 2 & 3",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "محمد ابراهيم 1 & 2 & 3",
                video_link:
                  "https://www.youtube.com/embed/2_Ad91ABlL0?si=lkr-A_o2_Qd9OQuU",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "الدرس الثاني - نشاط 4",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "محمد ابراهيم 4",
                video_link:
                  "https://www.youtube.com/embed/AwVJjLjbopQ?si=zIia6xDo21Hj7aeT&amp;start=1267",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "الدرس الثالث - نشاط 5 & 6 & 7",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "محمد ابراهيم 5",
                video_link:
                  "https://www.youtube.com/embed/AwVJjLjbopQ?si=umSYH1e8QSGvyIZy&amp;start=1267",
              },
              {
                video_id: "2-2-3-2",
                video_title: "محمد ابراهيم 6 & 7",
                video_link:
                  "https://www.youtube.com/embed/CGQwqqKNtTM?si=vUoie7XSmYVNGmxL",
              },
              {
                video_id: "2-2-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "الدرس الرابع - نشاط 8 & 9 & 10",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "محمد ابراهيم 8",
                video_link:
                  "https://www.youtube.com/embed/CGQwqqKNtTM?si=Ho3W-RiOrh3-6D7m&amp;start=1438",
              },
              {
                video_id: "2-2-4-2",
                video_title: "محمد ابراهيم 9 & 10",
                video_link:
                  "https://www.youtube.com/embed/0-ZyfgKu79M?si=G_GN5Q5lMyDWwJO_",
              },
              {
                video_id: "2-2-4-3",
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
            lesson_name: "الدرس الاول - نشاط 1 & 2 & 3",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "محمد ابراهيم 1 & 2 & 3",
                video_link: "https://www.youtube.com/embed/Z6eeuAQHDME?si=WXejoyHkPT4HiIfV",
              },
              {
                video_id: "2-3-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "الدرس الثاني - نشاط 4 & 5",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "محمد ابراهيم 4 & 5",
                video_link: "https://www.youtube.com/embed/Z6eeuAQHDME?si=Gejkk5VEyKktn6Z0&amp;start=761",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name: "الدرس الثالث - نشاط 6 & 7",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "محمد ابراهيم 6 & 7",
                video_link: "https://www.youtube.com/embed/Whgj3nNyds4?si=Nccj4gH5w8mSGKfU",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "الدرس الرابع - نشاط 8 & 9 & 10",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "محمد ابراهيم 8",
                video_link: "https://www.youtube.com/embed/Whgj3nNyds4?si=bf8SDVTvvhCUbuvI&amp;start=1536",
              },
              {
                video_id: "2-3-4-2",
                video_title: "محمد ابراهيم 9 & 10",
                video_link: "https://www.youtube.com/embed/RWG0ggKI4zs?si=_yQrIsRiF3scROuL",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-3-5",
            lesson_name: "الدرس الخامس - نشاط 11 & 12",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "محمد ابراهيم 11",
                video_link: "https://www.youtube.com/embed/RWG0ggKI4zs?si=tNYEESgPUdRmewv9&amp;start=1656",
              },
              {
                video_id: "2-3-5-2",
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
