import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";

function sharedLayout() {
   return (
      <Wrapper>
         <main className="dashboard">
            <SmallSidebar />
            <BigSidebar />
            <div>
               <Navbar></Navbar>
               <div className="dashboard-page">
                  <Outlet></Outlet>
               </div>
            </div>
         </main>
      </Wrapper>
   );
}
export default sharedLayout;
