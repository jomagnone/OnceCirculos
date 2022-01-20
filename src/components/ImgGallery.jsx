
import ImageGallery from 'react-image-gallery';
import 'styles/ImgGallery.css';
import img1 from 'media/products/4_1.jpg';



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