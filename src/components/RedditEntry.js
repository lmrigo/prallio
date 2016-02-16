import React, {PropTypes} from 'react';



// In this example we also have two components - a picture and
// a picture list. The pictures are fetched from Instagram via AJAX.


var Picture = React.createClass({

    // This component doesn't hold any state - it simply transforms
    // whatever was passed as attributes into HTML that represents a picture.

    clickHandler: function(){
        
        // When the component is clicked, trigger the onClick handler that 
        // was passed as an attribute when it was constructed:

        this.props.onClick(this.props.ref);
    },

    render: function(){

        var cls = 'picture ' + (this.props.type ? this.props.type : '');
       
        return (
          
            <div className={cls} onClick={this.clickHandler} >
                <img src={this.props.src} title={this.props.title} />
            </div>

        );

    }

});

var PictureList = React.createClass({

    getInitialState: function(){
        
        // The pictures array will be populated via AJAX, and 
        // the favorites one when the user clicks on an image:
        
        return { pictures: [], favorites: [] };
    },

    componentDidMount: function(){
        
        // When the component loads, send a jQuery AJAX request

        var self = this;
        var pictures = [];
        // API endpoint for Instagram's popular images for the day

        //var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?';
        let url = "http://www.reddit.com/r/funny/top/.json";
        //$.getJSON(url, function(result){
         fetch(url).then(r => r.json()).then(function(result) {
           
           var sizes = [1024, 720, 480, 360, 240, 1];
           var sizeNames = {1024: "huge", 720: "large", 480: "big", 360: "medium", 240: "small", 1: "minimum"};
           
          
           var pictures = result.data.children.filter(p => !p.data.over_18 && p.data.preview !== undefined).map(function(p){
               console.log(p.data.preview);
            
               var type = "vertical";
              
              var size = "";
               
              
             
              size += "width-" + sizeNames[sizes.filter(s => p.data.preview.images[0].source.width / s > 1.5)[0]];
              size += " height-" + sizeNames[sizes.filter(s => p.data.preview.images[0].source.height / s > 1.5)[0]]; 
           
              console.log(size);
              
                
               
               return { 
                   id: p.data.id, 
                   url: p.data.url, 
                   src: (p.data.preview? p.data.preview.images[0].source.url : p.data.thumbnail), //p.data.thumbnail, 
                   title: "("+ p.data.subreddit +") "+ p.data.title, 
                   type: type + " " + size,
                   height: (p.data.preview ? 
                              p.data.preview.images[0].source.height : 240),
                   width:(p.data.preview ? 
                              p.data.preview.images[0].source.width : 240),
                   favorite: false 
               };
               
           
         });
         
           // Update the component's state. This will trigger a render.
           // Note that this only updates the pictures property, and does
           // not remove the favorites array.

           self.setState({ pictures: pictures });
         });
         
         

    },

    pictureClick: function(id){

        // id holds the ID of the picture that was clicked.
        // Find it in the pictures array, and add it to the favorites

        var favorites = this.state.favorites,
            pictures = this.state.pictures;

        for(var i = 0; i < pictures.length; i++){

            // Find the id in the pictures array

            if(pictures[i].id == id) {                  

                if(pictures[i].favorite){
                    return this.favoriteClick(id);
                }

                // Add the picture to the favorites array,
                // and mark it as a favorite:

                favorites.push(pictures[i]);
                pictures[i].favorite = true;

                break;
            }

        }

        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});

    },

    favoriteClick: function(id){

        // Find the picture in the favorites array and remove it. After this, 
        // find the picture in the pictures array and mark it as a non-favorite.

        var favorites = this.state.favorites,
            pictures = this.state.pictures;


        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }

        // Remove the picture from favorites array
        favorites.splice(i, 1);


        for(i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {
                pictures[i].favorite = false;
                break;
            }
        }

        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});

    },

    render: function() {

        var self = this;

        var pictures = this.state.pictures.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} type={p.type} favorite={p.favorite} width={p.width} height={p.height} onClick={self.pictureClick} />
        });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }

        var favorites = this.state.favorites.map(function(p){
            return <Picture ref={p.id} src={p.src} title={p.title} favorite={true} onClick={self.favoriteClick} />
        });

        if(!favorites.length){
            favorites = <p>Click an image to mark it as a favorite.</p>;
        }

        return (

            <div>
                <h1>Popular Reddit pics</h1>
                <div className="pictures"> {pictures} </div>
                    
            </div>

        );
    }
});
export default {Picture, PictureList};