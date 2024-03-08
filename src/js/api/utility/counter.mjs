export function createdCounter(createdWatch,postedAgo) {
  const today = new Date();
  const createdDate = new Date("2024.03.03");
  const timeCount = today - createdDate;
  const hoursToDate = Math.ceil((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const hoursCount = Math.ceil(timeCount / (1000 * 60 * 60));
  const daysCount = Math.floor(timeCount / (1000 * 60 * 60 * 24));

  // postedAgo.innerHTML = `Posted ${daysCount} days and ${hoursCount} ago`;



  // const B = createdDate.getTime();
  // const BDays = Math.round(B / (10000000 * 60 * 60 * 24));

  // const minute = 1000 * 60;
  // const hour = minute * 60;
  // const day = hour * 24;
  // // const year = day * 365;
  // const days = Math.round(createdDate.getTime() / day);
  // console.log(days);

  // console.log(B);
  // console.log(createdDate);
  // console.log("Posted " + BDays + " days ago");
  // console.log(today);
  // console.log(timeCount);
  // console.log("Posted " + daysCount + " days ago");
  console.log("Posted " + daysCount + " days and " + hoursToDate + " hours ago");
  // console.log("Posted " + hoursCount + " hours ago");
  
  // const difference = createdDate.getTime() - today.getTime()


}

