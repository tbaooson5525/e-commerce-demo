import { Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import Loading from "../../common/components/Loading";
import ProductCard from "../../common/components/ProductCard";

export default function ProductListing() {
  const { category } = useParams();

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      supabase
        .from("product")
        .select("id,title,pricce,thumbnail, rating, category!inner (name)")
        .eq("category.name",category),
    select: (res) => res.data,
  });

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Grid container spacing={2} py={10}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ProductCard
              title={product.title}
              price={product.pricce}
              rating={product.rating}
              imageUrl={product.thumbnail}
              id={product.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}