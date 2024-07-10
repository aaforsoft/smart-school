import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g6_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1K7ioySRIY4Iz8TOXF8cfFWPX33Hv7aQX/view?usp=drive_link",
  },
];

let g6_t1_math_ar_books_elements = "";
g6_t1_math_ar_books.forEach(function (item) {
  g6_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_math_ar_books").innerHTML +=
  g6_t1_math_ar_books_elements;

var g6_t1_math_ar_lessons = [
  //الوحدة 1
  {
    section_id: "1",
    section_name: "الوحدة الاولي : عملية القسمة و العوامل و المضاعفات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : خوارزمية القسمة و العامل المشترك الأكبر و المضاعف المشترك الأصغر
      //الدروس
      //1 الدرس -1- استخدام القسمة المطولة في العالم من حولنا
      //2 الدرس -2-  تحليل العدد إلى عوامله الأولية
      //3 الدرس -3- كتابة تعبيرات عددية باستخدام  ع . م .أ
      //4 الدرس -4-  تحليل المضاعف المشترك الأصغر
      {
        chapter_id: "1-1",
        chapter_name:
          "المفهوم الاول : خوارزمية القسمة و العامل المشترك الأكبر و المضاعف المشترك الأصغر",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس -1- استخدام القسمة المطولة في العالم من حولنا",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "محمد ابراهيم 2025",
                video_link: "https://www.youtube.com/embed/Cy6FNjfT1tA?si=G1GakzkR9TJ4uy-d",
              },
              {
                video_id: "1-1-1-2",
                video_title: "محمد ابراهيم 2024",
                video_link: "https://www.youtube.com/embed/Yz4v5-iKY8g?si=Esp9io9tciBk1nx1",
              },
              {
                video_id: "1-1-1-3",
                video_title: "محمد ابراهيم ليست 2024",
                video_link: "https://www.youtube.com/embed/videoseries?si=DEySgRTEzS-if5Ak&amp;list=PLr3deliUOGZtCLgpyRbCgGzR0mSOvzWCV",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس -2-  تحليل العدد إلى عوامله الأولية",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/i5wWZj0fbcQ?si=RsVwKIU2Y3iVNCtn",
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
            lesson_name: "الدرس -3- كتابة تعبيرات عددية باستخدام  ع . م .أ",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/Jq1Zh7h3YHY?si=t8k8A6hcHWWgiNUc",
              },
              {
                video_id: "1-1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "الدرس -4-  تحليل المضاعف المشترك الأصغر",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/YW771JsulUY?si=FEHZYAId51G6nCxs",
              },
              {
                video_id: "1-1-4-2",
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
    section_name: "الوحدة الثانية : الأعداد النسبية",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : اسكشاف خط الأعداد
      //الدروس
      //1 الدرس -1&2- استخدام خط الأعداد لوصف البيانات & استخدام خط الأعداد والرموز المقارنة الأعداد.
      {
        chapter_id: "2-1",
        chapter_name: "المفهوم الاول : اسكشاف خط الأعداد",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name:
              "الدرس - 1&2 - استخدام خط الأعداد لوصف البيانات & استخدام خط الأعداد والرموز المقارنة الأعداد.",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/uEOIDj4TW_8?si=eiVO6Dzjh_lHLrgK",
              },
              {
                video_id: "2-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : اكتشاف الأعداد النسبية
      //الدروس
      //1 الدرس -3- تحليل الاعداد النسبية باستخدام النماذج
      //2 الدرس -4- مقارنة الاعداد النسبية و ترتيبها
      {
        chapter_id: "2-2",
        chapter_name: "المفهوم الثاني : اكتشاف الأعداد النسبية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس -3- تحليل الاعداد النسبية باستخدام النماذج",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/MhGRjrGQDd8?si=YQZ_J3NI6ywgUnQZ",
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
            lesson_name: "الدرس -4- مقارنة الاعداد النسبية و ترتيبها",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/j8mA2E1Wqyw?si=KQ9U7xyjFXpogT14",
              },
              {
                video_id: "2-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // المفهوم الثالث : تفسير القيمة المطلقة واستخدامها
      //الدروس
      //1 الدرس -5&6- اكتشاف القيمة المطلقة & مقارنة القيم المطلقة
      {
        chapter_id: "2-3",
        chapter_name: "المفهوم الثالث : تفسير القيمة المطلقة واستخدامها",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name:
              "الدرس -5&6- اكتشاف القيمة المطلقة & مقارنة القيم المطلقة",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/-Sdzizr4alk?si=i2VNjqy6hI184mZl",
              },
              {
                video_id: "2-3-1-2",
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
    section_name: "الوحدة الثالثة : المقادير الجبرية",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : استخدام التعبيرات الرياضية و تحليلها
      //الدروس
      //1 الدرس -1&2- تكوين تعبيرات رياضية & تحليل التعبيرات الرياضية
      //2 الدرس -3- كتابة مقادير جبرية
      {
        chapter_id: "3-1",
        chapter_name: "المفهوم الاول : استخدام التعبيرات الرياضية و تحليلها",
        lessons: [
          //الدرس 1
          {
            lesson_id: "3-1-1",
            lesson_name:
              "الدرس -1&2- تكوين تعبيرات رياضية & تحليل التعبيرات الرياضية",
            videos: [
              {
                video_id: "3-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/ufOA94KaV50?si=KYaL5j7wx2EZvl3e",
              },
              {
                video_id: "3-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "3-1-2",
            lesson_name: "الدرس -3- كتابة مقادير جبرية",
            videos: [
              {
                video_id: "3-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/E4yMjJLCtE0?si=Z-weVCsgrzbPb9G_",
              },
              {
                video_id: "3-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // المفهوم الثاني : المقادير الجبرية و الأسس
      //الدروس
      //1 الدرس -4&5&6- ترتيب العمليات والأسس & إيجاد قيمة المقدار الجبري & تطبيقات على المقادير الجبرية
      //2 الدرس -7- تحديد المقادير الجبرية المتكافئة
      {
        chapter_id: "3-2",
        chapter_name: "المفهوم الثاني : المقادير الجبرية و الأسس",
        lessons: [
          //الدرس 1
          {
            lesson_id: "3-2-1",
            lesson_name:
              "الدرس -4&5&6- ترتيب العمليات والأسس & إيجاد قيمة المقدار الجبري & تطبيقات على المقادير الجبرية",
            videos: [
              {
                video_id: "3-2-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/VicpiYmUOA8?si=rbQxJDlRKZyUNJX1",
              },
              {
                video_id: "3-2-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "3-2-2",
            lesson_name: "الدرس -7- تحديد المقادير الجبرية المتكافئة",
            videos: [
              {
                video_id: "3-2-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/s3o5FrYJrXM?si=-rTTmLMzM3YsPiIC",
              },
              {
                video_id: "3-2-2-2",
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
    section_name: "الوحدة الرابعة :  المعادلات و المتباينات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : كتابة المعادلات و المتباينات واستراتيجيات حلها
      //الدروس
      //1 الدرس -1- حل المعادلات الجبرية
      //2 الدرس -2&3- اكتشاف المتباينات  & حل المتباينات
      {
        chapter_id: "4-1",
        chapter_name:
          "المفهوم الاول : كتابة المعادلات و المتباينات واستراتيجيات حلها",
        lessons: [
          //الدرس 1
          {
            lesson_id: "4-1-1",
            lesson_name: "الدرس -1- حل المعادلات الجبرية",
            videos: [
              {
                video_id: "4-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/Nu6KZFFIIeg?si=Nd27N7JxjgtYr_su",
              },
              {
                video_id: "4-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "4-1-2",
            lesson_name: "الدرس -2&3- اكتشاف المتباينات  & حل المتباينات",
            videos: [
              {
                video_id: "4-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/7PZvH2hG6O8?si=_9kHvvOx4ecwAN7J",
              },
              {
                video_id: "4-1-2-2",
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
    section_name: "الوحدة الخامسة : المتغيرات التابعة والمستقلة",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : اكتشاف العلاقات بين متغيرين
      //الدروس
      //1 الدرس -1- العلاقة بين المتغير التابع والمتغير المستقل
      //2 الدرس -2&3- تطبيقات علي المتغيرات التابعة والمستقلة & تحليل العلاقة بين المتغير التابع و المستقل
      //3 الدرس -4- التمثيل البياني للمتغيرات التابعة والمستقلة
      {
        chapter_id: "5-1",
        chapter_name: "المفهوم الاول : اكتشاف العلاقات بين متغيرين",
        lessons: [
          //الدرس 1
          {
            lesson_id: "5-1-1",
            lesson_name:
              "الدرس -1- العلاقة بين المتغير التابع والمتغير المستقل",
            videos: [
              {
                video_id: "5-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/IBm50Px6g2M?si=lbZKSvf_NJGawJ00",
              },
              {
                video_id: "5-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "5-1-2",
            lesson_name:
              "الدرس -2&3- تطبيقات علي المتغيرات التابعة والمستقلة & تحليل العلاقة بين المتغير التابع و المستقل",
            videos: [
              {
                video_id: "5-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/K95gWzqH5mM?si=VbFCnI8eb6PEo0Pw",
              },
              {
                video_id: "5-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "5-1-3",
            lesson_name:
              "الدرس -4- التمثيل البياني للمتغيرات التابعة والمستقلة",
            videos: [
              {
                video_id: "5-1-3-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/p57TY1Qb6GE?si=SRr0wLB56MY_11FZ",
              },
              {
                video_id: "5-1-3-2",
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
    section_name: "الوحدة السادسة :  توزيع البيانات",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : جمع البيانات وتمثيلها وتطبيقات عليها
      //الدروس
      //1 الدرس -1- البيانات والاسئلة الاحصائية
      //2 الدرس -2- اكتشاف المدرج التكراري
      //3 الدرس -3- تمثيل البيانات بالمدرج التكراري
      //4 الدرس -4- اكتشاف المدرج الصندوقي
      //5 الدرس -5- تطبيقات علي التمثيلات البيانية
      {
        chapter_id: "6-1",
        chapter_name: "المفهوم الاول : جمع البيانات وتمثيلها وتطبيقات عليها",
        lessons: [
          //الدرس 1
          {
            lesson_id: "6-1-1",
            lesson_name: "الدرس -1- البيانات والاسئلة الاحصائية",
            videos: [
              {
                video_id: "6-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/riZP9SzwA10?si=RuCYtJne_cKlH_Jh",
              },
              {
                video_id: "6-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "6-1-2",
            lesson_name: "الدرس -2- اكتشاف المدرج التكراري",
            videos: [
              {
                video_id: "6-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/Gf7juot9Bjc?si=l46JPHXUWRqDXbSh",
              },
              {
                video_id: "6-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "6-1-3",
            lesson_name: "الدرس -3- تمثيل البيانات بالمدرج التكراري",
            videos: [
              {
                video_id: "6-1-3-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/-XAWvIGH0og?si=YviabGQ4KKWwE-eA",
              },
              {
                video_id: "6-1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "6-1-4",
            lesson_name: "الدرس -4- اكتشاف المدرج الصندوقي",
            videos: [
              {
                video_id: "6-1-4-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/RB558qkqrrU?si=nVSqX2CiGHr_7SwU",
              },
              {
                video_id: "6-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "6-1-5",
            lesson_name: "الدرس -5- تطبيقات علي التمثيلات البيانية",
            videos: [
              {
                video_id: "6-1-5-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/RPpiOUPmhjo?si=lcnpVbxFuSlkngRa",
              },
              {
                video_id: "6-1-5-2",
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
    section_name: "الوحدة السابعة : مقاييس النزعة المركزية والتشتت",
    chapters: [
      //الموضوع 1
      // المفهوم الاول : اكتشاف مقاييس النزعة المركزية والتشتت
      //الدروس
      //1 الدرس -1&2- اكتشاف توازن مجموعات البيانات & تفسير الوسط الحسابي
      //2 الدرس -3- اكتشاف الوسيط والمنوال والقيم المتطرفة
      //3 الدرس -4- اكتشاف المدى
      {
        chapter_id: "7-1",
        chapter_name: "المفهوم الاول : اكتشاف مقاييس النزعة المركزية والتشتت",
        lessons: [
          //الدرس 1
          {
            lesson_id: "7-1-1",
            lesson_name:
              "الدرس -1&2- اكتشاف توازن مجموعات البيانات & تفسير الوسط الحسابي",
            videos: [
              {
                video_id: "7-1-1-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/ZFzYw6n0VeA?si=msRAynzliylMWi_Q",
              },
              {
                video_id: "7-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "7-1-2",
            lesson_name: "الدرس -3- اكتشاف الوسيط والمنوال والقيم المتطرفة",
            videos: [
              {
                video_id: "7-1-2-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/W6qH3c5MUO0?si=dK8Vr_HT-ijp_arR",
              },
              {
                video_id: "7-1-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "7-1-3",
            lesson_name: "الدرس -4- اكتشاف المدى",
            videos: [
              {
                video_id: "7-1-3-1",
                video_title: "محمد ابراهيم",
                video_link: "https://www.youtube.com/embed/TE90VQLKZr0?si=1lFACJaine1qwBij",
              },
              {
                video_id: "7-1-3-2",
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

draw_lessons(g6_t1_math_ar_lessons, "g6_t1_math_ar_lessons");
