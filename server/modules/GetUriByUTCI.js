exports.GetUriByUTCI = function(utci, category) {
  let uriByUtci;
  console.log("category",category);

  if(utci > 46){
    uriByUtci = "민소매";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "반팔"
          break;
        case 2:
          uriByUtci = "반바지"
          break;
        case 3:
          uriByUtci = "신발"
          break;
        default:
          break;
  }}}

  else if(utci>38){
    uriByUtci = "민소매";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "반팔"
          break;
        case 2:
          uriByUtci = "반바지"
          break;
        case 3:
          uriByUtci = "신발"
          break;
        default:
          break;
  }}}

  else if(utci>32){
    uriByUtci = "반팔티";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "셔츠"
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

  else if(utci>26){
    uriByUtci = "반팔티";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "셔츠"
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

  else if(utci>9){
    uriByUtci = "긴팔티";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "셔츠"
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
    uriByUtci = "맨투맨";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "셔츠"
          break;
        case 2:
          uriByUtci = "청바지"
          break;
        case 3:
          uriByUtci = "신발"
          break;
        default:
          break;
  }}}

  else if(utci>-13){
    uriByUtci = "가디건";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "후드티"
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

  else if(utci>27){
    uriByUtci = "자켓";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "니트"
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

  else if(utci>-40){
    uriByUtci = "코드";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "니트"
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

  else if(utci>-80){
    uriByUtci = "롱패딩";
    if(category){
      switch (category){
        case 1:
          uriByUtci = "코트"
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

  else
    return null;
  return uriByUtci;
}