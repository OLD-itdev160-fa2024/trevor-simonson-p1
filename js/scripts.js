

fetch('https://api.nasa.gov/planetary/apod?api_key=16ZWg9vNoKBD0Ims63QJ3mftRzhVlu7Hzxtl7bee')
    .then(response => {
      return response.json();
    })
    .then(data => {
        const title = document.getElementById('title');
        const potd = document.getElementById('potd');
        const explanation = document.getElementById('explanation');
        title.innerHTML = data.title;
        potd.src = data.url;
        explanation.innerHTML = data.explanation;
      })
    .catch(error => console.log(error));
