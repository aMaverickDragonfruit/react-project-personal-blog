export const fetchAPI = (url) => {
    return fetch(url).then((res) => {
        return res.json();
    });
};