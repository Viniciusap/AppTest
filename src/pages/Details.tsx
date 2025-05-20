import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../types";
import styles from "./Details.module.css";

interface Props {
  data: Product[];
  updateData: (id: number, updatedItem: Product) => void;
}

const Details: React.FC<Props> = ({ data, updateData }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = data.find((i) => i.id === Number(id));

  const [formData, setFormData] = useState<Product | null>(item || null);

  if (!formData) return <p>Product not found!</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateData(Number(id), formData);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>Edit Product</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};

export default Details;
