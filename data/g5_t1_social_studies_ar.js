import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_social_studies_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1nq4TNB4hPyJO9OYoof20uQR_4CSOAD-D/view?usp=drive_link",
  },
];

let g5_t1_social_studies_ar_books_elements = "";
g5_t1_social_studies_ar_books.forEach(function (item) {
  g5_t1_social_studies_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_social_studies_ar_books").innerHTML +=
  g5_t1_social_studies_ar_books_elements;

var g5_t1_social_studies_ar_lessons = [
  //المحور 1
  // المحور الأول: البيئة الطبيعية
  {
    section_id: "1",
    section_name: "المحور الأول: البيئة الطبيعية",
    chapters: [
      //الموضوع 1
      // الوحدة الاولي : الملامح الطبيعية لبلدي مصر
      //1 الدرس الاول : موقع بلدي
      //2 الدرس الثاني: قصة نشأة الحضارة المصرية القديمة
      //3 الدرس الثالث: مظاهر سطح بلدي
      //4 الدرس الرابع : مناخ بلدي
      //5 الدرس الخامس: النباتات الطبيعية والحيوانات البرية في بلدي
      //6 الدرس السادس: التغيرات المناخية وأثرها على بلدي
      //7 شخصيات مصرية مؤثرة : الملك نعرمر «مينا» , الملك تحتمس الثالث
      {
        chapter_id: "1-1",
        chapter_name: "الوحدة الاولي : الملامح الطبيعية لبلدي مصر",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الاول : موقع بلدي",
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
            lesson_name: "الدرس الثاني: قصة نشأة الحضارة المصرية القديمة",
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
            lesson_name: "الدرس الثالث: مظاهر سطح بلدي",
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
            lesson_name: "الدرس الرابع : مناخ بلدي",
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
              "الدرس الخامس: النباتات الطبيعية والحيوانات البرية في بلدي",
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
            lesson_name: "الدرس السادس: التغيرات المناخية وأثرها على بلدي",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-1-7",
            lesson_name:
              "شخصيات مصرية مؤثرة : الملك نعرمر «مينا» , الملك تحتمس الثالث",
            videos: [
              {
                video_id: "1-1-7-1",
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
  // المحور الثاني: الموارد و التنمية

  {
    section_id: "2",
    section_name: "المحور الثاني: الموارد و التنمية",
    chapters: [
      //الموضوع 2
      // الوحدة الثانية : الموارد الطبيعية لبلدي مصر
      //1 الدرس الأول: الموارد المائية في بلدي
      //2 الدرس الثاني: الموارد المعدنية في بلدي
      //3 الدرس الثالث: مصادر الطاقة في بلدي
      //4 الدرس الرابع اختراع النقود وتطورها
      {
        chapter_id: "2-1",
        chapter_name: "الوحدة الثانية : الموارد الطبيعية لبلدي مصر",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الأول: الموارد المائية في بلدي",
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
            lesson_name: "الدرس الثاني: الموارد المعدنية في بلدي",
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
            lesson_name: "الدرس الثالث: مصادر الطاقة في بلدي",
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
            lesson_name: "الدرس الرابع اختراع النقود وتطورها",
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
      //الموضوع 3
      // الوحدة الثالثة : الأنشطة الاقتصادية في بلدي بين الماضي والحاضر
      //1 الدرس الأول: الزراعة في بلدي
      //2 الدرس الثاني : الثروة الحيوانية والسمكية في بلدي
      //3 الدرس الثالث: الصناعة في بلدي
      //4 الدرس الرابع : التجارة في بلدي
      //5 شخصيات مصرية مؤثرة : الملك أمنمحات الثالث , الرئيس الراحل جمال عبد الناصر
      {
        chapter_id: "2-2",
        chapter_name:
          "الوحدة الثالثة : الأنشطة الاقتصادية في بلدي بين الماضي والحاضر",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس الأول: الزراعة في بلدي",
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
            lesson_name: "الدرس الثاني : الثروة الحيوانية والسمكية في بلدي",
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
            lesson_name: "الدرس الثالث: الصناعة في بلدي",
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
            lesson_name: "الدرس الرابع : التجارة في بلدي",
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
              "شخصيات مصرية مؤثرة : الملك أمنمحات الثالث , الرئيس الراحل جمال عبد الناصر",
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
];

draw_lessons(
  g5_t1_social_studies_ar_lessons,
  "g5_t1_social_studies_ar_lessons"
);
