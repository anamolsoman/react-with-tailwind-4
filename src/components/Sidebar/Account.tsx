import AvatarImg from "./avatar.svg";
const Account = () => {
  return (
    <div className="p-1 flex items-center border-b pb-2 border-b-gray-200">
      <img
        src={AvatarImg}
        className="w-10 h-10 bg-blue-300 mr-2 rounded-full "
        alt="Avatar"
      />
      <div className="">
        <span className="block  font-bold">Anamol Soman</span>
        <span className="block text-sm">anamolsoman2@gmail.com</span>
      </div>
    </div>
  );
};

export default Account;
