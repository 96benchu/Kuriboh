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


        return React.createElement("div", null, 
                    React.createElement("input", {type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here"}), 

                    React.createElement("ul", null, 

                         libraries.map(function(l){
                            return React.createElement("li", null, l.name, " ", React.createElement("a", {href: l.url}, l.url))
                        }) 

                    )

                );

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/', popular: 'true'},
    { name: 'AngularJS', url: 'https://angularjs.org/', popular: 'true'},
    { name: 'jQuery', url: 'http://jquery.com/', popular: 'true'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/', popular: 'true'},
    { name: 'React', url: 'http://facebook.github.io/react/', popular: 'true'},
    { name: 'Ember', url: 'http://emberjs.com/', popular: 'true'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/', popular: 'true'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/', popular: 'true'},
    { name: 'Mootools', url: 'http://mootools.net/', popular: 'true'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/', popular: 'true'},
    { name: 'Lodash', url: 'http://lodash.com/', popular: 'true'},
    { name: 'Moment', url: 'http://momentjs.com/', popular: 'true'},
    { name: 'Express', url: 'http://expressjs.com/', popular: 'true'},
    { name: 'Koa', url: 'http://koajs.com/', popular: 'false'},

];

// Render the SearchExample component on the page

React.render(
    React.createElement(SearchExample, {items:  libraries }),
    document.body
);