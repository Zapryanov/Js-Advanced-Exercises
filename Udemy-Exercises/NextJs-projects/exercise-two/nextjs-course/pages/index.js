function Home(props) {
  const { products } = props;

  return (
    <div>
      <h1>Hello Next World</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
      <ul>
        {products.map(product =><li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: 
      {
        products: [{ id: "p1", title: "Product-P1" }]
      }
  }
}

export default Home;