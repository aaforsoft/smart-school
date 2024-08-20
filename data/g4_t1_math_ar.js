import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g4_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل - 2025",
    link: "https://drive.google.com/file/d/11exxSzT7W8AcYEknHmlCcqwbQExW94rt/view",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات أكتوبر 2023",
    link: "https://t.me/ELMotamyezSchool/11102",
  },
  {
    title: "بنك اسئلة المتميز الشامل - علي مقررات نوفمبر 2023",
    link: "https://t.me/ELMotamyezSchool/11128",
  },
  {
    title: "المتميز الشامل  بنك اسئلة علي مقرر الفصل الدراسي الاول بالكامل 2023",
    link: "https://t.me/ELMotamyezSchool/11199",
  },
];

let g4_t1_math_ar_books_elements = "";
g4_t1_math_ar_books.forEach(function (item) {
  g4_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g4_t1_math_ar_books").innerHTML +=
  g4_t1_math_ar_books_elements;

// full-video -----------
var g4_t1_math_ar_fullvideo = [
  {
    video_title: "مستر محمد ابراهيم - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=LDY4jC1jISHMmL3p&amp;list=PLYGJU1U6eacNS5f4tEoYFGMyJqPkymHIZ",
  },
  {
    video_title: "مستر محمد ابراهيم - مراجعة نهائية كل المواد 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=_FR_TAy-yTUzgHzm&amp;list=PLYGJU1U6eacNXYy0fQOb_Kt_FhX0IuhAz",
  },
  {
    video_title: "ميس سلوي حامد - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=-Y82siEKdzBoLIhW&amp;list=PLIGfCOmnXRytVjiOWJMvFWdzgP5NprY6M",
  },
];

let g4_t1_math_ar_fullvideo_elements = "";
g4_t1_math_ar_fullvideo.forEach(function (item) {
  g4_t1_math_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g4_t1_math_ar_fullvideo").innerHTML +=
  g4_t1_math_ar_fullvideo_elements;
//-------------------

var g4_t1_math_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : القيمة المكانية",
    chapters: [
      //الموضوع 1
      // المفهوم الاول :تعزيز القيمة المكانية
      //الدروس
      //1 الدرس 1 : الأعداد الكبيرة
      //2 الدرس 2 : تغيير القيم المكانية
      //3 الدرس 3 , 4 :  صيغ متنوعة لكتابة الأعداد  , تكوين الأعداد وتحليلها
      {
        chapter_id: "1-1",
        chapter_name: "المفهوم الاول :تعزيز القيمة المكانية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس 1 : الأعداد الكبيرة",
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
            lesson_name: "الدرس 2 : تغيير القيم المكانية",
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
            lesson_name:
              "الدرس 3 , 4 :  صيغ متنوعة لكتابة الأعداد  , تكوين الأعداد وتحليلها",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : استخدام مفهوم القيمة المكانية
      //الدروس
      //1 الدرس 5 , 6 :مقارنة الاعداد الكبيرة , مقارنة الاعداد في ضيخ مختلفة
      //2 الدرس 7 : ترتيب الأعداد تنازليا وتصاعديا
      //3 الدرس 8 : قواعد التقريب
      {
        chapter_id: "1-2",
        chapter_name: "المفهوم الثاني : استخدام مفهوم القيمة المكانية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-5",
            lesson_name:
              "الدرس 5 , 6 :مقارنة الاعداد الكبيرة , مقارنة الاعداد في ضيخ مختلفة ",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-6",
            lesson_name: "الدرس 7 : ترتيب الأعداد تنازليا وتصاعديا",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-7",
            lesson_name: "الدرس 8 : قواعد التقريب",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 2
  {
    section_id: "2",
    section_name: "الوحدة الثانية : استراتيجيات عمليتي الجمع والطرح",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : استخدام استراتيجيات عمليتي الجمع والطرح
      //الدروس
      //1 الدرس 1 : خواص عملية الجمع
      //2 الدرس 2 :  الجمع مع إعادة التسمية
      //3 الدرس 3 :  الطرح مع إعادة التسمية
      {
        chapter_id: "2-1",
        chapter_name: "المفهوم الاول : استخدام استراتيجيات عمليتي الجمع والطرح",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس 1 : خواص عملية الجمع",
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
            lesson_name: "الدرس 2 :  الجمع مع إعادة التسمية",
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
            lesson_name: "الدرس 3 :  الطرح مع إعادة التسمية",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني :حل المسائل متعددة الخطوات
      //الدروس
      //4 الدرس 4 : النماذج الشريطية و المتغيرات و المسائل الكلامية
      //5 الدرس 5 : حل مسائل كلامية متعددة الخطوات باستخدام الجمع و الطرح
      {
        chapter_id: "2-2",
        chapter_name: "المفهوم الثاني :حل المسائل متعددة الخطوات",
        lessons: [
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name:
              "الدرس 4 : النماذج الشريطية و المتغيرات و المسائل الكلامية",
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
            lesson_name:
              "الدرس 5 : حل مسائل كلامية متعددة الخطوات باستخدام الجمع و الطرح",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 3
  {
    section_id: "3",
    section_name: "الوحدة الثالثة : مفاهيم القياس",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : القياس المتري
      //الدروس
      //1 الدرس 1 :  قياس الطول
      //2 الدرس 2 :  قياس الكتلة
      //3 الدرس 3 : وحدات قياس السعة
      {
        chapter_id: "3-1",
        chapter_name: "المفهوم الاول : القياس المتري",
        lessons: [
          //الدرس 1
          {
            lesson_id: "3-1-1",
            lesson_name: "الدرس 1 :  قياس الطول",
            videos: [
              {
                video_id: "3-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "3-1-2",
            lesson_name: "الدرس 2 :  قياس الكتلة",
            videos: [
              {
                video_id: "3-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "3-1-3",
            lesson_name: "الدرس 3 : وحدات قياس السعة",
            videos: [
              {
                video_id: "3-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : قياس الوقت
      //الدروس
      //4 الدرس 4 : وحدات قياس الوقت
      //5 الدرس 5 :   الوقت المنقضي
      //6 الدرس 6 :  تطبيقات القياس 1
      //7 الدرس 7 :  تطبيقات القياس 2
      {
        chapter_id: "3-2",
        chapter_name: "المفهوم الثاني : قياس الوقت",
        lessons: [
          //الدرس 4
          {
            lesson_id: "3-2-4",
            lesson_name: "الدرس 4 : وحدات قياس الوقت",
            videos: [
              {
                video_id: "3-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "3-2-5",
            lesson_name: "الدرس 5 : الوقت المنقضي",
            videos: [
              {
                video_id: "3-2-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "3-2-6",
            lesson_name: "الدرس 6 : تطبيقات القياس 1",
            videos: [
              {
                video_id: "3-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "3-2-7",
            lesson_name: "الدرس 7 : تطبيقات القياس 2",
            videos: [
              {
                video_id: "3-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 4
  {
    section_id: "4",
    section_name: "الوحدة الرابعة : المساحة و المحيط",
    chapters: [
      //الموضوع 1
      // مفهوم الوحدة : استكشاف المساحة و المحيط
      //الدروس
      //1 الدرس 1 : ايجاد المحيط
      //2 الدرس 2 : ايجاد المساحة
      //3 الدرس 3 :  أبعاد مجهولة
      //4 الدرس 4 : الأشكال الهندسية المركبة
      {
        chapter_id: "4-1",
        chapter_name: "مفهوم الوحدة : استكشاف المساحة و المحيط",
        lessons: [
          //الدرس 1
          {
            lesson_id: "4-1-1",
            lesson_name: "الدرس 1 : ايجاد المحيط",
            videos: [
              {
                video_id: "4-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "4-1-2",
            lesson_name: "الدرس 2 : ايجاد المساحة",
            videos: [
              {
                video_id: "4-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "4-1-3",
            lesson_name: "الدرس 3 : أبعاد مجهولة",
            videos: [
              {
                video_id: "4-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "4-1-4",
            lesson_name: "الدرس 4 : الأشكال الهندسية المركبة",
            videos: [
              {
                video_id: "4-1-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 5
  {
    section_id: "5",
    section_name: "الوحدة الخامسة : عملية الضرب كعلاقة",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : المقارنة باستخدام عملية الضرب
      //الدروس
      //1 الدرس 1 :  مقارنة الاعداد باستخدام عملية الضرب
      //2 الدرس 2 , 3 : تكوين المعادلات للمقارنة باستخدام عملية الضرب , حل معادلات للمقارنة باستخدام عملية الضرب
      {
        chapter_id: "5-1",
        chapter_name: "المفهوم الاول : المقارنة باستخدام عملية الضرب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "5-1-1",
            lesson_name: "الدرس 1 : مقارنة الاعداد باستخدام عملية الضرب",
            videos: [
              {
                video_id: "5-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "5-1-2",
            lesson_name:
              "الدرس 2 , 3 : تكوين المعادلات للمقارنة باستخدام عملية الضرب , حل معادلات للمقارنة باستخدام عملية الضرب",
            videos: [
              {
                video_id: "5-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : خواص و أنماط عملية الضرب
      //الدروس
      //4 الدروس 6,4 : خاصية الابدال في عملية الضرب , خاصية العنصر المحايد والضرب في صفر, خاصية الدمج في عملية الضرب
      //7 الدرس 7 : تطبيق الأنماط في عملية الضرب
      {
        chapter_id: "5-2",
        chapter_name: "المفهوم الثاني : خواص و أنماط عملية الضرب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "5-2-6",
            lesson_name:
              "الدروس 6,4 : خاصية الابدال في عملية الضرب , خاصية العنصر المحايد والضرب في صفر, خاصية الدمج في عملية الضرب",
            videos: [
              {
                video_id: "5-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "5-2-7",
            lesson_name: "الدرس 7 : تطبيق الأنماط في عملية الضرب",
            videos: [
              {
                video_id: "5-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 6
  {
    section_id: "6",
    section_name: "الوحدة السادسة : العوامل و المضاعفات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : فهم العوامل
      //الدروس
      //1 الدرس 1 : تحديد عوامل الأعداد الصحيحة
      //2 الدرس 2 : الأعداد الأولية والأعداد متعددة العوامل
      //3 الدرس 3 : العامل المشترك الأكبر ع.م.أ
      {
        chapter_id: "6-1",
        chapter_name: "المفهوم الاول : فهم العوامل",
        lessons: [
          //الدرس 1
          {
            lesson_id: "6-1-1",
            lesson_name: "الدرس 1 : تحديد عوامل الأعداد الصحيحة",
            videos: [
              {
                video_id: "6-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "6-1-2",
            lesson_name: "الدرس 2 : الأعداد الأولية والأعداد متعددة العوامل",
            videos: [
              {
                video_id: "6-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "6-1-3",
            lesson_name: "الدرس 3 : العامل المشترك الأكبر ع.م.أ",
            videos: [
              {
                video_id: "6-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : فهم المضاعفات
      //الدروس
      //4 الدرس 4,5 : تحديد مضاعفات الأعداد الصحيحة , المضاعفات المشتركة
      //6 الدرس 6 : العلاقات بين العوامل والمضاعفات
      {
        chapter_id: "6-2",
        chapter_name: "المفهوم الثاني : فهم المضاعفات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "6-2-4",
            lesson_name:
              "الدرس 5,4 : تحديد مضاعفات الأعداد الصحيحة , المضاعفات المشتركة",
            videos: [
              {
                video_id: "6-2-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "6-2-6",
            lesson_name: "الدرس 6 : العلاقات بين العوامل والمضاعفات",
            videos: [
              {
                video_id: "6-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 7
  {
    section_id: "7",
    section_name: "الوحدة السابعة : عمليتا الضرب و القسمة : الحساب و العلاقات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : الضرب في عدد مكون من رقم أو رقمين
      //الدروس
      //1 الدرس 1,2 : استراتيجية نموذج مساحة المستطيل , خاصية التوزيع
      //2 الدرس 3,4 : خوارزمية عملية الضرب بالتجزئة , الضرب فب عدد مكون من رقم واحد
      //3 الدرس 5 : الضرب في عدد مكون من رقمين في مضاعفات العدد 10
      {
        chapter_id: "7-1",
        chapter_name: "المفهوم الاول : الضرب في عدد مكون من رقم أو رقمين",
        lessons: [
          //الدرس 1
          {
            lesson_id: "7-1-1",
            lesson_name:
              "الدرس 1,2 : استراتيجية نموذج مساحة المستطيل , خاصية التوزيع",
            videos: [
              {
                video_id: "7-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "7-1-3",
            lesson_name:
              "الدرس 3,4 : خوارزمية عملية الضرب بالتجزئة , الضرب فب عدد مكون من رقم واحد",
            videos: [
              {
                video_id: "7-1-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "7-1-5",
            lesson_name:
              "الدرس 5 : الضرب في عدد مكون من رقمين في مضاعفات العدد 10",
            videos: [
              {
                video_id: "7-1-5-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : القسمة على عدد مكون من رقم واحد
      //الدروس
      //6 الدرس 6 : استكشاف باقي القسمة
      //7 الدرس 7 : الأنماط في عملية القسمة
      //8 الدرس 8 : القسمة باستخدام نموذج مساحة المستطيل
      //9 الدرس 9 : خوارزمية خارج القسمة بالتجزئة
      //10 الدرس 10,11 : خوارزمية القسمة المعيارية  , القسمة و الضرب
      {
        chapter_id: "7-2",
        chapter_name: "المفهوم الثاني : القسمة على عدد مكون من رقم واحد",
        lessons: [
          //الدرس 1
          {
            lesson_id: "7-2-6",
            lesson_name: "الدرس 6 : استكشاف باقي القسمة",
            videos: [
              {
                video_id: "7-2-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "7-2-7",
            lesson_name: "الدرس 7 : الأنماط في عملية القسمة",
            videos: [
              {
                video_id: "7-2-7-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "7-2-8",
            lesson_name: "الدرس 8 : القسمة باستخدام نموذج مساحة المستطيل",
            videos: [
              {
                video_id: "7-2-8-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "7-2-9",
            lesson_name: "الدرس 9 : خوارزمية خارج القسمة بالتجزئة",
            videos: [
              {
                video_id: "7-2-9-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "7-2-10",
            lesson_name:
              "الدرس 11,10 : خوارزمية القسمة المعيارية  , القسمة و الضرب",
            videos: [
              {
                video_id: "7-2-10-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //الوحدة 8
  {
    section_id: "8",
    section_name: "الوحدة الثامنة : ترتيب العمليات",
    chapters: [
      //الموضوع 1
      // مفهوم الوحدة : ترتيب العمليات
      //الدروس
      //1 الدرس 1,2 : ترتيب إجراءات العمليات الحسابية , ترتيب العمليات و المسائل الكلامية
      {
        chapter_id: "8-1",
        chapter_name: "مفهوم الوحدة : ترتيب العمليات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "8-1-1",
            lesson_name:
              "الدرس 2,1 : ترتيب إجراءات العمليات الحسابية , ترتيب العمليات و المسائل الكلامية",
            videos: [
              {
                video_id: "8-1-1-1",
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
draw_lessons(g4_t1_math_ar_lessons, "g4_t1_math_ar_lessons");
