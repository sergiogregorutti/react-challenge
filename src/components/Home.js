import { NavLink } from 'react-router-dom'

const persons = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']

function Home() {
  return (
    <div className="container">
      <h2>Top 5 GitHub Users</h2>
      <p>Tap the username to see more information</p>

      {persons.map((person) => 
        <NavLink
          to={'/person?username='+person}
          exact
          key={person}
          className='user-btn'>
          {person}
        </NavLink>
      )}
    </div>
  );
}

export default Home;