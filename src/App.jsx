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
      <div className="container">
        <h1>本管理アプリ</h1>
        <p>積読管理・シリーズ管理アプリ</p>


      </div>
      <div className="header"></div>
      <div className="book-list">
        {books.map(book => (
          <div className="book-card" key={book.bookId}>
            <div className="book-title">
              {book.bookTitle}
            </div>

            <div className="book-author">
              {book.authorName}
            </div>

            <div className="delete-button">
              <button /*onClick={deleteBook}*/> 削除 </button>
            </div>

          </div>
        ))}
      </div>
      
      <div className="form-area">
        <label>タイトル: 
          <input value={title} onChange={(event) => 
                                setTitle(event.target.value)}/>
        </label>

        <label>　著者:
          <input value={author} onChange={(event) => 
                                  setAuthor(event.target.value)}/>
        </label>

        <button onClick={addBook}> 登録 </button>
        
      </div>
      
      
    </>
  )
}

export default App




