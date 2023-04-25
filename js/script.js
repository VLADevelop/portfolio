// let workPlaces = [
//   {
//       id: 1,
//       title: 'IT School',
//       period: '2022 - Present',
//       shorts: [
//           'Learning the basics of Java, Git, Linux and QA Testing',
//           'Deep learning HTML, CSS, Javascript, React. Building applications based on learned tools',
//           'Freelance activities related to web application development'
//       ]
//   },
//   {
//     id: 2,
//     title: 'IT School',
//     period: '2022 - Present',
//     shorts: [
//         'Learning the basics of Java, Git, Linux and QA Testing',
//         'Deep learning HTML, CSS, Javascript, React. Building applications based on learned tools',
//         'Freelance activities related to web application development'
//     ]
// },
// {
//   id: 3,
//   title: 'IT School',
//   period: '2022 - Present',
//   shorts: [
//       'Learning the basics of Java, Git, Linux and QA Testing',
//       'Deep learning HTML, CSS, Javascript, React. Building applications based on learned tools',
//       'Freelance activities related to web application development'
//   ]
// },
// {
//   id: 4,
//   title: 'IT School',
//   period: '2022 - Present',
//   shorts: [
//       'Learning the basics of Java, Git, Linux and QA Testing',
//       'Deep learning HTML, CSS, Javascript, React. Building applications based on learned tools',
//       'Freelance activities related to web application development'
//   ]
// }]

//--------------------- Progres bar skill


let percents = [67, 45, 80, 97]
let elemList = document.querySelectorAll(".skill_item");
console.log(elemList)
function move(item, percent) {

  let width = 1;
  let id = setInterval(frame, 15);
  function frame() {
    if (width >= percent) {
      clearInterval(id);
    } else {
      width++;
      item.style.width = width + "%";
    }
  }
}
for (let k = 0; k < elemList.length; k++) {
  move(elemList[k], percents[k])
}

// _________________________________

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();