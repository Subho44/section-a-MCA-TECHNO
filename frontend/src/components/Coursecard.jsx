import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,Button,Box } from '@mui/material'
const Coursecard = ({title,price,image}) => {

  return <>
  <div>
  <Card 
  sx={{
    height:"100%",
    borderRadius:3,
    boxShadow:4,
  }}
  
  >

    <CardMedia component="img" height="200" image={image} alt='img'/>
    <CardContent>
        <Typography variant='h6' fontWeight="bold">
        {title}
        </Typography>
        <CardActions>
            <Box>
                <Typography>
                    {price}
                </Typography>
                <Button variant='contained' size='sm'>
                    Enroll
                </Button>
            </Box>
        </CardActions>
    </CardContent>



    
  </Card>




   
    
  </div>
  
  
  </>
}

export default Coursecard