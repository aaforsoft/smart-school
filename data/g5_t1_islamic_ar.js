import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g5_t1_islamic_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1GTZNjgl8LFchUZeY7y6diD_R5zsLKUY7/view?usp=drive_link",
  },
];

let g5_t1_islamic_ar_books_elements = "";
g5_t1_islamic_ar_books.forEach(function (item) {
  g5_t1_islamic_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_islamic_ar_books").innerHTML +=
  g5_t1_islamic_ar_books_elements;

var g5_t1_islamic_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "اكتشف ذاتي",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الاول : العبادة معناها و أنواعها
      //2 الدرس الثاني : اسم الله - تعالي - الودود
      //3 الدرس الثالث : سورة الانفطار - وصف يوم القيامة
      //4 الدرس الرابع : مراجعة أحكام النون الساكنة والتنوين
      {
        chapter_id: "1-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "الدرس الاول : العبادة معناها و أنواعها",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/H4wlU1-s2c8?si=GteHTe1j7m193MFZ",
              },
              {
                video_id: "1-1-1-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "الدرس الثاني : اسم الله - تعالي - الودود",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/OC9AwHefzq4?si=vJ-0zpLjoStEnguK",
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
            lesson_name: "الدرس الثالث : سورة الانفطار - وصف يوم القيامة",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/dQ5MLNtYKjw?si=yyER6AiECVx29Fuf",
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
            lesson_name: "الدرس الرابع : مراجعة أحكام النون الساكنة والتنوين",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/Jgammq7k5Ts?si=cpAjO1Qx_O0Bt9Jk",
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
      //الموضوع 2
      // السير و الشخصيات
      //الدروس
      //1 الدرس الاول : استعداد الرسول -ص- للهجرة
      //2 الدرس الثاني : الطريق الي المدينة
      //3 الدرس الثالث : معجزة الرسول -ص- مع أم معبد
      //4 الدرس الرابع : قصة موسي -ع- ولادته ونشأته (نبي من مصر)
      {
        chapter_id: "1-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "الدرس الاول : استعداد الرسول -ص- للهجرة",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/5FqqlUuMSbc?si=a2GPmbq7Spa22NKw",
              },
              {
                video_id: "1-2-1-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/qEgarau3GA4?si=oTH8nl2lU0ljeWSc",
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
            lesson_name: "الدرس الثاني : الطريق الي المدينة",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/_vD49tdX0V4?si=EpRcq1yCo8B5qiV8",
              },
              {
                video_id: "1-2-2-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/mvbjK8FRtZY?si=fJfEnxoQm944XYhq",
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
            lesson_name: "الدرس الثالث : معجزة الرسول -ص- مع أم معبد",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/mLH5Gm8ZTn0?si=nAB-mwaTgeQajYXL",
              },
              {
                video_id: "1-2-3-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/AY7FaJ5OXEs?si=0WiH-n7ku7fW_gz2",
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
            lesson_name:
              "الدرس الرابع : قصة موسي -ع- ولادته ونشأته (نبي من مصر)",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/8TosJ_TWO4M?si=iUyFDTh8yq59Xz3H",
              },
              {
                video_id: "1-2-4-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/fZL1EG3rSv0?si=GeV5Q3HHX3nNwJgG",
              },
              {
                video_id: "1-2-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // العبادات
      //الدروس
      // الدرس الأول: مكانة الصلاة وحكمها
      // الدرس الثاني : الصلاة - الفرق بين الركن والسنة
      // الدرس الثالث : أدعية الاستفتاح والتشهد ومعناها
      // الدرس الرابع : صلاة الجمعة والعيدين
      {
        chapter_id: "1-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "الدرس الأول: مكانة الصلاة وحكمها",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/YLUNCTPjO10?si=bAfIZgRYQnQVOXct",
              },
              {
                video_id: "1-3-1-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/7MEuEPSBz5Q?si=d8-SDWGW77rxk7Te",
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
            lesson_name: "الدرس الثاني : الصلاة - الفرق بين الركن والسنة",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/wz9Ysd1X9bU?si=rQPgG6ChaipbkeAO",
              },
              {
                video_id: "1-3-2-2",
                video_title: "حسام ابو انس",
                video_link:
                  "https://www.youtube.com/embed/CNX7PbOnuws?si=tG7u3Lm-wlRGQZzW",
              },
              {
                video_id: "1-3-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "الدرس الثالث : أدعية الاستفتاح والتشهد ومعناها",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/so8qnV6vnvg?si=kfVGUzGLTHAe_FtM",
              },
              {
                video_id: "1-3-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name: "الدرس الرابع : صلاة الجمعة والعيدين",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/wtSaXKf2NUk?si=n3t6bPiC1IvE9-Jj",
              },
              {
                video_id: "1-3-4-2",
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
  //علاقاتي مع الآخرين
  {
    section_id: "2",
    section_name: "علاقاتي مع الآخرين",
    chapters: [
      //الموضوع 1
      // العقيدة
      //الدروس
      //1 الدرس الاول : القراآن الكريم تعبد وتدبر
      //2 الدرس الثاني : شكر الله - تعالي- علي النعم قصة صاحب الجنتين
      //3 الدرس الثالث : اسم الله - تعالي - القدوس
      //4 الدرس الرابع : وصايا لقمان الحكيم لإبنه
      //5 الدرس الخامس : مخارج الحروف
      {
        chapter_id: "2-1",
        chapter_name: "العقيدة",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "الدرس الاول : القراآن الكريم تعبد وتدبر",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "احمد ممدوح",
                video_link:
                  "https://www.youtube.com/embed/L-Or6DGI7Zw?si=Izrc83yooMNDamXc",
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
            lesson_name:
              "الدرس الثاني : شكر الله - تعالي- علي النعم قصة صاحب الجنتين",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "احمد ممدوح",
                video_link:
                  "https://www.youtube.com/embed/nyqM3O_lg9Y?si=oH9eqLQe7_CM8kWr",
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
            lesson_name: "الدرس الثالث : اسم الله - تعالي - القدوس",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/zods6r5EkSU?si=vZfdV75o2FrE5hdL",
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
            lesson_name: "الدرس الرابع : وصايا لقمان الحكيم لإبنه",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/PtQYOQmAGjw?si=ggHFqMMykn8koA27",
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
            lesson_name: "الدرس الخامس : مخارج الحروف",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "احمد ممدوح",
                video_link:
                  "https://www.youtube.com/embed/vZqS6TZGZPk?si=AQFTmpYSQPLhzHN3",
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
      //الموضوع 2
      // السير و الشخصيات
      //1 الدرس الأول :  بناء المجتمع المدني
      //2 الدرس الثاني :  الرسول -ص- ويهود المدينة
      //3 الدرس الثالث: زيد بن أرقم - الغلام الصادق
      //4 الدرس الرابع :  قصة موسى -ع- نبوة على أرض سيناء
      {
        chapter_id: "2-2",
        chapter_name: "السير و الشخصيات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "الدرس الأول :  بناء المجتمع المدني",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/koIpBOGqfKc?si=8aYX8PNNJk1lMrWv",
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
            lesson_name: "الدرس الثاني :  الرسول -ص- ويهود المدينة",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/b7nifg5jiFo?si=7mqTo1TmF7taVWdE",
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
            lesson_name: "الدرس الثالث: زيد بن أرقم - الغلام الصادق",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/2uFUknFSPpY?si=x_WVlLR9ysI1p2p9",
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
            lesson_name: "الدرس الرابع :  قصة موسى -ع- نبوة على أرض سيناء",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/2cwqGirggZs?si=hFp8NX6vGTD8KjFn",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // العبادات
      //1 الدرس الأول : النوافل
      //2 الدرس الثاني : المسح على الخفين والجوريين
      //3 الدرس الثالث : التيمم

      {
        chapter_id: "2-3",
        chapter_name: "العبادات",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "الدرس الأول : النوافل",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/Owr9X1Ga6dE?si=AJjRH-zeupiM251S",
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
            lesson_name: "الدرس الثاني : المسح على الخفين والجوريين",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/SY0YmH8nDGg?si=dylQ_iPQSVdVzZUF",
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
            lesson_name: "الدرس الثالث : التيمم",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: " مصطفي عبدالعاطي",
                video_link:
                  "https://www.youtube.com/embed/e-Kacy4s8_I?si=C3XL6v7qyftum-9A",
              },
              {
                video_id: "2-3-3-2",
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

draw_lessons(g5_t1_islamic_ar_lessons, "g5_t1_islamic_ar_lessons");
