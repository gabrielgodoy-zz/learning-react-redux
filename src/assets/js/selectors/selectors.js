// Seleção ou manipulação de dados vindos da store

export function authorsFormattedForDropdown(authors) { // eslint-disable-line
  return authors.map(author => (
    {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`,
    }),
  );
}
