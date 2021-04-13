exports.GetUriByUTCI = function(utci, category) {
  let uriByUtci;
  console.log("category",category);

  if(utci > 46)
    uriByUtci = "셔츠";
  else if(utci>38)
    uriByUtci = "셔츠";
  else if(utci>32)
    uriByUtci = "셔츠";
  else if(utci>26)
    uriByUtci = "민소매";
  else if(utci>9){
    uriByUtci = "셔츠";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "티셔츠"
          break;
        case 2:
          uriByUtci = "면바지"
          break;
        case 3:
          uriByUtci = "신발"
          break;
        default:
          break;
  }}}

  else if(utci>0){
    uriByUtci = "가디건";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "셔츠"
          break;
        case 2:
          uriByUtci = "바지"
          break;
        case 3:
          uriByUtci = "신발"
          break;
        default:
          break;
  }}}
  else if(utci>-13)
    uriByUtci = "셔츠";
  else if(utci>27)
    uriByUtci = "셔츠";
  else if(utci>-40)
    uriByUtci = "셔츠";
  else if(utci>-80)
    uriByUtci = "셔츠";
  else
    return null;
  return uriByUtci;
}