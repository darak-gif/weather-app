export function getDate(){

    const now = new Date();

    const day = String(now.getDate()).padStart(2,"0");
    const month = String(now.getMonth()+1).padStart(2,"0");
    const year = String(now.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
}

export function getTime(){

    const now = new Date();

    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");

    return `${hours}:${minutes}`;

}