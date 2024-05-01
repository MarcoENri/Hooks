function isLeap(year: number): boolean {
  return year % 400 === 0 ? (year % 4 === 0 ? true : false) : year % 4 === 0 && year % 100 !== 0;
}

function LeapYearChecker() {
  const currentYear: number = new Date().getFullYear();
  const isCurrentYearLeap: boolean = isLeap(currentYear);

  return (
    <div>
      <h2>Leap Year Checker</h2>
      <p>Current year: {currentYear}</p>
      <p>Is current year a leap year? {isCurrentYearLeap ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default LeapYearChecker;
