import  { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [CaptainData, setCaptainData] = useState({})


    const submitHandler = async (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-20 mb-2' src="https://static.vecteezy.com/system/resources/previews/027/127/594/original/uber-logo-uber-icon-transparent-free-png.png" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input
                        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password"
                        placeholder='password'
                    />

                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                    >Login</button>

                </form>
                <p className='text-center'>Join as Fleet <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link
                    to='/login'
                    className='bg-[#e8702b] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as User</Link>
            </div>
        </div>
    )
}

export default UserLogin