import { onAuthStateChanged } from 'firebase/auth';
import HomeComponent from '../components/HomeComponent'
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (!res?.accessToken) {
                navigate('/login');
            } else {
                setLoading(false);
            }
        })
    }, [navigate])
    return loading ? <Loader /> : <HomeComponent />;
}

export default Home;
