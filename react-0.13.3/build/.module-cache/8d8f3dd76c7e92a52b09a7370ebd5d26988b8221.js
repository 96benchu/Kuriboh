/** @jsx React.DOM */

// Let's create a "real-time search" component

var SearchExample = React.createClass({displayName: "SearchExample",

    getInitialState: function(){
        return { searchString: ' ' };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }
        else
        {
            libraries = libraries.filter(function(l){
                return l.popular.toLowerCase().match('true');
            });
        }


        return React.createElement("div", {style: "float: inline-block;"}, 
                    React.createElement("input", {type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here"}), 

                    React.createElement("ul", null, 

                         libraries.map(function(l){
                            return React.createElement("li", null, l.name, " ")
                        }) 

                    )

                );

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'Backbone.js', popular: 'true'},
    { name: 'AngularJS', popular: 'true'},
    { name: 'jQuery',  popular: 'true'},
    { name: 'Prototype',  popular: 'true'},
    { name: 'React',  popular: 'true'},
    { name: 'Ember',  popular: 'true'},
    { name: 'Knockout.js', popular: 'true'},
    { name: 'Dojo',  popular: 'true'},
    { name: 'Mootools',  popular: 'true'},
    { name: 'Underscore',  popular: 'true'},
    { name: 'Lodash', popular: 'true'},
    { name: 'Moment',  popular: 'true'},
    { name: 'Express',popular: 'false'},
    { name: 'Koa', popular: 'false'},

];

// Render the SearchExample component on the page

React.render(
    React.createElement(SearchExample, {items:  libraries }),
    document.body
);