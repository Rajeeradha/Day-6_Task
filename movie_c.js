class Movie {
    constructor(title,studio,rating)
    {
        this.title = ["Casino Royale","daadpool","AVENGERS","THOR"],
        this.studio = ["Eon Productions","marvel","marvel","marvel"],
        this.rating = ["PG13","PG","PG","PG"];
    }
   getPg(){
    return(`Movie : ${this.title} Studio: ${this.studio} Rating: ${this.rating}`)
    }
}
   
let movie = new Movie(`${this.title}
${this.studio}
${this.rating}`);
let n = Movie.length;
console.log(n);

for(let i=1; i<n; i++){
    if(rating[i] == "PG"){
        console.log(movie.getPg());
     }
     else
     {
         console.log("Its not PG rating movie");
     }
}

