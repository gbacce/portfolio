export const mobileCheck = () => {
  var screenWidth = $(window).width();
  var mobileCheck = false;

  if (screenWidth < 800){
    mobileCheck = true
  }

  return mobileCheck;
}