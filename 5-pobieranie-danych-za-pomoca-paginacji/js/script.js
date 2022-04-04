$(document).ready(function () {
  $(".page-link").click(function () {
    // jquery with $.get()
    $.get("https://swapi.dev/api/planets")
      .done(function (data) {
        // 1a. create elements in jquery by $('<selector></selector>')
        // 1b. add text inner created elements by .text()

        let planet1 = $("<p></p>").text(data.results[0].name);
        let planet2 = $("<p></p>").text(data.results[1].name);
        let planet3 = $("<p></p>").text(data.results[2].name);
        let planet4 = $("<p></p>").text(data.results[3].name);
        let planet5 = $("<p></p>").text(data.results[4].name);
        let planet6 = $("<p></p>").text(data.results[5].name);
        let planet7 = $("<p></p>").text(data.results[6].name);
        let planet8 = $("<p></p>").text(data.results[7].name);
        let planet9 = $("<p></p>").text(data.results[8].name);
        let planet10 = $("<p></p>").text(data.results[9].name);

        // // add elements to html by append, inner div class="planets"
        $(".planets").append(planet1);
        $(".planets").append(planet2);
        $(".planets").append(planet3);
        $(".planets").append(planet4);
        $(".planets").append(planet5);
        $(".planets").append(planet6);
        $(".planets").append(planet7);
        $(".planets").append(planet8);
        $(".planets").append(planet9);
        $(".planets").append(planet10);
      })
      .fail(function (error) {
        console.error(error);
      });
  });
});
