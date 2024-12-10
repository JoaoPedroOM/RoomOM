import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StripeCardProps{
    img: string,
    title: string,
    btnTitle: string
}

function StripeCard({img, title, btnTitle} : StripeCardProps) {
  return (
    <div className="lg:w-[40%] w-[90%] h-[400px] font-second relative mt-4 group bg-black dark:border-0 border overflow-hidden rounded-md text-white">
      <figure className="w-full h-full rounded-md overflow-hidden">
        <img 
          src={img} 
          alt="shoes" 
          width={600} 
          height={600} 
          className="h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300" 
        />
      </figure>
      <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-gradient-to-b from-[#80808025] via-[#8080805b] to-[#808080]"></div>

      <article className="p-4 space-y-2 absolute bottom-0 
        lg:bottom-[-50%] lg:group-hover:bottom-0 
        transition-all duration-300">
        <h1 className="lg:text-2xl text-[13px] font-semibold capitalize w-[90%]">
          {title}
        </h1>
        <Link 
          to="/logar" 
          className="text-base text-white font-normal 
            lg:opacity-0 lg:group-hover:opacity-100 
            lg:translate-y-2 lg:group-hover:translate-y-0 
            pt-2 flex gap-1 transition-all duration-300"
        >
          {btnTitle}
          <span><ChevronsRight /></span>
        </Link>
      </article>
    </div>
  );
}

export default StripeCard;