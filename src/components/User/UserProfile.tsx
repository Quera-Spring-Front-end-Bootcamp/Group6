type UserProfileProps = {
  src: string | undefined;
  name: string;
  size: "sm" | "lg";
};
export default function UserProfile(props: UserProfileProps) {
  const formatName = props.name
    .split(" ")
    .map((text) => {
      return text[0];
    })
    .join("");

  return (
    <div
      className={`${
        props.size === "sm" ? "w-[35px] h-[35px]" : "w-[100px] h-[100px]"
      } flex justify-center items-center rounded-[100%] bg-[#EAF562] font-[500] text-[12px] text-black `}
    >
      {props.src ? (
        <img className="rounded-[100%]" src={props.src} alt={props.name} />
      ) : (
        formatName
      )}
    </div>
  );
}
