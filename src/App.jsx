import { useEffect, useState } from 'react'

import './App.css'



function App() {

  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
      fetchBooks()
  }, [])

  const addBook = () => {
    fetch("http://localhost:8080/books",{
      method: "POST", //HTTP POST指定
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({bookTitle: title, authorName: author})

    }).then(() => fetchBooks())

  }

  const fetchBooks = () => {
    fetch("http://localhost:8080/books")
      .then(response =>//Response受け取り
         response.json()) //JSON変換

      .then(data => {//データ取得
        console.log(data)//コンソール表示
        setBooks(data)//Booksに保存
      })
  }



  
  return (
    <>
      <h1>本管理アプリ</h1>
      
      <label>title input: 
        <input value={title} onChange={(event) => 
                              setTitle(event.target.value)}/>
      </label>

      <label>author input:
        <input value={author} onChange={(event) => 
                                setAuthor(event.target.value)}/>
      </label>

      <button onClick={addBook}> 登録 </button>

      {books.map(book => (
        <p key={book.bookId}>{book.bookTitle}</p>
      ))}
      
    </>
  )
}

export default App
