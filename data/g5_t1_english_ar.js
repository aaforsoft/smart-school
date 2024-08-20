import { draw_sub_books_list, draw_lessons ,draw_fullvideo_list } from "./fun.js";
var g5_t1_english_ar_books = [
  {
    title: "سلاح التلميذ - الكتاب كامل",
    link: "https://drive.google.com/file/d/1tfSRaGhcgBXkfVUr09O_1lkyY-gnTxno/view?usp=drive_link",
  },
  {
    title: "بنك اسئلة المتميز الشامل علي مقررات أكتوبر 2023",
    link: "https://t.me/ELMotamyezSchool/11090",
  },
  {
    title: "بنك اسئلة المتميز الشامل علي مقررات نوفمبر 2023",
    link: "https://t.me/ELMotamyezSchool/11135",
  },
];

let g5_t1_english_ar_books_elements = "";
g5_t1_english_ar_books.forEach(function (item) {
  g5_t1_english_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g5_t1_english_ar_books").innerHTML +=
  g5_t1_english_ar_books_elements;

  // full-video -----------
var g5_t1_english_ar_fullvideo = [
  {
    video_title: "مستر انجليزي - شرح 2025",
    video_link: "https://www.youtube.com/embed/videoseries?si=3W8uPYf_uZZVYwlW&amp;list=PLoADbtXeHbXXV8LCvKQ_7xtxZWrcK1OKD",
  },
  {
    video_title: "مستر انجليزي - شرح 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=MyojVgvN6N7m_YX8&amp;list=PLoADbtXeHbXUuWt7xHhEp_Uu_I__fPLHQ",
  },
  {
    video_title: "مستر انجليزي - شرح وتمارين 2024",
    video_link: "https://www.youtube.com/embed/videoseries?si=U_Fl63XzTjZIbW5c&amp;list=PLoADbtXeHbXVKfZR11S0O4McW1-vIWLtL",
  },

];

let g5_t1_english_ar_fullvideo_elements = "";
g5_t1_english_ar_fullvideo.forEach(function (item) {
  g5_t1_english_ar_fullvideo_elements += draw_fullvideo_list(item);
});

document.getElementById("g5_t1_english_ar_fullvideo").innerHTML +=
  g5_t1_english_ar_fullvideo_elements;
//-------------------
var g5_t1_english_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "theme 1 : I discover my self",
    chapters: [
      //الموضوع 1
      // Unit 1 : We plant our food
      //الدروس
      //1 Lesson 1 : Food and Drink
      //2 Lesson 2 : My shopping list & language focus
      //3 Lesson 3 : Jack and the beanstalk & Pronunciation & CLIL: Math
      //4 Lesson 4&5 : Writing & Project
      //5 Unit 1 : paragraphs و حل امتحان الوحدة الاولي

      {
        chapter_id: "1-1",
        chapter_name: "Unit 1 : We plant our food",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "Lesson 1 : Food and Drink",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/dvDG71SxUjo?si=gIkSryxXiu4nAex8",
              },
              {
                video_id: "1-1-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/lcjG7Ssw8UU?si=0WuChLPzaxzlhBON",
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
            lesson_name: "Lesson 2 : My shopping list & language focus",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/PskYIyQIk94?si=0WFj94RhkPfZYv0E",
              },
              {
                video_id: "1-1-2-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/3a3UaGek51Q?si=Wx-Qrw1UIPdLmQQV",
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
            lesson_name:
              "Lesson 3 : Jack and the beanstalk & Pronunciation & CLIL: Math",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/678TxzVZQSE?si=EGER5IZFvNqNReyn",
              },
              {
                video_id: "1-1-3-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/Srh2s_ICq4o?si=EUDMgEW4BiPod1N8",
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
            lesson_name: "Lesson 4&5 : Writing & Project",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/OeMlgABFfPE?si=JhuvLGQknl73BbCI",
              },
              {
                video_id: "1-1-4-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/rQLuTBGwnL0?si=j7l_PBk9zvQuQm1R",
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
            lesson_name: "Unit 1 : paragraph و حل امتحان الوحدة الاولي",
            videos: [
              {
                video_id: "1-1-5-1",
                video_title: "مستر انجليزي - paragraphs",
                video_link:
                  "https://www.youtube.com/embed/oAXR6vj_3tc?si=gJju1HVHYa1b2Hzg",
              },
              {
                video_id: "1-1-5-2",
                video_title: "مستر انجليزي - حل امتحان الوحدة الاولي",
                video_link:
                  "https://www.youtube.com/embed/cC4n5BCVIiU?si=KhFZpigZ4zB7lz7h",
              },
              {
                video_id: "1-1-5-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // Unit 2 : I want to be healthy
      //الدروس
      //1 Lesson 1 : part_1 Listening and Reading : Sports
      //2 Lesson 1 : part_2 An awful nightmare!
      //3 Lesson 2 : Language focus && CLIL math
      //4 Lesson 3 : Sports places and equipment & Pronunciation
      //5 Lesson 4&5 : Writing & Project
      //6 Unit 2 : paragraphs و حل امتحان الوحدة الثانية
      {
        chapter_id: "1-2",
        chapter_name: "Unit 2 : I want to be healthy",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name: "Lesson 1 : part_1 Listening and Reading : Sports",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/qwK7UJjjGpk?si=jAEnVAWJrDo9BFKv",
              },
              {
                video_id: "1-2-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/2kc6qNd-Ixw?si=wvgo62BkIGxo7NLU",
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
            lesson_name: "Lesson 1 : part_2 An awful nightmare!",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/BtCPjNDwfLA?si=WHfGgEbhXyQHf4Qn",
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
            lesson_name: "Lesson 2 : Language focus && CLIL math",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/zSIO2W4QfYg?si=LBwouE6feo-6K9IM",
              },
              {
                video_id: "1-2-3-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name:
              "Lesson 3 : Sports places and equipment & Pronunciation",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/sbi1CLHUKTY?si=RQcTb8JrbK4yut8i",
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
            lesson_name: "Lesson 4&5 : Writing & Project",
            videos: [
              {
                video_id: "1-2-5-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/JmLips_p9bY?si=Sm2Xk5vZspt4tLJB",
              },
              {
                video_id: "1-2-5-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 6
          {
            lesson_id: "1-2-6",
            lesson_name: "Unit 2 : paragraphs و حل امتحان الوحدة الثانية",
            videos: [
              {
                video_id: "1-2-6-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/yvMnqdxjgdE?si=ksIaUSOkeem3Jp6I",
              },
              {
                video_id: "1-2-6-2",
                video_title: "مستر انجليزي - paragraphs",
                video_link:
                  "https://www.youtube.com/embed/P9OsmUDaIw0?si=t8O8zyOPDiW3SBmk",
              },
              {
                video_id: "1-2-6-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      // Unit 3 : How do i look?
      //الدروس
      //1 Lesson 1 : Our trip to AL Fayoum
      //2 Lesson 2 : My favorite clothes & language focus
      //3 Lesson 3 : The Elves and the shoemaker & Pronunciation & Math
      //4 Lesson 4&5 : Writing & Project
      //5 Unit 3 : paragraphs و حل امتحان الوحدة الثالثة
      {
        chapter_id: "1-3",
        chapter_name: "Unit 3 : How do i look?",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "Lesson 1 : Our trip to AL Fayoum",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/DeiPAioSG_c?si=Ufl7xJur0x7hJcY7",
              },
              {
                video_id: "1-3-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/6oOcZi6wEk4?si=lppD-YK39TmmKHSr",
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
            lesson_name: "Lesson 2 : My favorite clothes & language focus",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/2AONVyL0UBY?si=rf7zYkfVFDfQZJtT",
              },
              {
                video_id: "1-3-2-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/UlotHA3x-pw?si=lQQFbkCi3ripz8DL",
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
            lesson_name:
              "Lesson 3 : The Elves and the shoemaker & Pronunciation & Math",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/TMYRdKEgONU?si=-cw-U8fEBPPcefOw",
              },
              {
                video_id: "1-3-3-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/AJ4NoiZ1YgA?si=G4dPFtqoTz0k0agz",
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
            lesson_name: "Lesson 4&5 : Writing & Project",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/d_BDGicA5As?si=EcPgmiQvga34pViV",
              },
              {
                video_id: "1-3-4-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/qi1ASs6Cx2c?si=8m4dGy0FOGSuHtpZ",
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
            lesson_name: "Unit 3 : paragraphs و حل امتحان الوحدة الثالثة",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "مستر انجليزي - paragraphs",
                video_link:
                  "https://www.youtube.com/embed/V20BVsHfddE?si=GVh65qDMjw5mp0_h",
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
    section_name: "theme 2 : My self and others",
    chapters: [
      //الموضوع 1
      // Unit 4 : Loking after our world
      //الدروس
      //1 Lesson 1&2 : My visit to Elephantine Island & What were you doing? Language Focus
      //2 Lesson 3 : Eco-toursm & Pronunciation
      //3 Lesson 4&5 : Taba : My favorite eco-resort & Project
      //4 Unit 4 : paragraphs و حل امتحان الوحدة الرابعة
      {
        chapter_id: "2-1",
        chapter_name: "Unit 4 : Loking after our world",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name:
              "Lesson 1&2 : My visit to Elephantine Island & What were you doing? Language Focus",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/hfVKRJjafFM?si=5jwZ-YCEXHm0DmXR",
              },
              {
                video_id: "2-1-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/NS45hJggCwM?si=R13xyNpLGSs8P5ng",
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
            lesson_name: "Lesson 3 : Eco-toursm & Pronunciation",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/oGDUIy2AG-o?si=O2AdvqSdQn8ComdI",
              },
              {
                video_id: "2-1-2-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/vXeqhjs5zpU?si=-cBrHW1VNYUcKwUp",
              },
              {
                video_id: "2-1-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "Lesson 4&5 : Taba : My favorite eco-resort & Project",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/M1s14dfZt9A?si=jZOuacZs41MVrJJI",
              },
              {
                video_id: "2-1-3-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/IS6A606J-g4?si=DVL8h4wlCQpQlRTD",
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
            lesson_name: "Unit 4 : paragraphs و حل امتحان الوحدة الرابعة",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "مستر انجليزي - paragraphs",
                video_link:
                  "https://www.youtube.com/embed/0pItIcj5eos?si=E_RsR8Y7Bgp0CX6s",
              },
              {
                video_id: "2-1-4-2",
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      // Unit 5 : Jobs we do
      //الدروس
      //1 Lesson 1 : Jobs in Ancient Egypt
      //2 Lesson 2 : CLIL: Science & Language focus
      //3 Lesson 3 : The Ant and the Grasshopper & Pronunciation & Math
      //4 Lesson 4&5 : Writing & Project
      //5 Unit 5 : paragraphs و حل امتحان الوحدة الخامسة
      {
        chapter_id: "2-2",
        chapter_name: "Unit 5 : Jobs we do",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "Lesson 1 : Jobs in Ancient Egypt",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/OERUx6NQY2E?si=CCJhHkPP8rPO5GJj",
              },
              {
                video_id: "2-2-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/RIbTbM0eJBY?si=h3372Suumc_T_vPc",
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
            lesson_name: "Lesson 2 : CLIL: Science & Language focus",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/i2EM3mjPpQY?si=CnaWO0S6oed0r7PT",
              },
              {
                video_id: "2-2-2-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/1t3bHYPnJ74?si=dbnPe3ns63nwaz3P",
              },
              {
                video_id: "2-2-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name:
              "Lesson 3 : The Ant and the Grasshopper & Pronunciation & Math",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/tH5gdOqTsoA?si=53EAaKx60cL19A3E",
              },
              {
                video_id: "2-2-3-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/FIU0bHl4ziM?si=-z6baeD6_hnJMBJP",
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
            lesson_name: "Lesson 4&5 : Writing & Project",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/Sl_s9bxvX6Q?si=X1scO5kvg8yRAaFi",
              },
              {
                video_id: "2-2-4-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/uxtdPqv3WUk?si=7PGOkS8st5SXYpef",
              },
              {
                video_id: "2-2-4-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name: "Unit 5 : paragraphs و حل امتحان الوحدة الخامسة",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "مستر انجليزي - paragraphs",
                video_link:
                  "https://www.youtube.com/embed/W-3VrGxGHMk?si=U46qgNOfldPCmINS",
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
      // Unit 6 : What's the weather like?
      //الدروس
      //1 Lesson 1 : The weather
      //2 Lesson 2 : My heart wave story
      //3 Lesson 3 : Pronunciation
      //4 Lesson 4&5 : Writing & Project
      //5 Unit 6 : حل امتحان الوحدة السادسة
      {
        chapter_id: "2-3",
        chapter_name: "Unit 6 : What's the weather like?",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "Lesson 1 : The weather",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/iviermPfwy4?si=qIvoZmInKsICs4wq",
              },
              {
                video_id: "2-3-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/yq7z_U2xb8M?si=S1hCsq6PbV3-ZZec",
              },
              {
                video_id: "2-3-1-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name: "Lesson 2 : My heart wave story",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/ipkz-i6IimQ?si=52hqGxXq8TV5R3X_",
              },
              {
                video_id: "2-3-1-2",
                video_title: "مستر انجليزي - حل التمارين",
                video_link:
                  "https://www.youtube.com/embed/2dBFXBbO_W4?si=F_NHUGt742DFfV9Z",
              },
              {
                video_id: "2-3-2-3",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name: "Lesson 3 : Pronunciation",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/sU8PJ0f1WDo?si=xGrd5qGYLdJzQCz6",
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
            lesson_name: "Lesson 4&5 : Writing & Project",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/D7NpLtF80WM?si=wjeOiQDngPLoaHVF",
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
            lesson_name: "Unit 6 : حل امتحان الوحدة السادسة",
            videos: [
              {
                video_id: "2-3-5-1",
                video_title: "المهام الآدائية",
                video_link:
                  "https://www.youtube.com/embed/2KM9k-EQQz4?si=LQ87Np-GDYchLKf1",
              },
              {
                video_id: "2-3-5-2",
                video_title: "تمارين الوحدة السادسة",
                video_link:
                  "https://www.youtube.com/embed/ePC21eQUL9w?si=eFbVBumb8aLMLcsv",
              },
            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g5_t1_english_ar_lessons, "g5_t1_english_ar_lessons");
