import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../features/admin/adminThunk.js";

const useUserListViewModel = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.userList);
  const loading = useSelector((state) => state.admin.loading);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const refreshUserList = () => {
    dispatch(fetchAllUsers());
  };

  return {
    users,
    loading,
    error,
    refreshUserList,
  };
};

export { useUserListViewModel };