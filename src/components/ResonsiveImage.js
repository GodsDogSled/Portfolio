

function ResponsiveImage({ imgArray, id }) {
  // console.log(imgArray.sizes.large);

  function configureImage(imgArray) {
    let img = `<img src="${imgArray.url}" 
      alt="${imgArray.title}"
      srcset="${imgArray.url} ${imgArray.width}w,
      ${imgArray.sizes.large ? imgArray.sizes.large + ' 1024w,' : ''}
      ${imgArray.sizes.medium_large ? imgArray.sizes.medium_large + ' 768w,' : ''}
      ${imgArray.sizes.medium ? imgArray.sizes.medium + ' 300w' : ''}"
      sizes="(max-width: }) 100vw, ">`;

    return img
  }

  return (
    <>
      <img
        src={`${imgArray.sizes.thumbnail}`}
        alt={`${imgArray.title}`}
        id={id}
        srcSet={`${imgArray.url} ${imgArray.width}w,
        ${imgArray.sizes.large} 1024w,
        ${imgArray.sizes.medium_large} 768w,
        ${imgArray.sizes.medium} 300w`}
      />
    </>
  )
}

export default ResponsiveImage