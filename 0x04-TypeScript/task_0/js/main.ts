interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Bereket',
  lastName: 'Tesfaye',
  age: 24,
  location: 'Dire Dawa',
};

// Add students to an array
const studentsList: Student[] = [student1, student2];

// Create a table and append it to the document body
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Append rows to the table
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
