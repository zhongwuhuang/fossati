export const UnixToDate = (unixTime, isFull) => {
  let time = new Date(unixTime);
  let ymdhis = "";
  function toTwo(n){
    if(n<10){
      return '0'+n;
    }else{
      return ''+n;
    }
  };
  ymdhis += time.getFullYear() + "/";
  ymdhis += (toTwo(time.getMonth()+1)) + "/";
  ymdhis += toTwo(time.getDate());
  if (isFull === true)
  {
    ymdhis += "  " + toTwo(time.getHours()) + ":";
    ymdhis += toTwo(time.getMinutes()) + ":";
    ymdhis += toTwo(time.getSeconds());
  }
  return ymdhis;  
};

export const filterCate = (item) => {
  return item.pid === 28
};

export const getUrlKey = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
};