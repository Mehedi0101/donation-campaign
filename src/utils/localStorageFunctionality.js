const getDataFromLS = () => {
    const data = localStorage.getItem('donation');
    return data ? JSON.parse(data) : [];
}

const setDataToLS = id => {
    const data = getDataFromLS();

    if(!data.includes(id)){
        data.push(id);
        localStorage.setItem('donation',JSON.stringify(data));
    }
}

export { getDataFromLS, setDataToLS }