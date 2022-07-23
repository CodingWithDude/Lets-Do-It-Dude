function formatDate(rawDate) {
  let formattedDate = rawDate;
  const dd = formattedDate.slice(8, 10);
  const mm = formattedDate.slice(5, 7);
  const yyyy = formattedDate.slice(0, 4);
  formattedDate = `${mm}-${dd}-${yyyy}`;
  return formattedDate;
}

export default formatDate;
