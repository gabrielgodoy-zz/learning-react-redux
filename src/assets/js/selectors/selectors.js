// Data selection or manipulate data on this file

export function authorsFormattedForDropdown(authors) { // eslint-disable-line
  return authors.map(author => (
    {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`,
    }),
  );
}
