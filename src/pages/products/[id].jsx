

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const productId = context.params.id
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
  const product = await response.json()
  
  return {
    props: {
      product: data.message
    }
  }
}
