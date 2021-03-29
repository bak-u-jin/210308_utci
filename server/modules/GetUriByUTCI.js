exports.GetUriByUTCI = function(utci) {
  let uriByUtci;

  if(utci > 46)
    uriByUtci = "셔츠";
  else if(utci>38)
    uriByUtci = "셔츠";
  else if(utci>32)
    uriByUtci = "셔츠";
  else if(utci>26)
    uriByUtci = "셔츠";
  else if(utci>9)
    uriByUtci = "가디건";
  else if(utci>0)
    uriByUtci = "바지";
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