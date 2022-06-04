import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function MediaCard() {

    return (
        <Card sx={{ maxWidth: 305 }}>
            <CardMedia
                component="img"
                height="230"
                image="https://res.cloudinary.com/ddi2tydzs/image/upload/v1654376745/1_u9wz3u.webp"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                A Game Plan for Success
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                Joe Plumeri
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Everyone imagines top CEOs as larger-than-life figures who do things no one else could.
                But deep down, every good business leader is an everyman who combines vision and high energy 
                with the ability to connect with all types of people and learn from them. InThe Power of Being 
                Yourself, renowned business leader Joe Plumeri-who served as a top executive at Smith Barney, 
                Citigroup, Primerica, and Willis-offers simple yet profound guidance on how to stay positive, 
                motivate yourself and others, and achieve both personal fulfillment and professional success
                </Typography>       
                
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Remove</Button>

                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup>

            </CardActions>
        </Card>
    );
}