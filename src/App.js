import React from 'react';
import Character from "./components/character/character";

const App = () => {
    return (
        <div>
          <Character id={1} name={'Sasha'} status={true} image={"https://t3.ftcdn.net/jpg/03/88/55/52/360_F_388555227_2i2EboCheQGFvJ4ywW3tm5KWNP4pSUEK.jpg"}/>

        </div>
    );
};

export default App;