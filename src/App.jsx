// App.js
import {useState, useMemo} from 'react';
import ProductList from './components/ProductList';
import FilterSortBar from './components/FilterSortBar';
import {Heading} from './components/Heading';

const dummyData = [
    { id: 1, name: 'Dress 1', image: 'https://picsum.photos/200', price: 50, color: 'red', size: 'medium' },
    { id: 2, name: 'Dress 2', image: 'https://picsum.photos/200', price: 70, color: 'blue', size: 'small' },
    { id: 3, name: 'Dress 3', image: 'https://picsum.photos/200', price: 60, color: 'green', size: 'large' },
    { id: 4, name: 'Dress 4', image: 'https://picsum.photos/200', price: 80, color: 'green', size: 'large' },
    { id: 5, name: 'Dress 5', image: 'https://picsum.photos/200', price: 90, color: 'blue', size: 'small' },
    { id: 6, name: 'Dress 6', image: 'https://picsum.photos/200', price: 20, color: 'red', size: 'large' },
    { id: 7, name: 'Dress 7', image: 'https://picsum.photos/200', price: 30, color: 'green', size: 'medium' },
    { id: 8, name: 'Dress 8', image: 'https://picsum.photos/200', price: 40, color: 'blue', size: 'large' },
    { id: 9, name: 'Dress 9', image: 'https://picsum.photos/200', price: 90, color: 'red', size: 'small' },
    { id: 10, name: 'Dress 10', image: 'https://picsum.photos/200', price: 10, color: 'green', size: 'large' },
];
const App = () => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [sortOption, setSortOption] = useState('');

    function handleReset() {
        setSize('');
        setColor('')
        setSortOption('')
    }

    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = dummyData;
        if (color === 'all') {
            setColor('')
        }
        if (size === 'all') {
            setSize('')
        }
        if (color) {
            filteredProducts = filteredProducts.filter(product => product.color === color);
        }

        if (size) {
            filteredProducts = filteredProducts.filter(product => product.size === size);
        }

        if (sortOption === 'priceAsc') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        return filteredProducts;
    }, [color, size, sortOption]);

    return (
        <div className='flex items-center flex-col'>
            <Heading text={'Shopper'}/>
            <FilterSortBar
                color={color}
                setColor={setColor}
                size={size}
                setSize={setSize}
                sortOption={sortOption}
                setSortOption={setSortOption}
                handleReset={handleReset}
            />
            {filteredAndSortedProducts.length ? <ProductList products={filteredAndSortedProducts}/> :
                <h1 className={'mt-32'}>No Products</h1>}


        </div>
    );
};

export default App;
