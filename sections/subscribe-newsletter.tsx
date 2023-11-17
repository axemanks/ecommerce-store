// Subscribe to newsletter section

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"

const Subscribe = () => {
    return (
      <section 
      className="flex justify-between items-center max-lg:flex-col gap-10 border-t" 
      id="contact"
      >
        <Container >
        <h3 className="w-full text-3xl font-bold py-10">Sign Up For
          <span className="text-blue-500"> Updates </span>
          & Newsletter
        </h3>
        <div className="w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full">
          <input type="text" placeholder="     name@youremail.com" className="h-full w-full" />
          <div className="flex justify-end items-center w-full ">
            <Button 
            >Sign Up</Button>
          </div>
        </div>
        </Container>
      </section>
    )
  }
  
  export default Subscribe