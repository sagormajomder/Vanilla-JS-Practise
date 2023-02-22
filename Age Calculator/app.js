'use strict';

const year = document.getElementById('year');

const month = document.getElementById('month');

const date = document.getElementById('date');

const btn = document.getElementById('submit');

const root = document.getElementById('root');

let yearValue, monthValue, dateValue;

const calcAge = function (date1, date2) {
  // console.log(date1, date2);

  const year = Math.floor(
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24) / 365
  );
  console.log('🚀 ~ calcAge ~ year:', year);
  console.log(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  let remainder = (Math.abs(date1 - date2) / (1000 * 60 * 60 * 24)) % 365;

  console.log('🚀 ~ calcAge ~ remainder:', remainder);

  const month = Math.floor(remainder / 30);
  console.log('🚀 ~ calcAge ~ month:', month);

  const date = remainder % 30;

  console.log('🚀 ~ calcAge ~ date:', date);

  return `Yor Age is ${year} year ${month} month and ${date} days`;
};

btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (year.value != '' && month.value != '' && date.value != '') {
    yearValue = year.value;
    monthValue = +month.value - 1;
    dateValue = date.value;
    const birthDate = new Date(yearValue, monthValue, dateValue);
    // console.log(birthDate);
    const now = new Date();

    let cuYear = now.getFullYear();
    let cuMonth = now.getMonth();
    let cuDate = now.getDate();

    root.innerHTML = calcAge(birthDate, new Date(cuYear, cuMonth, cuDate));
  } else alert('please Input value');
});
