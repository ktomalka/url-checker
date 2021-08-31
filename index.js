const { readFileSync } = require('fs');
const color = require('colors');
const { default:axios } = require('axios');

let data = [];

try {
    data = JSON.parse(readFileSync('./urls.json'));
} catch (error) {
    console.log(`
        JSON file is incorrect.
    `.red);
    process.exit(0);
}

const checkStatus = (data) => new Promise((resolve) => {
    axios.get(data.url, {
        headers: { 'User-Agent': data.device || undefined }
    }).then((response) => {
        console.log(`${data.name ? `[${data.name}] ` : '' }[OK] [${response.status}] ${site.url}`.green);
        resolve();
    }).catch ((error) => {
        console.log(`${data.name ? `[${data.name}] ` : '' }[ERROR] [${error?.response?.status || 500}] ${data.url}`.red);
        process.exit(0);
    });
});

(async () => {
    for await (site of data) {
        if (site.userAgent && Array.isArray(site.userAgent)) {
            for await (userAgent of site.userAgent) {
                await checkStatus({
                    url: site.url,
                    name: userAgent.name,
                    device: userAgent.device,
                });
            }
        } else {
            await checkStatus({
                url: site.url,
            });
        }
    }
})();
