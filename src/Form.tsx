import * as React from 'react';


/// USING USESTATE

type Image = {
    sm: string;
    md: string;
    lg: string;
}

interface IstateValue {
    title : string;
    desc: string;
    price: number;
    category: string;
    quantity: number;
    tags: string[];
    images: Image
}





const Form = () => {
    const [product, setProduct] = React.useState<IstateValue>({} as IstateValue);

// change the e type
const handleChange = (e: any) => {
    setProduct((prev) => ({...prev, [e.target.name]: e.target.value}));
}

const tagRef = React.useRef();

// change tag type
const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag: any) => {
        setProduct((prev) => ({...prev, tags: [...prev.tags, tag]}))
    });    
};

// change any type
const handleRemoveTag = (tag: any) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };


const handleIncrease = () => {
    setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const handleDecrease = () => {
      setProduct((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
      }));
  };

  return (

        // USING USESTATE

    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="Desc"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {product.tags.map((tag) => (
            <small key={tag} onClick={() => handleRemoveTag(tag)}>
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={handleDecrease}>
            -
          </button>
          <span>Quantity ({product.quantity})</span>
          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>
      </form>
    </div>
  )

}

export default Form;