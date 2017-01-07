import React from 'react';
import ReactDOM from 'react-dom';

import Placeholder from './components/placeholder.component';

class App extends React.Component {
    render() {
        return (
          <Placeholder/>
        );
    }
}

ReactDOM.render(<App/>,
    document.getElementById('content')
);
