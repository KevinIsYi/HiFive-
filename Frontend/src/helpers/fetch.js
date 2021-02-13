const baseUrl = process.env.REACT_APP_URL;

export const fetchData = async (endpoint, method = 'GET', data) => {

    const url = `${baseUrl}/${endpoint}`;
    let resp;

    if (method === 'GET') {
        resp = await fetch(url);
    }
    else {
        resp = await fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    return await resp.json();
};