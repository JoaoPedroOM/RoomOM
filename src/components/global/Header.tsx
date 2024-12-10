import logo from "../../assets/imgs/logos/logoRoomOM.png"
import ButtonCadastro from "../ui/ButtonCadastro";
import ButtonLogin from "../ui/ButtonLogin";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between py-5 lg:px-20 px-2">
        <div className="flex items-center gap-2">
          <img
            className="w-[30px]"
            src={logo}
            alt="Logo do RoomOM"
            loading="lazy"
          />
          <h3 className="text-lg font-bold font-main text-white uppercase">
            Room.OM
          </h3>
        </div>

        <div className="flex lg:gap-5 gap-2">
          <ButtonCadastro redirect="/login">Cadastre-se</ButtonCadastro>
          <ButtonLogin redirect="/login">Entrar</ButtonLogin>
        </div>
      </div>
    </header>
  );
};

export default Header;
