import Whatsapp from './Icons/Socials/Whatsapp';
import Instagram from './Icons/Socials/Instagram';

import socials from '@/styles/components/ui/socials.module.scss';

const Socials = () => {
  return (
    <div className={socials.brands}>
      <Whatsapp />
      <Instagram />
    </div>
  );
};

export default Socials;
