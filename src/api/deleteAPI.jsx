export const deleteAPI = (url) => {
    return fetch(url, {
        method: "DELETE"
    });
}