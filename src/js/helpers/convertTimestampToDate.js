const isValidDate = date => !isNaN(date);

const convertTimestampToReadableDate = (timestamp) => {
    if (!timestamp || typeof timestamp !== 'string') return '';

    const dateObject = new Date(timestamp.split(" ")[0]);
    return isValidDate(dateObject) ? `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}` : '';
}

export default convertTimestampToReadableDate;