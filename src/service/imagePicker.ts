import ImagePicker from 'react-native-image-crop-picker';

type ImageSelectedProps = {
  width: number;
  height: number;
  cropperCircleOverlay: boolean;
  setImage: (image: {url: string; name: string; type: string}) => void;
};

export const imageSelected = ({
  width,
  height,
  cropperCircleOverlay,
  setImage,
}: ImageSelectedProps) => {
  ImagePicker.openPicker({
    width: width,
    height: height,
    mediaType: 'photo',
    cropperCircleOverlay: cropperCircleOverlay,
    cropping: true,
    cropperToolbarTitle: '이미지 수정',
    writeTempFile: false,
    compressImageQuality: 0.8,
  })
    .then(image => {
      setImage({
        url: image.path,
        name: image.filename!,
        type: image.mime,
      });
      console.log(image);
    })
    .catch(error => {
      console.error(error);
    });
};

type MultipleImageSelectedProps = {
  width: number;
  height: number;
  setImages: (images: {url: string; name: string; type: string}[]) => void;
};

export const multipleImageSelected = ({
  width,
  height,
  setImages,
}: MultipleImageSelectedProps) => {
  ImagePicker.openPicker({
    multiple: true,
    mediaType: 'photo',
    width: width,
    height: height,
    writeTempFile: false,
    compressImageQuality: 0.8,
    cropping: true,
    maxFiles: 6,
    minFiles: 1,
  })
    .then(images => {
      const limitedImages = images.slice(0, 6);
      const formattedImages = limitedImages.map((image: any) => ({
        url: image.path,
        name: image.filename,
        type: image.mime,
      }));

      setImages(formattedImages);
      console.log('Selected images:', formattedImages);
    })
    .catch(error => {
      console.error(error);
    });
};
