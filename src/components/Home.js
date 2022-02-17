import React, {useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Restaurants from './Restaurants'
import { listRestaurants } from '../action/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'



 function Home() {

const dispatch=useDispatch();

const restaurantReducer=useSelector(state=>state.restaurantReducer)

const {restaurants}=restaurantReducer




    const [hotels, setHotels] = useState([])

    useEffect(() => {
      dispatch (listRestaurants())
    }, [dispatch])

    // console.log("data is...", hotels);

    return (

<>
        
            {hotels?(
                <Row>
        
            {hotels.map(item => (

                <Col sm={10} md={8} lg={6} xl={3}>
                    <Restaurants item={item} />

                </Col>
            ))}

            </Row >
    ) : null}
            </>
    )

}

export default Home


