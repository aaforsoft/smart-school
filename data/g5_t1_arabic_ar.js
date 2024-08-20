import { draw_sub_books_list, draw_lessons ,draw_fullvideo_list } from "./fun.js";
var g5_t1_arabic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1sIsY6TSR-NsQNia9TfmfroU0ztgLm65b/view?usp=drive_link",
  },
  {
    title: "مراجعة المتميز - علي مقررات اكتوبر 2023",
    link: "https://t.me/ELMotamyezSchool/11112",
  },
  {
    title: "مراجعة المتميز - علي مقررات نوفمبر 2023",
    link: "https://t.me/ELMotamyezSchool/11149",
  },
  {
    title: "المهام الادائية جميع المواد",
    link: "https://t.me/ELMotamyezSchool/11171",
  },
];

let g5_t1_arabic_ar_books_elements = "";
g5_t1_arabic_ar_books.forEach(function (item) {
  g5_t1_arabic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_arabic_ar_books").innerHTML +=
  g5_t1_arabic_ar_books_elements;
// full-video -----------
var g5_t1_arabic_ar_fullvideo = [
  {
    video_title: " نتعلم بالراحة - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=gGOP2XZrdl3F-ryM&amp;list=PL_VBdaloj4iMa9HRNXwRry5kzART-81U2",
  },
  {
    video_title: "مصطفي عبد العاطي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=jDtiqjPSHomWnmL9&amp;list=PLNTk23wqJXf8cP27b6mg_5PPYjnpWDzDc",
  },
  {
    video_title: "احمد محمد عبدالجواد - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=rn2vik5HArJfMtCO&amp;list=PLdmjP870vLqzQxlbpVI_YbD4GgkBOCXPB",
  },
  {
    video_title: "ذاكرلي عربي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=nfxFvSXPhYjRqMtf&amp;list=PLmO7YhDrrq7DJqcfF77q7Wvb2Pp7e3HS7",
  },
];

let g5_t1_arabic_ar_fullvideo_elements = "";
g5_t1_arabic_ar_fullvideo.forEach(function (item) {
  g5_t1_arabic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g5_t1_arabic_ar_fullvideo").innerHTML +=
  g5_t1_arabic_ar_fullvideo_elements;
//-------------------
var g5_t1_arabic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول: أكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : عرفت قدراتي
      //1 قصة الاستماع (أنا أستطيع)
      //2 لاحظ واستنتج (حروف تنطق ولا تكتب)
      //3 قصة ( اكتشف مهاراتك )
      //4 لاحظ واكتشف أقسام الكلام
      //5 النص المعلوماتي (الاختلاف والتميز )
      //6 لاحظ واكتشف الأسماء الموصولة
      //7 التعبير الكتابي - كتابة سيرة ذاتية
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الاول: عرفت قدراتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "قصة الاستماع (أنا أستطيع)",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "ذاكرلي عربي",
                video_link:
                  "https://www.youtube.com/embed/4ZLA3sRHF8c?si=gEyDgUZHdiJ82iKG",
              },
              {
                video_id: "1-1-1-2",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/ysuDVbPuZbw?si=jRf_w2SxpSCxFHIq",
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
            lesson_name: "لاحظ واستنتج (حروف تنطق ولا تكتب)",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/1VvnGYNOiGI?si=CXnU5tSMMteBrYAh",
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
            lesson_name: "قصة ( اكتشف مهاراتك )",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "ذاكرلي عربي",
                video_link:
                  "https://www.youtube.com/embed/JchB-0ovOEw?si=FlK79Kw6I0AjWk1P",
              },
              {
                video_id: "1-1-3-2",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/AaMtwPJu6JE?si=GvNU5YNJGvVZ-bpy",
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
            lesson_name: "لاحظ واكتشف أقسام الكلام",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/yAcx2kLr1Jo?si=aE7I1EWsVxZnAI0C",
              },
              {
                video_id: "1-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "النص المعلوماتي (الاختلاف والتميز )",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "ذاكرلي عربي",
                video_link:
                  "https://www.youtube.com/embed/PLkTr81xVb0?si=_9siZ7uAMzmB0Ph-",
              },
              {
                video_id: "1-1-5-2",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/CUyvEp15GtQ?si=aVOsFYkddZg2bD2y",
              },
              {
                video_id: "1-1-5-3",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/VZyXYbig4cs?si=a3psFsNIq2XtEQOl",
              },
              {
                video_id: "1-1-5-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-1-6",
            lesson_name: "لاحظ واكتشف الأسماء الموصولة",
            videos: [
              {
                video_id: "1-1-6-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/LXAn9uUvses?si=wl8k4vT2H88T3uik",
              },
              {
                video_id: "1-1-6-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-1-7",
            lesson_name: "التعبير الكتابي - كتابة سيرة ذاتية",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "ذاكرلي عربي",
                video_link: "https://www.youtube.com/embed/ssAHcJ_0P4I?si=NTftYyv3lupjjjZ1",
              },
              {
                video_id: "1-1-7-2",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/XBncsw_gE4c?si=dBf1ZtDcJLWlQbdU",
              },
              {
                video_id: "1-1-7-3",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/SwkFGYIWcF8?si=izlZALxT1NW9kMh3",
              },
              {
                video_id: "1-1-7-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : تساءلت وبادرت
      //1 قصة الاستماع (لماذا ؟)
      //2 لاحظ واستنتج ( الهمزة المتطرفة على السطر)
      //3 النص الشعري (رسالة المعلم)
      //4 لاحظ واكتشف علامات رفع المبتدأ والخبر والفاعل
      //5 النص المعلوماتي (الأهم فالمهم)
      //6 الاحظ واكتشف المفعول به
      //7 التعبير الكتابي كتابة استقصاء
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني : تساءلت وبادرت",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "قصة الاستماع (لماذا ؟)",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "ذاكرلي عربي",
                video_link: "https://www.youtube.com/embed/3WOKEHtz1Ks?si=iYhZS4L_t0VSQwRD",
              },
              {
                video_id: "1-2-1-2",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/WQ5jRM9Zj5k?si=aN2oVhpV33nBxZ6a",
              },
              {
                video_id: "1-2-1-3",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/1sF21XDPpQs?si=09VU3jNUDuMOZEZT",
              },
              {
                video_id: "1-2-1-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "لاحظ واستنتج ( الهمزة المتطرفة على السطر)",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/t77iQEOkpCU?si=0cxaHg-rKuJfAvVY",
              },
              {
                video_id: "1-2-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "النص الشعري (رسالة المعلم)",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/HZZkooxrtI4?si=rF74cmuOKLYBPBKU",
              },
              {
                video_id: "1-2-3-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/fuQ6xhjNMRM?si=dKvcfFXlFzeagSoq",
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
            lesson_name: "لاحظ واكتشف علامات رفع المبتدأ والخبر والفاعل",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "ذاكرلي عربي",
                video_link: "https://www.youtube.com/embed/PXmppDI-J-0?si=HsATQBP80jb05uLa",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "النص المعلوماتي (الأهم فالمهم)",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/pF7rFFYiW8o?si=M9HADr2KZL9g2_Oy",
              },
              {
                video_id: "1-2-5-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/dCx4YVfgYVI?si=eGTlDyUbyEbITL2i",
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
            lesson_name: "الاحظ واكتشف المفعول به",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "ذاكرلي عربي",
                video_link: "https://www.youtube.com/embed/Bt85LUKF2Xw?si=-XCYWO3ITWwQidx4",
              },
              {
                video_id: "1-2-6-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/P7pIjBGOZ0g?si=gO70zB6E4rr0YHRw",
              },
              {
                video_id: "1-2-6-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-2-7",
            lesson_name: "التعبير الكتابي كتابة استقصاء",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/Ljcx0lkAc_U?si=ZadF-dMeFEDIpjlR",
              },
              {
                video_id: "1-2-7-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/77tymdT-PoM?si=QX57y0zmyk6pZqtY",
              },
              {
                video_id: "1-2-7-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : خططت وثابرت
      //1 قصة سأحاول من جديد
      //2 لاحظ واكتشف أهمية ضبط الكلمات
      //3 لاحظ واكتشف تقديم المفعول به على الفاعل
      //4 قصة السمكات الثلاث كليلة ودمنة
      //5 لاحظ واكتشف إعراب الفاعل والمفعول به في حالة الإفراد
      //6 التعبير الكتابي كتابة قصة قصيرة
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث : خططت وثابرت",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "قصة سأحاول من جديد",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/4r-O6tfRil0?si=15CzWf0dyVPgvZRP",
              },
              {
                video_id: "1-3-1-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/M2gs_oG9GNY?si=EmcvAriLH-RT7HM_",
              },
              {
                video_id: "1-3-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          // {
          //   lesson_id: "1-3-2",
          //   lesson_name: "لاحظ واكتشف أهمية ضبط الكلمات",
          //   videos: [
          //     {
          //       video_id: "1-3-2-1",
          //       video_title: "",
          //       video_link: "",
          //     },
          //   ],
          // },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "لاحظ واكتشف تقديم المفعول به على الفاعل",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "ياسمين كمال",
                video_link: "https://www.youtube.com/embed/tsIS3_rIZhc?si=BxdeNFzv0d_L5JXu",
              },
              {
                video_id: "1-3-3-2",
                video_title: "مصطفي الرشيدي",
                video_link: "https://www.youtube.com/embed/dcIo2_mHZF0?si=Es0A4LcYRfnYQzC-",
              },
              {
                video_id: "1-3-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "قصة السمكات الثلاث كليلة ودمنة",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "نتعلم بالراحة",
                video_link: "https://www.youtube.com/embed/VHr68ezw_A4?si=pdejKqJkKL17P7_l",
              },
              {
                video_id: "1-3-4-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/srNuE0hZlm0?si=_2MTCeFOH97K6gaK",
              },
              {
                video_id: "1-3-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به في حالة الإفراد",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/KifKomXlAIY?si=NcfLyMRfH-G3cMtn",
              },
              {
                video_id: "1-3-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name: "التعبير الكتابي كتابة قصة قصيرة",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "اشرحلي شكرا",
                video_link: "https://www.youtube.com/embed/EjxSVXGsZ-c?si=4c03o25bnwDy2JwR",
              },
              {
                video_id: "1-3-6-2",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/Q2jC_Mw2dgI?si=f445L_LkGYa6sRPF",
              },
              {
                video_id: "1-3-6-3",
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
  // المحور الثاني : علاقاتي مع الآخرين
  {
    section_id: "2",
    section_name: "المحور الثاني : علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // الموضوع الاول :  أشكالهم تميزهم
      //1 قصة الاستماع (أنت أجمل )
      //2 لاحظ واستنتج ( الهمزة المتوسطة )
      //3 قصة الأرانب وملك الفيلة كليلة ودمنة
      //4 لاحظ واكتشف إعراب الفاعل والمفعول به المثنى
      //5 النص المعلوماتي الجمال الحقيقي
      //6 لاحظ واكتشف إعراب الفاعل والمفعول به جمع التكسير
      //7 التعبير الكتابي كتابة وصف
      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الاول :  أشكالهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "قصة الاستماع (أنت أجمل )",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/QG-uR_MQn9M?si=jjGllys6WAF8Gcmd",
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
            lesson_name: "لاحظ واستنتج ( الهمزة المتوسطة )",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "ياسمين كمال",
                video_link: "https://www.youtube.com/embed/_DB7gFlhJZA?si=ls8YnKgHPxReTmLZ",
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
            lesson_name: "قصة الأرانب وملك الفيلة كليلة ودمنة",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/92o6yHt2Tug?si=t4Qd5rVzV-xFD-Bh",
              },
              {
                video_id: "2-1-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به المثنى",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "ذاكرلي عربي",
                video_link: "https://www.youtube.com/embed/dS0CEkOH1QU?si=XS2hpkLhcehD9kFJ",
              },
              {
                video_id: "2-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "النص المعلوماتي الجمال الحقيقي",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/NR1dPgDg8KA?si=d6t0xCsK5oeztC7E",
              },
              {
                video_id: "2-1-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "لاحظ واكتشف إعراب الفاعل والمفعول به جمع التكسير",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/HkudebVKIDY?si=wy0oT7RFf5vjAK35",
              },
              {
                video_id: "2-1-6-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-1-7",
            lesson_name: "التعبير الكتابي كتابة وصف ",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/tpANR-MDntg?si=icYSjC3lUj1oIMM7",
              },
              {
                video_id: "2-1-7-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني : لغاتهم تميزهم
      //1 قصة الاستماع (صداقة بلا قيود)
      //2 لاحظ واستنتج علامات الترقيم
      //3 النص الشعري (لغة الأجداد).
      //4 لاحظ واكتشف إعراب الفاعل والمفعول به جمع المذكر السالم
      //5 النص المعلوماتي مميزون باختلاف
      //6 لاحظ واكتشف إعراب الفاعل والمفعول به جمع المؤنث السالم
      //7 التعبير الكتابي كتابة مناقشة فكرة
      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني : لغاتهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "قصة الاستماع (صداقة بلا قيود)",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/GKnSqhIeUMk?si=VBK1gGVN7hX8vvN6",
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
            lesson_name: "لاحظ واستنتج علامات الترقيم",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "احمد محمد عبدالجواد",
                video_link: "https://www.youtube.com/embed/wjNhdjhOn04?si=-T9m6ZmfQsKUGpFJ",
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
            lesson_name: "النص الشعري (لغة الأجداد)",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/NhfB2NYlOak?si=ZOoU36BRO-JaS_K5",
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
            lesson_name:
              "لاحظ واكتشف إعراب الفاعل والمفعول به جمع المذكر السالم",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "احمد محمد عبدالجواد",
                video_link: "https://www.youtube.com/embed/uxbEqtg_ShE?si=8EQjtIF4RiZTqNjC",
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
            lesson_name: "النص المعلوماتي مميزون باختلاف",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/DcuU5KFPPBA?si=xiEngsxL5RlnRz-T",
              },
              {
                video_id: "2-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-2-6",
            lesson_name:
              "لاحظ واكتشف إعراب الفاعل والمفعول به جمع المؤنث السالم",
            videos: [
              {
                video_id: "2-2-6-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/sR2Iyky8fv0?si=vQCqjFW0vt0WAvhd",
              },
              {
                video_id: "2-2-6-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-2-7",
            lesson_name: "التعبير الكتابي كتابة مناقشة فكرة",
            videos: [
              {
                video_id: "2-2-7-1",
                video_title: "حسام ابو انس",
                video_link: "https://www.youtube.com/embed/vFjkDDnNHjo?si=uKea_kaZcnFEwQQk",
              },
              {
                video_id: "2-2-7-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث : عاداتهم تميزهم
      //1 قصة شتاء دافئ وجميل
      //2 لاحظ واكتشف (مراجعة على إعراب الفاعل والمفعول به)
      //3 النص المعلوماتي (طعامهم يميزهم)
      //4 لاحظ واكتشف (مراجعة عامة)
      //5 التعبير الكتابي كتابة مقالة رأي
      //6 معجمي الصغير
      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث : عاداتهم تميزهم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة شتاء دافئ وجميل",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/F_4U5jIxrWI?si=Hb-pz91xcLa_43dX",
              },
              {
                video_id: "2-3-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "لاحظ واكتشف (مراجعة على إعراب الفاعل والمفعول به)",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "الاستاذ / مصطفي عبدالعاطي",
                video_link: "https://www.youtube.com/embed/fk9emGTrm-Y?si=pCJMPHi9PH264CPZ",
              },
              {
                video_id: "2-3-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name: "النص المعلوماتي (طعامهم يميزهم)",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "احمد محمد عبدالجواد",
                video_link: "https://www.youtube.com/embed/BO_Nfk9UIeY?si=Yv1YdWRIfrRpVoXW",
              },
              {
                video_id: "2-3-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "لاحظ واكتشف (مراجعة عامة)",
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
            lesson_name: "التعبير الكتابي كتابة مقالة رأي",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "احمد محمد عبدالجواد",
                video_link: "https://www.youtube.com/embed/bsIl2-7WDPk?si=o6OMvYkEyoehFoPZ",
              },
              {
                video_id: "2-3-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },

          //الدرس 7
          {
            lesson_id: "2-3-6",
            lesson_name: "معجمي الصغير",
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

draw_lessons(g5_t1_arabic_ar_lessons, "g5_t1_arabic_ar_lessons");
