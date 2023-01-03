import Persist from "../components/assets/images/persistence.jpg"
import Kids from "../components/assets/images/kidPersistence.jpg"
import Solving from "../components/assets/images/studentscom.jpg"
import Res from "../components/assets/images/gkid.jpg"
import Prob from "../components/assets/images/problemOkay.jpg"
const LearningCoding = () => {
  return (
 <div className="pl-[40px] my-[50px]"> 
    <div className="flex h-[100px] justify-center items-center drop-shadow-lg border-[2px] rounded-full  md: mx-[30px]  mb-[50px] sm:ml-[30px]">
      <h1 className="  sm:text-[1rem]  md:text-[3rem] font-bold">Why your kids should learn coding</h1>
    </div>
    
     <div className="grid sm: grid-cols-1 md:grid-cols-3  ">
         <div className="  col-1-3">
            <div className="card w-[400px] pl-[20px]">
                <div className="card-side front flex flex-col ">
                      <img src={Prob} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding Boosts Problem-Solving Skills</h2>
                         <p>Coding is, without a doubt, one of the most straightforward ways for children to boost their problem-solving skills.At its simplest definition, problem-solving refers to a person’s ability to tackle complex or novel situations in an efficient way.</p>
                      </div>
                     

                </div>
                <div className="card-side back flex flex-col text-white ">
                <img src={Solving} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding Improves Computational Thinking</h2>
                         <p>One 2014 study found that coding games may help boost middle schoolers’ grasps on computational learning.Never heard of computational thinking before? Simply defined, it is a branch of knowledge that involves expressing problems in a way that a computer would.</p>
                      </div>
                </div>
                
            </div>
         </div>
         <div className="  col-2-3">
         <div className="card w-[400px]">
                <div className="card-side front flex flex-col ">
                      <img src={Persist} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding Encourages Persistence</h2>
                         <p>Computer science is one of the few professional disciplines where it’s entirely acceptable to be near-constantly failing. Not only is failure immediately recognizable — i.e., a program “breaks,” and doesn’t work as intended — but success literally cannot be achieved until all errors are handled.</p>
                      </div>
                     

                </div>
                <div className="card-side back flex flex-col text-white">
                <img src={Kids} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="bg-[#e0b0ff] text-black px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding Teaches Creativity</h2>
                         <p className="second">Creativity, creativity, creativity; it’s something every early educator and parent is wholly concerned with, and yet it’s not a quality prized by most working adults.Research by a team of UC Berkeley psychologists suggests that creativity tends to decrease as we age. The adage is true — adults tend to be less creative than children.We should encourage of kids to learn it  .</p>
                      </div>
                </div>
                
            </div>
         </div>
          <div className="  col-3-3">
          <div className="card w-[400px]">
                <div className="card-side front flex flex-col ">
                      <img src={Res} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding Helps Teach Digital Literacy</h2>
                         <p>Technology surrounds us; it supports our work, facilitates communication, enables social connectivity, and upholds nearly every industry in the economy. In the modern world, being able to understand and engage with technology isn’t just good to have — it’s a necessity for navigating an increasingly digitized society. </p>
                      </div>
                     

                </div>
                <div className="card-side back flex flex-col text-white">
                <img src={Solving} alt=""  style={{width:"100%" ,height:"200px"}} className=""/>
                      <div className="bg-[#bf5700] pb-[3rem] px-[20px]">
                         <h2 className="text-[2rem] font-bold ">Coding is a Career-Building Skill</h2>
                         <p>One 2014 study found that coding games may help boost middle schoolers’ grasps on computational learning.Never heard of computational thinking before? Simply defined, it is a branch of knowledge that involves expressing problems in a way that a computer would.</p>
                      </div>
                </div>
                
            </div>
          </div>
     </div>
   
 </div>
  
  )
}

export default LearningCoding