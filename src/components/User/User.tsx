import UserProfile from "./UserProfile";

export default function User() {
  return (
    <div className="flex items-center gap-2">
      <UserProfile src={undefined} name="Nilofar Mojodi" size="sm" />
      <span className="font-[500] text-[16px] text-[#1E1E1E]">
        نیلوفر موجودی
      </span>
    </div>
  );
}
