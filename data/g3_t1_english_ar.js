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
                  "https://www.youtube.com/embed/S2MLjMrso4w?si=_t5O8b1B1pae0vIM",
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
                video_link: "https://www.youtube.com/embed/ru-r0IvswGw?si=OwZjHCds1qheGHtW",
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
            lesson_name: "Learn sound with Busy Bee! && Learn to write with Busy Bee!",
            videos: [
              {
                video_id: "1-1-3-1",
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
                video_title: "",
                video_link: "",
              },
            ],
          },
        ],
      },
      //2 Unit 2 What's the matter?
      //3 Unit 3 On the weekend
    ],
  },
  //المحور 2
  {
    section_id: "2",
    section_name: "Theme 2",
    chapters: [
      //الموضوع 1
      // The world around me
      //الدروس
      //1 Unit 4 I love my home
      //2 Unit 5 At the zoo
      //3 Unit 6 Let's go to the circus!
      {
        chapter_id: "2-1",
        chapter_name: "The world around me",
        lessons: [
          //الدرس 1
          {
            lesson_id: "2-1-1",
            lesson_name: "Unit 4 I love my home",
            videos: [
              {
                video_id: "2-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "2-1-2",
            lesson_name: "Unit 5 At the zoo",
            videos: [
              {
                video_id: "2-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "2-1-3",
            lesson_name: "Unit 6 Let's go to the circus!",
            videos: [
              {
                video_id: "2-1-3-1",
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

draw_lessons(g3_t1_english_ar_lessons, "g3_t1_english_ar_lessons");
