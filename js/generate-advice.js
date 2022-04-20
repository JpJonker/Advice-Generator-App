function getApiData() {
  $.getJSON("https://api.adviceslip.com/advice", function (data) {
    $("#advice-id-value").text(data.slip.id);
    $("#advice-text").text(data.slip.advice);
  });
}

$("#generate-dice").click(getApiData);

getApiData();
