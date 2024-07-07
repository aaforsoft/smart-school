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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/yJqJ_PqFu00?si=I0ey6Hg_dIrhj8n_",
              },
              {
                video_id: "1-1-1-2",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/baih7DMemW0?si=sj0wBpJfOhux4zxD",
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
                video_title: "عطا زكي شحتو الجزء الأول",
                video_link:
                  "https://www.youtube.com/embed/hRKGQ5Vnqk8?si=OiI7yinWa40SNTQa",
              },
              {
                video_id: "1-1-2-2",
                video_title: "عطا زكي شحتو الجزء الثاني",
                video_link:
                  "https://www.youtube.com/embed/Lcar5PtAsEc?si=G6mYmORozEwTo0wm",
              },
              {
                video_id: "1-1-2-3",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/WtD2LNiHN14?si=B39g7SWDkocXOZN-",
              },
              {
                video_id: "1-1-2-4",
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
                video_title: "عطا زكي شحتو الجزء الأول",
                video_link:
                  "https://www.youtube.com/embed/k0SlPlw3ndY?si=VYiXrxhK2iontfnI",
              },
              {
                video_id: "1-1-3-2",
                video_title: "عطا زكي شحتو الجزء الثاني",
                video_link:
                  "https://www.youtube.com/embed/hMHEhrApwg8?si=Ok_riWVQcnvbUx0C",
              },
              {
                video_id: "1-1-3-3",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/JHabDv693Qk?si=hw9XtuB0HYRi4f8q",
              },
              {
                video_id: "1-1-3-4",
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
                video_title: "عطا زكي شحتو الجزء الأول",
                video_link:
                  "https://www.youtube.com/embed/9bVLXbDf-oM?si=wFULCZ-hVZaBhM9c",
              },
              {
                video_id: "1-1-4-2",
                video_title: "عطا زكي شحتو الجزء الثاني",
                video_link:
                  "https://www.youtube.com/embed/0HuBbEVm1RI?si=98phDrCH1sb0UId6",
              },
              {
                video_id: "1-1-4-3",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/Kb9T9nXnyjY?si=l-B-RPkxN0ARmUr8",
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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/7gquRq8OFho?si=Ygb5T6QyAp-jnSlg",
              },
              {
                video_id: "1-1-5-2",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/ejIKTx2R6RY?si=DhtPktLMBP1L-9Ev",
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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/QNOeZDMyfRU?si=3Q6UvBEgtA-_7WTP",
              },
              {
                video_id: "1-1-6-2",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/zPJuTftLdhs?si=Q3a4OvbybCn49LOo",
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
                video_title: "الطالب المتفوق",
                video_link:
                  "https://www.youtube.com/embed/azffmqgH4Dc?si=QQl1QBOUta1X5WmL",
              },
              {
                video_id: "1-1-7-2",
                video_title: "غادة عراقي",
                video_link:
                  "https://www.youtube.com/embed/BQmWP2peLtU?si=j7L8MCw2Y3tL2OLA",
              },
              {
                video_id: "1-1-7-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          // مراجعة الوحدة
          {
            lesson_id: "1-1-8",
            lesson_name: "مراجعة الوحدة",
            videos: [
              {
                video_id: "1-1-8-1",
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/qlQ90E-uTq8?si=PCmBdpwaVOf8O3te",
              },
              {
                video_id: "1-1-8-2",
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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/dZSdlCA6Zrc?si=PiiOsXxoPpBZJJ-B",
              },
              {
                video_id: "2-1-1-2",
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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/d2i6ABNf8xU?si=Wl_6YnPVsoiYikBl",
              },
              {
                video_id: "2-1-2-2",
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
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/ZFvtIhxKO0g?si=vC5Ry6o05qY9NKtJ",
              },
              {
                video_id: "2-1-3-2",
                video_title: "عطا زكي شحتو - اسئلة الدرس",
                video_link:
                  "https://www.youtube.com/embed/_VaRnVkvO88?si=aS3vKoKZCaq34JfH",
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
            lesson_name: "الدرس الرابع اختراع النقود وتطورها",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/0bK-fyWRtNg?si=RoPbJPsZNrkDgTTN",
              },
              {
                video_id: "2-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          // مراجعة الوحدة
          {
            lesson_id: "2-1-5",
            lesson_name: "مراجعة الوحدة",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "عطا زكي شحتو",
                video_link:
                  "https://www.youtube.com/embed/DhlF25zpvwQ?si=NeYGX-ili-yViAhU",
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
                video_title: "عطا زكي شحتو الجزء الأول",
                video_link: "https://www.youtube.com/embed/nHT1RbD3bm8?si=Gbt2Dr9Suu-Lm6v9",
              },
              {
                video_id: "2-2-1-2",
                video_title: "عطا زكي شحتو الجزء الثاني",
                video_link: "https://www.youtube.com/embed/CSTCI_BP4QA?si=dAvM8Xp6A6-wbst-",
              },
              {
                video_id: "2-2-1-3",
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
                video_title: "عطا زكي شحتو",
                video_link: "https://www.youtube.com/embed/OaWq3aleNhg?si=VKTACsr4F0RcXmfF",
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
            lesson_name: "الدرس الثالث: الصناعة في بلدي",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "عطا زكي شحتو",
                video_link: "https://www.youtube.com/embed/bDUxLjWI49A?si=3iSZ5_SKnkE6MXvJ",
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
            lesson_name: "الدرس الرابع : التجارة في بلدي",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "عطا زكي شحتو",
                video_link: "https://www.youtube.com/embed/F0Dn5w3T2z4?si=cw0pQQ4Qtef3RAwM",
              },
              {
                video_id: "2-2-4-2",
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
                video_title: "كريم السبكي",
                video_link: "https://www.youtube.com/embed/t0l4JcouSf8?si=goS4q8IvMAviZEDj",
              },
              {
                video_id: "2-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          // مراجعة الوحدة
          {
            lesson_id: "2-2-6",
            lesson_name: "مراجعة الوحدة",
            videos: [
              {
                video_id: "2-2-6-1",
                video_title: "عطا زكي شحتو",
                video_link: "https://www.youtube.com/embed/DZ4VeeTZOgI?si=WAKfERDkl7NIq4T_",
              },
              {
                video_id: "2-2-6-2",
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
