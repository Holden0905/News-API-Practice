var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: '3pQnnnzaPfOv4uaooDwPXVO9vfW233teGkBeU2eT',
    categories: 'business, tech',
    search: 'NYSE, Nasdaq, SPY,',
    limit: '50'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');



fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    // Make sure data.data exists and has articles
    if (data.data && data.data.length > 0) {
      // Display first article
      if (data.data[0]) {
        document.getElementById('article1').innerHTML = `
          <h2>${data.data[0].title}</h2>
          <h2>${data.data[0].source}</h2>
          <p>${data.data[0].published_at}</p>
          <p>${data.data[0].description || data.data[0].snippet}</p>
        `;
      }
      
      // Display second article
      if (data.data[1] && document.getElementById('article2')) {
        document.getElementById('article2').innerHTML = `
          <h2>${data.data[1].title}</h2>
          <h2>${data.data[1].source}</h2>
          <p>${data.data[1].published_at}</p>
          <p>${data.data[1].description || data.data[1].snippet}</p>
        `;
      }
      
      // Display third article
      if (data.data[2] && document.getElementById('article3')) {
        document.getElementById('article3').innerHTML = `
          <h2>${data.data[2].title}</h2>
          <h2>${data.data[2].source}</h2>
          <p>${data.data[2].published_at}</p>
          <p>${data.data[2].description || data.data[2].snippet}</p>
        `;
      }
      
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


    // <img src="${data.Poster}" alt="${data.Title} Poster" style="max-width: 300px;">
    //     //     <h3><strong>Box Office:</strong> ${data.BoxOffice}</h3>
    //     //     <p><strong>Director:</strong> ${data.Director}</p>
    //     //     <p><strong>Plot:</strong> ${data.Plot}</p>
    //     //     <p><strong>Year:</strong> ${data.Year}</p>