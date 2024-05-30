import { Header } from "../../components/header"
import Footer from "../../components/footer"
import Carrusel from "../../components/ComponentesHome/carrusel"
import NewCollection from "../../components/ComponentesBrands/cardNewCollection"
import { CartProvider } from '../../components/CartContext';
import CardProductBrand from "../../components/ComponentesProductos/cardProductBrand"

function ArenaHome() {

    const images = [
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel1.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel2.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel3.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel4.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel1.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel2.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel3.webp",
        "https://cjmw.eu/ImagenesTelasCjmw/Carruseles/ARENA/ArenaCarrusel4.webp",
    ]

    const titles = [
        "1200ARENADUNE01.jpg",
        "ArenaCarrusel1.webp",
        "ArenaCarrusel2.webp",
        "ArenaCarrusel3.webp"
    ]

    return (
        <>
            <CartProvider>
                <Header />
                <Carrusel images={images} />
                <body className=" bg-gradient-to-b-from">
                    <div className=" flex items-center justify-center h-full">
                        <img src="https://cjmw.eu/ImagenesTelasCjmw/Iconos/logoArena.png" alt="" className=" lg:w-[30%] lg:h-[20%] w-[40%] h-[30%] max-w-full max-h-full " />
                    </div>
                </body>
                <NewCollection images={images} titles={titles} />
                <CardProductBrand brand="ARE" />
                <Footer />
            </CartProvider>
        </>
    )
}
export default ArenaHome