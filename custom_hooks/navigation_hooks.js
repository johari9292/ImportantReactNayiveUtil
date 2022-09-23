import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const useProtectedNavigation = () => {
  const { navigate } = useNavigation();
  const isAnonymous = useSelector((state) => state?.auth?.is_anonymous);
  const protectedNavigate = (screenName, screenParams = {}) => {
    isAnonymous ? navigate("Auth Stack") : navigate(screenName, screenParams);
  };
  return { protectedNavigate };
};
