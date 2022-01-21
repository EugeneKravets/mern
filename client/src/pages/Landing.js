import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
function Landing() {
   return (
      <Wrapper>
         <nav>
            <Logo></Logo>
         </nav>
         <div className="container page">
            <div className="info">
               <h1>
                  Job <span>tracking</span>
               </h1>
               <p>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                  Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI
                  века. В то время некий безымянный печатник создал большую коллекцию размеров
                  и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
                  только успешно пережил без заметных изменений пять веков, но и перешагнул
               </p>
               <button className="btn btn-hero">Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className="img main-img"></img>
         </div>
      </Wrapper>
   );
}

export default Landing;
