import { useEffect, useState } from "react"

const useFetchHook = ({ endpoint }) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])  
  const getProductos = () => {    
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`)
      .then(res => res.json())
      .then(data => {
        setData(data.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    getProductos()
  }, [])


  return { data, loading }
}

export default useFetchHook