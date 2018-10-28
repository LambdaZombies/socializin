import htmlContent from '../googlec08c83094e7d4cb6.html';
import React from 'react';
const Verify = React.createClass({
    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        );
    }
});
export default Verify;