export type TSliderOptions = {
  transition: number;
  loop: boolean;
  autoplay: boolean;
};

export type TSlide = {
  children: React.ReactNode;
};

export type TSlider = {
  children: React.ReactNode;
  options: TSliderOptions;
};

export type TSlides = {
  id: number;
  content: string;
};
