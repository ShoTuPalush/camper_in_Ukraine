import { useState } from 'react';
import icons from '../../assets/img/icons.svg';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { useForm } from 'react-hook-form';
import { CustomDataPicker } from '../CustomDatePicker/CustomDatePicker';
import clsx from 'clsx';

export const ModalForm = () => {
  const [startDate, setStartDate] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {};
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-[24px] w-[448px] h-[532px] rounded-[10px] border border-[rgba(16, 24, 40, 0.2)]"
      >
        <h4 className="text-lg font-semibold text-[#101828] mb-[8px]">
          Book your campervan now
        </h4>
        <p className="text-sm text-[#475467] mb-[24px]">
          Stay connected! We are always ready to help you.
        </p>

        <label className="relative w-full h-[56px] rounded-[10px] mb-[14px] block bg-[#f7f7f7] text-[#838383]">
          <input
            className="peer w-full h-full rounded-[10px] focus:outline-none pl-[18px] bg-[#f7f7f7] text-xsm"
            type="text"
            placeholder=" "
            {...register('name', { required: true, maxLength: 20 })}
          />
          <span
            className="absolute capitalize left-[18px] top-[16px] bg-transparent text-xsm
                peer-focus:-top-3 peer-hover:-top-3 peer-[:not(:placeholder-shown)]:-top-3"
          >
            name
          </span>
        </label>

        <label className="relative w-full h-[56px] rounded-[10px] mb-[14px] block bg-[#f7f7f7] text-[#838383]">
          <input
            className="peer w-full h-full rounded-[10px] focus:outline-none pl-[18px] bg-[#f7f7f7] text-xsm"
            type="text"
            placeholder=" "
            {...register('email', { required: true, maxLength: 20 })}
          />
          <span
            className="absolute capitalize left-[18px] top-[16px] bg-transparent text-xsm
                peer-focus:-top-3 peer-hover:-top-3 peer-[:not(:placeholder-shown)]:-top-3"
          >
            email
          </span>
        </label>

        <label className="relative w-full h-[56px] rounded-[10px] mb-[14px] block bg-[#f7f7f7] text-[#838383]">
          {/* <input
            className="peer w-full h-full rounded-[10px] focus:outline-none pl-[18px] bg-[#f7f7f7] text-xsm"
            type="text"
            placeholder=" "
            {...register('date', { required: true, maxLength: 20 })}
          /> */}
          <CustomDataPicker
            selectedDate={startDate}
            setSelectedDate={date => {
              setStartDate(date);
            }}
            customInput={
              <input
                className="py-[18px] w-[400px] h-full rounded-[10px] focus:outline-none pl-[18px] bg-[#f7f7f7] text-xsm"
                type="text"
                placeholder=" "
                {...register('date', { required: true, maxLength: 20 })}
              />
            }
          />
          <span
            className={clsx(
              'absolute capitalize left-[18px] top-[16px] bg-transparent text-xsm peer-focus:-top-3 peer-hover:-top-3 ',
              startDate > 0 && 'peer-[:not(:placeholder-shown)]:-top-3'
            )}
          >
            booking date
          </span>

          <span className="absolute right-[18px] top-[15px]">
            <svg className="stroke-[#101828] fill-none w-[20px] h-[20px]">
              <use href={`${icons}#icon-data-picker`} />
            </svg>
          </span>
        </label>
        <label className="relative w-full h-[114px] rounded-[10px] mb-[24px] block bg-[#f7f7f7] text-[#838383]">
          <textarea
            className="peer w-full h-full rounded-[10px] focus:outline-none pl-[18px] pt-[18px] bg-[#f7f7f7] text-xsm"
            type="text"
            placeholder=" "
            {...register('comment')}
          ></textarea>
          <span
            className="absolute capitalize left-[18px] top-[16px] bg-transparent text-xsm
                peer-focus:-top-3 peer-hover:-top-3 peer-[:not(:placeholder-shown)]:-top-3"
          >
            comment
          </span>
        </label>
        <button
          type="submit"
          className="w-[160px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
        >
          Send
        </button>
      </form>
    </>
  );
};
