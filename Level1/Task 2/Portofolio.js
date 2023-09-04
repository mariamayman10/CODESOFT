function showMoreAbout() {
  if (document.getElementById("seemore").textContent == "See less") {
    document.getElementById("seemore").textContent = "See more";
    document.getElementById("hidden").style.visibility = "hidden";
  } else {
    document.getElementById("seemore").textContent = "See less";
    document.getElementById("hidden").style.visibility = "visible";
  }
}

function showSkills(txt) {
  let x = "";
  if (txt == "PL") {
    x =
      "<p class='skill'>C++</p><p class='skill'>Python</p><p class='skill'>Java</p><p class='skill'>JavaScript</p>";
  } else if (txt == "WD") {
    x =
      "<p class='skill'>HTML</p><p class='skill'>CSS</p><p class='skill'>JavaScript</p><p class='skill'>Django</p><p class='skill'>ReactJS</p>";
  } else if (txt == "CSF") {
    x =
      "<p class='skill'>Data Structures</p><p class='skill'>Algorithms</p><p class='skill'>Problem Solving</p>";
  } else {
    x =
      "<p class='skill'>SOLID Principles</p><p class='skill'>Design Patterns</p>";
  }
  document.getElementById("skills_par").innerHTML = x;
  document.getElementById("skills_par").style.visibility = "visible";
}
function hideSkills() {
  document.getElementById("skills_par").style.visibility = "hidden";
}

function ShowprojectDetails(txt) {
  if (txt == "CPV") {
    document.getElementById("cpv").style.visibility = "hidden";
    document.querySelector(".cpv_d").style.visibility = "visible";
  } else if (txt == "CW") {
    document.getElementById("cw").style.visibility = "hidden";
    document.querySelector(".cw_d").style.visibility = "visible";
  } else if (txt == "FH") {
    document.getElementById("fh").style.visibility = "hidden";
    document.querySelector(".fh_d").style.visibility = "visible";
  } else if (txt == "SA") {
    document.getElementById("sa").style.visibility = "hidden";
    document.querySelector(".sa_d").style.visibility = "visible";
  } else if (txt == "LMS") {
    document.getElementById("lms").style.visibility = "hidden";
    document.querySelector(".lms_d").style.visibility = "visible";
  } else {
    document.getElementById("t").style.visibility = "hidden";
    document.querySelector(".t_d").style.visibility = "visible";
  }
}
function Hideprojectdetails(txt) {
  if (txt == "CPV") {
    document.getElementById("cpv").style.visibility = "visible";
    document.querySelector(".cpv_d").style.visibility = "hidden";
  } else if (txt == "CW") {
    document.getElementById("cw").style.visibility = "visible";
    document.querySelector(".cw_d").style.visibility = "hidden";
  } else if (txt == "FH") {
    document.getElementById("fh").style.visibility = "visible";
    document.querySelector(".fh_d").style.visibility = "hidden";
  } else if (txt == "SA") {
    document.getElementById("sa").style.visibility = "visible";
    document.querySelector(".sa_d").style.visibility = "hidden";
  } else if (txt == "LMS") {
    document.getElementById("lms").style.visibility = "visible";
    document.querySelector(".lms_d").style.visibility = "hidden";
  } else {
    document.getElementById("t").style.visibility = "visible";
    document.querySelector(".t_d").style.visibility = "hidden";
  }
}
