export default function convert(data: string[]) {
  const result: string[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const durations of data) {
    const durationSplit = durations.split(',');

    const time = durationSplit[0].split(' ')[0];
    let minutesToSecond = 0;
    let hasMinute = false;
    if (durationSplit[0].includes('minutos') || durationSplit[0].includes('minutes') || durationSplit[0].includes('minute') || durationSplit[0].includes('minuto')) {
      minutesToSecond = Number(time) * 60;
      hasMinute = true;
    }

    let seconds: number;
    if (hasMinute) {
      seconds = Number(durationSplit[1].trimEnd().trimStart().split(' ')[0]);
      const total = minutesToSecond + seconds;

      result.push(`${String(total)},\n`);
    } else {
      seconds = Number(durationSplit[0].trimEnd().trimStart().split(' ')[0]);
      result.push(`${String(seconds)},\n`);
    }
  }
  return result;
}
