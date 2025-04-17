import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors, SWidth} from '../../../../globalStyle';
import {SvgColorProps} from '../../types/svgType';

const Calling24 = ({
  color = colors.icon.interactive.primary,
}: SvgColorProps) => {
  return (
    <Svg
      width={SWidth * 24}
      height={SWidth * 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.0584 9.50046C19.2232 9.50046 19.3844 9.45159 19.5214 9.36002C19.6584 9.26845 19.7653 9.1383 19.8283 8.98603C19.8914 8.83376 19.9079 8.6662 19.8757 8.50455C19.8436 8.3429 19.7642 8.19441 19.6477 8.07787C19.5311 7.96133 19.3827 7.88196 19.221 7.8498C19.0593 7.81765 18.8918 7.83415 18.7395 7.89723C18.5872 7.9603 18.4571 8.06711 18.3655 8.20415C18.274 8.34119 18.2251 8.50231 18.2251 8.66713C18.2251 8.88814 18.3129 9.1001 18.4692 9.25638C18.6255 9.41266 18.8374 9.50046 19.0584 9.50046ZM16.5584 9.50046C16.7232 9.50046 16.8844 9.45159 17.0214 9.36002C17.1584 9.26845 17.2653 9.1383 17.3283 8.98603C17.3914 8.83376 17.4079 8.6662 17.3757 8.50455C17.3436 8.3429 17.2642 8.19441 17.1477 8.07787C17.0311 7.96133 16.8827 7.88196 16.721 7.8498C16.5593 7.81765 16.3918 7.83415 16.2395 7.89723C16.0872 7.9603 15.9571 8.06711 15.8655 8.20415C15.774 8.34119 15.7251 8.50231 15.7251 8.66713C15.7251 8.88814 15.8129 9.1001 15.9692 9.25638C16.1255 9.41266 16.3374 9.50046 16.5584 9.50046ZM14.0584 9.50046C14.2232 9.50046 14.3844 9.45159 14.5214 9.36002C14.6584 9.26845 14.7653 9.1383 14.8283 8.98603C14.8914 8.83376 14.9079 8.6662 14.8757 8.50455C14.8436 8.3429 14.7642 8.19441 14.6477 8.07787C14.5311 7.96133 14.3827 7.88196 14.221 7.8498C14.0594 7.81765 13.8918 7.83415 13.7395 7.89723C13.5873 7.9603 13.4571 8.06711 13.3655 8.20415C13.274 8.34119 13.2251 8.50231 13.2251 8.66713C13.2251 8.77656 13.2466 8.88492 13.2885 8.98603C13.3304 9.08713 13.3918 9.179 13.4692 9.25638C13.5466 9.33376 13.6384 9.39515 13.7395 9.43703C13.8406 9.4789 13.949 9.50046 14.0584 9.50046ZM17.7584 12.8338C17.5751 12.8338 17.3834 12.7755 17.2001 12.7338C16.8288 12.652 16.464 12.5434 16.1084 12.4088C15.7218 12.2682 15.2969 12.2755 14.9153 12.4293C14.5338 12.5831 14.2227 12.8727 14.0418 13.2421L13.8584 13.6171C13.0455 13.1636 12.2972 12.6031 11.6334 11.9505C10.984 11.2871 10.4237 10.5419 9.96676 9.73379L10.3334 9.50046C10.7029 9.31956 10.9924 9.0084 11.1463 8.62687C11.3001 8.24534 11.3074 7.82039 11.1668 7.43379C11.0344 7.07748 10.9259 6.71279 10.8418 6.34213C10.8001 6.15046 10.7668 5.96713 10.7418 5.77546C10.6406 5.18848 10.3331 4.65691 9.87478 4.27649C9.41644 3.89607 8.83734 3.6918 8.24176 3.70046H5.74176C5.38946 3.7 5.04105 3.774 4.71936 3.91761C4.39766 4.06123 4.10995 4.27121 3.87509 4.53379C3.6365 4.80254 3.45865 5.11957 3.35367 5.46327C3.24869 5.80697 3.21905 6.16926 3.26676 6.52546C3.70568 10.0147 5.29374 13.2584 7.78042 15.7451C10.2671 18.2318 13.5109 19.8199 17.0001 20.2588C17.1083 20.2671 17.2169 20.2671 17.3251 20.2588C17.9881 20.2588 18.624 19.9954 19.0929 19.5266C19.5617 19.0577 19.8251 18.4218 19.8251 17.7588V15.2588C19.8164 14.6773 19.6053 14.117 19.2281 13.6744C18.8509 13.2318 18.3312 12.9345 17.7584 12.8338ZM18.1668 17.8338C18.1681 17.9546 18.1432 18.0742 18.0938 18.1844C18.0443 18.2947 17.9715 18.3928 17.8803 18.4721C17.7891 18.5513 17.6818 18.6098 17.5658 18.6435C17.4498 18.6772 17.3279 18.6853 17.2084 18.6671C14.0969 18.2611 11.206 16.8406 8.98343 14.6255C6.76259 12.3878 5.34446 9.47832 4.95009 6.35046C4.93199 6.22824 4.94129 6.10352 4.97732 5.98534C5.01335 5.86715 5.07521 5.75846 5.15842 5.66713C5.23558 5.57928 5.33037 5.50866 5.43661 5.45984C5.54285 5.41103 5.65818 5.38512 5.77509 5.38379H8.27509C8.46888 5.37948 8.65811 5.44286 8.81021 5.56302C8.96231 5.68318 9.06777 5.8526 9.10842 6.04213C9.14176 6.2699 9.18343 6.4949 9.23343 6.71713C9.32969 7.15641 9.45781 7.58811 9.61676 8.00879L8.45009 8.55046C8.35034 8.59623 8.26061 8.66125 8.18606 8.74179C8.1115 8.82233 8.05359 8.9168 8.01565 9.01979C7.97771 9.12277 7.96048 9.23224 7.96496 9.34189C7.96945 9.45155 7.99554 9.55925 8.04176 9.65879C9.24109 12.2278 11.3061 14.2928 13.8751 15.4921C14.078 15.5755 14.3055 15.5755 14.5084 15.4921C14.7152 15.4152 14.883 15.2593 14.9751 15.0588L15.5001 13.8921C15.9309 14.0462 16.3706 14.1742 16.8168 14.2755C17.0334 14.3255 17.2668 14.3671 17.4918 14.4005C17.6797 14.4428 17.8472 14.549 17.9658 14.7009C18.0843 14.8528 18.1465 15.0412 18.1418 15.2338L18.1668 17.8338Z"
        fill={color}
      />
    </Svg>
  );
};

export default Calling24;
