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
    video_link:
      "https://www.youtube.com/embed/videoseries?si=L6kRciMTOVaQWi_R&amp;list=PLyoCzR3ujHw-cyP4vq0Udj9b60MIHDjK8",
  },
  {
    video_title: "الدكتور وائل - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=mlYUT1I6wNNfcb3b&amp;list=PL2txTOcvKlzVjGCU-WzO9CoF-K3l6isDA",
  },
  {
    video_title: " قناة الرؤي التعليمية - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=0UARgj0z-kJfQkIj&amp;list=PLYlofddpyw4A6y8E3-KN5rmx04uJ5OeGB",
  },
  {
    video_title: "التأسيس السليم - شرح 2022",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=6lh36iM3OQJXaGCH&amp;list=PLSceolq2C1zO8aM03LvVScFTeJ1gf31dc",
  },
  {
    video_title: "قناة مدرستنا - شرح 2022",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=czh3xqIosYDwVri1&amp;list=PLZpdfXc71P-R9F1chYPncNnEfoiwRi2lV",
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
    section_name: "المحور الأول:  اكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : وطني
      //1 نص الاستماع : حوار مع د.مجدي يعقوب
      //2 النص الشعري : اسلمي يا مصر
      //3 انواع الاسم و الفعل , الجملة الاسمية و الفعلية
      //4 النص المعلوماتي : موطني
      //5 علامات الاسم : المفرد - المثنى - الجمع : المذكر - المؤنث
      //6 الكتابة السردية : وصف حدث بطريقة سردية
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الاول : وطني",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "نص الاستماع : حوار مع د.مجدي يعقوب",
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
            lesson_name: "النص الشعري : اسلمي يا مصر",
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
            lesson_name: "انواع الاسم و الفعل , الجملة الاسمية و الفعلية",
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
            lesson_name: "النص المعلوماتي : موطني",
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
            lesson_name:
              "علامات الاسم : المفرد - المثنى - الجمع : المذكر - المؤنث",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-1-6",
            lesson_name: "الكتابة السردية : وصف حدث بطريقة سردية",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : فكري وابتكاراتي
      //1 نص الاستماع : خبر عن المعلم المصري القديم
      //2 قصة : مريم ومريم
      //3 المثني
      //4 النص المعلوماتي : كرة السرعة
      //5 انواع الجموع : المذكر السالم - المؤنث السالم - التكسير
      //6 الكتابة السردية : كتابة نص وصفي
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني : فكري وابتكاراتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "نص الاستماع : خبر عن المعلم المصري القديم",
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
            lesson_name: "قصة : مريم ومريم",
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
            lesson_name: "المثني",
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
            lesson_name: "النص المعلوماتي : كرة السرعة",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name:
              "انواع الجموع : المذكر السالم - المؤنث السالم - التكسير",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name: "الكتابة السردية : كتابة نص وصفي",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : حقوقي وواجباتي
      //1 نص الاستماع : رسالة من آبائنا و أمهاتنا
      //2 قصة : رد الجميل
      //3 ضمائر المتكلم
      //4 ضمائر الغائب
      //5 ضمائر المخاطب
      //6 النص المعلوماتي : وثيقة حقوق الطفل
      //7 ركنا الجملة الاسمية : المبتدأ و الخبر
      //8 ضبط المبتدأ و الخبر
      //9 الكتابة السردية : كتابة نص معلوماتي
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث : حقوقي وواجباتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "نص الاستماع : رسالة من آبائنا و أمهاتنا",
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
            lesson_name: "قصة : رد الجميل",
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
            lesson_name: "ضمائر المتكلم",
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
            lesson_name: "ضمائر الغائب",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "ضمائر المخاطب",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name: "النص المعلوماتي : وثيقة حقوق الطفل",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-3-7",
            lesson_name: "ركنا الجملة الاسمية : المبتدأ و الخبر",
            videos: [
              {
                video_id: "1-3-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-3-8",
            lesson_name: "ضبط المبتدأ و الخبر",
            videos: [
              {
                video_id: "1-3-8-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 9
          {
            lesson_id: "1-3-9",
            lesson_name: "الكتابة السردية : كتابة نص معلوماتي",
            videos: [
              {
                video_id: "1-3-9-1",
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
    section_name: "المحور الثاني:  علاقتي مع الآخرين ",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : انا لست وحدي
      //1 قصة استماع : الفصل الاول - قرار خطأ
      //2 النص الشعري : للجميع
      //3 المبتدأ و الخبر - للمفرد
      //4 المبتدأ و الخبر - جمع المؤنث السالم
      //5 النص المعلوماتي :  طائر النورس
      //6 المبتدأ و الخبر -  المثنى
      //7 الكتابة السردية : كتابة رسالة
      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الاول : انا لست وحدي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "قصة استماع : الفصل الاول - قرار خطأ",
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
            lesson_name: "النص الشعري : للجميع",
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
            lesson_name: "المبتدأ و الخبر - للمفرد",
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
            lesson_name: "المبتدأ و الخبر - جمع المؤنث السالم",
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
            lesson_name: "النص المعلوماتي :  طائر النورس",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "المبتدأ و الخبر -  المثنى",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-1-7",
            lesson_name: "الكتابة السردية : كتابة رسالة",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : انا مؤثر
      //1 قصة استماع : الفصل الثاني - من السارق؟
      //2 قصة : يوم لا ينسى
      //3 المبتدأ و الخبر - جمع المذكر السالم
      //4 النص المعلوماتي :  الطباعة
      //5 الفاعل
      //6 رفع الفاعل
      //7 الكتابة السردية : كتابة سيرة غيرية
      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني : انا مؤثر",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "قصة استماع : الفصل الثاني - من السارق؟",
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
            lesson_name: "قصة : يوم لا ينسى",
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
            lesson_name: "المبتدأ و الخبر - جمع المذكر السالم",
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
            lesson_name: "النص المعلوماتي :  الطباعة",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name: "الفاعل",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-2-6",
            lesson_name: "رفع الفاعل",
            videos: [
              {
                video_id: "2-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-2-7",
            lesson_name: "الكتابة السردية : كتابة سيرة غيرية",
            videos: [
              {
                video_id: "2-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : انا اربح .. انت تربح
      //1 قصة استماع : الفصل الثالث - حل وسط
      //2 قصة : كلنا رابحون
      //3 رفع الفاعل : المثنى
      //4 رفع الفاعل : جمع المذكر السالم
      //5 النص المعلوماتي :   الاسرة المنتجة
      //6 الجملة الاسمية - الجملة الفعلية
      //7 الكتابة السردية :  كتابة نص إقناعي
      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث : انا اربح .. انت تربح",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة استماع : الفصل الثالث - حل وسط",
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
            lesson_name: "قصة : كلنا رابحون",
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
            lesson_name: "رفع الفاعل : المثنى",
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
            lesson_name: "رفع الفاعل : جمع المذكر السالم",
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
            lesson_name: "النص المعلوماتي :   الاسرة المنتجة",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-3-6",
            lesson_name: "الجملة الاسمية - الجملة الفعلية",
            videos: [
              {
                video_id: "2-3-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-3-7",
            lesson_name: "الكتابة السردية :  كتابة نص إقناعي",
            videos: [
              {
                video_id: "2-3-7-1",
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
