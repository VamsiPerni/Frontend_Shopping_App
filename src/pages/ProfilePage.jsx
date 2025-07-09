import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

const ProfilePage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "GET",
      });
      const result = await resp.json();
      console.log("Result ---> ", result);
      setProducts(result.data.products);
    } catch (err) {
      console.log("Error while getting products --->> ", err.message);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const title = e.target.title.value;
      const price = e.target.price.value;
      const description = e.target.description.value;
      const quantity = e.target.quantity.value;

      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          price: price, // below line is also do's the same , it is from the ES6 version (from 2015(apprx))
          description,
          quantity,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (resp.status == "201") {
        alert("Product added!");
        getData();
        console.log(resp);
      } else {
        const result = await resp.json();
        alert(`Invalid data: ${result.message}`);
      }
    } catch (err) {
      console.warn("Cannot create product ---> ".err.message);
      alert(`Cannot create product ${err.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-4 flex-col gap-5 gap-5 p-6 bg-blue-100 max-w-150"
        >
          <div className="flex gap-4">
            <label>Title</label>
            <input
              name="title"
              type="text"
              className="border-1 py-1 px-2 rounded-md"
              placeholder="title"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              name="price"
              type="number"
              className="border-1 py-1 px-2 rounded-md"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              type="text"
              className="border-1 py-1 px-2 rounded-md"
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              name="quantity"
              type="number"
              className="border-1 py-1 px-2 rounded-md"
            />
          </div>
          <button className="border-1 py-1 px-2 rounded-md">Add Product</button>
        </form>
      </div>

      <div>
        {products.map((elem) => {
          return (
            <div key={elem._id} className="p-4 rounded-lg border-1">
              <p>{elem.title}</p>
              <p>{elem.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProfilePage };
