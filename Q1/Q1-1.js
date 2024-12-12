function handleSubmit(event){
        event.preventDefault();
        const d1 = new Date(document.getElementById('day_1').value);
        const d2 = new Date(document.getElementById('day_2').value);
        const differenceInDays = daysTo(d1, d2);

        document.getElementById('difference').innerHTML = `${differenceInDays}`;

}

function daysTo(d1, d2){
        const differenceInDays = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
        return differenceInDays;
}