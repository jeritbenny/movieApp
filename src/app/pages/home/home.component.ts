import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }
    bannerResult:any=[];
    trendingMovieResult:any=[];
    actionMovieResult:any=[];
    adventureMovieResult:any=[];
    animationMovieResult:any=[];
    comedyMovieResult:any=[];
    documentaryMovieResult:any=[];
    sciencefictionMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
  }



  //bannerdata
  bannerData(){
    this.service.bannnerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results;
    });
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingResult#');
     this.trendingMovieResult=result.results;
    });
  }

  //Action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
           console.log(result,'actionMovies#');
           this.actionMovieResult = result.results;
           
    });
  }
   //comedy
   comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
           this.comedyMovieResult = result.results;
           
    });
  }
   //documtery
   documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
           this.documentaryMovieResult = result.results;
           
    });
  }
    // animation 
    animationMovie() {
      this.service.fetchAnimationMovies().subscribe((result) => {
        this.animationMovieResult = result.results;
      });
    }
  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }  
}
