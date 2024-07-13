import { draw_sub_books_list, draw_lessons,draw_fullvideo_list } from "./fun.js";
var g6_t1_islamic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1qA5ZnqdHBCcGqAEnKe4L8MWpfA_z5se8/view?usp=drive_link",
  },
];

let g6_t1_islamic_ar_books_elements = "";
g6_t1_islamic_ar_books.forEach(function (item) {
  g6_t1_islamic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_islamic_ar_books").innerHTML +=
  g6_t1_islamic_ar_books_elements;

// full-video -----------
var g6_t1_islamic_ar_fullvideo = [

  {
    video_title: "حسام ابو انس 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=53_BtP8yry3Njn_T&amp;list=PLvZB_eXVOBDAFUHr9EetCoJ-rEM8ku5w8",
  },
  {
    video_title: "مصطفي عبدة 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=t8LXvLQtjp9FFGgj&amp;list=PLNTk23wqJXf_VSpuFW8Z3jDdQ1p1-8Xqp",
  },
  {
    video_title: "مصطفي عبدة 2025",
    video_link: "https://www.youtube.com/embed/videoseries?si=dQZ9PRaTuckwk6ib&amp;list=PLNTk23wqJXf86oDliF-SbNCy_CSv_yV6c",
  },

];
//-------------------
let g6_t1_islamic_ar_fullvideo_elements = "";
g6_t1_islamic_ar_fullvideo.forEach(function (item) {
  g6_t1_islamic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_islamic_ar_fullvideo").innerHTML +=
  g6_t1_islamic_ar_fullvideo_elements;
//-------------------
var g6_t1_islamic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "اكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الأول : تكريم الله - تعالى- للإنسان
      //2 الدرس الثاني : أركان حياة المسلم
      //3 الدرس الثالث : اسما الله - تعالى - الرحمن الرحيم
      //4 الدرس الرابع : آيات من سورة الحشر
      //5 الدرس الخامس : أحكام الاستعاذة والبسملة
      {
        chapter_id: "1-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الأول : تكريم الله - تعالى- للإنسان",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/v1SxKXu5HFM?si=WN7I896OHnt0a8HY",
              },
              {
                video_id: "1-1-1-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/LVZKObL5ur8?si=Sj1mSrzCAF7RnqWt",
              },
              {
                video_id: "1-1-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس الثاني : أركان حياة المسلم",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/d7P2gCkxgtw?si=55AkOl3PiU_EU74Y",
              },
              {
                video_id: "1-1-2-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/z_OhH9oTP1o?si=fxLQ_9tWZHsapNqb",
              },
              {
                video_id: "1-1-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "الدرس الثالث : اسما الله - تعالى - الرحمن الرحيم",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/z7gcryQt714?si=QFZ4mx0TuCS8Mt35",
              },
              {
                video_id: "1-1-3-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/y7kf5EkshNc?si=4GrFYrMqneV1MT2g",
              },
              {
                video_id: "1-1-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "الدرس الرابع : آيات من سورة الحشر",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/4XLCwtEwNmE?si=7_Py-WwqVXopESfn",
              },
              {
                video_id: "1-1-4-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/AXY4lOltx34?si=Zx9e3aSIbKkau4tZ",
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
            lesson_name: "الدرس الخامس : أحكام الاستعاذة والبسملة",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/xiDGboiLOQE?si=REjuI7CChRO57rEs",
              },
              {
                video_id: "1-1-5-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/Ob3d0vPPf8E?si=I78B9ROM3G28LSqO",
              },
              {
                video_id: "1-1-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // السير و الشخصيات
      //الدروس
      //1 الدرس الأول : غزوة الأحزاب - الخندق
      //2 الدرس الثاني : تابع -- غزوة الأحزاب - الخندق
      //3 الدرس الثالث : الباحث عن الحقيقة سلمان الفارسي - رضي الله عنه
      //4 الدرس الرابع : قصة مريم - عليها السلام
      {
        chapter_id: "1-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس الأول : غزوة الأحزاب - الخندق",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/ifiiZMa3_fQ?si=SKVJgrbST89pagMw",
              },
              {
                video_id: "1-2-1-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/H0hPFl9hlBI?si=G0-aGJBdTEBiuvEu",
              },
              {
                video_id: "1-2-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "الدرس الثاني : تابع -- غزوة الأحزاب - الخندق",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/Z4vBU6-27Bc?si=CMn7WO7m0gq0PWpE",
              },
              {
                video_id: "1-2-2-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/joNtTQYvZXE?si=YOv5LepsHVCR0BwC",
              },
              {
                video_id: "1-2-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name:
              "الدرس الثالث : الباحث عن الحقيقة سلمان الفارسي - رضي الله عنه",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/VqVOuF5BC5Y?si=X4yEn1_rI4XzrkGw",
              },
              {
                video_id: "1-2-3-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/jpcdVTmCd-g?si=lU7ueiK0jzY1bvnA",
              },
              {
                video_id: "1-2-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "الدرس الرابع : قصة مريم - عليها السلام",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/eEbUb4QBdeU?si=nY0uWBKMixSMZlc0",
              },
              {
                video_id: "1-2-4-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/y6lS0qIoFqI?si=t5JjGvJhxxpnl82h",
              },
              {
                video_id: "1-2-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // العبادات
      //الدروس
      //1 الدرس الأول : أنواع العبادات
      //2 الدرس الثاني : العبادات القلبية
      //3 الدرس الثالث : آداب بر الوالدين
      {
        chapter_id: "1-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الأول : أنواع العبادات",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/FFttuudaWAw?si=hLWsTqOam8_9Ls5h",
              },
              {
                video_id: "1-3-1-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/Rd5UXyISw2U?si=NqYz7qhiBh_ZXaeU",
              },
              {
                video_id: "1-3-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "الدرس الثاني : العبادات القلبية",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/VwKFuPnYiEE?si=Qw03VxDh5PeCY6js",
              },
              {
                video_id: "1-3-2-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/FblcxvdTbv4?si=Z9ycvKCe_hWMCuc2",
              },
              {
                video_id: "1-3-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "الدرس الثالث : آداب بر الوالدين",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/kP2D0sB5uMI?si=X_pbg4MT01wB7c7N",
              },
              {
                video_id: "1-3-3-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/muyXO0CyguQ?si=v8AxbaSYno01b8Hu",
              },
              {
                video_id: "1-3-3-3",
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
    section_name: "علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الأول : إرسال الرسل - عليهم السلام
      //2 الدرس الثاني : رحلة الرسل - عليهم السلام - عبر التاريخ
      //3 الدرس الثالث : اسم الله - تعالى - العليم
      //4 الدرس الرابع : آيات من سورة البقرة
      //5 الدرس الخامس : أحكام الميم الساكنة
      {
        chapter_id: "2-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الأول : إرسال الرسل - عليهم السلام",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/g-OS2n-usqM?si=Ofvl0HwJtbeTdijA",
              },
              {
                video_id: "2-1-1-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/A9UD26zyH6Q?si=UY05-n-3Iw8LaPmP",
              },
              {
                video_id: "2-1-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name:
              "الدرس الثاني : رحلة الرسل - عليهم السلام - عبر التاريخ",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/CxUVObj4dAQ?si=SDktoqg1goZavmwF",
              },
              {
                video_id: "2-1-2-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/ebGEOAndceU?si=XD-U_wQ0ZfL2NZ8k",
              },
              {
                video_id: "2-1-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "الدرس الثالث : اسم الله - تعالى - العليم",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/5ccfRQWoXXg?si=-NE5KcCWS3xmNy7u",
              },
              {
                video_id: "2-1-3-2",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/XLx_ukfTlds?si=w7aNh0Tr4T_B5RKX",
              },
              {
                video_id: "2-1-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "الدرس الرابع : آيات من سورة البقرة",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/JXTCpUy98_c?si=sKcfqnPIjSoZBB_U",
              },
              {
                video_id: "2-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "الدرس الخامس : أحكام الميم الساكنة",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/NrPFVAm3qsQ?si=OxHgZU97VSoVMELB",
              },
              {
                video_id: "2-1-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // السير و الشخصيات
      //الدروس
      //1 الدرس الأول : صلح الحديبية
      //2 الدرس الثاني : تابع -- صلح الحديبية
      //3 الدرس الثالث : أم المؤمنين - أم سلمة - رضي الله عنها
      //4 الدرس الرابع : ميلاد عيسى - عليه السلام
      {
        chapter_id: "2-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس الأول : صلح الحديبية",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/0tOk5-SiaWY?si=VMQFhttPg6hrVTjs",
              },
              {
                video_id: "2-2-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "الدرس الثاني : تابع -- صلح الحديبية",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/bek7Jg5YbiI?si=B6qnDadl3C7N5Xy3",
              },
              {
                video_id: "2-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "الدرس الثالث : أم المؤمنين - أم سلمة - رضي الله عنها",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/FAQhHOCuuXM?si=Is5wCbP59vJ22RYw",
              },
              {
                video_id: "2-2-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "الدرس الرابع : ميلاد عيسى - عليه السلام",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/XkU74pW9AnU?si=dOIGmodx5tG5u6Mi",
              },
              {
                video_id: "2-2-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // العبادات
      //الدروس
      //1 الدرس الأول : العبادات القولية
      //2 الدرس الثاني : آداب الصحبة
      {
        chapter_id: "2-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "الدرس الأول : العبادات القولية",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/cvzzCe1ShBI?si=hR6GWj4CpGrzamEE",
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
            lesson_name: "الدرس الثاني : آداب الصحبة",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "مصطفي عبده",
                video_link: "https://www.youtube.com/embed/1L_rQXomNyQ?si=L2LTCDGufg-ViQOk",
              },
              {
                video_id: "2-3-2-2",
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
draw_lessons(g6_t1_islamic_ar_lessons, "g6_t1_islamic_ar_lessons");
