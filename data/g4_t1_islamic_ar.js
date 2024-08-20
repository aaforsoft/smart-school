import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_islamic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل - 2024",
    link: "https://drive.google.com/file/d/1JphUFTMhS_BPJnq3yLu837dzTrgXTBs3/view?usp=drive_link",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات أكتوبر 2023",
    link: "https://t.me/ELMotamyezSchool/11083",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات نوفمبر 2023",
    link: "https://t.me/ELMotamyezSchool/11124",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات الفصل الدراسي الأول 2023",
    link: "https://t.me/ELMotamyezSchool/11183",
  },
];

let g4_t1_islamic_ar_books_elements = "";
g4_t1_islamic_ar_books.forEach(function (item) {
  g4_t1_islamic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_islamic_ar_books").innerHTML +=
  g4_t1_islamic_ar_books_elements;

// full-video -----------
var g4_t1_islamic_ar_fullvideo = [
  {
    video_title: "حسام ابو انس - شرح 2022",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=yXFpXkE4PgceYqG2&amp;list=PLvZB_eXVOBDAJTtcfbolOA0QmdGzTQqUn",
  },
];

let g4_t1_islamic_ar_fullvideo_elements = "";
g4_t1_islamic_ar_fullvideo.forEach(function (item) {
  g4_t1_islamic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_islamic_ar_fullvideo").innerHTML +=
  g4_t1_islamic_ar_fullvideo_elements;
//-------------------

var g4_t1_islamic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الاول : اكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الأول : الايمان بالله - تعالى- وملائكته
      //2 الدرس الثاني :  سورة التين
      //3 الدرس الثالث :   الله - تعالي - المصور
      //4 الدرس الرابع :   ورتل القرآن ترتيلا - أحكام اللام

      {
        chapter_id: "1-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الأول : الايمان بالله - تعالى- وملائكته",
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
            lesson_name: "الدرس الثاني :  سورة التين",
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
            lesson_name: "الدرس الثالث :   الله - تعالي - المصور",
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
            lesson_name: "الدرس الرابع :   ورتل القرآن ترتيلا - أحكام اللام",
            videos: [
              {
                video_id: "1-1-4-1",
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
      //1 الدرس الأول :  محمد - صلى الله عليه وسلم -  نسبه ونشأته
      //2 الدرس الثاني :   بناء الكعبة و قضية التحكيم
      //3 الدرس الثالث :    هود - عليه السلام
      {
        chapter_id: "1-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name:
              "الدرس الأول :  محمد - صلى الله عليه وسلم -  نسبه ونشأته",
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
            lesson_name: "الدرس الثاني :   بناء الكعبة و قضية التحكيم",
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
            lesson_name: "الدرس الثالث :    هود - عليه السلام",
            videos: [
              {
                video_id: "1-2-3-1",
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
      //1 الدرس الأول :الطهارة - وجعلنا من الماء كل شيء حي
      //2 الدرس الثاني : الوضوء - فضل الوضوء
      //3 الدرس الثالث : آداب قضاء الحاجة
      //4 الدرس الرابع :الصلاة - فضل الصلاة
      {
        chapter_id: "1-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الأول :الطهارة - وجعلنا من الماء كل شيء حي",
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
            lesson_name: "الدرس الثاني : الوضوء - فضل الوضوء",
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
            lesson_name: "الدرس الثالث : آداب قضاء الحاجة",
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
            lesson_name: "الدرس الرابع :الصلاة - فضل الصلاة",
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
    section_name: "المحور الثاني : علاقتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الأول :  الايمان بالله - تعالى- وملائكته وكتبه ورسله -عليهم السلام-
      //2 الدرس الثاني :  سورة النبأ
      //3 الدرس الثالث :الله - تعالي - القادر
      //4 الدرس الرابع :ورتل القرآن ترتيلا - أحكام النون الساكنة والتنوين : الاظهار الحلقي
      {
        chapter_id: "2-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name:
              "الدرس الأول :  الايمان بالله - تعالى- وملائكته وكتبه ورسله -عليهم السلام-",
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
            lesson_name: "الدرس الثاني :  سورة النبأ",
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
            lesson_name: "الدرس الثالث :الله - تعالي - القادر",
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
            lesson_name:
              "الدرس الرابع :ورتل القرآن ترتيلا - أحكام النون الساكنة والتنوين : الاظهار الحلقي",
            videos: [
              {
                video_id: "2-1-4-1",
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
      //1 الدرس الأول : غار حراء و نزول الوحي
      //2 الدرس الثاني : الدعوة السرية
      //3 الدرس الثالث : من قصص القرآن الكريم - أصحاب الكهف
      {
        chapter_id: "2-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس الأول : غار حراء و نزول الوحي",
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
            lesson_name: "الدرس الثاني : الدعوة السرية",
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
            lesson_name: "الدرس الثالث : من قصص القرآن الكريم - أصحاب الكهف",
            videos: [
              {
                video_id: "2-2-3-1",
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
      //1 الدرس الأول :الطهارة - الآذان والإقامة
      //2 الدرس الثاني : صفة الصلاة
      //3 الدرس الثالث :  ثبوت شهر رمضان
      //4 الدرس الرابع :   من آداب الصوم
      {
        chapter_id: "2-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "الدرس الأول :الطهارة - الآذان والإقامة",
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
            lesson_name: "الدرس الثاني : صفة الصلاة",
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
            lesson_name: "الدرس الثالث :  ثبوت شهر رمضان",
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
            lesson_name: "الدرس الرابع : من آداب الصوم",
            videos: [
              {
                video_id: "2-3-4-1",
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

draw_lessons(g4_t1_islamic_ar_lessons, "g4_t1_islamic_ar_lessons");
