/** @jsx React.DOM */

// Let's create a "real-time search" component

var SearchExample = React.createClass({displayName: "SearchExample",

    getInitialState: function(){
        return { searchString: ' ' };
    },

    handleClick: function(event){
        console.log("worked")
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
                            return React.createElement("li", {onClick: this.handleClick}, l.name, " ")
                        }) 

                    )

                );

    }
});

                                                                                                                                                             
var libraries = [

    { name: 'Technology', popular: 'true'},
    { name: 'Fishing', popular: 'true'},
    { name: 'School',  popular: 'true'},
    { name: 'Camping',  popular: 'true'},


];

// Render the SearchExample component on the page

React.render(
    React.createElement(SearchExample, {items:  libraries }),
    document.getElementById('sidebar')
);