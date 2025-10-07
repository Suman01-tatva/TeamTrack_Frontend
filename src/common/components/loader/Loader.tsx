import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../../app/store";

const Loader: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
      <div className="w-20 h-20 border-4 border-t-transparent border-grey-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;