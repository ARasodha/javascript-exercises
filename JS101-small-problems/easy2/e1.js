// E1 Welcome Stranger:

function greetings(nameArray, occupation) {
  let name = nameArray.join(' ');
  let title = occupation['title'];
  let field = occupation['occupation'];
  return `Hello, ${name}! Nice to have a ${title} ${field}.`
}
console.log(
  greetings(["John", "Q", "Doe"], {
    title: "Master",
    occupation: "Plumber"
  })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
