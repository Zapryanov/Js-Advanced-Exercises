import fs from "fs/promises";
import path from "path";

function Home(props) {
  const { products } = props;

  return (
    <div>
      <h1>Hello Next World</h1>
      <ul>
        <li>Hard-Coded Product 1</li>
        <li>Hard-Coded Product 2</li>
        <li>Hard-Coded Product 3</li>
      </ul>
      <ul>
        {products.map(product =><li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json")
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: 
      {
        products: data.products
      }
  }
}

export default Home;