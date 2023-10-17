import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import HomeComponent from '../../components/user/home';

const HomePage = (props) => {

    const navigate = useNavigate();

    useEffect(()=>{

        //Mount: 
        if(props.redirect){
            navigate("/home")
        }

        return () =>{
        //Unmount
    
        }
    }, [])

    return (
        <HomeComponent/>
    );
}

export default HomePage;