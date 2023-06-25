class Movie {
    constructor(title,studio,rating)
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
   getPg(){
    return(`Movie : ${this.title} Studio: ${this.studio} Rating: ${this.rating}`)
    }
}
    var movie1= new Movie("Casino Royale","Eon Productions","PG13");
    
   console.log(movie1.getPg());

