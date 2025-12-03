const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
  return {
    name,
    age,
    isAdmin,
  };
};

console.log(createUser());
console.log(createUser("Alice", 25, true));
