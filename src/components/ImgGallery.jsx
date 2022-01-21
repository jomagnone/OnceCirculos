
import ImageGallery from 'react-image-gallery';
import 'styles/ImgGallery.css';




function ImgGallery ({imagesSrc})  {
    return (
    
        <>
           <div className="ContentGallery"> 
                 <ImageGallery items={imagesSrc} />
            </div>

        </>
    );


}

export default ImgGallery;