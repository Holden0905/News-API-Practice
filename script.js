const apiKey = 'eb590d41b6294a19b5e96059cd37186e';

fetch(`https://newsapi.org/v2/everything?q=stockmarket&apiKey=${apiKey}`)
    .then(response => response.json())
    .then (data =>{
        console.log(data)
        document.getElementById('article1').innerHTML = `
            <h2>${data.articles[0].title}</h2>
            <h2>${data.articles[0].source.name}</h2>
            <p>${data.articles[0].publishedAt}</p>
            <p>${data.articles[0].author}</p>
            <p>${data.articles[0].description}</p>
            
        `;
        document.getElementById('article2').innerHTML = `
            <h2>${data.articles[1].title}</h2>
            <h2>${data.articles[1].source.name}</h2>
            <p>${data.articles[1].publishedAt}</p>
            <p>${data.articles[1].author}</p>
            <p>${data.articles[1].description}</p>
            
        `;
        document.getElementById('article3').innerHTML = `
            <h2>${data.articles[2].title}</h2>
            <h2>${data.articles[2].source.name}</h2>
            <p>${data.articles[2].publishedAt}</p>
            <p>${data.articles[2].author}</p>
            <p>${data.articles[2].description}</p>
            
        `;
        document.getElementById('article4').innerHTML = `
            <h2>${data.articles[4].title}</h2>
            <h2>${data.articles[4].source.name}</h2>
            <p>${data.articles[4].publishedAt}</p>
            <p>${data.articles[4].author}</p>
            <p>${data.articles[4].description}</p>
            
        `;
    })


    // <img src="${data.Poster}" alt="${data.Title} Poster" style="max-width: 300px;">
    //     //     <h3><strong>Box Office:</strong> ${data.BoxOffice}</h3>
    //     //     <p><strong>Director:</strong> ${data.Director}</p>
    //     //     <p><strong>Plot:</strong> ${data.Plot}</p>
    //     //     <p><strong>Year:</strong> ${data.Year}</p>