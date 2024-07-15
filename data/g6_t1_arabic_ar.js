import {
  draw_sub_books_list,
  draw_lessons,
  draw_fullvideo_list,
} from "./fun.js";
var g6_t1_arabic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1VQOOAV0_-xDVh5KcaLtgFhwmznShfK7D/view?usp=drive_link",
  },
];

let g6_t1_arabic_ar_books_elements = "";
g6_t1_arabic_ar_books.forEach(function (item) {
  g6_t1_arabic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g6_t1_arabic_ar_books").innerHTML +=
  g6_t1_arabic_ar_books_elements;

// full-video -----------
var g6_t1_arabic_ar_fullvideo = [
  {
    video_title: "الدكتور وائل - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=VctBno8wLduTZgAX&amp;list=PL2txTOcvKlzVSys_h4XbbmItY2_H-6mxf",
  },
  {
    video_title: "مصطفي عبده - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=sdxxGgyblmgQwBOx&amp;list=PLNTk23wqJXf8sSajx-rNMFt8R1S5676Zl",
  },
  {
    video_title: " مصطفي عبده - اختبارات 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=4cR1TaHrik4L6q3r&amp;list=PLNTk23wqJXf8dB-s0YAhNqN4fz2L7Ylbo",
  },
  {
    video_title: " مصطفي عبده - دروس نحو 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=Cbg5XM1G0DvxV_Fe&amp;list=PLNTk23wqJXf-gou7CvpI6Jt9n6Z-qm3gg",
  },
  {
    video_title: " التأسيس السليم - شرح 2024",
    video_link:
      "https://www.youtube.com/embed/videoseries?si=RsvtCQYwVizM8kzP&amp;list=PLSceolq2C1zPP77_noSxp3vmiZXhqtrzZ",
  },
];

let g6_t1_arabic_ar_fullvideo_elements = "";
g6_t1_arabic_ar_fullvideo.forEach(function (item) {
  g6_t1_arabic_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g6_t1_arabic_ar_fullvideo").innerHTML +=
  g6_t1_arabic_ar_fullvideo_elements;
//-------------------

var g6_t1_arabic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحور الأول: أكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : عقلي
      //1 نص الاستماع : كن و لاتكن
      //2 القواعد الإملائية : التنوين على الهمزة المتطرفة
      //3 النص القصصي : ما السر؟
      //4 لاحظ واكتشف : مراجعة على علامات الإعراب
      //5 النص المعلوماتي : التفكير وسبل النجاح
      //6 لاحظ واكتشف : الاسم النكرة والاسم المعرفة
      //7 التعبير الكتابي : كتابة مذكرات يومية
      {
        chapter_id: "1-1",
        chapter_name: "الموضوع الأول: عقلي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "نص الاستماع: كن و لاتكن",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/5G9U9gDVnC8?si=fvpjjLfdIcfC4wRH",
              },
              {
                video_id: "1-1-1-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/QBzHzOolpOA?si=oa9HG0dHbDBMEC8g",
              },
              {
                video_id: "1-1-1-3",
                video_title: "مصطفي عبده- مراجعة عامة",
                video_link:
                  "https://www.youtube.com/embed/--CKWaZzvUc?si=1StdKP2vjBKIt5hq",
              },
              {
                video_id: "1-1-1-4",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "القواعد الإملائية: التنوين على الهمزة المتطرفة",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/C2OjutTc20M?si=LsZ50dylMeuPFObD",
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
            lesson_name: "النص القصصي: ما السر؟",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "احمد محمد عبدالجواد",
                video_link:
                  "https://www.youtube.com/embed/f858INpUxKw?si=9rlFeVmN_TWdGCee",
              },
              {
                video_id: "1-1-3-2",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/bY7qMxMp-dE?si=kFIBEQsrwPBYZrpt",
              },
              {
                video_id: "1-1-3-3",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/IYM2uhuBC8k?si=WrE4ODG8mmrlR2Vm",
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
            lesson_name: "لاحظ واكتشف: مراجعة على علامات الإعراب",
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
            lesson_name: "النص المعلوماتي: التفكير وسبل النجاح",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/HfsI1EOtlvQ?si=qKBKcqNqoABAZpCx",
              },
              {
                video_id: "1-1-5-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/EDo8EHZnAdc?si=-wWEGBTUyz-vQnhX",
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
            lesson_name: "لاحظ واكتشف: الاسم النكرة والاسم المعرفة",
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
            lesson_name: "التعبير الكتابي: كتابة مذكرات يومية",
            videos: [
              {
                video_id: "1-1-7-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/lhbph7bMsjs?si=RbOrO3Y8q5TBxiRq",
              },
              {
                video_id: "1-1-7-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/LKraeUBo858?si=kuikSwlpRPPoMQry",
              },
              {
                video_id: "1-1-7-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // الموضوع الثاني :  قدراتي
      //1 النص الشعري : في يوم الشباب
      //2 لاحظ واكتشف : الضمائر البارزة
      //3 النص المعلوماتي : أنا ذكي
      //4 لاحظ واكتشف : الضمير المستتر
      //5 التعبير الكتابي : رسالة الرد على القراء
      {
        chapter_id: "1-2",
        chapter_name: "الموضوع الثاني: قدراتي",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "النص الشعري: في يوم الشباب",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/PnSL35cFz9U?si=g-L6GXt3IMBQFf-W",
              },
              {
                video_id: "1-2-1-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/7WlI1EnMJB8?si=SsTxHJmniiywXSJi",
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
            lesson_name: "لاحظ واكتشف: الضمائر البارزة",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/t50mUUum0ho?si=BxdiLHVd0os3Id51",
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
            lesson_name: "النص المعلوماتي: أنا ذكي",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/ACSKfN8Ogvs?si=-5THIHyH4TAlDkmT",
              },
              {
                video_id: "1-2-3-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/DUqX94T6t0s?si=xXCBh9PbtzKapdz1",
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
            lesson_name: "لاحظ واكتشف: الضمير المستتر",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/xfdphK9sMGI?si=Y4RMH_hVhbTnZMGm",
              },
              {
                video_id: "1-2-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "التعبير الكتابي: رسالة الرد على القراء",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/G4iJ1_DwKBc?si=d-o4frdaKXK5ulfo",
              },
              {
                video_id: "1-2-5-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/zgI4rD9fIKA?si=Ip0maYFZKHfB93Q0",
              },
              {
                video_id: "1-2-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث :  فكري
      // قصة الاستماع : إصراري سر نجاحي
      // القواعد الإملائية الشدة واللام الشمسية
      // النص المعلوماتي : فكر بإبداع
      // لاحظ واكتشف : مراجعة عامة
      // التعبير الكتابي كتابة حوار
      {
        chapter_id: "1-3",
        chapter_name: "الموضوع الثالث: فكري",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "قصة الاستماع: إصراري سر نجاحي",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/EPbMTnlqex8?si=rNCz5zyMRiuI09YS",
              },
              {
                video_id: "1-3-1-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/nJ90H96WIfk?si=CgKMKUV-jLKWfBwR",
              },
              {
                video_id: "1-3-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "القواعد الإملائية: الشدة واللام الشمسية",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/Wa0oTFDFsOM?si=GekBJ5vL20c_ZBHK",
              },
              {
                video_id: "1-3-2-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "النص المعلوماتي: فكر بإبداع",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/IwNlID63_vM?si=jnL7kpCWkl-UwsCg",
              },
              {
                video_id: "1-3-3-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/xMT4pomDDEs?si=-QbUbDnDu2iYeBPC",
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
            lesson_name: "لاحظ واكتشف: مراجعة عامة",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "التعبير الكتابي : كتابة حوار",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/oodtd2cXw-E?si=WMoKgOyV2Mh7PLw9",
              },
              {
                video_id: "1-3-5-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/8OG_pjwlszY?si=NiO0iTWd6jV2WIK0",
              },
              {
                video_id: "1-3-5-3",
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
    section_name: "المحور  الثاني : علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // الموضوع الاول : الاستماع
      //1 نص الاستماع : حوار مع المعلمين
      //2 القواعد الإملائية : المد
      //3 النص القصصي : أذناي بخير
      //4 لاحظ واكتشف : الأسماء الخمسة - علامات إعرابها وشروطها
      //5 النص المعلوماتي : فن الاستماع
      //6 لاحظ واكتشف : الخبر المفرد والخبر الجملة الاسمية
      //7 التعبير الكتابي : كتابة سرد وصفي
      {
        chapter_id: "2-1",
        chapter_name: "الموضوع الأول: الاستماع",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "نص الاستماع: حوار مع المعلمين",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/niGpbZjKl-U?si=TMINjvPlcPfGFtMN",
              },
              {
                video_id: "2-1-1-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/O-q7RmJpEl4?si=iOs8rGojS0de3rE4",
              },
              {
                video_id: "2-1-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "القواعد الإملائية: المد",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/ldUXBeECGok?si=fgqRAIJBw-3UyJYi",
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
            lesson_name: "النص القصصي: أذناي بخير",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/R6hMAzegqSY?si=grp7EnzerMwrWdD5",
              },
              {
                video_id: "2-1-3-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/Ef1moAs8MkM?si=MG-lEFsUOQRsh2tt",
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
            lesson_name: "لاحظ واكتشف: الأسماء الخمسة - علامات إعرابها وشروطها",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/jK-EyI7Eqx8?si=54-Eewxdd-3E-swE",
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
            lesson_name: "النص المعلوماتي: فن الاستماع",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/VQcTkRRh1dE?si=qK2GBM75wXGc6ij8",
              },
              {
                video_id: "2-1-5-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/vxnZlsutbWs?si=ZgCkI0CklfxUkuaK",
              },
              {
                video_id: "2-1-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "2-1-6",
            lesson_name: "لاحظ واكتشف: الخبر المفرد والخبر الجملة الاسمية",
            videos: [
              {
                video_id: "2-1-6-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/Engq10NO5Aw?si=7apneP15v_R6lePh",
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
            lesson_name: "التعبير الكتابي: كتابة سرد وصفي",
            videos: [
              {
                video_id: "2-1-7-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/PoNyYvBd1H8?si=nzbqjTX3cAfANFwz",
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
      // الموضوع الثاني :  التواصل
      //1 النص الشعري : دع الأيام تفعل ما تشاء
      //2 لاحظ واكتشف الخبر الجملة الفعلية والخبر شبه الجملة
      //3 النص المعلوماتي : الإشارة تواصل
      //4 لاحظ واكتشف الأفعال الناسخة : كان وأخواتها
      //5 التعبير الكتابي : الخطبة
      {
        chapter_id: "2-2",
        chapter_name: "الموضوع الثاني: التواصل",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "النص الشعري: دع الأيام تفعل ما تشاء",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/kpHbZrL2PzA?si=R98JH-BhduBPk17q",
              },
              {
                video_id: "2-2-1-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/mptu1woU9fQ?si=tWp0nUHayLPMUuP0",
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
            lesson_name: "لاحظ واكتشف الخبر الجملة الفعلية والخبر شبه الجملة",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/Engq10NO5Aw?si=7apneP15v_R6lePh",
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
            lesson_name: "النص المعلوماتي: الإشارة تواصل",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/jtpoilVDBT4?si=GGUuOhi0XVI2F663",
              },
              {
                video_id: "2-2-3-2",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/_3ttRw6l_dE?si=H2AFtpf5jQ_x773x",
              },
              {
                video_id: "2-2-3-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "لاحظ واكتشف الأفعال الناسخة: كان وأخواتها",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/HJQJgHxTJHk?si=0lWJOx7I_VBF6sw6",
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
            lesson_name: "التعبير الكتابي: الخطبة",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/EfulEngnW-o?si=79Sgtg2aMEGKLz3A",
              },
              {
                video_id: "2-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // الموضوع الثالث :  آداب الحوار
      //1 قصة الاستماع : اتصال أم انفصال ؟
      //2 القواعد الإملائية : التاء المربوطة والتاء المفتوحة والهاء
      //3 النص المعلوماتي : آداب الحديث
      //4 لاحظ واكتشف الحروف الناسخة : إن وأخواتها
      //5 التعبير الكتابي كتابة منشور
      {
        chapter_id: "2-3",
        chapter_name: "الموضوع الثالث: آداب الحوار",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "قصة الاستماع: اتصال أم انفصال ؟",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/FJDjRFqggBw?si=sF1tpm2yS6IwoIIy",
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
            lesson_name:
              "القواعد الإملائية: التاء المربوطة والتاء المفتوحة والهاء",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/rUevJqLEORU?si=Fe665YGAaQPJwjVR",
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
            lesson_name: "النص المعلوماتي: آداب الحديث",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/Pu6rOAJxhZc?si=nYdEL2pzlFWRp7Q0",
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
            lesson_name: "لاحظ واكتشف الحروف الناسخة: إن وأخواتها",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "مصطفي عبده",
                video_link:
                  "https://www.youtube.com/embed/tTisMwMeQb4?si=D48e2ncMpmfP1A14",
              },
              {
                video_id: "2-3-4-2",
                video_title: "مصطفي عبده-2",
                video_link:
                  "https://www.youtube.com/embed/n3pTnaWI1do?si=nNaoVyUY4hjTRBg4",
              },
              {
                video_id: "2-3-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-3-5",
            lesson_name: "التعبير الكتابي: كتابة منشور",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "الدكتور وائل",
                video_link:
                  "https://www.youtube.com/embed/5_GHvh0QoCQ?si=OEoWc24SUjkaTwhr",
              },
              {
                video_id: "2-3-5-2",
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

draw_lessons(g6_t1_arabic_ar_lessons, "g6_t1_arabic_ar_lessons");
