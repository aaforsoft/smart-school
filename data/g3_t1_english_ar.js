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
    section_name: "Theme 1",
    chapters: [
      //الموضوع 1
      // Who am i ?
      //الدروس
      //1 Unit 1 I feel happy!
      //2 Unit 2 What's the matter?
      //3 Unit 3 On the weekend
      {
        chapter_id: "1-1",
        chapter_name: "Who am i ?",
        lessons: [
          //الدرس 1
          {
            lesson_id: "1-1-1",
            lesson_name: "Unit 1 I feel happy!",
            videos: [
              {
                video_id: "1-1-1-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 2
          {
            lesson_id: "1-1-2",
            lesson_name: "Unit 2 What's the matter?",
            videos: [
              {
                video_id: "1-1-2-1",
                video_title: "",
                video_link: "",
              },
            ],
          },
          //الدرس 3
          {
            lesson_id: "1-1-3",
            lesson_name: "Unit 3 On the weekend",
            videos: [
              {
                video_id: "1-1-3-1",
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