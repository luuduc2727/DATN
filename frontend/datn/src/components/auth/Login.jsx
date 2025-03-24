import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import {Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { USER_API_URL_ENDPOINT } from '../utils/constant'
const Login = () => {
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:""
  });

  const changeEventHander = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_URL_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if(res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>SignUp</h1>

          <div className='my-2'>
            <Label className='my-2'>Email</Label>
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHander}
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className='my-2'>
            <Label className='my-2'>Password</Label>
            <Input
              type="password"
              value={input.password}
              onChange={changeEventHander}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className='flex items-center justify-between '>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHander}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2 ">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHander}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className="text-sm">Don't have account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>

  )
}

export default Login