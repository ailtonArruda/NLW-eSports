// 18:00 -> ["18","00"] -> [18, 00]

export function convertHourStringToMinutes(hourString: string){
    const [hour, minute] = hourString.split(':').map(Number)

    const minutesAmount = (hour * 60) + minute

    return minutesAmount;
}