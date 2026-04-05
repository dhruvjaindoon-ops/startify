let index = 0;

const data = [
  {
    title: "Introduction",
    content: "A cafe startup is about creating experience...",
    video: "https://www.youtube.com/embed/6af6b8a2-4d2c-4f2f"
  },
  {
    title: "Growth",
    content: "Cafe business can expand into multiple branches...",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U"
  },
  {
    title: "Investment",
    content: "Investment depends on location and scale...",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY"
  }
];

/* LOGIN */
function login() {
  const name = document.getElementById("username").value;
  if (name) {
    localStorage.setItem("user", name);
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
}

/* START */
function start() {
  showSlide();
}

/* SHOW SLIDE */
function showSlide() {
  document.getElementById("title").innerText = data[index].title;
  document.getElementById("content").innerText = data[index].content;
  document.getElementById("video").src = data[index].video;
}

/* NEXT */
function next() {
  index = (index + 1) % data.length;
  showSlide();
}

/* PREV */
function prev() {
  index = (index - 1 + data.length) % data.length;
  showSlide();
}

/* AUTO LOGIN */
if (localStorage.getItem("user")) {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("app").style.display = "block";
}