const NotFound = () => {
  return (
    <div className="mx-auto w-fit">
      <img src="/images/empty.svg" className="w-[450px] h-[450px] mt-20" />
      <div className="flex">
        <p className="text-gray-500">
          Não há pacientes cadastrados no momento!
        </p>
        <p className="ml-1 font-semibold cursor-pointer">Cadastre o primeiro</p>
      </div>
    </div>
  );
};

export default NotFound;
