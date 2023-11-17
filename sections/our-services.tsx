// The services section - will map out from constants into cards
import ServiceCard from '@/components/service-card';
import Container from '@/components/ui/container';
import { services } from '@/constants';

const Services = () => {
  return (
    <section id='services'>
      <Container>
        <h1 className='flex justify-center text-3xl font-semibold pb-10'>
          Services
          </h1>

        <div className='flex flex-row justify-center gap-9 mx-10'>
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            {...service}
          />
        ))}</div>
      </Container>
    </section>
  );
};

export default Services;