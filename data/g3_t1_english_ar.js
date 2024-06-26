import { draw_sub_books_list, draw_lessons } from "./fun.js";
var g3_t1_english_ar_books = [
  {
    title: "المعاصر - الكتاب كامل",
    link: "https://drive.google.com/file/d/1vkoRQO0bq2kV_drtZUrFSayulkS-non7/view?usp=drive_link",
  },
];

let g3_t1_english_ar_books_elements = "";
g3_t1_english_ar_books.forEach(function (item) {
  g3_t1_english_ar_books_elements += draw_sub_books_list(item);
});

document.getElementById("g3_t1_english_ar_books").innerHTML +=
  g3_t1_english_ar_books_elements;

var g3_t1_english_ar_lessons = [
  //المحور 1
  {
    section_id: "1",
    section_name: "Theme 1 : Who am i ?",
    chapters: [
      //الموضوع 1
      // Who am i ?
      //الدروس
      //Unit 1 I feel happy!
      //1 listing , self-expression
      //2 Issues: Preventative health
      //3 • Learn sound with Busy Bee! • Learn to write with Busy Bee!
      //4 Math : Measurements
      {
        chapter_id: "1-1",
        chapter_name: "Unit 1 : I feel happy!",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "listing , self-expression",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/rsd_8YrdvKo?si=f5mZ8tD2fkKY80Tr",
              },
              {
                video_id: "1-1-1-2",
                video_title: "مستر انجليزي - حل تمارين المعاصر",
                video_link:
                  "https://www.youtube.com/embed/drKSZVo3fFg?si=uWXMogC2KN9TWsWl",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "Issues: Preventative health",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/cVcqedea81A?si=-MGIl9qEaL7kGP3b",
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
            lesson_name:
              "Learn sound with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "1-1-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/1SDjgJuHjIo?si=SDPQHX-B_OA-5dje",
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
            lesson_name: "Math : Measurements",
            videos: [
              {
                video_id: "1-1-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/uFCEPzWqR2A?si=wT1WxbBDG_JqXMqF",
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
      //Unit 2 What's the matter?
      // الدروس
      //1 Therapeutic health: Talking about illness && Issues: Keeping healthy
      //2 Listening and Reading
      //3 Self-management: Medicine and safety
      //4 Learn sounds with Busy Bee && Learn to write with Busy Bee !
      {
        chapter_id: "1-2",
        chapter_name: "Unit 2 : What's the matter?",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-2-1",
            lesson_name:
              "Therapeutic health: Talking about illness && Issues: Keeping healthy",
            videos: [
              {
                video_id: "1-2-1-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/MwZRLwq9-JM?si=ZpArnVq62TeLk0Kz",
              },
              {
                video_id: "1-2-1-1",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/3jdlNKPb3vA?si=N9r680bkpJD7hxWg",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-2-2",
            lesson_name: "Listening and Reading",
            videos: [
              {
                video_id: "1-2-2-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/tHzHtfgC7Yk?si=mARL1k_RBmZk6EC0",
              },
              {
                video_id: "1-2-2-1",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/jDbhfCxe1NE?si=Ulgyr1xBa4F6l22F",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-2-3",
            lesson_name: "Self-management: Medicine and safety",
            videos: [
              {
                video_id: "1-2-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/DVw1t_lFlDI?si=tYm_LdMoubX58Kih",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-2-4",
            lesson_name:
              "Learn sounds with Busy Bee && Learn to write with Busy Bee !",
            videos: [
              {
                video_id: "1-2-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/e1CHB0iGYFg?si=7Q9LC8lc1Wts205r",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //Unit 3 On the weekend
      //الدروس
      //1 Vocabulary && Language
      //2 part1 Science: Magnets
      //3 part2 Math: What time is it? Listening and writing
      //4 Learn sounds with Busy Bee! && Learn to write with Busy Bee!
      //5 Issues: Non-descrimination for people with special needs
      {
        chapter_id: "1-3",
        chapter_name: "Unit 3 : On the weekend",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-3-1",
            lesson_name: "Vocabulary && Language",
            videos: [
              {
                video_id: "1-3-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/DQJ-L_n8ehc?si=UIym_eHNw6Q9D92U",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-3-2",
            lesson_name: "part1 Science: Magnets",
            videos: [
              {
                video_id: "1-3-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/qdvyzVhlq14?si=nX2gyCIKidytzGYz",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-3-3",
            lesson_name: "part2 Math: What time is it? Listening and writing",
            videos: [
              {
                video_id: "1-3-3-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/TiZKfZkgrFA?si=XUHHrA4VPZFCbe-A",
              },
              {
                video_id: "1-3-3-2",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/UzvmgZOsWnw?si=K17jevAR-_XWGWmx",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "1-3-4",
            lesson_name:
              "Learn sounds with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "1-3-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/E4W_yN-12Sg?si=ke41PEhdBR9ODDWw",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "1-3-5",
            lesson_name:
              "Issues: Non-descrimination for people with special needs",
            videos: [
              {
                video_id: "1-3-5-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/XTYau0XX1qg?si=C_je02wRUTjnnAde",
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
    section_name: "Theme 2 : The world around me",
    chapters: [
      //الموضوع 1
      //
      //الدروس
      //Unit 4 I love my home
      //1 Listening and speaking
      //2 Math: Multiplication && Division
      //3 Social Studies && Helping your mom and dad
      //4 Learn sounds with Busy Bee! && Learn to write with Busy Bee!
      //5 Science: Natural resources in Egypt

      {
        chapter_id: "2-1",
        chapter_name: "Unit 4 : I love my home",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "Listening and speaking",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/sJ0lIahLdNg?si=wk9cl2g8lidZt-ed",
              },
              {
                video_id: "2-1-1-2",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/e8wvTBMfl9o?si=SeUvRl0eNFm8SXVm",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "Math: Multiplication && Division",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/e8wvTBMfl9o?si=TcTMmw0eUsFTEB7P&amp;start=1467",
              },
              {
                video_id: "2-1-2-2",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/jTsUig0NvWQ?si=XePOsi18wrVxN_Qm",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "Social Studies && Helping your mom and dad",
            videos: [
              {
                video_id: "2-1-3-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/jTsUig0NvWQ?si=eqYTvVupdlSCUb6H&amp;start=866",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-1-4",
            lesson_name:
              "Learn sounds with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "2-1-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/jTsUig0NvWQ?si=yTGksqiBmj3yb1Tp&amp;start=1515",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-1-5",
            lesson_name: "Science: Natural resources in Egypt",
            videos: [
              {
                video_id: "2-1-5-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/8OS4Rx2tZHg?si=xHb3WsAtRjTxsGty",
              },
            ],
          },
        ],
      },
      //الموضوع 2
      //Unit 5 At the zoo
      //الدروس
      //1 Listening and speaking && Social studies
      //2 Reading && Animals and their habitats
      //3 Math: Fractions
      //4 Environmental responsibility
      //5 Learn sounds with Busy Bee! && Learn to write with Busy Bee!
      {
        chapter_id: "2-2",
        chapter_name: "Unit 5 : At the zoo",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-2-1",
            lesson_name: "Listening and speaking && Social studies",
            videos: [
              {
                video_id: "2-2-1-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/JXLeZt1rrbI?si=acl8WUVo7oShtn0u",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-2-2",
            lesson_name: "Reading && Animals and their habitats",
            videos: [
              {
                video_id: "2-2-2-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/R6G-WGvvdM4?si=H_QMBB_Qp0hcKbMi",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-2-3",
            lesson_name: "Math: Fractions",
            videos: [
              {
                video_id: "2-2-3-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/R6G-WGvvdM4?si=ZCw6nTO07jrM7pvq&amp;start=1287",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-2-4",
            lesson_name: "Environmental responsibility",
            videos: [
              {
                video_id: "2-2-4-1",
                video_title: "مستر انجليزي",
                video_link:
                  "https://www.youtube.com/embed/V8c6o-2LIsU?si=iII58Fldjg5BR5ff",
              },
            ],
          },
          //الدرس 5
          {
            lesson_id: "2-2-5",
            lesson_name:
              "Learn sounds with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "2-2-5-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/V8c6o-2LIsU?si=lIl5UISuAv9pLclO&amp;start=1511",
              },
              {
                video_id: "2-2-5-1",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/hISXPtIxyZw?si=sJB3yyLaxqvpARAe",
              },
            ],
          },
        ],
      },
      //الموضوع 3
      //Unit 6 Let's go to the circus!
      //الدروس
      //1 Listening and speaking && Art: Performing art
      //2 Math: Quadrilaterals && Finding information on a graph
      //3 Learn sounds with Busy Bee! && Learn to write with Busy Bee!
      //4 Science: The scientific method
      {
        chapter_id: "2-3",
        chapter_name: "Unit 6 : Let's go to the circus!",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-3-1",
            lesson_name: "Listening and speaking && Art: Performing art",
            videos: [
              {
                video_id: "2-3-1-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/PRsvWdadiXI?si=oEyD9kqHSASH0_m0",
              },
              {
                video_id: "2-3-1-2",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/lyH9lHyAEIQ?si=XmuVGzZ9SvgndOuu",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-3-2",
            lesson_name:
              "Math: Quadrilaterals && Finding information on a graph",
            videos: [
              {
                video_id: "2-3-2-1",
                video_title: "مستر انجليزي -1",
                video_link:
                  "https://www.youtube.com/embed/lyH9lHyAEIQ?si=dQRzJPwmk2SQ9CsJ&amp;start=1125",
              },
              {
                video_id: "2-3-2-2",
                video_title: "مستر انجليزي -2",
                video_link:
                  "https://www.youtube.com/embed/zXAJUZDVtIk?si=rQCqne6ok5ksfAsn",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-3-3",
            lesson_name:
              "Learn sounds with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "2-3-3-1",
                video_title: "مستر انجليزي",
                video_link: "https://www.youtube.com/embed/ePv28OrX7Fw?si=mNBMY8ir7Ew49wQF",
              },
            ],
          },
          //الدرس 4
          {
            lesson_id: "2-3-4",
            lesson_name: "Science: The scientific method",
            videos: [
              {
                video_id: "2-3-4-1",
                video_title: "مستر انجليزي",
                video_link: "https://www.youtube.com/embed/ePv28OrX7Fw?si=PPchXGJuLuikVMl3&amp;start=868",
              },
            ],
          },
        ],
      },
    ],
  },
];

draw_lessons(g3_t1_english_ar_lessons, "g3_t1_english_ar_lessons");
