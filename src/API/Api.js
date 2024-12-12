const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    const result = ((d + hour) % m) / 10;

    return result;
};

const seededRandom = (date) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = date % m;

    return (s = s * a % m) / m;
};


const fetchAPI = (date) => {
    return new Promise((resolve) => {
        let result = [];

        for (let hour = 17; hour <= 23; hour++) {
            if (seededGenerator(date, hour) < 0.5) result.push(hour + ":00");
            if (seededGenerator(date, hour) < 0.5) result.push(hour + ":30");
        }

        resolve(result);
    });

    /*let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random < 0.5) {
            result.push(i + ':00');
        }
        if (random < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;*/
};

const submitAPI = (formData) => true;

const Api = {
    fetchAPI: fetchAPI,
    submitAPI: submitAPI,
    seededGenerator: seededGenerator,
    seededRandom: seededRandom
};

export default Api;