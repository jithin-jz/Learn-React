import WithHover from '../hoc/WithHover'
const Home = () => {

  return (
    <h1>Welcome to the Home Page</h1>
  )
}

export default Home

export const HomeHover = WithHover(Home)