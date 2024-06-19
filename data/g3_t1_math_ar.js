import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g3_t1_math_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1n4z_eyTg-7qE6iKqIWD3umn9hW8rs7cQ/view?usp=drive_link",
  },
];

let g3_t1_math_ar_books_elements = "";
g3_t1_math_ar_books.forEach(function (item) {
  g3_t1_math_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_math_ar_books").innerHTML +=
  g3_t1_math_ar_books_elements;

var g3_t1_math_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "المحتويات",
    chapters: [
      //الموضوع 1
      //الفصل الاول
      //الدروس
      //1 الدرس 1 الأنماط
      //2 الدرس 2 مزيد من التمثيل البياني بالاعمدة
      //3 الدرس 3 التمثيل البياني بالنقاط
      //4 الدرس 6:4 قياس الاطول بالسنتيمير وبالمتر و بالميليمتر
      {
        chapter_id: "1-1",
        chapter_name: "الفصل الاول",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس 1 الأنماط",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/tt7dnsOXITk?si=sIjiutymTUiYbrlu",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس 2 مزيد من التمثيل البياني بالاعمدة",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/9HohFRtjkts?si=MiJm0dhrlb9a5D4U",
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
            lesson_name: "الدرس 3 التمثيل البياني بالنقاط",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/8LeVDS1Dr88?si=Lp0N5Gud7zGqhyM6",
              },
              {
                video_id: "1-1-3-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/fGB1KuBK3DM?si=Ww9QY_BvvtekQI0i",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-1-4",
            lesson_name:
              "الدرس 6:4 قياس الاطول بالسنتيمير وبالمتر و بالميليمتر",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مستر محمد ابراهيم - المللي متر ",
                video_link:
                  "https://www.youtube.com/embed/yPdhymMOe7M?si=2-ufceWwDjp8CwOd",
              },
              {
                video_id: "1-1-4-2",
                video_title: "مستر محمد ابراهيم - المتر , السنتيمتر ",
                video_link:
                  "https://www.youtube.com/embed/j2S6gtyIeu4?si=FQ-OxvgVYxotj5Ui",
              },
              {
                video_id: "1-1-4-3",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/kfyFyFOLMhY?si=goBR_-JUAhoHN02q",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //الفصل الثاني
      //الدروس
      //1 الدرس 1 الآلاف
      //2 الدرس 2 مزيد من الآلاف
      //3 الدرس 4:3 عشرات الآلاف - مئات الآلاف - صيغ مختلفة لكتابة الأعداد
      //4 الدرس 5 المصفوفات
      //5 الدرس 6 مفهوم الضرب
      //6 الدرس 7 خاصية الابدال في الضرب
      {
        chapter_id: "1-2",
        chapter_name: "الفصل الثاني",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس 1 الآلاف",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/S27tGYRWNNM?si=iqy601IIv9Jhz9ZA",
              },
              {
                video_id: "1-2-1-2",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/v4Pd4iSZ9XQ?si=6_IR3D-WtpOnsR_J",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "الدرس 2 مزيد من الآلاف",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/G7dOnMmbXTM?si=AwzLsttfhnDDi_PF",
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
            lesson_name:
              "الدرس 4:3 عشرات الآلاف - مئات الآلاف - صيغ مختلفة لكتابة الأعداد",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/JAEn7dXnxto?si=m5wzlMnP_V9Y7z24",
              },
              {
                video_id: "1-2-3-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/TbBOUdjGOFM?si=2cvTZGCKpa96VcxV",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name: "الدرس 5 المصفوفات",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/OVO1IhFnIzM?si=3VOiUmt34KTxYoOp",
              },
              {
                video_id: "1-2-4-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/1aO2c7pf0Bw?si=nCA_b1STZfHkQMtE",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-2-5",
            lesson_name: "الدرس 6 مفهوم الضرب",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "حكاية الرياضات",
                video_link:
                  "https://www.youtube.com/embed/jSLz4a1fo7E?si=_weYapywq5i0oem8",
              },
              {
                video_id: "1-2-5-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/9hW-PRppua8?si=4SG5ccbBxQ2PCANr",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name: "الدرس 7 خاصية الابدال في الضرب",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/YjbxfIujPhw?si=Jsio24CL2cJTBHT3",
              },
              {
                video_id: "1-2-6-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/98JcfqZS8IQ?si=3bZweTVmGuhzYfeH",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //الفصل الثالث
      //الدروس
      //1 الدرس 2:1 مسائل كلامية علي الضرب , تطبيقات حياتية علي الضرب
      //2 الدرس 3 مضاعفات العددين 2و3
      //3 الدرس 4 مضاعفات العددين 5و10
      //4 الدرس 5 عوامل العدد باستخدام المصفوفات
      //5 الدرس 7:6 الوقت , تطبيقات حياتية علي الوقت
      //6 الدرس 9:8 مفهوم القسمة , تطبيقات حياتية علي القسمة
      //7 الدرس 10 العلاقة بين الضرب والقسمة
      {
        chapter_id: "1-3",
        chapter_name: "الفصل الثالث",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name:
              "الدرس 2:1 مسائل كلامية علي الضرب , تطبيقات حياتية علي الضرب",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/o-PEP9U_slg?si=D826glZyRiS71IPi",
              },
              {
                video_id: "1-3-1-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/_OA_Qn8_B0I?si=gOHxhBpbQjbF0EjF",
              },
              {
                video_id: "1-3-1-3",
                video_title: "مستر محمد ابراهيم - 2",
                video_link:
                  "https://www.youtube.com/embed/YCKmBR3fhkA?si=RJD2eWCsT6aFqmlN",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "الدرس 3 مضاعفات العددين 2و3",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/uiKE94EP8xU?si=2RwEYUQ044kndfQ1",
              },
              {
                video_id: "1-3-2-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/b8Y6n0v2bas?si=LKw-UL4cEClqLmT7",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "الدرس 4 مضاعفات العددين 5و10",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/Pz9rdU6Hk-4?si=lTxjbGtspZtvGyfG",
              },
              {
                video_id: "1-3-3-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/UodyEDnW-XI?si=rpW1klxSNRJEyFBr",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "الدرس 5 عوامل العدد باستخدام المصفوفات",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/ebVrbrGHszk?si=QOPNAcRYuf1l_4L-",
              },
              {
                video_id: "1-3-4-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/UodyEDnW-XI?si=BwbzcsYl0As9WSxF&amp;start=1086",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name: "الدرس 7:6 الوقت , تطبيقات حياتية علي الوقت",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/5Ta9mqoi490?si=nGah6DkGv0uwwEh6",
              },
              {
                video_id: "1-3-5-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/iXS4M8n-6Rk?si=_-dkdgj48UjcZoO4&amp;start=1086",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-3-6",
            lesson_name: "الدرس 9:8 مفهوم القسمة , تطبيقات حياتية علي القسمة",
            videos: [
              {
                video_id: "1-3-6-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/YkIdevl2qig?si=aUGv7DsNWRvZ-ZU2",
              },
              {
                video_id: "1-3-6-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/nGLx6HhCaWw?si=SPza1vZmDCIiOHXS",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-3-7",
            lesson_name: "الدرس 10 العلاقة بين الضرب والقسمة",
            videos: [
              {
                video_id: "1-3-7-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/4UMUTNsub9o?si=FwJCD5hbrOECjxcp",
              },
              {
                video_id: "1-3-7-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/fB95Lj_0MRI?si=U1rjQRMaYUHt93E9",
              },
            ],
          },
        ],
      },
      //الموضوع 4
      //الفصل الرابع
      //الدروس
      //1 الدرس 1 المضلعات
      //2 الدرس 2 خواص الاشكال الرباعية
      //3 الدرس 3 المساحة
      //4 الدرس 4 مستطيلات متساوية المساحة
      //5 الدرس 5 المساحة باستخدام النماذج
      //6 الدرس 7:6 المساحة بتقسيم المصفوفات , خاصية التوزيع في الضرب
      {
        chapter_id: "1-4",
        chapter_name: "الفصل الرابع",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-4-1",
            lesson_name: "الدرس 1 المضلعات",
            videos: [
              {
                video_id: "1-4-1-1",
                video_title: "حكاية الرياضيات",
                video_link:
                  "https://www.youtube.com/embed/Zg0OQO94Vd4?si=6C3eBtu9H9QRezBI",
              },
              {
                video_id: "1-4-1-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/fB95Lj_0MRI?si=U1rjQRMaYUHt93E9&amp;start=1241",
              },
              {
                video_id: "1-4-1-3",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/26DNzpn2dOk?si=yP5Z2nqMHJY2RLOV",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-4-2",
            lesson_name: "الدرس 2 خواص الاشكال الرباعية",
            videos: [
              {
                video_id: "1-4-2-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/0yntIliaSI8?si=KvwFFqGWQRiSQmCj",
              },
              {
                video_id: "1-4-2-2",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/2j6JycMFBEA?si=7kYLuIVbA6YEPbst",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-4-3",
            lesson_name: "الدرس 3 المساحة",
            videos: [
              {
                video_id: "1-4-3-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/0yntIliaSI8?si=BEKSqmitQXRPJxse&amp;start=1009",
              },
              {
                video_id: "1-4-3-2",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/dbHWl3tctjE?si=3Iq2ocLz7I0-HQ0P",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-4-4",
            lesson_name: "الدرس 4 مستطيلات متساوية المساحة",
            videos: [
              {
                video_id: "1-4-4-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/LvDAbgtLW-I?si=nmhi1bLmlbyYAohb",
              },
              {
                video_id: "1-4-4-2",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/mwECV6WPyDE?si=noZ2RRkCUHNk5FVs",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-4-5",
            lesson_name: "الدرس 5 المساحة باستخدام النماذج",
            videos: [
              {
                video_id: "1-4-5-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/LvDAbgtLW-I?si=BmlD-y21l4i1X2BL&amp;start=955",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-4-6",
            lesson_name:
              "الدرس 7:6 المساحة بتقسيم المصفوفات , خاصية التوزيع في الضرب",
            videos: [
              {
                video_id: "1-4-6-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/kn7K0BDSoq8?si=ljySYjJrgXYeUV0k",
              },
              {
                video_id: "1-4-6-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/yqCvMMLMPhM?si=QkudQzctDCAX2zQS",
              },
            ],
          },
        ],
      },
      //الموضوع 5
      //الفصل الخامس
      //الدروس
      //1 الدرس 1 محيط المضلعات
      //2 الدرس 2 المحيط و المساحة
      //3 الدرس 4:3 المساحة باستخدام الابعاد , المساحة باستراتيجيات متنوعة
      //4 الدرس 6:5 محيطات مختلفة لنفس المساحة , مساحات مختلفة لنفس المحيط
      //5 الدرس 7 تطبيقات حياتية علي المحيط و المساحة
      //6 الدرس 9 الضرب في مضاعفات العدد 10
      {
        chapter_id: "1-5",
        chapter_name: "الفصل الخامس",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-5-1",
            lesson_name: "الدرس 1 محيط المضلعات",
            videos: [
              {
                video_id: "1-5-1-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/CQHzxY1qLY0?si=gepWLm2LgE9Z1ABj",
              },
              {
                video_id: "1-5-1-2",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/Pzm_rssDwrs?si=oXW-EjRze9I93PNJ",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-5-2",
            lesson_name: "الدرس 2 المحيط و المساحة",
            videos: [
              {
                video_id: "1-5-2-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/Pzm_rssDwrs?si=jxQFv5WMdU4hCy3E",
              },
              {
                video_id: "1-5-2-2",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/sP2eTdjoa1c?si=kdlxot-iDjgjIi5y",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-5-3",
            lesson_name:
              "الدرس 4:3 المساحة باستخدام الابعاد , المساحة باستراتيجيات متنوعة",
            videos: [
              {
                video_id: "1-5-3-1",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/ky9MhtmktII?si=7MpXl1SoI2nW2rO7",
              },
              {
                video_id: "1-5-3-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/LQhgyjKc5-I?si=dGTpRAqQeWdatMnd",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-5-4",
            lesson_name:
              "الدرس 6:5 محيطات مختلفة لنفس المساحة , مساحات مختلفة لنفس المحيط",
            videos: [
              {
                video_id: "1-5-4-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/HsQABBT8_Qk?si=0lorPtrJKP6aFIaN",
              },
              {
                video_id: "1-5-4-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/KbffL_4rHLQ?si=uew6-xoMsYuzqnV9",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-5-5",
            lesson_name: "الدرس 7 تطبيقات حياتية علي المحيط و المساحة",
            videos: [
              {
                video_id: "1-5-5-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/6BuOgI3LOoY?si=i2Su2K-pkFj5YKyF",
              },
              {
                video_id: "1-5-5-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/XRmtV4BZAlk?si=7wkEdq5g5ir1CjN9",
              },
              {
                video_id: "1-5-5-3",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/0dPevbNx8XU?si=LcY-UQTPp9Jmlr2T",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-5-6",
            lesson_name: "الدرس 9 الضرب في مضاعفات العدد 10",
            videos: [
              {
                video_id: "1-5-6-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/GY6wqsC7Pm8?si=dkoSj1JOZSBajBfn",
              },
              {
                video_id: "1-5-6-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/-mVIphNfHMI?si=wm72OX7hDjpJYveY",
              },
              {
                video_id: "1-5-6-3",
                video_title: "مستر محمد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/aBR1buflT5c?si=lNQmKexIfTR0TDcx",
              },
            ],
          },
        ],
      },
      //الموضوع 6
      //الفصل السادس
      //الدروس
      //1 الدرس 1 انماط الضرب في مضاعفات العدد 10
      //2 الدرس 2 استراتيجيات الضرب في العدد 9
      //3 الدرس 3 حقائق الضرب و الجمع
      //4 الدرس 4 مقارنة و ترتيب الاعداد بصيغ متنوعة
      //5 الدرس 5 استراتيجيات الجمع
      //6 الدرس 6 استراتيجيات الطرح
      //7 الدرس 7 تطبيقات حياتية علي الجمع و الطرح
      //8 الدرس 9:8 السعة , قراءة السعة
      {
        chapter_id: "1-6",
        chapter_name: "الفصل السادس",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-6-1",
            lesson_name: "الدرس 1 انماط الضرب في مضاعفات العدد 10",
            videos: [
              {
                video_id: "1-6-1-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/aCGpQl1O2yA?si=VVqEkCSE_Ba9_QsV",
              },
              {
                video_id: "1-6-1-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/7_D9SZTGn2k?si=J0dCDDhJap3FpkAs",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-6-2",
            lesson_name: "الدرس 2 استراتيجيات الضرب في العدد 9",
            videos: [
              {
                video_id: "1-6-2-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/yLt6CYZ9ncY?si=54VArQ7U104uLpb4",
              },
              {
                video_id: "1-6-2-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/xEmESu9bPfY?si=DMFMEyAugWNHgiTz",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-6-3",
            lesson_name: "الدرس 3 حقائق الضرب و الجمع",
            videos: [
              {
                video_id: "1-6-3-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/XYXE107v7zo?si=uHd2kqwl8EOdiZjl",
              },
              {
                video_id: "1-6-3-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/ruPMddXbEjg?si=2A445cT6_NZQig5r",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-6-4",
            lesson_name: "الدرس 4 مقارنة و ترتيب الاعداد بصيغ متنوعة",
            videos: [
              {
                video_id: "1-6-4-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/Ads54fWTzLw?si=zLwPIcRnyb3K5gta",
              },
              {
                video_id: "1-6-4-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/vsSN4WFz99U?si=phxZn9IcP0dl_0KV",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-6-5",
            lesson_name: "الدرس 5 استراتيجيات الجمع",
            videos: [
              {
                video_id: "1-6-5-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/3sNRpGZtlJQ?si=Z2E7uR2OVfqd-hC-",
              },
              {
                video_id: "1-6-5-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/0FuTeUn-RUg?si=TsEhrOa_b5y1t3b5",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-6-6",
            lesson_name: "الدرس 6 استراتيجيات الطرح",
            videos: [
              {
                video_id: "1-6-6-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/-U22XoUTgas?si=kVmPWeqedR8VTfYP",
              },
              {
                video_id: "1-6-6-2",
                video_title: "مستر السيد ابراهيم",
                video_link:
                  "https://www.youtube.com/embed/8BNOBcagHEc?si=Et6fWXp-gW4QiM_7",
              },
            ],
          },
          //الدرس 7
          {
            lesson_id: "1-6-7",
            lesson_name: "الدرس 7 تطبيقات حياتية علي الجمع و الطرح",
            videos: [
              {
                video_id: "1-6-7-1",
                video_title: "مستر السيد ابراهيم",
                video_link: "https://www.youtube.com/embed/rBFZc9joL6w?si=PP23FMrgLxUVz0m0",
              },
            ],
          },
          //الدرس 8
          {
            lesson_id: "1-6-8",
            lesson_name: "الدرس 9:8 السعة , قراءة السعة",
            videos: [
              {
                video_id: "1-6-8-1",
                video_title: "عبير عباس",
                video_link:
                  "https://www.youtube.com/embed/NCzbZjitJR4?si=Vdl3nnQHcivJ18KK",
              },
              {
                video_id: "1-6-8-2",
                video_title: "نجلاء زهران",
                video_link:
                  "https://www.youtube.com/embed/G5Biui5ceMk?si=mgWnrTB9ncg_4GoJ",
              },
            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g3_t1_math_ar_lessons, "g3_t1_math_ar_lessons");
