import { useEffect } from 'react';
import axios from 'axios';

// request by axios
const Example = () => {
  // useEffect(async () => {
  useEffect(() => {
    // axios.get(' http://127.0.0.1:3003/user').then(res => {
    //   console.log(res.data);
    // });
    const getUser = async () => {
      const res = await axios.get(' http://127.0.0.1:3003/user');
      console.log(res.data);
    };
    getUser();
  }, []);
};

export default Example;
