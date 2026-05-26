import { useEffect, useState } from 'react'

import './App.css'



function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(response =>//Response受け取り
         response.json()) //JSON変換
      .then(data => {//データ取得
        console.log(data)//コンソール表示
        setBooks(data)})//Booksに保存
  }, [])

  

  return (
    <>
      <h1>本管理アプリ</h1>

      {books.map(book => (
      <div>
        {book.bookTitle}
      </div>
      ))}
      
    </>
  )
}

export default App
