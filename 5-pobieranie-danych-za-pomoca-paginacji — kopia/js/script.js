let urlPage = "https://swapi.dev/api/planets/?page=";
let numberPage = "3";

const pagination = () => {
  // let pageItem = document.getElementsByClassName("page-item");

  if ($(".page-link").eq(1)) {
    urlPage;
    getData();
  } else if ($(".page-link").eq(3)) {
    urlPage += numberPage + numberPage;
    getData();
    console.log(typeof urlPage);
  }
};

console.log($(".page-link").eq(1));
// console.log(typeof urlPage);
console.log(typeof numberPage);

const getData = () => {
  // let pageNmb = 2;

  ////////////////////////////////////////////////////////////////////

  $(document).ready(function () {
    $(".page-link").click(function () {
      // getData();
      $.get(`${urlPage}`)
        // $.get(`${urlPage}`)
        .done(function (data) {
          let dataArray = data.results;

          // function get planets name from array objects
          dataArray.forEach(function (planet) {
            let planetList = document.getElementById("planet-list");
            let planetName = document.createElement("p");

            planetName.innerText = planet.name;
            planetList.appendChild(planetName);
          });
        })
        .fail(function (error) {
          console.error(error);
        });
    });
  });
};

// const pagination = () => {
//   // let pageItem = document.getElementsByClassName("page-item");

//   if ($("page-item").eq(2)) {
//     urlPage += "2";
//     getData();
//   } else if ($("page-item").eq(3)) {
//     urlPage += "3";
//     getData();
//   }
// };

$(".page-link").click(pagination());
