export type itemsImageSource = {
  desktop: string;
  mobile: string;
  title: string;
};

const Items = (props: itemsImageSource) => {
  return (
    <>
      <div className="group item">
        <picture>
          {/* Desktop Image */}
          <img
            src={props.desktop}
            alt=""
            className="hidden w-full duration-200 md:block group-hover:scale-110"
          />
          {/* Mobile Image */}
          <img src={props.mobile} alt="" className="w-full md:hidden" />
        </picture>

        {/* Item Gradient */}
        <div className="item-gradient"></div>

        {/* Item Text */}
        <h5>{props.title}</h5>
      </div>
    </>
  );
};

export default Items;
