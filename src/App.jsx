import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <div>
                <h3>Count is {count}</h3>
            </div>
            <div className="cards">
                <div className="card">
                    <button onClick={() => setCount((count) => count - 1)}>
                        Decrement
                    </button>
                </div>
                <div className="card">
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Increment
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
