import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
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

// full-video -----------
var g3_t1_islamic_ar_fullvideo = [
  {
    video_title: "ميس ماهيتاب - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=WXhKvF3GT2cmXx0y&amp;list=PLsxnuZtNUZW-XrC2k-9AKm-BzSDuLUCj5",
  },
  {
    video_title: "ميس M.S - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=kxT03QAE0T5Yh1Fc&amp;list=PLzCtHNEpI9zp3o2IsA-CvvPjMBp6SiiTT",
  },
];

let g3_t1_islamic_ar_fullvideo_elements = "";
g3_t1_islamic_ar_fullvideo.forEach(function (item) {
  g3_t1_islamic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g3_t1_islamic_ar_fullvideo").innerHTML +=
  g3_t1_islamic_ar_fullvideo_elements;
//-------------------
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
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/2eU2IDATGlE?si=Of9ZXDpqDAUgd07t",
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
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/Mh8Rx1vXqB0?si=llwl9rWcxAd5dq6i",
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
                video_title: "داليا صلاح",
                video_link:
                  "https://www.youtube.com/embed/9GSYHkgTyBg?si=EOgbhv7tsT8odoC9&amp;start=318",
              },
              {
                video_id: "1-1-3-2",
                video_title: "مس MS",
                video_link:
                  "https://www.youtube.com/embed/Dh1KgZEFaEI?si=QMb0MvYJCRXyJyBR",
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
                video_title: "مس MS",
                video_link:
                  "https://www.youtube.com/embed/beWTJpn3iLs?si=1vfKhbdwDefeosAS",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/DAM919goMf8?si=zRaSJrRxNhmprbYc",
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
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/0Z6Z8LH23FA?si=mBUOMTe0UivAq1V3",
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
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/CZ5oQm0IjLs?si=kYlZvt1mOBeTdnBX",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/Wx4gZNmF_CM?si=hdlccHZzxEcuNt8A",
              },
            ],
          },
        ],
      },
      //الموضوع 5
      //عبادات
      //الدروس
      //1 الطهارة و الوضوء , فرائض الوضوء - سنن الوضوء
      //2 فضل الوضوء
      {
        chapter_id: "1-5",
        chapter_name: "عبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-5-1",
            lesson_name: "الطهارة و الوضوء , فرائض الوضوء - سنن الوضوء",
            videos: [
              {
                video_id: "1-5-1-1",
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/eynkdO7SLcU?si=QmkEDO5Q6W05u5b7",
              },
              {
                video_id: "1-5-1-2",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/c4tUsNTCdng?si=MNHWPrHK6ZDA2G4F",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-5-2",
            lesson_name: "فضل الوضوء",
            videos: [
              {
                video_id: "1-5-2-1",
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/g30CV4Z7cMU?si=Hz6Lld_vEeBzwNRa",
              },
              {
                video_id: "1-5-2-2",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/eVnOwMPlF9s?si=XTNV8UlnTt0N5X4v",
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
                video_title: "ميس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/_W6kvXN1X6k?si=1qPM5jJGiVsE7qgO",
              },
              {
                video_id: "1-6-1-2",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/-O9L-qctBTM?si=at4d1fgMJwSXgTwW",
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
                video_title: "مس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/EiXmevslX3g?si=W_NO_1msWyFif56o",
              },
              {
                video_id: "2-1-1-1",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/fIYaHv9JG7Y?si=p7kAFb1oxoD2t-hV",
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
                video_title: "مس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/u3g8PbVK2lw?si=65hUJFlOh1F4BnZ4",
              },
              {
                video_id: "2-1-2-2",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/fTmp5no0pBo?si=UNP9GHtGGrRAdvVA",
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
                video_title: "مس ماهيتاب",
                video_link:
                  "https://www.youtube.com/embed/qDeajbUHDjk?si=aYwSa_p37F2TK2fY",
              },
              {
                video_id: "2-1-3-2",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/ySQjt0FogJM?si=v365KwZ3FBGD_4xo",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //اخلاق و آداب
      //الدروس
      //1 الغلام المعلم عبدالله بن مسعود
      {
        chapter_id: "2-2",
        chapter_name: "اخلاق و آداب",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الغلام المعلم عبدالله بن مسعود",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/2sZkObbqw6k?si=SoOKtFrPnDkC9ufg",
              },
              {
                video_id: "2-2-1-2",
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
            lesson_name: "يونس - علية السلام الجزء 1",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/CIJqAAlnoeE?si=Bc-Gfj58o79X3dW0",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "يونس - علية السلام الجزء 2",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/zkvQuK3vxh0?si=jNTiJplem4Ac4eoX",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/thv6zg_-Oqc?si=t1lczGGr3-FeD7Xp",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/Eei37w230FQ?si=pHhB0YnzTtov2WHH",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/QXhRDd4bdiA?si=wyYBd-cJPj1nJHdG",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/xgbg-DlB_mM?si=W5CSpmCekeXZHjvT",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/0CPXa9uEYzM?si=bfvbI7NiiBeQlG7g",
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
                video_title: "احمد توفيق مراد",
                video_link:
                  "https://www.youtube.com/embed/bwrNNHPdB4k?si=wJIsLOZM2ShSqqAi",
              },
            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g3_t1_islamic_lessons, "g3_t1_islamic_lessons");
