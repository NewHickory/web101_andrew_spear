const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})




// inside a <script> element or in .js file
// fetch('results.html', {
//   method:"POST",
//   body: {}
// })


// const handleSubmit = () => {

// }