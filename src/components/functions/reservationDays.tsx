export const reservationDays = (start: Date, end: Date, excluded?: Date[]) => {
  if (start.toDateString() === end.toDateString()) {
    return [start];
  }

  const getNumberOfDays = (start: Date, end: Date) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  };

  const between = getNumberOfDays(start, end);
  const asa = [];

  for (let i = 0; i < 1; i++) {
    for (let j = 1; j < between; j++) {
      const date = new Date(start);

      date.setDate(date.getDate() + j);

      asa.push(date);
    }

    asa.unshift(start);
    asa.push(end);
  }

  const most = asa.sort((a, b) => {
    return a.getTime() - b.getTime();
  });

  if (excluded?.length !== undefined) {
    return most.filter((x) =>
      excluded.every((elem) => elem.toDateString() !== x.toDateString()) ? x : '',
    );
  }

  return most;
};
