import React from 'react';

class ThemedDecorations extends React.Component{
    render(){
        const childrenWithThemed = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                className: this.props.theme
            });
        });

        return(
            <div>
                {childrenWithThemed}
            </div>
        );
    }
};

export default ThemedDecorations