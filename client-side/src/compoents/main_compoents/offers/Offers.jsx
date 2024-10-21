import Card from 'react-bootstrap/Card';
import image1 from "../../../assets/images/bannerhead1.jpg"
function ImageAndTextExample() {
  return (
    <>
    <br />
      <Card>
        <Card.Img className='subimg' variant="top" src={image1} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default ImageAndTextExample;