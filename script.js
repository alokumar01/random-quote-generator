
const apiurl=`https://api.api-ninjas.com/v1/quotes?category=`;
const apiKey = `1xD/Dkg4EUkLIw2kSZy1yA==OlSiJaofABAxKIk5`;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const btnElement = document.getElementById('getgquotes');

window.onload = function() {
    fetchQuote();
}

async function fetchQuote() {
    try {
        quoteElement.textContent = 'Your quote on the way...';
        authorElement.textContent = '';
        const response = await fetch(apiurl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.length > 0) {
            quoteElement.textContent = data[0].quote;
            authorElement.textContent = data[0].author;
        } else {
            quoteElement.textContent = 'No quotes found';
        }
    } catch (error) {
        quoteElement.textContent = 'Try Later';
        console.error(error);
    }
}

btnElement.addEventListener('click', fetchQuote);