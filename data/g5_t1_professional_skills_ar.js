import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_professional_skills_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1vZ6AsdgSzob3aIc6JudNQrGKHdJr65Jd/view?usp=drive_link",
  },
];

let g5_t1_professional_skills_ar_books_elements = "";
g5_t1_professional_skills_ar_books.forEach(function (item) {
  g5_t1_professional_skills_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_professional_skills_ar_books").innerHTML +=
  g5_t1_professional_skills_ar_books_elements;

var g5_t1_professional_skills_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول",
    chapters: [
      //الموضوع 1
      // ارتباط المهن و الفنون بالمجتمع
      //1 الموضوع الأول: الحقوق والمسئوليات
      //2 الموضوع الثاني : دعم المدرسة للتلاميذ والمجتمع
      //3 الموضوع الثالث : الزراعة في حديقة المدرسة
      //4 الموضوع الرابع : مهارات الحوار
      //5 الموضوع الخامس : مصادر البحث المختلفة
      //6 الموضوع السادس: العمل في قطاع السياحة
      //7 الموضوع السابع : الحرف اليدوية وقطاع السياحة
      //8 الموضوع الثامن : من الحرف اليدوية : النجارة
      //9 الموضوع التاسع : اصنع بنفسك
      {
        chapter_id: "1-1",
        chapter_name: "ارتباط المهن و الفنون بالمجتمع",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الموضوع الأول: الحقوق والمسئوليات",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مس قوت القلوب",
                video_link:
                  "https://www.youtube.com/embed/WHeMCGVpejc?si=3EUCkzb0rQVpCXiP",
              },
              {
                video_id: "1-1-1-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/BIUM4pqA1PA?si=N-s5rQf88PF_nyAv",
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
            lesson_name: "الموضوع الثاني : دعم المدرسة للتلاميذ والمجتمع",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/ksBP9pmY84E?si=IP6rMhfO4xfySq5p",
              },
              {
                video_id: "1-1-2-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/jJCZ9O8otu4?si=RNay48QhQnMoXLSj",
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
            lesson_name: "الموضوع الثالث : الزراعة في حديقة المدرسة",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/Vs_Siw6kY7Y?si=TOVE7bK6uaLzuGTW",
              },
              {
                video_id: "1-1-3-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/Gr2Cf5i4_AI?si=RgdtRCZ9V6corK4F",
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
            lesson_name: "الموضوع الرابع : مهارات الحوار",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/i5dCzJPzvnU?si=jfJuk_Qqa4pCbR6j",
              },
              {
                video_id: "1-1-4-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/ynaVdmMD3FA?si=eF4LAAhAw3kromXK",
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
            lesson_name: "الموضوع الخامس : مصادر البحث المختلفة",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/Zr2oUUSFhnM?si=bkNZL0KHDozVZTsg",
              },
              {
                video_id: "1-1-5-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/LVy3E1rlClI?si=ZweFnxyKPXzy6i5B",
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
            lesson_name: "الموضوع السادس: العمل في قطاع السياحة",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/nV5fx9X9cO0?si=AipORdXHRki3i9n8",
              },
              {
                video_id: "1-1-6-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/7zJAT5mMNMw?si=uV_fxvJVnPHTAj8R",
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
            lesson_name: "الموضوع السابع : الحرف اليدوية وقطاع السياحة",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/b0xExoewBnY?si=YkCU_tbqMSDljN4K",
              },
              {
                video_id: "1-1-7-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/aDyDhk17ujU?si=axMCP6_FDE9BZ3BM",
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
            lesson_name: "الموضوع الثامن : من الحرف اليدوية : النجارة",
            videos: [
              {
                video_id: "1-1-8-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/gTbs0LpGvuo?si=3T99mNr8FOFG9fCX",
              },
              {
                video_id: "1-1-8-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/QJFE6qpV4y0?si=Zse5QRTnBY45V9i-",
              },
              {
                video_id: "1-1-8-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 9
          {
            lesson_id: "1-1-9",
            lesson_name: "الموضوع التاسع : اصنع بنفسك",
            videos: [
              {
                video_id: "1-1-9-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/5o8vBB4pAIQ?si=ZRr2cc675GfrRBwq",
              },
              {
                video_id: "1-1-9-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/VbjEotXINcc?si=REM-WPWpnVqVYfNK",
              },
              {
                video_id: "1-1-9-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 10
          {
            lesson_id: "1-1-10",
            lesson_name: "الموضوع العاشر : شخصيات مصرية مؤثرة : الدكتور فاروق الباز",
            videos: [
              {
                video_id: "1-1-9-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/NLD6OIUbs1c?si=GP-x2Zk8TbnMBxip",
              },
              {
                video_id: "1-1-9-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/XTLQIyVI_gw?si=ek0Jry06Ze4sJ5sv",
              },
              {
                video_id: "1-1-9-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 11  
          {
            lesson_id: "1-1-11",
            lesson_name: "الموضوع الحادي عشر : المستكشف النشط البروفيسور بريان بوما",
            videos: [
              {
                video_id: "1-1-11-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/dhFz5FbR4P0?si=iozjOOl2VHU4O-2n",
              },
              {
                video_id: "1-1-11-2",
                video_title: "منصات تعليمية الجزء الأول",
                video_link: "https://www.youtube.com/embed/4TArX1vL634?si=7E38j6N7T2AAwPOG",
              },
              {
                video_id: "1-1-11-3",
                video_title: "منصات تعليمية الجزء الثاني", 
                video_link: "https://www.youtube.com/embed/f1g44z1FOys?si=kou5p8ZLOgRZDHue",
              },
              {
                video_id: "1-1-11-4",
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
      // الحياة و العمل من أجل التنمية المستدامة
      //1 الموضوع الأول: الحفاظ على المدرسة
      //2 الموضوع الثاني: التخطيط وإدارة الوقت
      //3 الموضوع الثالث : إعادة تدوير مخلفات النباتات
      //4 الموضوع الرابع : نفايات ذات قيمة
      //5 الموضوع الخامس : الفن في مصر القديمة
      //6 شخصيات مصرية مؤثرة : الدكتور مصطفى السيد
      //7 المستكشف النشط ك. م . رييس
      {
        chapter_id: "1-2",
        chapter_name: "الحياة و العمل من أجل التنمية المستدامة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الموضوع الأول: الحفاظ على المدرسة",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/nTdom7sMQnU?si=qkaLbOIEpX7vibi9",
              },
              {
                video_id: "1-2-1-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/IWvWnykvchA?si=LASoixlwwcNLXD3h",
              },
              {
                video_id: "1-2-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "الموضوع الثاني: التخطيط وإدارة الوقت",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/D8dOvAbvFbQ?si=XX1hJr_p14fX3X1e",
              },
              {
                video_id: "1-2-2-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/_vQITH1FVaQ?si=LEI7lEpiu6X_pcCr",
              },
              {
                video_id: "1-2-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "الموضوع الثالث : إعادة تدوير مخلفات النباتات",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/wl2WXInygB0?si=dQ4gQtS7gdkzC_hR",
              },
              {
                video_id: "1-2-3-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/U9PVoZ7D2Zs?si=0wQ3PVHb0gjpIswk",
              },
              {
                video_id: "1-2-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "الموضوع الرابع : نفايات ذات قيمة",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/aPy2MRasVVY?si=3Bhazb6Wway9dIAL",
              },
              {
                video_id: "1-2-4-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/qkVqQa5IFro?si=dAbKh-8vdF2nE3w2",
              },
              {
                video_id: "1-2-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "الموضوع الخامس : الفن في مصر القديمة",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "مس قوت القلوب",
                video_link: "https://www.youtube.com/embed/VXTyRytveGw?si=v-TVZhVaitzIiTq3",
              },
              {
                video_id: "1-2-5-2",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/fnMVgSVjG-c?si=g4nWYFMDsIdQVrDp",
              },
              {
                video_id: "1-2-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name: "شخصيات مصرية مؤثرة : الدكتور مصطفى السيد",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/_x_UV6Cd-xM?si=lFktQbNtDEXmsji3",
              },
              {
                video_id: "1-2-6-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-2-7",
            lesson_name: "المستكشف النشط ك. م . رييس",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "منصات تعليمية",
                video_link: "https://www.youtube.com/embed/wayACL2fN0w?si=sni7WpPVBqDhPQIY",
              },
              {
                video_id: "1-2-7-2",
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
  g5_t1_professional_skills_ar_lessons,
  "g5_t1_professional_skills_ar_lessons"
);
