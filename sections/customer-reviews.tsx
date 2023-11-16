// Customer Reviews Section

import ReviewCard from "@/components/review-card"
import { reviews } from "../constants"
import Container from "@/components/ui/container"


const CustomerReviews = () => {
  return (
    <section className="w-full h-full">
        <Container>
      <h3 className="text-center text-3xl font-bold pb-10">What Our 
        <span className="text-blue-500"> Customers </span>
        Say?
      </h3>
      <p className="m-auto max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="mt-10 flex flex-1 justify-center items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
      </Container>
    </section>
  )
}

export default CustomerReviews