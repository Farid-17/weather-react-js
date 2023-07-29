export const CONST = {
    mainColor: '#3a86ff',
}

export const public_path = (path) => {
    return `${process.env.PUBLIC_URL}/${path}`;
};

export const get_card_date = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        currentDate = new Date(date);

    return {
        day: daysOfWeek[currentDate.getDay()],
        dt: `${monthsOfYear[currentDate.getMonth()]} ${currentDate.getDate()}`,
    };
}