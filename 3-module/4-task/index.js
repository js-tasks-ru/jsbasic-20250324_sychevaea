function showSalary(users, age) {
  return users.filter((user, index, array) => user.age <= age)
  .map((user, index, array) => `${user.name}, ${user.balance}`)
  .join('\n');
}
