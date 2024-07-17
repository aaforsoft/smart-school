import { draw_sub_books_list, draw_lessons , draw_fullvideo_list} from "./fun.js";
var g3_t1_arabic_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1fbF5BMUza7csyAvOWH49NGb972idv2Wi/view?usp=sharing",
  },
];

let g3_t1_arabic_books_elements = "";
g3_t1_arabic_books.forEach(function (item) {
  g3_t1_arabic_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_arabic_books").innerHTML +=
  g3_t1_arabic_books_elements;

// full-video -----------
var g3_t1_arabic_ar_fullvideo = [
  {
    video_title: " تعلم مع نانا - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=Ujjvc6selbjW9FP-&amp;list=PLGQ5CTmTF6n7KuD4VKNtG1Ar3h_FHK2hh",
  },
  {
    video_title: " ميس مها سعيد - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=ht9jxS8vIu2je4JD&amp;list=PLYN5fO69EYaulE-pG-WMUcaOTozkv0I9V",
  },
  {
    video_title: " هشرحلك عربي - شرح 2023",
    video_link: "https://www.youtube.com/embed/videoseries?si=s9EHLC7YQLHHdP8t&amp;list=PLuoT9dmk_3n2WcnPzCgbKzojn-72xydmL",
  },
];

let g3_t1_arabic_ar_fullvideo_elements = "";
g3_t1_arabic_ar_fullvideo.forEach(function (item) {
  g3_t1_arabic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g3_t1_arabic_ar_fullvideo").innerHTML +=
  g3_t1_arabic_ar_fullvideo_elements;
//-------------------
var g3_t1_arabic_lessons = [
  //المحور 1
  {
    section_id: 1,
    section_name: " المحور الأول: مَنْ أكون ؟ الحياة الصحية",
    chapters: [
      //الموضوع 1
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الاول: جسمي السليم",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "مراجعة علي ما سبق دراسته",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "ميس نادية فاروق حصة 1",
                video_link:
                  "https://www.youtube.com/embed/eC0n2_O3bMM?si=CG5Gt9pxR0KqKcuN",
              },
              {
                video_id: "1-1-1-2",
                video_title: "ميس نادية فاروق حصة 2",
                video_link:
                  "https://www.youtube.com/embed/5n8UQOXmU3M?si=lzlpCBjWAMdAc9FB",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "التقييم التشخيصي",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CQNAg075s7E?si=086SoTKt7uc5UnFG",
              },
            ],
          },
          //الدرس 3
          // {
          //   lesson_id: "1-1-3",
          //   lesson_name: "الدليل العام لنصوص الاستماع",
          //   videos: [
          //     {
          //       video_id: "1-1-3-1",
          //       video_title: "",
          //       video_link: "",
          //     },
          //   ],
          // },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name: "قصة الاستماع (أخاف من العدوى)",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/-Jlj4jAAv_0?si=4FwelmVubSCFKV3K",
              },
              {
                video_id: "1-1-4-2",
                video_title: "ميس نادية فاروق",
                video_link:
                  "https://www.youtube.com/embed/-9DyOYC3thc?si=chm3N2wMLBDVUqAP",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-1-5",
            lesson_name: "لاحظ وتعلم التاء المفتوحة والتاء المربوطة، والهاء",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/IrnUSE-WcMs?si=rkGxzbKPU63uD387",
              },
            ],
          },
          //الدرس 6
          // {
          //   lesson_id: "1-1-6",
          //   lesson_name: "الدليل العام لنصوص القراءة وأنشطتها",
          //   videos: [
          //     {
          //       video_id: "1-1-6-1",
          //       video_title: "",
          //       video_link: "",
          //     },
          //   ],
          // },
          //الدرس 7
          {
            lesson_id: "1-1-7",
            lesson_name: "قصة (أدواتي الشخصية)",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/369nbOWr-Rk?si=Uw7MxsrMw83lc8s6",
              },
              {
                video_id: "1-1-7-2",
                video_title: "تمثيل القصة : احمد عبدالجواد",
                video_link:
                  "https://www.youtube.com/embed/uvjHIXvSBjI?si=4Aiv5my3o7iPCwDd",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-1-8",
            lesson_name: "لاحظ واكتشف أسلوب النهي",
            videos: [
              {
                video_id: "1-1-8-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/CRkA4RG0B-s?si=B1sT3VFsL9jLTWQT",
              },
            ],
          },
          //الدرس 9
          {
            lesson_id: "1-1-9",
            lesson_name: "نشيد (صحتنا سر سعادتنا)",
            videos: [
              {
                video_id: "1-1-9-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CcIqwzhk8Ao?si=jl4x4HgFxzxhKzS3",
              },
            ],
          },
          //الدرس 10
          {
            lesson_id: "1-1-10",
            lesson_name: "لاحظ واكتشف ( فعل الأمر )",
            videos: [
              {
                video_id: "1-1-10-1",
                video_title: "تعلم مع نانا",
                video_link:
                  "https://www.youtube.com/embed/YA9UInYpHNw?si=RNclWXaNP5rOrkfr",
              },
            ],
          },
          //الدرس 11
          {
            lesson_id: "1-1-11",
            lesson_name: "التعبير الكتابي نموذج كتابة لافتة مصورة",
            videos: [
              {
                video_id: "1-1-11-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/CRh7rQjj-wg?si=Uibmqsm4ClJDwrrH",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني :  غذائي الصحي ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "قصة الاستماع الأطعمة البحرية",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/hRwDP92A1-A?si=IdDwPJpZ8tCBXNO_",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "لاحظ وتعلم الأصوات الطويلة والقصيرة",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "نهال طارق",
                video_link:
                  "https://www.youtube.com/embed/Yoq4dF_cFiU?si=VCBUBl6PAYAYheAd",
              },
              {
                video_id: "1-2-2-2",
                video_title: "زمرده  ا/ مي",
                video_link:
                  "https://www.youtube.com/embed/dkrBOcogBD8?si=ssAXvXVgqDvuY4ir",
              },

              {
                video_id: "1-2-2-3",
                video_title: "العربي الميسر",
                video_link:
                  "https://www.youtube.com/embed/-auoMFLjOD0?si=mDLUVRg-tvjwe7Vz",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "قصة ( طبق الطعام )",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/rOYu4ZSfOjQ?si=yXpW5ZbRPzqzG-7U",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "لاحظ واكتشف الفعل المضارع مع المذكر والمؤنث",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/_uOXMETVbWk?si=Mw2lKF6SrDx7TJHN",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "النص المعلوماتي (جسمي وعناصر الغذاء)",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/sMFlcjMMs4I?si=Udu3Vmrp6HU-fPip",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name:
              "لاحظ واكتشف لام التعليل وأدوات الاستفهام وعلامات الترقيم",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/TmXJXAOGWso?si=DO94Wmbe_L_QbksT",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-2-7",
            lesson_name: "التعبير الكتابي ( نموذج كتابة مطوية )",
            videos: [
              {
                video_id: "1-2-7-1",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/TutsssSv4EM?si=vZhln0QU8fWDc1uI",
              },
              {
                video_id: "1-2-7-2",
                video_title: "ذاكرلي عربي : كريم شندي",
                video_link:
                  "https://www.youtube.com/embed/xTcdpq1iSkc?si=8d6bmis8Xp4Qjl2S",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الدروس
      //1 قصة الاستماع ( الفوز الحقيقي ) .
      //2  لاحظ وتعلم ( الحركة الطويلة والقصيرة ).
      //3  قصة (أنا قوي )
      //4  (لاحظ واكتشف) أسلوب التعجب
      //5  النص المعلوماتي ( أصغر سباحة ).
      //6  لاحظ واكتشف (الكلمات الدالة على الماضي والمضارع، والفعل الماضي مع المذكر والمؤنث )
      //7  التعبير الكتابي ( نموذج كتابة قصة مصورة )
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث : روحي الرياضية",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "قصة الاستماع ( الفوز الحقيقي )",
            videos: [
              {
                video_id: "1-3-1",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/f_uQfxr2Ehs?si=TJaTb3CRQDjpqT0s",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "لاحظ وتعلم ( الحركة الطويلة والقصيرة )",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "سماح النجار",
                video_link:
                  "https://www.youtube.com/embed/Ddy8jo6jyiY?si=Gq-FjzTYBnkLwayg",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "قصة (أنا قوي)",
            videos: [
              {
                video_id: "1-3-3",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/sCDqLAIX7lA?si=AugI3vIzoI23px7X",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "(لاحظ واكتشف) أسلوب التعجب ",
            videos: [
              {
                video_id: "1-3-4",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/n6hnhYDmQ-s?si=gpaCeUg1LNiUX9gy",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "النص المعلوماتي ( أصغر سباحة )",
            videos: [
              {
                video_id: "1-3-5",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/SuI_6GjcTXk?si=b8OUF0zj1nsm-4N-",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name:
              "لاحظ واكتشف (الكلمات الدالة على الماضي والمضارع، والفعل الماضي مع المذكر والمؤنث )",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "ايمان مدحت",
                video_link:
                  "https://www.youtube.com/embed/EYLPuyKNDQA?si=cvoAtoMErymEJQbl",
              },
              {
                video_id: "1-3-6-2",
                video_title: "نادية مصطفي",
                video_link:
                  "https://www.youtube.com/embed/qElmCOoq4Ro?si=lMvy7-Bo0Ym1pCy6",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-3-7",
            lesson_name: "التعبير الكتابي ( نموذج كتابة قصة مصورة )",
            videos: [
              {
                video_id: "1-3-7",
                video_title: "مستر محمد احمد",
                video_link:
                  "https://www.youtube.com/embed/j_5N34DiktM?si=0248CzrEROrVOIbx",
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
    section_name: "المحور الثاني: العالم من حولي (الاهتمام بعالمنا)",
    chapters: [
      //الموضوع 1
      // الدروس
      //1 قصة الاستماع ( فكرة ومعلومة )
      //2 لاحظ وتعلم الألف اللينة
      //3 قصة في منزلي فراشة
      //4 لاحظ واكتشف ظرف المكان
      //5 نشيد (أرضي موطني)
      //6 لاحظ واكتشف أسلوب النداء
      //7 التعبير الكتابي نموذج كتابة فقرة

      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الاول: الكوكب الذي نعيش فيه",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "قصة الاستماع ( فكرة ومعلومة )",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "نادية مصطفي",
                video_link:
                  "https://www.youtube.com/embed/xNg3fsB8l9Y?si=skAnya0CPvLaEjqr",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "لاحظ وتعلم الألف اللينة",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "محمد عبدالرازق",
                video_link:
                  "https://www.youtube.com/embed/Ia5glKuco7o?si=25u5mfmF6z6IllGo",
              },
              {
                video_id: "2-1-2-2",
                video_title: "مس ايمان",
                video_link:
                  "https://www.youtube.com/embed/TcGHlbsjjdo?si=ShkDFmf12o-YTHiv",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "قصة في منزلي فراشة",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/HTJ-iDncdFU?si=4IUC4Ak8gkJAcxVR",
              },
              {
                video_id: "2-1-3-2",
                video_title: "تعلم مع نانا",
                video_link:
                  "https://www.youtube.com/embed/MeDpN6kQDJM?si=Xg-jr02eNb9hZlIv",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name: "لاحظ واكتشف ظرف المكان",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/p_fp6-dspJ8?si=dhfPpT1tqJigLRdo",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "نشيد (أرضي موطني)",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "محمود اشرف",
                video_link:
                  "https://www.youtube.com/embed/qtVC8cpEIFc?si=PG1d2jNJImtDwzIS",
              },
              {
                video_id: "2-1-5-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/9reYqYEw2KE?si=yNV3ecYCY2qlKQhQ",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "لاحظ واكتشف أسلوب النداء",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/4sPtf8vO_Pk?si=2mxMdGmi9Ag8Mwtb",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-1-7",
            lesson_name: "التعبير الكتابي نموذج كتابة فقرة",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "احمد عبدالجواد",
                video_link:
                  "https://www.youtube.com/embed/igGpsOOkaJI?si=OIwTzD6ERx1u0WtK",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الدروس
      //1 قصة الاستماع (السلحفاة البحرية )
      //2 لاحظ وتعلم (الشدة )
      //3 قصة ( غابات البامبو)
      //4 لاحظ واكتشف (جمع المذكر والمؤنث)
      //5 النص المعلوماتي الشعاب المرجانية
      //6 لاحظ واكتشف (ظرف الزمان )
      //7 التعبير الكتابي نموذج كتابة خبر في جريدة

      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني: نحن و كوكب الارض ",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "قصة الاستماع (السلحفاة البحرية )",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "3d city",
                video_link:
                  "https://www.youtube.com/embed/IA0xQbAcKp8?si=ZlVlji2MoaAxd_tm",
              },
              {
                video_id: "2-2-1-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/wjtdYJhefG0?si=3uD1FfNT_KH9vt77",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "لاحظ وتعلم (الشدة )",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "",
                video_link: "",
              },
              {
                video_id: "2-2-2-2",
                video_title: "نهال طارق",
                video_link:
                  "https://www.youtube.com/embed/p6wWtYsAzmI?si=tftFIAX5M2-oedcF",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "قصة ( غابات البامبو)",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "3d city",
                video_link:
                  "https://www.youtube.com/embed/ysKe2lzMfXc?si=wDODnUnpAT58JVKG",
              },
              {
                video_id: "2-2-3-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/zRJUCqNdsak?si=Z83TazRULufsdAfx",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "لاحظ واكتشف (جمع المذكر والمؤنث)",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "تعلم مع نانا",
                video_link:
                  "https://www.youtube.com/embed/9sjQWcyOito?si=38S36smMi6uQ8GFD",
              },
              {
                video_id: "2-2-4-2",
                video_title: "نهال طارق",
                video_link:
                  "https://www.youtube.com/embed/YkQUFSZy7pQ?si=ROkaXueM6-ZYdJaL",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name: "النص المعلوماتي الشعاب المرجانية",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "شيماء درويش",
                video_link:
                  "https://www.youtube.com/embed/j7sAfV5Vec8?si=kdfaojsLSCgxXM4v",
              },
              {
                video_id: "2-2-5-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/d9Hwpwr-ZPc?si=iO_anr2wyK1YTo2Y",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-2-6",
            lesson_name: "لاحظ واكتشف (ظرف الزمان )",
            videos: [
              {
                video_id: "2-2-6-1",
                video_title: "هشرحلك عربي : محمد فياض",
                video_link:
                  "https://www.youtube.com/embed/p_fp6-dspJ8?si=e_52W76hVZbdJbDa",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-2-7",
            lesson_name: "التعبير الكتابي نموذج كتابة خبر في جريدة",
            videos: [
              {
                video_id: "2-2-7-1",
                video_title: "تعلم مع نانا",
                video_link:
                  "https://www.youtube.com/embed/5jAMknFRAns?si=idilzkBzFtvTGqTr",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // مسئوليتي
      // الدروس
      //1 قصة الاستماع (مقابلة مع عالم بيئة )
      //2 لاحظ وتعلم (التنوين).
      //3 قصة آدم المبتكر
      //4 لاحظ واكتشف ( حروف الجر )
      //5 النص المعلوماتي ( متجر النفايات )
      //6 لاحظ واكتشف ( حروف العطف )
      //7 التعبير الكتابي نموذج كتابة رسالة اقتراح

      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث: مسئوليتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة الاستماع (مقابلة مع عالم بيئة )",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "3d city",
                video_link:
                  "https://www.youtube.com/embed/2Ld6Jou9KMg?si=_d_7lX_IHICzxDBw",
              },
              {
                video_id: "2-3-1-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/6G7E7dlzLis?si=CYti59fsL8_26VXW",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "لاحظ وتعلم (التنوين)",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "جميله عمر",
                video_link:
                  "https://www.youtube.com/embed/z9tZiCWvlwo?si=i1AdHzeQ8_oz_vFs",
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
            lesson_name: "قصة آدم المبتكر",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "3d city",
                video_link:
                  "https://www.youtube.com/embed/d5DIe12lRBM?si=YVEKZBXGXcvv59XS",
              },
              {
                video_id: "2-3-3-2",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/7G7VhCn6YXA?si=3B2s-QxzJJbU2qNG",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "لاحظ واكتشف ( حروف الجر )",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "جميله عمر",
                video_link:
                  "https://www.youtube.com/embed/dplvrH7ghZs?si=GnB9vd_ZDx5CWNMD",
              },
              {
                video_id: "2-3-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-3-5",
            lesson_name: "النص المعلوماتي ( متجر النفايات )",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "مها سعيد",
                video_link:
                  "https://www.youtube.com/embed/9iHFxo7mAyE?si=24HvINxugcNkQ5CQ",
              },
              {
                video_id: "2-3-5-2",
                video_title: "انا عربي : دعاء العقبي",
                video_link:
                  "https://www.youtube.com/embed/Q3VsIBCnHjA?si=W3l2G4L_4CletzvN",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-3-6",
            lesson_name: "لاحظ واكتشف ( حروف العطف )",
            videos: [
              {
                video_id: "2-3-6-1",
                video_title: "مس داليا",
                video_link:
                  "https://www.youtube.com/embed/YS24MyMIhUk?si=d_9w27isQUqvs98r",
              },
              {
                video_id: "2-3-6-2",
                video_title: "تعلم مع نانا",
                video_link:
                  "https://www.youtube.com/embed/341QsJEWTLk?si=AamHLOK6EDkIs_y5",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "2-3-7",
            lesson_name: "التعبير الكتابي نموذج كتابة رسالة اقتراح",
            videos: [
              {
                video_id: "2-3-7-1",
                video_title: "انا عربي : دعاء العقبي",
                video_link:
                  "https://www.youtube.com/embed/IFcuc0y0mmA?si=Xw-C1M62VACFyZLI",
              },
              {
                video_id: "2-3-7-2",
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

draw_lessons(g3_t1_arabic_lessons, "g3_t1_arabic_lessons");
