import React from 'react';

function getDay(){
  const year = 0,
        month = 1,
        day = 2,
        time = 3,
        total = 4;

  let now = new Date;
  let yesterday = new Date(now.setDate(now.getDate() -1));
  let realDay = [];
  
  realDay[year] = yesterday.getFullYear() -2000;
  realDay[month] = yesterday.getMonth()+1; 
  realDay[day] = yesterday.getDate();
  realDay[time] = yesterday.getHours();
  
  for(let i=0; i<4; i++){
    realDay[i] = String(realDay[i]);
    realDay[i] = realDay[i].padStart(2,'0');
  }
  
  realDay[total] = realDay[year]+realDay[month]+realDay[day];

  return {
    realDay : realDay[total],
    realTime : realDay[time]
  };
}

export default getDay;