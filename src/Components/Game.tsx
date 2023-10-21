import React from "react";

interface Props {
  onUpdate: () => void;
  name: string;
}

const UpdatePlayer = ({ onUpdate, name }: Props) => {
  return (
    <div>
      <button onClick={onUpdate}>{name}</button>
    </div>
  );
};

export default UpdatePlayer;
