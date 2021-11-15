// export const HumanDate = ({ date }) => {
//     return new Date(date.replace(/-/g, '\/')).toLocaleDateString("en-US",
//     {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         timeZone: 'America/Chicago'
//     })
// }


export const HumanDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    return today
}