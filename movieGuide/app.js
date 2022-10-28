//Initial References

let movieNameRef = document.getElementById("movie-name"),
  searchBtn = document.getElementById("search-btn"),
  result = document.getElementById("result");

//Function to fetch data from API
let getMovie = () => {
  let movieName = movieNameRef.value,
    url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  //If inout field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `
            <h3 class = 'msg'>Please enter a movie name</h3>
        `;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
};
