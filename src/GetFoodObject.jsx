

export const GetFoodObject = (foods) => {
  const newFoods = foods?.map((item) => {
    const directionsUrl = item?.content?.details?.directionsUrl;
    const displayName = item?.content?.details?.displayName;
    const id = item?.content?.details?.id;
    const images = item?.content?.details?.images;
    const name = item?.content?.details?.name;
    const rating = item?.content?.details?.rating;
    const totalTime = item?.content?.details?.totalTime;
    const type = item?.type;
    const desc = item?.seo?.web["meta-tags"]?.description;

    return  {
      directionsUrl,
      displayName,
      id,
      images,
      name,
      rating,
      totalTime,
      type,
      desc,
    };
  });


  const tempFoods=newFoods?.filter((item, index) => {

    const {  directionsUrl,
      displayName,
      id,
      images,
      name,
      rating,
      totalTime,
      type,
      desc}=item;

      if(!(displayName && id && images[0].hostedLargeUrl && name && rating && totalTime && type && desc && directionsUrl)){

        return ; 
      }
      return item;
    })


  return tempFoods;
};
