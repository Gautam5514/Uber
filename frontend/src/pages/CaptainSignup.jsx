import { useState } from "react"
import { Link } from "react-router-dom"



const CaptainSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

    }

    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/594/original/uber-logo-uber-icon-transparent-free-png.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className="text-lg font-medium mb-2">What&apos;s Our Captain name</h3>
                    <div className="flex gap-4 mb-7">
                        <input
                            required
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type='text'
                            placeholder='First Name'
                        />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type='text'
                            placeholder='Last Name'
                        />
                    </div>
                    <h3 className="text-lg font-medium mb-2">What&apos;s our Captain email</h3>
                    <input 
                        required
                        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        type="text" 
                        placeholder="email@example.com"    
                    />
                    <h3 className='text-lg font-medium mb-2'> Enter password</h3>
                    <input 
                        required
                        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        type="password"   
                        placeholder="Password"
                    /> 
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
                        Create Account
                    </button>
                </form>
                <p className="text-center">Already have an account? <Link to='/captain-login' className="text-blue-600">Login Here</Link></p>
            </div>
            <div>
            <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
            </div>            
        </div>
    )
}

export default CaptainSignup
