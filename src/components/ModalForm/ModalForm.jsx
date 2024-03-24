import { useState } from 'react';
import icons from '../../assets/img/icons.svg';
import clsx from 'clsx';

import { useForm } from 'react-hook-form';
import { CustomDataPicker } from '../CustomDatePicker/CustomDatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

const emailPatern =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ModalForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      date: '',
      comment: '',
    },
  });

  const onSubmit = () => {
    window.location.reload();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            name="name"
            placeholder=" "
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
              maxLength: { value: 20, message: 'Name must be < 20' },
            })}
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
            name="email"
            placeholder=" "
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              pattern: { value: emailPatern, message: 'Email is not valid' },
            })}
          />
          <span
            className="absolute capitalize left-[18px] top-[16px] bg-transparent text-xsm
                peer-focus:-top-3 peer-hover:-top-3 peer-[:not(:placeholder-shown)]:-top-3"
          >
            email
          </span>
        </label>

        <label className="relative w-full h-[56px] rounded-[10px] mb-[14px] block bg-[#f7f7f7] text-[#838383]">
          <CustomDataPicker
            selectedDate={startDate}
            name="date"
            setSelectedDatea={date => {
              setStartDate(date);
            }}
            {...register('date')}
            customInput={
              <input
                className="py-[18px] w-[400px] h-full rounded-[10px] focus:outline-none pl-[18px] bg-[#f7f7f7] text-xsm"
                type="text"
                placeholder=" "
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
            name="comment"
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
          onClick={() =>
            Object.keys(errors).length > 0 &&
            toast.error(errors[Object.keys(errors)[0]]?.message)
          }
          type="submit"
          className="w-[160px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
        >
          Send
        </button>
      </form>
    </>
  );
};
