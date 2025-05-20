import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DataTable from "./components/DataTable";
import Details from "./pages/Details";
import type { Product } from "./types";
import Header from "./components/Header";

const initialData: Product[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 35 },
  { id: 5, name: "Emma", age: 28 },
  { id: 6, name: "Frank", age: 40 },
  { id: 7, name: "Grace", age: 26 },
  { id: 8, name: "Henry", age: 31 },
  { id: 9, name: "Isabel", age: 29 },
  { id: 10, name: "Jack", age: 38 },
  { id: 11, name: "Karen", age: 27 },
  { id: 12, name: "Leo", age: 33 },
  { id: 13, name: "Mia", age: 24 },
  { id: 14, name: "Nathan", age: 36 },
  { id: 15, name: "Olivia", age: 32 },
  { id: 16, name: "Peter", age: 34 },
  { id: 17, name: "Quinn", age: 21 },
  { id: 18, name: "Rachel", age: 37 },
  { id: 19, name: "Samuel", age: 42 },
  { id: 20, name: "Tina", age: 23 },
  { id: 21, name: "Umar", age: 39 },
  { id: 22, name: "Victor", age: 27 },
  { id: 23, name: "Wendy", age: 30 },
  { id: 24, name: "Xavier", age: 26 },
  { id: 25, name: "Yasmine", age: 29 },
  { id: 26, name: "Zane", age: 35 },
];


const App: React.FC = () => {
  const [data, setData] = useState<Product[]>(initialData);

  const updateData = (id: number, updatedItem: Product) => {
    setData((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<DataTable data={data} />} />
          <Route path="/details/:id" element={<Details data={data} updateData={updateData} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
