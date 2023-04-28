import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const categoryOptions = [
    {
        imageURL: 'https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/smartphone.webp?t=2023-04-27T07%3A37%3A38.865Z',
        title: 'Smartphones',
        href: "/smartphones"
    },
    {
        imageURL: 'https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/laptop.webp?t=2023-04-27T07%3A37%3A16.214Z',
        title: 'Laptops',
        href: "/laptops"
    },
    {
        imageURL: 'https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/pc.webp?t=2023-04-27T07%3A37%3A30.955Z',
        title: 'PC',
        href: "/pc"
    },    {
        imageURL: 'https://etyyxegspipinzrbteoi.supabase.co/storage/v1/object/public/e-commerce/banner/tablet.webp?t=2023-04-27T07%3A37%3A45.362Z',
        title: 'Tablet',
        href: "/tablet"
    },
]
export default function Category () {
  return (
    <Container>
        <ImageList>
        {categoryOptions.map((item) => (
            <Link key={item.href} to={item.href} style={{display: "flex"}}>
                <ImageListItem>
                <img
                    src={`${item.imageURL}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        <InfoIcon />
                    </IconButton>
                    }
                />
                </ImageListItem>
            </Link>
        ))}
        </ImageList>
    </Container>
  );
}
