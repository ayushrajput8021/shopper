// eslint-disable-next-line react/prop-types
const ProductItem = ({product: {image, name, price, size, color}}) => {
    return (
        <div className="rounded-xl border p-4 ">
            <img src={image} alt={name} className="mb-2 rounded-b"/>
            <div className='flex justify-between'>
                <div>
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">{name}</h3>
                    <div className='flex items-baseline'>
                        <h4 className='scroll-m-20 text-xl  tracking-tight mr-2'>Price</h4>
                        <p className="text-l text-muted-foreground ">${price}</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-baseline'>
                        <h4 className='scroll-m-20 text-xl  tracking-tight mr-2'>Size</h4>
                        <p className="text-l text-muted-foreground ">{size}</p>
                    </div>
                    <div className='flex items-baseline'>
                        <h4 className='scroll-m-20 text-xl  tracking-tight mr-2'>Color</h4>
                        <p className="text-l text-muted-foreground ">{color}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductItem;