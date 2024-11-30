import  { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault()
        setUserData ({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })
        console.log(userData)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <div>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                    <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className='text-lg w-1/2 font-medium mb-2'>What&apos;s your name</h3>
                        <div className='flex gap-4 mb-7'>
                            <input 
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                type="text" 
                                placeholder='First Name'
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                type="text"
                                placeholder='Last Name' 
                            />
                        </div>

                        <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
                        <input
                            required
                            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder='email@example.com'
                        />

                        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                        <input
                            required 
                            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            placeholder='password'
                        />

                        <button
                            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                        >Create Account</button>

                    </form>
                    <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
                </div>

                <div>
                    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy
                        </span> and <span className='underline'>Terms of Service apply</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default UserSignup
