import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers :{
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjY4YTZkMGUyYWQzN2M4N2EzOWFjNTgxYmI3ZDZjYyIsIm5iZiI6MTcyNTQ1NzEwMi4wOTEzNzgsInN1YiI6IjY2ZDg0ZDRmYjIyOGFjNDgxODBlZTY0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXmBwmgTngkGkJO--cmUjMkog692oIfZ5x1vcr8V54U'
    }
})

export default instance