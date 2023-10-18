import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <>
      <section>
        <h1>Welcome {user && user.name}</h1>
      </section>
    </>
  );
};

export default Dashboard;
