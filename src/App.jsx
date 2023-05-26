import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { useState } from 'react';
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';





function App() {

  const [userData,setuserData]=useState(null)



  let routers = createHashRouter([
    { path: "", element: <Layout  userData={userData} setuserData={setuserData} /> , children: [
      {index:true , element:  <ProtectedRoute userData={userData}> <Home/></ProtectedRoute> },
      {path:"movies" , element:  <ProtectedRoute> <Movies/></ProtectedRoute>  },
      {path:"tvshow" , element:  <ProtectedRoute><Tvshow/></ProtectedRoute>    },
      {path:"people" , element: <ProtectedRoute>  <People/></ProtectedRoute>  },
      {path:"moviedetails/:id/:mediaType" , element: <ProtectedRoute>  <MovieDetails /></ProtectedRoute>  },
      {path:"login" , element:   <Login saveUserData={saveUserData}  />  },
      { path:'register', element: <Register/>  },
      {path:"*" , element: <Notfound/>},
    ]}
  ])
  
  useEffect(()=>{
    if (localStorage.getItem('userToken')) {
      saveUserData()
    }
    
      },[])

  function saveUserData() {
  let incoded =localStorage.getItem('userToken');
  let decoded = jwtDecode(incoded);
  setuserData(decoded)
  }

  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
