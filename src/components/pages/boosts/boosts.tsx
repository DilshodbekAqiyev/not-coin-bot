import { useTypedSelector } from "@/store";

export const BoostsPage = () => {
  const user = useTypedSelector((state) => state.user);

  return (
    <div className="p-5">
      <div className="text-center">Your balance</div>
      <div className="flex items-center justify-center gap-3 text-[42px] font-bold my-2">
        <img
          src="/images/bitcoin.svg"
          alt="Bitcoin Icon"
          className="w-10 h-10"
        />
        {user.coin}
      </div>
    </div>
  );
};
