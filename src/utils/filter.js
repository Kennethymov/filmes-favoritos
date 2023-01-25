const filterYear = (films) => {
  return films.sort(function(a, b) {
    return a.release_year - b.release_year;
  })
}

const filterName = (films) => {
 return films.sort(function(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })
}

const filterCountry = (films) => {
  return films.sort(function(a, b) {
    if (a.country < b.country) return -1;
    if (a.country > b.country) return 1;
    return 0;
  })
}

export { filterYear, filterName, filterCountry}