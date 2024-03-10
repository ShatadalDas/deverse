import { v4 as uuidv4 } from "uuid";

function useUniqueId() {
  const generateId = () => uuidv4();
  return generateId;
}

export default useUniqueId;
