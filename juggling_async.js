const http = require('http');
const [node, path, ...urls] = process.argv;
// Variable stockant les résultats finaux d'une seule requête get 
const results = {};

urls.forEach((url) => {
    http.get(url, (res) => {
        // Variable stockant les données intermédiaires d'une seule requête get
        const dataArray = [];
        res.on('data', d => {
            dataArray.push(d);
        });
        res.on('end', () => {
            results[url] = dataArray.join('');
            const keys = Object.keys(results);
            if (keys.length === urls.length) {
                urls.forEach( u => console.log(results[u]));
            }
        });
        res.on('error', console.error);
    });
});