// Minimum Number of Seat Everyone

function minMovesToSeat(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let moves = 0;

  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }

  return moves;
}

console.log(minMovesToSeat([3,1,5], [2,7,4]));