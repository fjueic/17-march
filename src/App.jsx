import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })


function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-02-16&sortBy=publishedAt&apiKey=99fd726d35004e67a57d77f2f250df73').then(res => res.json()).then(data => {
            setData(data)
        })
    }, [])

    return (
        <>
            <div>
                {data && data.articles.map((item) => {
                    return <img src={item.urlToImage} alt={item.title} />
                })}
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
