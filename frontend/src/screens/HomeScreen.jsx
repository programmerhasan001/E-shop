import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

export default function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error.data.message || error.error}
        </Message>
      ) : (
        <>
          <h1 className="mt-3">Latest Products</h1>
          <Row>
            {products?.map((product) => (
              <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}
