import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-xs text-white text-center  p-1 w-full'>
        <p>Sign up and get 20% off to your first order. 
            <Link to='/' className='underline'>
                Sign Up Now
            </Link>
        </p>

    </div>
  )
}

export default Header