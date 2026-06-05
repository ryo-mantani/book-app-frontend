import { useEffect, useState } from 'react'
import './App.css'

function App() {

  {/*本関連変数*/}
  const [books, setBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  {/*選択用ID*/}
  const [selectId, setSelectId] = useState(null)
  
  {/*複合モード*/}
  const [mode, setMode] = useState("normal")

   {/*検索時判定*/}
  const [isSearch, setIsSearch] = useState(false)

  {/*検索*/}
  const [searchText, setSearchText] = useState("")


  useEffect(() => {fetchBooks()}, [])

  useEffect(() => {
    setTitle("")
    setAuthor("")
    setEditId(null)
    setSelectId(null)
    setIsSearch(false)
  
  }, [mode])

  //登録
  const addBook = () => {
    //ブラウザ標準Yes/No機能
    const check = window.confirm("登録しますか？")
    //No
    if (!check) {return}
    //Yes
    fetch("http://localhost:8080/books",{
      method: "POST", //HTTP POST指定
      headers: {"Content-Type": "application/json"},//JSON形式
      body: JSON.stringify({bookTitle: title, authorName: author})

    }).then(() => fetchBooks())
  }

  //削除
  const deleteBook = (id) => {
    if (id === null) {
      alert("削除する本を選択してください")
      return
    }
    //ブラウザ標準Yes/No機能
    const check = window.confirm("本当に削除しますか？")
    //No
    if (!check) {return}
    //Yes
    fetch(`http://localhost:8080/books/${id}`,{
      method: "DELETE"
    }).then(() => fetchBooks())
  }

  //検索
  const searchBook = () => {

    setIsSearch(true)

    // 両方空なら全件取得
    if (title === "" && author === "") {
      fetchBooks()
      return
    }

    fetch(
      `http://localhost:8080/books/search?title=${title}&author=${author}`)
      .then(response => {
        if (response.status === 404){
          setBooks([])
          return null
        }

        return response.json()
      })

      .then(data => {
        if (data !== null){
          setBooks(data)
        }
      })
  }

  //更新
  const updateBook = (id) => {
    if (id === null) {
      alert("更新する本を選択してください")
      return
    }
    //ブラウザ標準Yes/No機能
    const check = window.confirm("本当に更新しますか？")
    //No
    if (!check) {return}
    //Yes
    fetch(`http://localhost:8080/books/${id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({bookTitle: title, authorName: author})
    })
    .then(() => fetchBooks())
    .then(() => {
      setTitle("")
      setAuthor("")
      setEditId(null)
      setSelectId(null)
      setMode("normal")
      setIsSearch(false)
    })
    
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

  {/*ステータス*/}
  let buttonClass = ""
  switch (mode) {
    case "norma":
      buttonClass = "button"
      break

    case "delete":
      buttonClass = "delete-button"
      break

    case "update":
      buttonClass = "update-button"
      break

    case "search":
      buttonClass = "search-button"
      break

  }

  return (
    <>
      <div className="container">
        <h1>本管理アプリ</h1>
        <p>積読管理・シリーズ管理アプリ</p>
      </div>

      {/*トグルエリア*/}
      <div className="toggle-area">
        {/*削除トグル*/}
        <div className="mode-toggle">
          <div
            className={`toggle-switch delete ${mode === "delete" ? "on" : ""}`}
            onClick={() => setMode(mode === "delete" ? "normal" : "delete")}
          >
            <div className="toggle-circle"></div>
          </div>
          <p>：削除モード</p>
        </div>

        {/*変更トグル*/}
        <div className="mode-toggle">
          <div
            className={`toggle-switch update ${mode === "update" ? "on" : ""}`}
            onClick={() => setMode(mode === "update" ? "normal" : "update")}
          >
            <div className="toggle-circle"></div>
          </div>
          <p>：更新モード</p>
        </div>

        {/*検索トグル*/}
        <div className="mode-toggle">
          <div
            className={`toggle-switch search ${mode === "search" ? "on" : ""}`}
            onClick={() => setMode(mode === "search" ? "normal" : "search")}
          >
            <div className="toggle-circle"></div>
          </div>
          <p>：検索モード</p>
        </div>
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
            
        {/*登録更新ボタン 削除モード中は制限*/}
        <button
          className={buttonClass}
          type="button" 
          onClick={() => {
            if(mode === "delete") {
                deleteBook(selectId) 
            } else if(mode === "update") {
                updateBook(selectId) 
            } else if(mode === "search") {
                searchBook()
            } else {
              addBook()
            }}}>
            
          {mode === "delete" ? "削除" : 
           mode === "update" ? "更新" : 
           mode === "search" ? "検索" : "登録"}

        </button>
        
      </div>


      
      <div className="header"></div>

      {books.length === 0 && isSearch && (
        <p className="no-result">
          検索結果がありません
        </p>
      )}

      {/*本カード一覧*/}
      <div className="book-list">
        {books.map(book => (
          <div className={`book-card 
              ${mode === "delete" ? "delete-mode" : ""}
              ${mode === "update" ? "update-mode" : ""}
              ${selectId === book.bookId ? "selected-card" : ""}
              `}
              key={book.bookId}
              onClick={() => {
                if (mode === "delete") {
                  setSelectId(book.bookId)
                }
                if (mode === "update") {
                  setEditId(book.bookId)
                  setSelectId(book.bookId)                    
                  setTitle(book.bookTitle)
                  setAuthor(book.authorName)
                }
              }}
          >    
            {/*タイトル*/}
            <div className="book-title">{book.bookTitle}</div>

            {/*ダミー画像*/}
            <img
              src="/images/no-image.png"
              alt="表紙画像"
              className="book-image"
            />

            {/*著者*/}
            <div className="book-author">{book.authorName}</div>

          </div>
        ))}
      </div>
      
    </>
  )
}

export default App




