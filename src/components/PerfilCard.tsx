import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PerfilCardProps {
    img: string,
    title: string,
    btnTitle: string,
    description: string
}

function PerfilCard({img, title, btnTitle, description} : PerfilCardProps) {
  return (
    <div className="lg:w-[40%] w-[90%] relative mt-4 h-[400px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
      <div className="w-full h-full">
        <img
          src={img}
          alt="shoes"
          width={600}
          height={600}
          className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
        />
      </div>
      
      <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#c34c32] 
        opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
        translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 
        transition-all duration-300">
        <div className="transition-all duration-300 space-y-2">
          <h1 className="md:text-2xl font-semibold">{title}</h1>
          <p className="sm:text-base text-sm">{description}</p>
          <Link 
            to="https://github.com/JoaoPedroOM" 
            className="p-2 lg:w-1/2 w-[80%] bg-black flex rounded-md text-white"
          >
            {btnTitle} <ChevronsRight />
          </Link>
        </div>
      </article>

      <article className="p-2 w-full h-[20%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#c34c32] 
        opacity-100 lg:group-hover:opacity-0 lg:group-hover:-bottom-4 
        transition-all duration-300">
        <h1 className="md:text-2xl font-semibold">João Pedro</h1>
        <p className="sm:text-base text-sm">Desenvolvedor front end</p>
      </article>
    </div>
  );
}

export default PerfilCard;