import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import SkeletonLoader from '../ComponentesProductos/skeletonLoader';
import Modal from '../ComponentesProductos/modal';
import { FiLoader, FiShoppingCart } from 'react-icons/fi';

const CardProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');
    const productId = searchParams.get('productId');
    const pageQuery = searchParams.get('page') || 1;

    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [page, setPage] = useState(parseInt(pageQuery, 10));
    const loader = useRef(null);

    const [searchHistory, setSearchHistory] = useState([]);
    const [showClearButton, setShowClearButton] = useState(false);

    const isValidProduct = (product) => {
        const desprodu = product.desprodu;
        return (
            /^C1/.test(desprodu) || // Include "C1"
            /^C01/.test(desprodu) || // Include "C01"
            !/C(0?[2-9]|[1-7][0-9]|80)\b/.test(desprodu) // Exclude "C" followed by 02-09, 10-79, or 80
        );
    };

    const fetchProducts = async (pageNumber = 1, append = false) => {
        if (!append) {
            setLoading(true);
        } else {
            setLoadingMore(true);
        }
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products?limit=8&page=${pageNumber}`);
            if (!response.ok) {
                throw new Error('Error fetching products');
            }
            const data = await response.json();
            const validProducts = data.filter(product => (
                isValidProduct(product) &&
                !/^(LIBRO|PORTADA|KIT|COMPOSICION ESPECIAL|COLECCIÓN|ALFOMBRA|ANUNCIADA|MULETON|ATLAS|QUALITY SAMPLE|PERCHA|ALQUILER|CALCUTA C35|TAPILLA|LÁMINA|ACCESORIOS MUESTRARIOS|CONTRAPORTADA|ALFOMBRAS|AGARRADERAS|ARRENDAMIENTOS INTRACOMUNITARIOS|\d+)/i.test(product.desprodu) &&
                !/(PERCHAS Y LIBROS)/i.test(product.desprodu) &&
                !/CUTTING/i.test(product.desprodu) &&
                !/(LIBROS)/i.test(product.desprodu) &&
                !/PERCHA/i.test(product.desprodu) &&
                !/(PERCHAS)/i.test(product.desprodu) &&
                !/(FUERA DE COLECCION)/i.test(product.desprodu) &&
                ['ARE', 'FLA', 'CJM', 'HAR'].includes(product.codmarca)
            ));
            setProducts(prevProducts => append ? [...prevProducts, ...validProducts] : validProducts);
        } catch (error) {
            setError('Error fetching products');
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        if (!searchQuery && !productId) {
            fetchProducts(1, false);
        }
    }, [searchQuery, productId]);

    useEffect(() => {
        if (searchQuery) {
            const fetchSearchedProducts = async () => {
                setLoading(true);
                setError(null);
                setProducts([]); // Clear products before a new search
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/search?query=${searchQuery}`);
                    if (!response.ok) {
                        throw new Error('Error fetching search results');
                    }
                    const data = await response.json();
                    const filteredData = data.filter(product =>
                        isValidProduct(product) &&
                        !searchHistory.some(historyItem => historyItem.codprodu === product.codprodu)
                    );
                    if (filteredData.length === 0) {
                        setError('No products found');
                    }
                    setProducts(filteredData);
                    setSearchHistory(prevHistory => [...prevHistory, ...filteredData]);
                    setShowClearButton(true); // Show the clear button after a search
                } catch (error) {
                    setError('Error fetching search results');
                    setShowClearButton(true); // Show the clear button even if there's an error
                } finally {
                    setLoading(false);
                }
            };
            fetchSearchedProducts();
        }
    }, [searchQuery]);

    useEffect(() => {
        if (productId) {
            const fetchProductById = async () => {
                setLoading(true);
                setError(null);
                setProducts([]); // Clear products before fetching a specific product
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${productId}`);
                    if (!response.ok) {
                        throw new Error('Error fetching product by ID');
                    }
                    const data = await response.json();
                    setProducts([data]);
                    setShowClearButton(true); // Show the clear button after fetching a specific product
                } catch (error) {
                    setError('Error fetching product by ID');
                    setShowClearButton(true); // Show the clear button even if there's an error
                } finally {
                    setLoading(false);
                }
            };
            fetchProductById();
        }
    }, [productId]);

    const handleAddToCart = (product) => {
        addToCart({
            id: product.codprodu,
            name: product.desprodu,
            price: 3,
            image: product.imagepreview,
            quantity: 1
        });
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleClearSearch = () => {
        navigate(location.pathname);
        setProducts([]);
        setPage(1);
        setShowClearButton(false); // Hide the clear button when clearing the search
        fetchProducts(1, false); // Fetch all products when clearing the search
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !searchQuery && !productId) {
                    setPage((prevPage) => {
                        const nextPage = prevPage + 1;
                        fetchProducts(nextPage, true);
                        return nextPage;
                    });
                }
            },
            { threshold: 1 }
        );
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [searchQuery, productId]);

    return (
        <>
            <div>
                {showClearButton && (
                    <div className="fixed top-1/4 right-5 z-40">
                        <button onClick={handleClearSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm text-center w-22 sm:w-30 md:w-30">
                            Mostrar<br />productos
                        </button>
                    </div>
                )}
                <div className="flex flex-wrap justify-center items-center">
                    {products.map((product, index) => (
                        <div key={`${product.codprodu}-${index}`} className="bg-white rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 mx-2 mb-7 max-h-[20%] xl:max-w-[20%] min-h-[70%] max-w-[80%] sm:max-w-[40%] md:max-h-[30%] xl:min-h-[20%] xl:min-w-[20%]">
                            <div className="relative overflow-hidden w-full h-full" onClick={() => handleProductClick(product)}>
                                <img className="object-cover " src={product.urlimagen} alt={product.desprodu} style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                            </div>
                            <h3 className="text-center text-xl font-bold text-gray-900 mt-4">{product.desprodu}</h3>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-900 font-bold text-lg">€3</span>
                                <button onClick={() => handleAddToCart(product)} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                                    <FiShoppingCart className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {loading && !loadingMore && <SkeletonLoader repeticiones={8} />}
                {loadingMore && (
                    <div className="flex flex-col items-center justify-center w-full py-4">
                        <FiLoader className="animate-spin text-6xl text-gray-500" />
                        <span className="text-gray-500 text-2xl mt-4">Cargando más productos...</span>
                    </div>
                )}
                {!loading && products.length === 0 && !error && (
                    <div className="text-center text-gray-500">No products found</div>
                )}
                {!loading && error && (
                    <div className="text-center text-red-500">{error}</div>
                )}
                <div ref={loader}></div>
                {modalOpen && (
                    <Modal isOpen={modalOpen} close={() => setModalOpen(false)} product={selectedProduct} />
                )}
            </div>
        </>
    );
};

export default CardProduct;
