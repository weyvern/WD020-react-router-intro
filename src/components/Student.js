import { useParams } from 'react-router-dom';

const Student = () => {
  const { name } = useParams();

  return <div>Hello my name is {name}</div>;
};

export default Student;
