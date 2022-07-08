import axios from "axios"
import React from "react"

const App = () => {
  const [page, setPage] = React.useState(1)
  const [data, setData] = React.useState()
  React.useEffect(() => {
    axios.get(`https://randomuser.me/api/?page=${page}&results=10`).then(res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
  }, [page])
  const handlePageAugment = () => {
    setPage(page + 1)
  }
  const handlePageDecrease = () => {
    setPage(page - 1)
  }
  return (
    <div style={{ margin: '5%' }}>
      <table className="table" style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Thumbnail Icon</th>
          </tr>
        </thead>
        <tbody>
          {
            (data ? data.map((e, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{(page - 1) * 10 + index + 1}</th>
                  <td>{e.name.title + e.name.first + e.name.last}</td>
                  <td>{e.login.username}</td>
                  <td><img src={e.picture.large} style={{ width: '30px', height: '30px' }} /></td>
                </tr>
              )
            }) : <tr>No data</tr>)
          }
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <button style={{ margin: '10px', borderRadius: '5px', width: '90px' }} disabled={page === 1} onClick={handlePageDecrease} >Previous</button>
          </li>
          <li className="page-item">
            <button style={{ margin: '10px', borderRadius: '5px', width: '90px' }} disabled={page === 10} onClick={handlePageAugment} >Next</button>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default App
