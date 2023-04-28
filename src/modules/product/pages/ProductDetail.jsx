import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import supabase from "../../../config/supabase";
import { Box, CardMedia, Container, Rating } from '@mui/material';
import Loading from "../../common/components/Loading";

export default function ProductDetail() {
  const {productId} = useParams()
  const {isLoading, data : product, error} = useQuery({
    queryKey: ["products", productId],
    queryFn: () => supabase.from("product").select().eq("id", productId).single(),
    select: (res) => res.data
  })
  console.log(product)
  if (isLoading) return <Loading/>
  return (
    <Container sx={{width: 500}}>
      <CardMedia component="img" image={product.thumbnail} height={400} width={400}/>
      <h1>{product.title}</h1>
      <p>Price: {product.pricce}$</p>
      <p>In stock: {product.stock}</p>
      <p>Description: {product.description}</p>
      <p>Rating: <br />
          <Rating value={product.rating} readOnly precision={0.5}/>
      </p>
    </Container>
  )
}
