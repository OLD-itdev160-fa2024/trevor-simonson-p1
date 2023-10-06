currentPotd();

dateFrom(-2);


// Past POTD Population
var apiLink = 'https://api.nasa.gov/planetary/apod?api_key=16ZWg9vNoKBD0Ims63QJ3mftRzhVlu7Hzxtl7bee' 
  + "&start_date=" + dateFrom(-10) 
  + "&end_date=" + dateFrom(-2)

  console.log(apiLink);

fetch(apiLink)
  .then(response => {
    return response.json();
  })
  .then(data => {
    var index = 9;
    data.forEach(elem => {
      const pic = document.getElementById('pic' + index);
      const list = document.getElementById('list' + index);
      console.log(elem.date);
      if(elem.media_type == "image")
      {
        pic.src = elem.url;
      }
      else
      {
        pic.src = "https://apod.nasa.gov/apod/image/2310/MoValleyEclipse1024.jpg";
      }
      pic.alt = elem.date;
      list.innerHTML = elem.title;
      index--;
  })
  })
  .catch(error => console.log(error));


// Get past dates for api link
function dateFrom(days){
 var date = new Date();

 var newDate = new Date(new Date().setDate(date.getDate() + days));
console.log(newDate.toISOString().substring(0,10));
 return newDate.toISOString().substring(0,10)
}

// Loads previous potd when picture is clicked
function loadOldPotd(date){
  const returnCurrentPotd = document.getElementById('returnCurrentPotd');
  returnCurrentPotd.style.display = "block";

  var apiLink = "https://api.nasa.gov/planetary/apod?api_key=16ZWg9vNoKBD0Ims63QJ3mftRzhVlu7Hzxtl7bee"
    + "&date=" + date;

  fetch(apiLink)
    .then(response => {
      return response.json();
    })
    .then(data => {
        const title = document.getElementById('title');
        const potd = document.getElementById('potd');
        const explanation = document.getElementById('explanation');
        const hdLink = document.getElementById('hdLink');
        title.innerHTML = data.title;
        if(data.media_type == "image"){
          potd.src = data.url;
        }
        else{
          potd.src = "https://apod.nasa.gov/apod/image/2310/MoValleyEclipse1024.jpg";
          console.log("Picture of the day is a video...");
        }
        explanation.innerHTML = data.explanation;
        hdLink.href = data.hdurl;
      })
    .catch(error => console.log(error));
}


// There has got to be a better way to do this
function oldPotd1(){
  loadOldPotd(dateFrom(-2));
}

function oldPotd2(){
  loadOldPotd(dateFrom(-3));
}

function oldPotd3(){
  loadOldPotd(dateFrom(-4));
}

function oldPotd4(){
  loadOldPotd(dateFrom(-5));
}

function oldPotd5(){
  loadOldPotd(dateFrom(-6));
}

function oldPotd6(){
  loadOldPotd(dateFrom(-7));
}

function oldPotd7(){
  loadOldPotd(dateFrom(-8));
}

function oldPotd8(){
  loadOldPotd(dateFrom(-9));
}

function oldPotd9(){
  loadOldPotd(dateFrom(-10));
}

function currentPotd(){
  const returnCurrentPotd = document.getElementById('returnCurrentPotd');
  returnCurrentPotd.style.display = 'none';

  fetch('https://api.nasa.gov/planetary/apod?api_key=16ZWg9vNoKBD0Ims63QJ3mftRzhVlu7Hzxtl7bee')
    .then(response => {
      return response.json();
    })
    .then(data => {
        const title = document.getElementById('title');
        const potd = document.getElementById('potd');
        const explanation = document.getElementById('explanation');
        const hdLink = document.getElementById('hdLink');
        title.innerHTML = data.title;
        if(data.media_type == "image"){
          potd.src = data.url;
        }
        else{
          potd.src = "https://apod.nasa.gov/apod/image/2310/MoValleyEclipse1024.jpg";
          console.log("Picture of the day is a video...");
        }
        explanation.innerHTML = data.explanation;
        hdLink.href = data.hdurl;
      })
    .catch(error => console.log(error));

}
