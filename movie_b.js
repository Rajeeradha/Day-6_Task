class Movie {
    // title="";
     //studio="";
     //rating="";
     constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    
       }   
      getPg(){
       
        return(`Movie : ${this.title} 
Studio: ${this.studio} 
Rating: ${this.rating}`)
      }
       
     }
     var movie1= new Movie("daadpool","marvel");
     var movie2= new Movie("AVENGERS","marvel");
     var movie3= new Movie("THOR","marvel");
     var movie4= new Movie("IRON MAN","marvel");
   
    console.log(movie1.getPg());