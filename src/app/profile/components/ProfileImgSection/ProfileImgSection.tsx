import Image from "next/image";
import cameraIcon from "@/assets/camera-icon.svg";
import editIcon from "@/assets/edit-icon.svg";
import logoutIcon from "@/assets/logout-icon.svg";

type Props = {
  fullName: string;
  userName: `@${string}`;
};

function ProfileImgSection({ fullName, userName }: Props) {
  return (
    <div>
      <div>
        <Image src="/user.png" alt="" height={512} width={512} />
        <Image src={cameraIcon} alt="" />
      </div>
      <div>
        <p>{fullName}</p>
        <button>
          <Image src={editIcon} alt="" />
        </button>
      </div>
      <div>
        <p>{userName}</p>
        <button>
          <Image src={logoutIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
export default ProfileImgSection;
