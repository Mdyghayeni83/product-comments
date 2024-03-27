import ProductAvatar from "./ProductAvatar";
import { _product } from "../_mock/_comments";
import ArrowRight from '../../src/assets/icons/arrow_right.png'
import Button from "./base/Button";

export default function ProductHeader() {
    return (
        <div className="py-6 px-4 flex items-center justify-start gap-3">
            <img src={ArrowRight} alt="" className="w-7 object-contain" />
            <ProductAvatar name={_product.name} src={_product.image} />
            <Button className="text-[#ec303d] border-[#ec303d] mr-auto">
                ثبت دیدگاه
            </Button>
        </div>
    )
}