import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getMaxListeners } from 'events'

const Home = () => {
  const loggedIn = {firstName: 'Shalom', lastName: 'Bruks', email: 'shalomzpage@gmail.com'}

 return (
   <section className="home">
     <div className="home-content">
      <header className="home-header">
        <HeaderBox 
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Access and manage your account and transaction efficiently."
        />
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        
        />
      </header>
      RECENT TRANSCTIONS
     </div>
     <RightSidebar 
       user={loggedIn}
       transactions={[]}
       banks={[{ currentBalance: 1503.50},{ currentBalance: 1200.50}]}
     />

   </section>
  )
}

export default Home
