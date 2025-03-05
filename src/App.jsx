import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="form-container">
        <h2>個人資料輸入</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名：</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">年齡：</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', margin: '10px 0' }}>提交</button>
        </form>
        {submitted && (
          <div className="result">
            <h3>已提交的資料</h3>
            <p>姓名：{name}</p>
            <p>年齡：{age}</p>
          </div>
        )}
      </div>

    </>
  )
}

export default App
