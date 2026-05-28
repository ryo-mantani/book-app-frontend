import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [deleteMode, setDeleteMode] = useState(false)
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {fetchBooks()}, [])

  //登録
  const addBook = () => {
    //ブラウザ標準Yes/No機能
    const check = window.confirm("登録しますか？")
    //No
    if (!check) {return}
    //Yes
    fetch("http://localhost:8080/books",{
      method: "POST", //HTTP POST指定
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({bookTitle: title, authorName: author})

    }).then(() => fetchBooks())
  }

  //削除
  const deleteBook = (id) => {
    //ブラウザ標準Yes/No機能
    const check = window.confirm("本当に削除しますか？")
    //No
    if (!check) {return}
    //Yes
    fetch(`http://localhost:8080/books/${id}`,{
      method: "DELETE"
    }).then(() => fetchBooks())
  }


  //APIリクエストとデータ受け取り
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

      {/*トグル*/}
      <div className="toggle-area">
        {/*削除トグル*/}
        <div className="toggle-area-delete">
          <div
            className={`toggle-switch-delete ${deleteMode ? "on" : ""}`}
            onClick={() => {
              {/*削除フラグON*/}
              setDeleteMode(!deleteMode)
              
              {/*更新フラグOFF*/}
              if (!deleteMode) {
                setUpdateMode(false)
              }

            }}>
            <div className="toggle-circle-delete"></div>

          </div>
          <p>：削除モード</p>
        </div>

        {/*変更トグル*/}
        <div className="toggle-area-update">
          <div
            className={`toggle-switch-update ${updateMode ? "on" : ""}`}
            onClick={() => {
              {/*更新フラグON*/}
              setUpdateMode(!updateMode)

              {/*削除フラグOFF*/}
              if (!updateMode) {
                setDeleteMode(false)
              }

            }}>
            <div className="toggle-circle-update"></div>
          </div>
          <p>：更新モード</p>
        </div>
      </div>
      

      <div className="header"></div>

      {/*カード一覧*/}
      <div className="book-list">
        {books.map(book => (
          <div className={`book-card ${deleteMode ? "delete-mode" : ""}`}
              key={book.bookId}
              onClick={() => {
                if (deleteMode) {deleteBook(book.bookId)}
              }}
          >    

            <div className="book-title">
              {book.bookTitle}
            </div>

            <div className="book-author">
              {book.authorName}
            </div>

          </div>
        ))}
      </div>
      
      {/*登録フォーム*/}
      <div className="form-area">
        <label>タイトル: 
          <input value={title} onChange={(event) => 
                                setTitle(event.target.value)}/>
        </label>

        <label>著  者:
          <input value={author} onChange={(event) => 
                                  setAuthor(event.target.value)}/>
        </label>

        <button onClick={addBook}> 登録 </button>
        
      </div>
      
      
    </>
  )
}

export default App




