const users = [
  { id: 101, name: 'Alice', role: 'developer', isActive: true, salary: 60000 },
  { id: 102, name: 'Bob', role: 'designer', isActive: false, salary: 75000 },
  { id: 103, name: 'Charlie', role: 'developer', isActive: true, salary: 90000 },
  { id: 104, name: 'David', role: 'manager', isActive: true, salary: 120000 },
];

const getDeveloperNames = (userList) => {
  return userList
    .filter(user => user.role === 'developer' && user.isActive)
    .map(developer => developer.name);
};

// Expected Output: ['Alice', 'Charlie']
console.log(getDeveloperNames(users));