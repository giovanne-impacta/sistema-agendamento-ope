const ConvertTime = (date: string, periodo: boolean) => {
    let d = new Date(date)
    let pm = d.getHours() >= 12;
    let hour12 = d.getHours() % 12;
    if (!hour12) 
        hour12 += 12;
    let minute = d.getMinutes();
    return `${hour12 < 10 ? "0" + hour12 : hour12}:${minute < 10 ? "0" + minute : minute}` + ( periodo ? ( pm ? 'pm' : 'am' ) : "" )
}

export { ConvertTime }