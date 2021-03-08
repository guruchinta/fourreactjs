'use strict';

var appRoot = document.getElementById('app');
var temp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello Its first template'
    ),
    React.createElement(
        'p',
        null,
        'Testing Para'
    ),
    React.createElement(
        'p',
        null,
        'New Para'
    )
);

ReactDOM.render(temp, appRoot);
