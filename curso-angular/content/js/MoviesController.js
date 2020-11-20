function MoviesController(){
    this.favorites=[
        {
            title:'Transformers',
            year:'2014',
            popular:true,
            stars:'FIVE',
            category:'science fiction',
            image:'transformers.png'
        },        {   
            title:'Batman',
            year:'2010',
            popular:false,
            stars:'TWO',
            category:'action',
            image:'batman.jpg'
        },{
            title:'Brave heart',
            year:'2001',
            popular:true,
            stars:'ONE',
            category:'historical',
            image:'bravehearth.jpg'
        },{
            title:'The Matrix',
            year:'1999',
            popular:true,
            stars:'TWO',
            category:'action',
            image:'thematrix.jpg'
        },{
            title:'Grave of the fire flies',
            year:'1988',
            popular:true,
            stars:'ZERO',
            image:'gravefireflies.jpg'

        }
    ];
}
angular
    .module('app')
    .controller('MoviesController',MoviesController);