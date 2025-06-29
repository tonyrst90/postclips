
export const msToTime = (ms: number, label?: string, long?: string): string => {
  const currentDate = new Date();
  const date2 = new Date(currentDate.getTime() - ms);
  const milliSeconds = currentDate.getTime() - date2.getTime();
  let seconds = (milliSeconds / 1000).toFixed(0);
  let minutes = (milliSeconds / (1000 * 60)).toFixed(0);
  let hours = (milliSeconds / (1000 * 60 * 60)).toFixed(0);
  let days = (milliSeconds / (1000 * 60 * 60 * 24)).toFixed(0);
  if (seconds < '1') return 'Just Now';
  else if (seconds < '60') return `${seconds} ${long === 'long' ? 'Seconds' : 'Sec'} ${label ? label : ''}`;
  else if (minutes < '60') return `${minutes} ${long === 'long' ? 'Minutes' : 'Min'} ${label ? label : ''}`;
  else if (hours < '24') return `${hours} ${long === 'long' ? 'Hours' : 'Hrs'} ${label ? label : ''}`;
  else return `${days} Days ${label ? label : ''}`;
};