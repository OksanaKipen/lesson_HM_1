import React from 'react';
import Simpson from "./components/simpson/simpson";

const App = () => {
    return (
        <div>
          <Simpson name={'Bart'} surname={Simpson} age={10} photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'} />

        </div>
    );
};

export default App;