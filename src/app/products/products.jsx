import { Header } from "../../components/header"
import Footer from "../../components/footer"
import CardProduct from "../../components/ComponentesProductos/cardProduct"
import Filtro from "../products/buttonFiltro"
import { CartProvider } from '../../components/CartContext';

function Product() {
    return (
        <>
        <div className=" min-h-[100%]">
            <CartProvider>
                <Header />
                <div className="max-w-2xl mx-auto text-center ">
                    <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl mt-[24%] xl:mt-[18%] md:mt-[18%] lg:text-5xl">PRODUCTS</h1>
                </div>
                <Filtro />
                <CardProduct />
                <Footer />
            </CartProvider>
        </div>
        </>
    )
}
export default Product