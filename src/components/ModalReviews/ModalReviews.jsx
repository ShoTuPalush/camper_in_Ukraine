import icons from '../../assets/img/icons.svg';

export const ModalReviews = ({ reviews }) => {
  return (
    <>
      <ul className="flex flex-col gap-[24px]">
        {reviews.map((review, index) => (
          <li key={index}>
            <div className="flex gap-[16px] mb-[16px] items-center">
              <div className="w-[60px] h-[60px] rounded-[60px] bg-[#f2f4f7] flex justify-center items-center">
                <span className="text-[#e44848] font-semibold text-2xl">
                  {review.reviewer_name[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold text-m text-[#101828] mb-[4px]">
                  {review.reviewer_name}
                </p>
                <div className="flex gap-[4px]">
                  {[1, 2, 3, 4, 5].map(item => (
                    <span key={item}>
                      {item <= review.reviewer_rating ? (
                        <svg className="w-[16px] h-[16px]">
                          <use href={`${icons}#icon-rating`} />
                        </svg>
                      ) : (
                        <svg className="w-[16px] h-[16px] stroke-[#f2f4f7]">
                          <use href={`${icons}#icon-rating-not`} />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-[#475467]">{review.comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
