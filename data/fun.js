// draw sub list
function draw_sub_list(item) {
  return `
    <li class="t3">
      <a class="link-button" href="${item.link}">${item.name}</a>
    </li>
  `;
}

function draw_sub_books_list(item) {
  return `
  <div  class="col l2 m3 s6 center ">
  <div class="card hoverable">
      <div class="card-image waves-effect waves-block waves-light">
          <img data-parent2="${item.link}" class="activator book-card" src="../img/IMG1.png">
      </div>
      <div class="book-card-title">
          <a href="${item.link}" target="_blank" class="card-title activator grey-text text-darken-4 center">${item.title}</a>
      </div>
  </div>
  </div>
  `;
}

// when click on div go to the link in new tab
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("book-card")) {
    window.open(e.target.getAttribute("data-parent2"));
  }
});

// draw_lessons
// q: improve the function to use the same structure as the next functions
// q: improve the function to use the same structure as the next

function draw_lessons(lessons_list, container_id) {
  lessons_list.forEach((section) => {
    document.getElementById(container_id).innerHTML += `
    <li>
    <div class="collapsible-header grey lighten-4">${section.section_name}</div>
    <div id="section-${section.section_id}"  class="collapsible-body">
    </div>
    </li>
    `;

    section.chapters.forEach((chapter) => {
      document.getElementById(`section-${section.section_id}`).innerHTML += `
      <span>
      <details class="chapter-style">
      <summary class="teal lighten-4 chapter-title"> ${chapter.chapter_name} </summary>
      <table  class="lessons-table striped right-align" >
      <thead >
      <tr >
        <th class="right-align col s8 m8 l8">الدرس</th>
        <th class="right-align col s8 m8 l8">فيديوهات</th>
      </tr>
      </thead>
      <tbody id="chapter-${chapter.chapter_id}">
      </tbody>
      </table>
      </details>
      </span>
      `;

      chapter.lessons.forEach((lesson) => {
        document.getElementById(`chapter-${chapter.chapter_id}`).innerHTML += `
        <tr>
        <td class="right-align col s8 m8 l8">${lesson.lesson_name}</td>
        <td class="right-align col s8 m8 l8">
        <ul class="lesson-list" id="lesson-${lesson.lesson_id}"> 
        </ul>
        </td>
        </tr>
        `;
        lesson.videos.forEach((video) => {
          document.getElementById(`lesson-${lesson.lesson_id}`).innerHTML += `
          <li class="video-item">
          <a class="video-link" href="#video" data-parent="${video.video_link}" >
          ${video.video_title}
          </a>
          </li>
          `;
        });
      });
    });
  });
}

// when click on video-link open video container with the video

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("video-link")) {
    draw_video_container(e.target.getAttribute("data-parent"));
  }
});

// draw_video_container
function draw_video_container(video_link) {
  document.getElementById("video-section").innerHTML = `
  
  <div id="video">
            <div class="container  left-align">
                <div class="video-container">
                    <iframe width="560" height="315" src="${video_link}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="fixed-action-btn">
                <a class="btn-floating  red">
                    <i class="large material-icons">close</i>
                </a>
            </div>
        </div>
  `;

  // make .fixed-action-btn remove #video element
  document
    .querySelector(".fixed-action-btn")
    .addEventListener("click", function () {
      document.getElementById("video").remove();
    });
  // when click on esc key remove #video element
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("video").remove();
    }
  });
}

export { draw_sub_list, draw_sub_books_list, draw_lessons };
