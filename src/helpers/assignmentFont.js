const assignamentFont = () => {
  let width_ = window.innerWidth; //$(window).width();
  let font_ = 0;

  let i = 17;

  if (width_ < 450) i = 14.5;

  if (width_ > 450) i = 13;

  if (width_ > 500) i = 12;

  if (width_ > 600) i = 10;

  if (width_ > 700) i = 9;

  if (width_ > 992 && type == "landscape") i = 4.5;

  font_ = (width_ * i) / 400;
  return font_;
};
var type = "";

export default assignamentFont;
