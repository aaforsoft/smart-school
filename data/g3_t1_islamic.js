import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g3_t1_islamic_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1j_mHKV5iRF09tCJlpN7Mu7dMS3cG3uj0/view?usp=drive_link",
  },
];

let g3_t1_islamic_books_elements = "";
g3_t1_islamic_books.forEach(function (item) {
  g3_t1_islamic_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_islamic_books").innerHTML +=
  g3_t1_islamic_books_elements;

var g3_t1_islamic_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: " المحور الأول: مَنْ أكون؟",
    chapters: [
      //الموضوع 1
      //عقيدة
      //الدروس
      //1 وحدانية الله
      //2 آيات من سورة الحشر
      //3 اسم من اسماء الله الحسني - الملك
      {
        chapter_id: "1-1",
        chapter_name: "عقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "وحدانية الله",
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
            lesson_name: "آيات من سورة الحشر",
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
            lesson_name: "اسم من اسماء الله الحسني - الملك",
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
      //اخلاق و آداب
      //الدروس
      //1 أمانة راعي الغنم
      {
        chapter_id: "1-2",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "أمانة راعي الغنم",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //سير وشخصيات
      //الدروس
      //1 عام الحزن
      //2 رحلة الطائف
      //3 السيدة فاطمة الزهراء
      {
        chapter_id: "1-3",
        chapter_name: "سير وشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "عام الحزن",
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
            lesson_name: "رحلة الطائف",
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
            lesson_name: "السيدة فاطمة الزهراء",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 4
      //اخلاق و آداب
      //الدروس
      //1 رحمة رسول الله صلى الله عليه وسلم بحفيديه
      {
        chapter_id: "1-4",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-4-1",
            lesson_name: "رحمة رسول الله صلى الله عليه وسلم بحفيديه",
            videos: [
              {
                video_id: "1-4-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 5
      //عبادات
      //الدروس
      //1 الطهارة و الوضوء
      //2 فرائض الوضوء - سنن الوضوء
      //3 فضل الوضوء
      {
        chapter_id: "1-5",
        chapter_name: "عبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-5-1",
            lesson_name: "الطهارة و الوضوء",
            videos: [
              {
                video_id: "1-5-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-5-2",
            lesson_name: "فرائض الوضوء - سنن الوضوء",
            videos: [
              {
                video_id: "1-5-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-5-3",
            lesson_name: "فضل الوضوء",
            videos: [
              {
                video_id: "1-5-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 6
      //اخلاق و آداب
      //الدروس
      //1 إسباغ الوضوء من إتقان العمل
      {
        chapter_id: "1-6",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-6-1",
            lesson_name: "إسباغ الوضوء من إتقان العمل",
            videos: [
              {
                video_id: "1-6-1-1",
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
  //العالم من حولي
  {
    section_id: "2",
    section_name: "المحور الثاني: العالم من حولي",
    chapters: [
      //الموضوع 1
      //عقيدة
      //الدروس
      //1 القرآن و السنة
      //2 حياتنا مع القرآن والسنة
      //3 آيات من سورة الرحمن
      {
        chapter_id: "2-1",
        chapter_name: "عقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "القرآن و السنة",
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
            lesson_name: "حياتنا مع القرآن والسنة",
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
            lesson_name: "آيات من سورة الرحمن",
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
      //اخلاق و آداب
      //الدروس
      //1 الغلام المعلم
      {
        chapter_id: "2-2",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الغلام المعلم",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //سير وشخصيات
      //1 يونس - علية السلام1
      //2 يونس - علية السلام2
      //3 زيد بن ثابت - رضي الله عنه
      {
        chapter_id: "2-3",
        chapter_name: "سير وشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "يونس - علية السلام1",
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
            lesson_name: "يونس - علية السلام2",
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
            lesson_name: "زيد بن ثابت - رضي الله عنه",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 4
      //اخلاق و آداب
      //الدروس
      //المثابرة سر النجاح
      {
        chapter_id: "2-4",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-4-1",
            lesson_name: "المثابرة سر النجاح",
            videos: [
              {
                video_id: "2-4-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 5
      //عبادات
      //الدروس
      //1 فضل الصلاة
      //2 شروط صحة الصلاة
      //3 مبطلات الصلاة
      {
        chapter_id: "2-5",
        chapter_name: "عبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-5-1",
            lesson_name: "فضل الصلاة",
            videos: [
              {
                video_id: "2-5-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-5-2",
            lesson_name: "شروط صحة الصلاة",
            videos: [
              {
                video_id: "2-5-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-5-3",
            lesson_name: "مبطلات الصلاة",
            videos: [
              {
                video_id: "2-5-3-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 6
      //اخلاق و آداب
      //الدروس
      //أنا أتقن صلاتي
      {
        chapter_id: "2-6",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-6-1",
            lesson_name: "أنا أتقن صلاتي",
            videos: [
              {
                video_id: "2-6-1-1",
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

draw_lessons(g3_t1_islamic_lessons, "g3_t1_islamic_lessons");
