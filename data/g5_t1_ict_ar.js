import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_ict_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1T573CFYZAh-ldCnmK6ClgA9TcYE9Fnjx/view?usp=drive_link",
  },
];

let g5_t1_ict_ar_books_elements = "";
g5_t1_ict_ar_books.forEach(function (item) {
  g5_t1_ict_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_ict_ar_books").innerHTML +=
  g5_t1_ict_ar_books_elements;

var g5_t1_ict_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول",
    chapters: [
      //الموضوع 1
      // دور تكنولوجيا المعلومات والاتصالات في حياتنا
      //1 الدرس الأول: المستكشف النشط
      //2 الدرس الثاني: الأدوات الملحقة بالكمبيوتر
      //3 الدرس الثالث: الشبكات Networks
      //4 الدرس الرابع: أدوات التواصل الرقمي
      //5 الدرس الخامس: مشكلات الاتصال بشبكة الإنترنت وكيفية حلها
      //6 الدرس السادس: إدارة الملفات الرقمية
      //7 الدرس السابع: استراتيجيات البحث عن المعلومات
      //8 الدرس الثامن : مشاركة المعلومات
      {
        chapter_id: "1-1",
        chapter_name: "دور تكنولوجيا المعلومات والاتصالات في حياتنا",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الأول: المستكشف النشط",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/s0B0m0gdjSk?si=-repCIznL2cnaoCR",
              },
              {
                video_id: "1-1-1-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/AJKVoj21mQo?si=Mky4Ghc9YLbipkk2",
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
            lesson_name: "الدرس الثاني: الأدوات الملحقة بالكمبيوتر",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/3nyZ4rpt3Wo?si=nni0D0UNpiFhNRJ9",
              },
              {
                video_id: "1-1-2-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/AVXAyogRccQ?si=BwhIPnVDRYT3Kpbh",
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
            lesson_name: "الدرس الثالث: الشبكات Networks",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/Ba9kMtgBMYs?si=XG04WUOG3FpDKDUs",
              },
              {
                video_id: "1-1-3-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/Za61EMCka9c?si=9KXnSKkb_ngdQD3q",
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
            lesson_name: "الدرس الرابع: أدوات التواصل الرقمي",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/PJlaK1RNf3E?si=t9vcC2NCTvwjmQx9",
              },
              {
                video_id: "1-1-4-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/0sCATb_JRlk?si=xc1Cb7zPT7RnRbvX",
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
            lesson_name:
              "الدرس الخامس: مشكلات الاتصال بشبكة الإنترنت وكيفية حلها",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/JMTl9ZXwkrA?si=pLTRr-clLyhHNL1r",
              },
              {
                video_id: "1-1-5-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/YRgXkqLJuQk?si=fKEEkI-FTdbyUHOD",
              },
              {
                video_id: "1-1-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-1-6",
            lesson_name: "الدرس السادس: إدارة الملفات الرقمية",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/oAv0moYZbG0?si=6oZ0yLRK7T2iqij6",
              },
              {
                video_id: "1-1-6-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/fB_lQwanU8k?si=fH8eQy1wyySl8q8g",
              },
              {
                video_id: "1-1-6-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-1-7",
            lesson_name: "الدرس السابع: استراتيجيات البحث عن المعلومات",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/Oy23ErJBwuA?si=gnmxjL9vX2RjGqP8",
              },
              {
                video_id: "1-1-7-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/ckEfODkqK0Q?si=SWaRDtkUAzPlBK7k",
              },
              {
                video_id: "1-1-7-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-1-8",
            lesson_name: "الدرس الثامن : مشاركة المعلومات",
            videos: [
              {
                video_id: "1-1-8-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/lQdf6_DR2bg?si=YfCDWTrAcQH5Ovl5",
              },
              {
                video_id: "1-1-8-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/hAUKnQ3hceI?si=j65hZciiMkdu6fjX",
              },
              {
                video_id: "1-1-8-3",
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
    section_name: "المحور الثاني",
    chapters: [
      //الموضوع 1
      // احتياطات الامن والسلامة الرقمية
      //1 الدرس الأول: المستكشف النشط
      //2 الدرس الثاني : حماية أنفسنا ومعلوماتنا
      //3 الدرس الثالث : سرية كلمة المرور
      //4 الدرس الرابع : كيفية التعامل مع المواقع الإلكترونية المزيفة
      //5 الدرس الخامس: حقوق الملكية الفكرية
      //6 الدرس السادس: استخدام المصادر الرقمية
      //7 الدرس السابع: عمليات البحث المتقدمة
      //8 الدرس الثامن: توثيق المعلومات بطريقة صحيحة
      {
        chapter_id: "2-1",
        chapter_name: "احتياطات الامن والسلامة الرقمية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الأول: المستكشف النشط",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/z_NAnx1Tg7o?si=S1tKHxADERemN6Kz",
              },
              {
                video_id: "2-1-1-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/8q1rHnq1yVg?si=VdHEkakTGCD3RBnh",
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
            lesson_name: "الدرس الثاني : حماية أنفسنا ومعلوماتنا",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/e2ogKAuXpVw?si=XTfkCkM2-CJQU-Rn",
              },
              {
                video_id: "2-1-2-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/BIFhLQbAGgQ?si=Thmiw2Ps5wWn3pVd",
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
            lesson_name: "الدرس الثالث : سرية كلمة المرور",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/8Eyd7bfB_Es?si=sSZ9r7NFqwiF1FH4",
              },
              {
                video_id: "2-1-3-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/7NxeXuqqsLE?si=p8wuaJlAKB6dcklv",
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
            lesson_name:
              "الدرس الرابع : كيفية التعامل مع المواقع الإلكترونية المزيفة",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/GTd9eca-DYA?si=4xSWOkpbGpEG36yp",
              },
              {
                video_id: "2-1-4-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/eRyST5ywQEc?si=Nso4I-ruNcAXFkIE",
              },
              {
                video_id: "2-1-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "الدرس الخامس: حقوق الملكية الفكرية",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/pYKhVeLklxs?si=UzaaH_8tOBVmfZPm",
              },
              {
                video_id: "2-1-5-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/WV-5spNY6xU?si=iiaPwr0xdnUY-Z2Z",
              },
              {
                video_id: "2-1-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "الدرس السادس: استخدام المصادر الرقمية",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/XIFpVmfHnCg?si=phiSSK17gIfpV3LC",
              },
              {
                video_id: "2-1-6-2",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/kwEupV7p4Yc?si=kiOccn-f2s0o7SgB",
              },
              {
                video_id: "2-1-6-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-1-7",
            lesson_name: "الدرس السابع: عمليات البحث المتقدمة",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/YSXSMIsyLv8?si=4O2pkMVFNzXasa4H",
              },
              {
                video_id: "2-1-7-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "2-1-8",
            lesson_name: "الدرس الثامن: توثيق المعلومات بطريقة صحيحة",
            videos: [
              {
                video_id: "2-1-8-1",
                video_title: "EDU stars",
                video_link: "https://www.youtube.com/embed/vZGZxHlbNvY?si=OwkmW072YfxJXiVc",
              },
              {
                video_id: "2-1-8-2",
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

draw_lessons(g5_t1_ict_ar_lessons, "g5_t1_ict_ar_lessons");
