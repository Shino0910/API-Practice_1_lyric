let button = document.querySelector('button')
let show = document.querySelector('#show')

button.addEventListener('click', function () {
  axios.get('https://lyric-api-403c0.firebaseio.com/Coldplay/Yellow.json')
    .then(function(response){
      show.innerHTML = response.data.lyrics
    })
    .catch(function(error){
        console.log(error)
    })
})
