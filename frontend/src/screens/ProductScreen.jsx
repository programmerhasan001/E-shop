import {
  Button,
  Card,
  Col,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Ratting from "../components/Ratting";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductScreen() {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addTocartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error.data.message || error.error}
        </Message>
      ) : (
        <>
          <Link className="btn btn-light my-3" to={"/"}>
            Go Back
          </Link>
          <Row>
            <Col md={5}>
              <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <h3>{product?.name}</h3>
              </ListGroup>
              <ListGroup
                variant="flush"
                className="border-top border-bottom py-3 mb-3"
              >
                <Ratting
                  value={product?.rating}
                  text={`${product?.numReviews} reviews`}
                />
              </ListGroup>
              <ListGroup variant="flush">
                <strong>Price ${product?.price}</strong>
              </ListGroup>
              <ListGroup variant="flush">
                Description: {product?.description}
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product?.countInStock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>QTY</Col>
                        <Col>
                          <FormControl
                            as={"select"}
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ),
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product?.countInStock === 0}
                      onClick={addTocartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
