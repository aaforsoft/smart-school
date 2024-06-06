import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_islamic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1GTZNjgl8LFchUZeY7y6diD_R5zsLKUY7/view?usp=drive_link",
  },
];

let g5_t1_islamic_ar_books_elements = "";
g5_t1_islamic_ar_books.forEach(function (item) {
  g5_t1_islamic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_islamic_ar_books").innerHTML +=
  g5_t1_islamic_ar_books_elements;

var g5_t1_islamic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "اكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الاول : العبادة معناها و أنواعها
      //2 الدرس الثاني : اسم الله - تعالي - الودود
      //3 الدرس الثالث : سورة الانفطار - وصف يوم القيامة
      //4 الدرس الرابع : مراجعة أحكام النون الساكنة والتنوين
      {
        chapter_id: "1-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الاول : العبادة معناها و أنواعها",
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
            lesson_name: "الدرس الثاني : اسم الله - تعالي - الودود",
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
            lesson_name: "الدرس الثالث : سورة الانفطار - وصف يوم القيامة",
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
            lesson_name: "الدرس الرابع : مراجعة أحكام النون الساكنة والتنوين",
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
      //1 الدرس الاول : استعداد الرسول -ص- للهجرة
      //2 الدرس الثاني : الطريق الي المدينة
      //3 الدرس الثالث : معجزة الرسول -ص- مع أم معبد
      //4 الدرس الرابع : قصة موسي -ع- ولادته ونشأته (نبي من مصر)
      {
        chapter_id: "1-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس الاول : استعداد الرسول -ص- للهجرة",
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
            lesson_name: "الدرس الثاني : الطريق الي المدينة",
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
            lesson_name: "الدرس الثالث : معجزة الرسول -ص- مع أم معبد",
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
            lesson_name:
              "الدرس الرابع : قصة موسي -ع- ولادته ونشأته (نبي من مصر)",
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
      // العبادات
      //الدروس
      // الدرس الأول: مكانة الصلاة وحكمها
      // الدرس الثاني : الصلاة - الفرق بين الركن والسنة
      // الدرس الثالث : أدعية الاستفتاح والتشهد ومعناها
      // الدرس الرابع : صلاة الجمعة والعيدين
      {
        chapter_id: "1-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الأول: مكانة الصلاة وحكمها",
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
            lesson_name: "الدرس الثاني : الصلاة - الفرق بين الركن والسنة",
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
            lesson_name: "الدرس الثالث : أدعية الاستفتاح والتشهد ومعناها",
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
            lesson_name: "الدرس الرابع : صلاة الجمعة والعيدين",
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
  //علاقاتي مع الآخرين
  {
    section_id: "2",
    section_name: "علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الاول : القراآن الكريم تعبد وتدبر
      //2 الدرس الثاني : شكر الله - تعالي- علي النعم قصة صاحب الجنتين
      //3 الدرس الثالث : اسم الله - تعالي - القدوس
      //4 الدرس الرابع : وصايا لقمان الحكيم لإبنه
      //5 الدرس الخامس : مخارج الحروف
      {
        chapter_id: "2-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الاول : القراآن الكريم تعبد وتدبر",
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
            lesson_name:
              "الدرس الثاني : شكر الله - تعالي- علي النعم قصة صاحب الجنتين",
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
            lesson_name: "الدرس الثالث : اسم الله - تعالي - القدوس",
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
            lesson_name: "الدرس الرابع : وصايا لقمان الحكيم لإبنه",
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
            lesson_name: "الدرس الخامس : مخارج الحروف",
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
      // السير و الشخصيات
      //1 الدرس الأول :  بناء المجتمع المدني
      //2 الدرس الثاني :  الرسول -ص- ويهود المدينة
      //3 الدرس الثالث: زيد بن أرقم - الغلام الصادق
      //4 الدرس الرابع :  قصة موسى -ع- نبوة على أرض سيناء
      {
        chapter_id: "2-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس الأول :  بناء المجتمع المدني",
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
            lesson_name: "الدرس الثاني :  الرسول -ص- ويهود المدينة",
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
            lesson_name: "الدرس الثالث: زيد بن أرقم - الغلام الصادق",
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
            lesson_name: "الدرس الرابع :  قصة موسى -ع- نبوة على أرض سيناء",
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
      // العبادات
      //1 الدرس الأول : النوافل
      //2 الدرس الثاني : المسح على الخفين والجوريين
      //3 الدرس الثالث : التيمم
      //4 الدرس الرابع : الصوم
      {
        chapter_id: "2-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الأول : النوافل",
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
            lesson_name: "الدرس الثاني : المسح على الخفين والجوريين",
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
            lesson_name: "الدرس الثالث : التيمم",
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
            lesson_name: "الدرس الرابع : الصوم",
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
];

draw_lessons(g5_t1_islamic_ar_lessons, "g5_t1_islamic_ar_lessons");
