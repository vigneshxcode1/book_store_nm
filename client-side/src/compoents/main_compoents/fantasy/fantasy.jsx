import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../../../assets/images/german.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';




// const base_url="http://3.111.51.4:3000"

const base_url="http://localhost:3000"

function BasicExample() {

  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await axios.get(`${base_url}/api/books/getbooks?bookcategory=fantacy`);

        const sortbook = res.data.data.sort((a, b) => {
          const date1 = new Date(a.createAt);
          const date2 = new Date(b.createAt);
          return date1 - date2;
        });

        setbooks(sortbook);

      } catch (err) {
        console.log(err);
      } finally {
        setloading(false);
      }
    };

    fetchproduct();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <>
      <h1>Fantasy Sellers</h1>
      <div className="card-container">
        {books.map((book) => (
          <Card key={book._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>{book.booktitle}</Card.Title>
              <Card.Text>{book.bookdes}</Card.Text>
              <Card.Text>{book.bookpricesell}</Card.Text>
              <Card.Text>{book.bookpricesrent}</Card.Text>
              <Button className='btn' variant="primary">buy books</Button>
              <Button className='btn' variant="primary">rent books</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BasicExample;
