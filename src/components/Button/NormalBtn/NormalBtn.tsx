import React from 'react';

interface Props {
  value: string;
  textSize?: string;
}

const NormalBtn: React.FC<Props> = ({ value, textSize = '13px' }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`flex justify-center items-center rounded-[70px] text-white uppercase w-[179.48px] h-[55px] bg-[#0b1d33] shadow-lg border-2 border-[#00c4f4] text-[${textSize}]`}
      >
        {value}
      </button>
    </div>
  );
};

export default NormalBtn;
